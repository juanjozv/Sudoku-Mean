class SudokuSolver{

    constructor(){

    }

    getNextFreeSquare(row, sudoku) {
        let i = row;
        while (i < 9) {
            if (sudoku.table[i].indexOf(' ') != -1) // se verifica que haya un espacio vacío en la fila correspondiente
                return { row: i, column: sudoku.table[i].indexOf(' ') }; //si lo hay se retorna un objeto con la fila y 
            //la columna que corresponden al espacio vacío más cercano
            i++; // se baja a la siguiente fila si no hay espacios desocupados
        }
        return null // se retorna null cuando la matriz ya esté llena
    }
    getPossibleValues(row, column, sudoku) {
        // se unen todos los valores de una fila, columna y cuadricula correspondientes
        var busyValues = sudoku.rows[row].concat(sudoku.columns[column])
            .concat(sudoku.sections[Math.floor(row / 3)][Math.floor(column / 3)]);
        // se le aplica un filter a un array con numeros de 1 a 9,
        // de modo que si el valor actual no se encuentra en ninguno de los arrays
        //anteriores, aplicarle filter y utilizarlo
        return Array.from({ length: 9 }, (v, i) => i + 1)
            .filter(n => busyValues.indexOf(n) == -1);
    }

    solveSudoku(row, column, sudoku) {
        var auxRow, auxColumn, possibleValues,
            // método que busca la siguiente celda desocupada de la matriz,
            // y devuelve un object con dos properties: row y column
            nextFreeSquare = this.getNextFreeSquare(row, sudoku);

        // si existe una siguiente celda para llenar
        if (nextFreeSquare) {
            auxRow = nextFreeSquare.row;
            auxColumn = nextFreeSquare.column;

            //método que retorna un array con los posibles valores de una celda
            possibleValues = this.getPossibleValues(auxRow, auxColumn, sudoku);

            //se empiezan a probar los posibles valores a colocar
            for (let number of possibleValues) {
                // se ingresa el valor en la fila, columna y cuadrícula correspondientes
                sudoku.pushNewValue(auxRow, auxColumn, number);
                // hace un llamado recursivo, de modo que se repita el mismo proceso, pero en la
                //siguiente celda de la fila y con posibles valores distintos
                if (this.solveSudoku(auxRow, auxColumn, sudoku)) {
                    return true;

                } else {
                    // en caso de que el array de los posibles valores esté vacío o bien, se termine
                    // de recorrer, se entra en el else y se elimina el valor ingresado anteriormente
                    sudoku.popLastValueInserted(auxRow, auxColumn, number);
                }
            }
            //retorna false en caso de que no se haya podido ingresar un nuevo valor, se sale de la llamada
            //recursiva actual y pasa al else de arriba (aqui empieza el backtrack)
            return false;
        }
        //se retorna true cuando ya no haya una siguiente celda de la matriz que llenar
        return true;
    }
    hasSolution(sudoku){
        if(sudoku.isSudoku()){
            return this.solveSudoku(0, 0, sudoku)
        }
        return false
    }
    getSudokuSolution(sudoku){
        this.solveSudoku(0, 0, sudoku)
        return sudoku.table;
    }


}

module.exports = {
    SudokuSolver
}