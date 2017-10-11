/**
 * Sudoku
 * @author juanjozv@gmail.com
 * @author osqui.salazar@gmail.com
 * @author manca64@gmail.com
 * @author leogodinezs15@gmail.com
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SudokuSchema = new Schema({
    user: String,
    difficulty: String, //normal, easy, hard, random(generated)
    lastPlayed: String, // to obtain the last played sudoku game by the user.
    playableSudoku: [{ x: Number, y: Number, value: Number, isClue: Boolean }]
});

module.exports = mongoose.model('Sudoku', SudokuSchema);