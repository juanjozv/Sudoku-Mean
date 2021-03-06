/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

const NEVER = x => false;
const { Sudoku } = require('./sudoku.js');
const { SudokuSolver } = require('./sudokuSolver.js');
const { SudokuGen } = require('./sudokuGen.js');
const { Random } = require('./random.js');
const Solver = new SudokuSolver();
const sudokuGen = new SudokuGen(9);
const random = new Random();
//const view = getSudokuView()

let createFill = (td, tr, id, val = null, fieldClass = 'hint') => {
    return $('<input type="int"/>').attr({
            id: id,
            class: fieldClass,
            maxlength: "1",
            size: "1",
            readonly: "",
            value: val,
            disabled: true
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
            (row % 3 == 0) ? tdBorderClass = 'lox': tdBorderClass = 'lx';
            (row % 3 == 0) ? tdNormalClass = 'ox': tdNormalClass = 'nx';
        }
        column % 3 == 0 ? td = tdBorderClass : td = tdNormalClass;
        input = createFill(td, tr, column)
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
        $('#pValues tr').remove()
            sudoku.forEach((row, i) =>
                row.forEach((num, j) => {
                    $('#' + (j + 9 * i).toString()).val(num)
                }));
        }
        // use for load an existing in view and component
    paint(playableSudoku, sudoku) {
        $('#pValues tr').remove()
        playableSudoku.forEach((elem, i) => {
            //clean position of original sudoku
            sudoku[elem.x][elem.y] = elem.isClue ? elem.value : ' '

            // clean textfields
            elem.isClue || elem.value == null ? $('#' + (elem.y + 9 * elem.x).toString()).prop('disabled', true)
                .val(elem.value) : $('#' + (elem.y + 9 * elem.x).toString()).prop('disabled', false)
                    .val(elem.value == 0 ? ' ' : elem.value)  
                    .bind('focus', () => {
                        this.getPossibleValues(elem.x, elem.y)
                    })
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
        $('#pValues tr').remove()
        let id = "",
            clue = 0,
            cluesCount = 0,
            maxClues = this.cluesForLevel(d);
        for (let actualValue of sudokuGen) {
            clue = random.rand(1, 5);
            id = '#' + (actualValue.col + 9 * actualValue.row).toString();

            ((clue == 3 || clue == 1) && cluesCount < maxClues) ?
            $(id).val(actualValue.num)
                .prop('disabled', true) && cluesCount++:
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
    hasBegun() {
        if (!$('#0').val()) return false
        return true
    }
    getPossibleValues(row, column){
        $('#pValues tr').remove()
        let sudoku = sudokuGen.getSudokuStructure(this.getMatrix())
        let values = Solver.getPossibleValues(row, column, sudoku)
        let tr = $('<tr />')
        values.forEach((value, i) => createFill('valTd', tr, i, value, 'valHint'))
        tr.appendTo($('#pValues'))
        
    }
    
}

let getSudokuView = () => {
    return new SudokuView()
}

module.exports = SudokuView