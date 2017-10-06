const NEVER = x => false;

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

function* sudokuTableGenerator(start = 0, next = x => x + 1, stop = NEVER) {
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
            this.iter = sudokuTableGenerator(this.start, this.delta, this.stop);
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
    getMatrix(matrix_) {
        let matrixAux = matrix_;
        let value;
        matrix_.forEach((row, i) =>
            row.forEach((num, j) => {
                value = $('#' + (j + 9 * i).toString()).val();
                (value === ' ') ? matrixAux[i][j] = value: matrixAux[i][j] = parseInt(value);
            }));
        return matrixAux;
    }

}


let createSudokuView = () => {
    var sudokuView = new SudokuView(0, x => x + 1, x => x > 81);
    sudokuView.create();
    return sudokuView;
}


module.exports = SudokuView