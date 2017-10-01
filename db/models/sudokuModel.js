var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SudokuSchema = new Schema({
    user: String,
    lastPlayed: Date, // to obtain the last played sudoku by the user.
    sudokuSolution: [{ x: Number, y: Number, value: Number }], //preguntar como manejamos y donde la creación del sudoku o si ya tenía una solución.
    playableSudoku: [{ x: Number, y: Number, value: Number }]
});

module.exports = mongoose.model('Sudoku', SudokuSchema);