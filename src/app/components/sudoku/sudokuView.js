/**
 * Sudoku
 * @author juanjozv@gmail.com
 * @author osqui.salazar@gmail.com
 * @author manca64@gmail.com
 * @author leogodinezs15@gmail.com
 */

const NEVER = x => false;
const { Sudoku } = require('../../../../src/assets/javascripts/sudoku.js');
const { SudokuSolver } = require('../../../../src/assets/javascripts/sudokuSolver.js');
const { SudokuGen } = require('../../../../src/assets/javascripts/sudokuGen.js');
const { Random } = require('../../../../src/assets/javascripts/random.js');
const Solver = new SudokuSolver();
const sudokuGen = new SudokuGen(9);
const random = new Random();

let createFill = (td, tr, id) => {
    return $('<input type="int"/>').attr({
        id: id,
        class: "hint",
        maxlength: "1",
        size: "1",
        readonly: "",
        value: null
    })
        .appendTo($('<td />')
            .attr({
                class: td
            })
            .appendTo(tr));
}

function* sudokuViewGenerator(start = 0, next = x => x + 1, stop = NEVER) {
    let tr = $('<tr />'),
        tdBorderClass = 'lox',
        tdNormalClass = 'ox',
        td,
        input,
        row = 0;
    for (let column = start; !stop(column);) {
        if (column % 9 == 0 && column != 0) {
            $('#sudoku').append(tr);
            tr = $('<tr />');
            row++;
            (row % 3 == 0) ? tdBorderClass = 'lox' : tdBorderClass = 'lx';
            (row % 3 == 0) ? tdNormalClass = 'ox' : tdNormalClass = 'nx';
        }
        column % 3 == 0 ? td = tdBorderClass : td = tdNormalClass;
        input = createFill(td, tr, column);
        yield input;
        column = next(column);
    }
    return { done: true }
}

class SudokuView {
    constructor() {
        [this.start, this.delta, this.stop] = [0, x => x + 1, x => x > 81];
    }
    [Symbol.iterator]() {
        this.iter = sudokuViewGenerator(this.start, this.delta, this.stop);
        return this;
    }
    next() {
        return this.iter.next();
    }
    create() {
        for (let i of this);
    }
    // use for reload the sudoku table view with the original sudoku
    reload(sudoku) {
        sudoku.forEach((row, i) =>
            row.forEach((num, j) => {
                $('#' + (j + 9 * i).toString()).val(num)
            }));
    }
    // use for load an existing in view and component
    paint(playableSudoku, sudoku) {
        playableSudoku.forEach((elem, i) => {
            //clean position of original sudoku
            sudoku[elem.x][elem.y] = elem.isClue ? elem.value : ' '

            // clean textfields
            elem.isClue ? $('#' + (elem.y + 9 * elem.x).toString()).prop('disabled', true)
                .val(elem.value) : $('#' + (elem.y + 9 * elem.x).toString()).prop('disabled', false)
                    .val(elem.value == 0 ? ' ' : elem.value)

        });
    }
    getMatrix() {
        return Array.from({ length: 9 }, (row, i) =>
            Array.from({ length: 9 }, (value, j) =>
                ($('#' + (j + 9 * i).toString()).val() != " ") ? parseInt($('#' + (j + 9 * i).toString()).val()) :
                    $('#' + (j + 9 * i).toString()).val()));
    }
    checkModal(_res) {
        $('#msgCheck').text(_res);
        $('#checkModal').modal();
    }
    checkSudoku() {
        let obj = sudokuGen.getSudokuStructure(this.getMatrix());
        let sudo = new Sudoku(obj);
        return Solver.hasSolution(sudo) ? 'Sudoku has solution!!' : 'Sudoku has no solution!!';
    }
    cluesForLevel(d) {
        if (d == 'easy') return 40
        if (d == 'normal') return 26
        if (d == 'hard') return 17
        else return random.rand(17, 81);
    }
    generateSudoku(d = 'random', sudoku) {
        let id = "",
            clue = 0, cluesCount = 0, maxClues = this.cluesForLevel(d);
        for (let actualValue of sudokuGen) {
            clue = random.rand(1, 5);
            id = '#' + (actualValue.col + 9 * actualValue.row).toString();

            ((clue == 3 || clue == 1) && cluesCount < maxClues) ?
                $(id).val(actualValue.num)
                    .prop('disabled', true) && cluesCount++ :
                $(id).val(' ')
                    .prop('disabled', false);

            sudoku[actualValue.row][actualValue.col] = ((clue == 3 || clue == 1) && cluesCount < maxClues) ? actualValue.num : ' ';

        }
    }

    solveSudoku(sudoku) {
        let obj = sudokuGen.getSudokuStructure(sudoku);
        let sudo = new Sudoku(obj);
        this.reload(Solver.getSudokuSolution(sudo));
    }
    createClue(textFieldId) {
        let id = '#' + textFieldId.toString(),
            i = Math.floor(textFieldId / 9),
            j = textFieldId % 9
        return { x: i, y: j, value: $(id).val() != ' ' ? parseInt($(id).val()) : 0, isClue: $(id).prop('disabled') ? true : false }
    }
    getPlayableSudoku() {
        return Array.from({ length: 81 }, (value, i) => this.createClue(i))
    }
    hasBegun(){
        if(!$('#0').val()) return false
        return true
    }
}

module.exports = SudokuView