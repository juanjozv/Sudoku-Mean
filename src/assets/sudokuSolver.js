
class SudokuSolver{

    constructor(obj){
        this.table = obj.table/*Array.from({ length: n }, () => new Array(n));*/
        this.rows = obj.rows/*Array.from({ length: n }, (v, i) => []);*/
        this.columns = obj.columns/*Array.from({ length: n }, (v, i) => []);*/
        this.sections = obj.sections/*Array.from({ length: n / 3 }, (v, i) => Array.from({ length: n / 3 }, (v, i) => []));*/
    }

    getNextFreeSquare(row) {
        /*(column + 9 * row) // esto sirve para ubicar la posicion equivalente de la matriz en un array
        	row = Math.floor(i / 9) // posicion equivalente de la fila de la matriz como si se recorriera un array
        	column = i % 9; */ // lo mismo de arriba pero con la columnas

        let i = row;
        while (i < 9) {
            if (this.table[i].indexOf(' ') != -1) // se verifica que haya un espacio vacío en la fila correspondiente
                return { row: i, column: this.table[i].indexOf(' ') }; //si lo hay se retorna un objeto con la fila y 
            //la columna que corresponden al espacio vacío más cercano
            i++; // se baja a la siguiente fila si no hay espacios desocupados
        }
        return null // se retorna null cuando la matriz ya esté llena
    }
    getPossibleValues(row, column) {
        // se unen todos los valores de una fila, columna y cuadricula correspondientes
        var busyValues = this.rows[row].concat(this.columns[column])
            .concat(this.sections[Math.floor(row / 3)][Math.floor(column / 3)]);
        // se le aplica un filter a un array con numeros de 1 a 9,
        // de modo que si el valor actual no se encuentra en ninguno de los arrays
        //anteriores, aplicarle filter y utilizarlo
        return Array.from({ length: 9 }, (v, i) => i + 1)
            .filter(n => busyValues.indexOf(n) == -1);
    }

    solveSudoku(row, column) {
        var auxRow, auxColumn, possibleValues,
            // método que busca la siguiente celda desocupada de la matriz,
            // y devuelve un object con dos properties: row y column
            nextFreeSquare = this.getNextFreeSquare(row);
        // si existe una siguiente celda para llenar
        if (nextFreeSquare) {
            auxRow = nextFreeSquare.row;
            auxColumn = nextFreeSquare.column;

            //método que retorna un array con los posibles valores de una celda
            possibleValues = this.getPossibleValues(auxRow, auxColumn);

            //se empiezan a probar los posibles valores a colocar
            for (let number of possibleValues) {
                // se ingresa el valor actual a la matriz
                this.table[auxRow][auxColumn] = number;
                // se ingresa el valor en la fila, columna y cuadrícula correspondientes
                this.rows[auxRow].push(number);
                this.columns[auxColumn].push(number);
                //Math.floor(auxRow/auxCol / 3) -> Saber en que cuadricula nos encontramos
                this.sections[Math.floor(auxRow / 3)][Math.floor(auxColumn / 3)].push(number);

                // hace un llamado recursivo, de modo que se repita el mismo proceso, pero en la
                //siguiente cuadrícula y con posibles valores distintos
                if (this.solveSudoku(auxRow, auxColumn)) {
                    return true;

                } else {
                    // en caso de que el array de los posibles valores esté vacío o bien, se termine
                    // de recorrer, se entra en el else y se elimina el valor ingresado anteriormente
                    this.table[auxRow][auxColumn] = ' ';
                    this.rows[auxRow].pop();
                    this.columns[auxColumn].pop();
                    this.sections[Math.floor(auxRow / 3)][Math.floor(auxColumn / 3)].pop();
                }
            }
            //retorna false en caso de que no se haya podido ingresar un nuevo valor, se sale de la llamada
            //recursiva actual y pasa al else de arriba (aqui empieza el backtrack)
            return false;
        }
        //se retorna true cuando ya no haya una siguiente celda de la matriz que llenar
        return true;
    }


}

module.exports = {
    SudokuSolver
}