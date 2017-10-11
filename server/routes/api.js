/**
 * Sudoku
 * @author juanjozv@gmail.com
 * @author osqui.salazar@gmail.com
 * @author manca64@gmail.com
 * @author leogodinezs15@gmail.com
 */

const { SudokuGen } = require('../../src/assets/javascripts/sudokuGen.js');
const { SudokuSolver } = require('../../src/assets/javascripts/sudokuSolver.js');
const { Random } = require('../../src/assets/javascripts/random.js');
const { Sudoku } = require('../../src/assets/javascripts/sudoku.js');

let express = require('express');
let mongoose = require('mongoose');

const random = new Random();
const Solver = new SudokuSolver();
const sudokuGen = new SudokuGen(9);

// Connection to the database
mongoose.connect('mongodb://localhost/sudokus', {
    useMongoClient: true
});

// Data Model Required
let SudokuModel = require('../../db/models/sudokuModel.js');

// API SETUP

// 1) Create router
let router = express.Router();

// 2) Config paths
// Middleware to use for all requests
router.use(
    (req, res, next) => {
        console.log('General middleware activated');
        next();
    }
);

// port stands for the port that is set in Server.js
// Route to test (accessed at GET http://localhost:port/api)
router.get('/',
    (req, res) => res.json({ message: '*** Sudoku Rest API is working fine! ***' })
);


// REST API
//---> ON /sudokus

//    POST (create one) -> create a Sudoku (accessed at POST http://localhost:port/api/sudokus)
//    GET  (get all) -> gets all the sudokus (accessed at GET http://localhost:port/api/sudokus)

// the post method will insert a new sudoku, an initialized one

router.route('/sudokus')
    .post((req, res) => {
        let sudoku_ = new SudokuModel(); // create a new instance of the Sudoku model
        // Extract data from request
        console.log('Post body ' + JSON.stringify(req.body));
        sudoku_.user = req.body.user;
        sudoku_.difficulty = req.body.difficulty;
        sudoku_.lastPlayed = req.body.lastPlayed;
        sudoku_.playableSudoku = req.body.playableSudoku;
        sudoku_.save(
            (err) => {
                if (err) res.send(err);
                res.json({ message: 'Sudoku created succesfully!', "sudokuId": sudoku_._id });
            });
    })
    .get((req, res) => {
        console.log('GET requested');
        SudokuModel.find(
            (err, sudokus) => {
                if (err) res.send(err);
                res.json(sudokus);
            });
    });


router.route('/sudokus/:user')
    .get((req, res) => {
        let reqUser = '';
        reqUser += req.params.user;
        SudokuModel.find({ 'user': reqUser }, '_id difficulty lastPlayed ',
            (err, sudokus) => {
                if (err) res.send(err);
                res.json(sudokus);
            })
    });

//Load
router.route('/sudoku/:id')
    .get((req, res) => {
        let reqId = req.params.id;
        SudokuModel.find({ _id: reqId }, 'user difficulty lastPlayed playableSudoku',
            (err, sudoku) => {
                if (err) res.send(err);
                res.json(sudoku[0]);
            })
    });

//Algoritm Methods

//Creates a new Soduku, used in the button: "random"
router.route('/newSudoku')
    .get((req, res) => {
        let playableSudokuValues = {};
        let clue = 0;
        let object = { user: 'default', difficulty: 'random', lastPlayed: '2017-09-09', playableSudoku: [] };
        for (let actualValue of sudokuGen) {
            clue = random.rand(1, 5);
            (clue == 3 || clue == 1) ? playableSudokuValues = { x: actualValue.row, y: actualValue.col, value: actualValue.num, isClue: true }: playableSudokuValues = { x: actualValue.row, y: actualValue.col, value: ' ', isClue: false }
            object.playableSudoku.push(playableSudokuValues);
        }
        res.json(object);
    });

router.route('/newSudokuDifficulty/:difficulty')
    .get((req, res) => {
        let reqDifficulty = '';
        reqDifficulty += req.params.difficulty;
        SudokuModel.find({ 'difficulty': reqDifficulty }, '_id user difficulty lastPlayed playableSudoku',
            (err, sudokus) => {
                if (err) res.send(err);
                let pos = random.rand(0, (sudokus.length));
                res.json(sudokus[pos]);
            })
    });

router.route('/solveSudoku/:matrix')
    .get((req, res) => {
        let matrix = JSON.parse(req.params.matrix);
        let obj = {
            table: matrix,
            rows: Array.from({ length: 9 }, v => []),
            columns: Array.from({ length: 9 }, v => []),
            sections: Array.from({ length: 3 }, (v, i) => Array.from({ length: 3 }, (v, i) => []))
        }
        obj.table.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value != " ") {
                    obj.rows[i].push(value);
                    obj.columns[j].push(value);
                    obj.sections[Math.floor(i / 3)][Math.floor(j / 3)].push(value);
                }
            })
        });

        let s = new Sudoku(obj)
        let result = Solver.getSudokuSolution(s);
        res.json(result);
    });

router.route('/checkSudoku/:matrix')
    .get((req, res) => {
        let matrix = JSON.parse(req.params.matrix),
            obj = {
                table: matrix,
                rows: Array.from({ length: 9 }, v => []),
                columns: Array.from({ length: 9 }, v => []),
                sections: Array.from({ length: 3 }, v => Array.from({ length: 3 }, v => []))
            }
        obj.table.forEach((row, i) => {
            row.forEach((value, j) => {
                if (value != " ") {
                    obj.rows[i].push(value);
                    obj.columns[j].push(value);
                    obj.sections[Math.floor(i / 3)][Math.floor(j / 3)].push(value);
                }
            })
        });

        let s = new Sudoku(obj);
        let result = Solver.hasSolution(s);
        (result) ? res.json({ text: 'This sudoku has solution!' }): res.json({ text: 'This sudoku has no solution!' })
    });

router.route('/save')
    .post((req, res) => {
        let sudoku_ = new SudokuModel(); // create a new instance of the Sudoku model
        sudoku_.user = req.body.user;
        sudoku_.difficulty = req.body.difficulty;
        sudoku_.lastPlayed = req.body.lastPlayed;
        sudoku_.playableSudoku = req.body.playableSudoku;

        sudoku_.save((err) => {
            if (err) res.send(err);
            res.json({ message: 'Sudoku saved succesfully!', "sudokuId": sudoku_._id });
        });
    })
    .put((req, res) => {
        SudokuModel.findById(req.body._id,
            (err, sudoku_) => {
                if (err) res.send(err);
                sudoku_.lastPlayed = req.body.lastPlayed;
                sudoku_.playableSudoku = req.body.playableSudoku;

                sudoku_.save((err) => {
                    if (err) res.send(err);
                    res.json({ status: 'ok', message: 'Sudoku updated!', "sudokuId": sudoku_._id });
                });
            });
    });



module.exports = router;