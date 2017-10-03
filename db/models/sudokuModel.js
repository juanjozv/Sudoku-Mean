let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SudokuSchema = new Schema({
    user: String,
    difficulty: String, //normal, easy, hard, random(generated)
    lastPlayed: Date, // to obtain the last played sudoku game by the user.
    playableSudoku: [{ x: Number, y: Number, value: Number, isClue: Boolean }]
});

module.exports = mongoose.model('Sudoku', SudokuSchema);