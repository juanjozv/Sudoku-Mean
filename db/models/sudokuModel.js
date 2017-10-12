/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
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