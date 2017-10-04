/**
 * Sudoku REST-API
 * @author juanjozv@gmail.com 
 * @author osqui.salazar@gmail.com 
 * @since 2017
 */


let express = require('express');
let mongoose = require('mongoose');
let sudokuEntity = require('../../src/assets/sudoku.js');

// Connection to the database
mongoose.connect('mongodb://localhost/sudokus', {
    useMongoClient: true
});

// Data Model Required
let Sudoku = require('../../db/models/sudokuModel.js');

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
            console.log('POST requested: ' + req.body.name);
            let sudoku = new Sudoku(); // create a new instance of the Sudoku model
            // Extract data from request
            console.log('Post body ' + JSON.stringify(req.body));
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
                    console.log('Post Error = ' + err);
                    res.json({ message: 'Sudoku created succesfully!', "sudokuId": sudoku._id });
                }
            );
        }
    )
    .get(
        (req, res) => {
            console.log('GET requested');
            Sudoku.find(
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
            Sudoku.findById(req.params.sudoku_id,
                (err, sudoku) => {
                    if (err)
                        res.send(err);
                    res.json(sudoku);
                });
        }
    )
    .put(
        (req, res) => {
            Sudoku.findById(req.params.sudoku_id,
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
            Sudoku.remove({
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



module.exports = router;