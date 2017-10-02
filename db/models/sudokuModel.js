let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SudokuSchema = new Schema({
    user: String,
    lastPlayed: Date, // to obtain the last played sudoku by the user.
    playableSudoku: [{ x: Number, y: Number, value: Number }]
});

module.exports = mongoose.model('Sudoku', SudokuSchema);