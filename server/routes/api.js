/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

const { SudokuGen } = require('../../src/assets/javascripts/sudokuGen.js');
const { SudokuSolver } = require('../../src/assets/javascripts/sudokuSolver.js');
const { Random } = require('../../src/assets/javascripts/random.js');
const { Sudoku } = require('../../src/assets/javascripts/sudoku.js');

let express = require('express');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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
        //exec() returns a promise
        SudokuModel.find().exec()
            .then(sudokus => { res.json(sudokus) })
            .catch(err => { res.send("hay un error aqui" + err) });
    });




//Load Sudoku Methods

//Get all the sudokus from an user
router.route('/sudokus/:user')
    .get((req, res) => {
        let reqUser = '';
        reqUser += req.params.user;
        SudokuModel.find({ 'user': reqUser }, '_id difficulty lastPlayed ').exec()
            .then(sudokus => { res.json(sudokus) })
            .catch(err => { res.send(err) });
    });

//Gets a sudoku by Id
router.route('/sudoku/:id')
    .get((req, res) => {
        let reqId = req.params.id;
        SudokuModel.findById(reqId, 'user difficulty lastPlayed playableSudoku').exec()
            .then(sudoku => { res.json(sudoku[0]) })
            .catch(err => { res.send(err) });
    });

//Save Sudokus Methods

//If game is new, use post, if is an old game, updates it 
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
        SudokuModel.findById(req.body._id).exec()
            .then(sudoku_ => {
                sudoku_.lastPlayed = req.body.lastPlayed;
                sudoku_.playableSudoku = req.body.playableSudoku;
                sudoku_.save(err => {
                    if (err) res.send(err);
                    res.json({ status: 'ok', message: 'Sudoku updated!', "sudokuId": sudoku_._id });
                });
            })
            .catch(err => { res.send(err) });
    });



//Algoritm Methods

//Creates a new Soduku
router.route('/newSudoku')
    .get((req, res) => {
        let playableSudokuValues = {}
        let randomClue = 0
        let clueCount = 0
        let clue = true
        let object = { user: 'default', difficulty: 'random', lastPlayed: '2017-09-09', playableSudoku: [] };
        for (let actualValue of sudokuGen) {
            randomClue = random.rand(1, 6);
            clue = (clueCount < 17) ? true : ((randomClue == 3) ? true : false)
            playableSudokuValues = { x: actualValue.row, y: actualValue.col, value: clue ? actualValue.num : 0, isClue: clue }
            object.playableSudoku.push(playableSudokuValues);
            clueCount++
        }
        res.json(object);
    });

router.route('/newSudokuDifficulty/:difficulty')
    .get((req, res) => {
        let reqDifficulty = '';
        reqDifficulty += req.params.difficulty;
        SudokuModel.find({ 'difficulty': reqDifficulty, 'user': 'default' }, '_id user difficulty lastPlayed playableSudoku',
            (err, sudokus) => {
                if (err) res.send(err);
                let pos = random.rand(0, (sudokus.length));
                res.json(sudokus[pos]);
            })
    });

router.route('/solveSudoku/:matrix')
    .get((req, res) => {
        let matrix = JSON.parse(req.params.matrix)
        let obj = sudokuGen.getSudokuStructure(matrix)
        let sudo = new Sudoku(obj)
        let result = Solver.getSudokuSolution(sudo)
        res.json(result);
    });

router.route('/checkSudoku/:matrix')
    .get((req, res) => {
        let matrix = JSON.parse(req.params.matrix)
        let obj = sudokuGen.getSudokuStructure(matrix)
        let sudo = new Sudoku(obj)
        let result = Solver.hasSolution(sudo);
        (result) ? res.json({ text: 'This sudoku has solution!' }): res.json({ text: 'This sudoku has no solution!' })
    });





module.exports = router;