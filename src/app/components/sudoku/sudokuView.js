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
        value: ""
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
    paint(newMatrix) {
        newMatrix.forEach((row, i) =>
            row.forEach((num, j) => {
                $('#' + (j + 9 * i).toString()).prop('disabled', false)
                    .val(num)
                if (num != ' ') $('#' + (j + 9 * i).toString()).prop('disabled', true);
            }));
    }
    getMatrix() {
        return Array.from({ length: 9 }, (row, i) =>
            Array.from({ length: 9 }, (value, j) =>
                ($('#' + (j + 9 * i).toString()).val() != " ") ? parseInt($('#' + (j + 9 * i).toString()).val())
                    : $('#' + (j + 9 * i).toString()).val()));
    }
    checkModal(_res) {
        $('#msgCheck').text(_res);
        $('#checkModal').modal();
    }
    checkSudoku() {
        let obj = {
            table: this.getMatrix(),
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
        })
        let sudo = new Sudoku(obj);
        return Solver.hasSolution(sudo) ? 'Sudoku has solution!!' : 'Sudoku has no solution!!';
    }
    generateSudoku(){
        let id = "", clue = 0;
        for (let actualValue of sudokuGen) {
            clue = random.rand(1, 5)
            id = '#' + (actualValue.col + 9 * actualValue.row).toString()
            $(id).val(' ')
                .prop('disabled', false)
            if(clue == 3 || clue == 1){
                $(id).val(actualValue.num)
                    .prop('disabled', true)
            } 
        }
    }
    solveSudoku(){
        let obj = {
            table: this.getMatrix(),
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
        })
        let sudo = new Sudoku(obj);
        this.paint(Solver.getSudokuSolution(sudo));
    }

}

module.exports = SudokuView