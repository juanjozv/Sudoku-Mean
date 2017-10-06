/**
 * Sudoku REST-API
 * @author juanjozv@gmail.com 
 * @author osqui.salazar@gmail.com 
 * @since 2017
 */

const { SudokuGen } = require('../../src/assets/sudokuGen.js');
const { SudokuSolver } = require('../../src/assets/sudokuSolver.js');
const { Random } = require('../../src/assets/random.js');

let express = require('express');
let mongoose = require('mongoose');
const random = new Random();

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
    .post(
    (req, res) => {
        let sudoku_ = new SudokuModel(); // create a new instance of the Sudoku model
        // Extract data from request
        console.log('Post body ' + JSON.stringify(req.body));
        sudoku_.user = req.body.user;
        sudoku_.difficulty = req.body.difficulty;
        sudoku_.lastPlayed = req.body.lastPlayed;
        sudoku_.playableSudoku = req.body.playableSudoku;
        /**
         * Aqui van las extracciones de los atributos del sudoku. 
         */
        sudoku_.save(
            (err) => {
                if (err)
                    res.send(err);
                res.json({ message: 'Sudoku created succesfully!', "sudokuId": sudoku_._id });
            }
        );
    }
    )
    .get(
    (req, res) => {
        console.log('GET requested');
        SudokuModel.find(
            (err, sudokus) => {
                if (err)
                    res.send(err);
                res.json(sudokus);
            });
    }
    );

// ---> ON /sudokus/:sudoku_id
//    PUT (UPDATE) -> updates the sudoku by id 
//    GET (findById)-> get all the sudokus (accessed at GET http://localhost:9090/api/sudokus)
//    REMOVE  (DELETE) -> deletes the sudoku by id (accessed at GET http://localhost:9090/api/sudokus)


router.route('/sudokus/:sudoku_id')
    .get(
    (req, res) => {
        SudokuModel.findById(req.params.sudoku_id,
            (err, sudoku) => {
                if (err)
                    res.send(err);
                res.json(sudoku);
            });
    }
    )
    .put(
    (req, res) => {
        SudokuModel.findById(req.params.sudoku_id,
            (err, sudoku) => {

                if (err)
                    res.send(err);

                sudoku.user = req.body.user;
                sudoku.lastPlayed = req.body.lastPlayed;
                sudoku.sudokuSolution = req.body.sudokuSolution;
                sudoku.playableSudoku = req.body.playableSudoku;
                /**
                 * Aqui van las extracciones de los atributos del sudoku. 
                 */
                sudoku.save(
                    (err) => {
                        if (err)
                            res.send(err);

                        res.json({ status: 'ok', message: 'Sudoku updated!' });
                    });

            });
    }
    )
    .delete(
    (req, res) => {
        SudokuModel.remove({
            _id: req.params.sudoku_id
        },
            (err, sudoku) => {
                if (err)
                    res.send(err);

                res.json({ status: 'ok', message: 'Sudoku successfully deleted!' });
            }
        );
    }
    );

//Algoritm Methods


//Creates a new Soduku, used in the button: "nuevo"
router.route('/newSudoku')
    .get(
    (req, res) => {
        let s = new SudokuGen(9);

        //  s.generate;
        // s.solveSudoku(0, 0);
        let playableSudokuValues = {};
        let clue = 0;
        //let object = { user: req.body.user, difficulty: req.body.difficulty, lastPlayed: req.body.lastPlayed, playableSudoku: [] };
        let object = { user: 'LEO', difficulty: 'easy', lastPlayed: '09/09/2017', playableSudoku: [] };
        for (let actualValue of s) {
            clue = random.getRandomInt(1, 5);
            (clue == 3 || clue == 1) ? playableSudokuValues = { x: actualValue.row, y: actualValue.col, value: actualValue.num, isClue: true } : playableSudokuValues = { x: actualValue.row, y: actualValue.col, value: ' ', isClue: false }
            object.playableSudoku.push(playableSudokuValues);
        }

        //console.log(JSON.stringify(object))
        res.json(object);
    }
    );

router.route('/solveSudoku/:matrix')
    .get(
    (req, res) => {
       // console.log(req.params.matrix);
        let matrix = JSON.parse(req.params.matrix);
       // matrix = JSON.parse(matrix);
        console.log(matrix);
        // let matrixAux = matrix;
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
        console.log(obj.rows);
        console.log(obj.columns);
        console.log(obj.sections);
       // console.log(rows, '---------------------', columns, '---------------------', sections);
        let s = new SudokuSolver(obj);
        //s.setSudoku(table, rows, columns, sections);
        let result = s.solveSudoku(0, 0);
        console.log(s.table);
       // console.log(result);
         res.json(s.table);
        //res.json(result);
    }
    );
    router.route('/checkSudoku/:matrix')
    .get(
    (req, res) => {
       // console.log(req.params.matrix);
        let matrix = JSON.parse(req.params.matrix);
       // matrix = JSON.parse(matrix);
        console.log(matrix);
        // let matrixAux = matrix;
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
        console.log(obj.rows);
        console.log(obj.columns);
        console.log(obj.sections);
       // console.log(rows, '---------------------', columns, '---------------------', sections);
        let s = new SudokuSolver(obj);
        //s.setSudoku(table, rows, columns, sections);
        let result = s.solveSudoku(0, 0);
        console.log(s.table);
       // console.log(result);
        (result) ? res.json({ text: 'Sudoku have solution!!' }) : res.json({ text: 'Sudoku dont have solution!!' })
        //res.json(result);
    }
    );

module.exports = router;