const numbers = Array.from({ length: 9 }, (v, i) => i + 1);
const coordinates = [];

// este metodo lo que hace es un yield del primer numero con las coordenadas con las que empieza el patron
function* initialSudokuNumberGenerator(start = 0, next = x => x + 3, stop = x => x == 9, possibleValues) {
    // se genera un random de 0 a possibleValues.length de modo que se elija una posicion cualquiera
    //del array y así elegir un número desocupado un numero desocupado
    let pos = getRandomInt(0, possibleValues.length),
        number = possibleValues[pos],
        row = 0,
        column = 0,
        cell;
    // estructura que va a guardar un array con las coordenadas del primer numero ingresado
    coordinates.push([]);
    for (let i = start; !stop(i);) {
        for (let j = start; !stop(j);) {
            cell = { row: i + row++, col: j + column, num: number }; // así se ingresa el primer numero en las diagonales que les expliqué
            coordinates[0].push(cell); //guarda las coordenadas en el array de coordenadas
            yield cell;
            j = next(j);
        }
        row = 0;
        column++;
        i = next(i);
    }
    possibleValues.splice(pos, 1); // se elimina el numero ingresado para que no se vuelva a repetir
    return { done: true }
}

function* sudokuGenerator(start = 0, next = x => x + 1, stoprow = i => i == 8, stopcol = j => j == 9) {
    let row, col, pos, number, lastNumberCoordinates, cell, possibleValues = Array.from({ length: 9 }, (v, i) => i + 1);
    yield* initialSudokuNumberGenerator(0, x => x + 3, x => x == 9, possibleValues); // se hace yield del primer paso del patron
    for (let i = start; !stoprow(i);) { // i < 8 debido a que ya se ingresó un número de 9 en la matriz
        pos = getRandomInt(0, possibleValues.length), // lo mismo que el anterior, se elije una posicion random y su respectivo numero
            number = possibleValues[pos],
            lastNumberCoordinates = coordinates.pop(), // se le hace pop a el array de cordenadas para así tener todas las coordenadas del numero ingresado anteriormente
            coordinates.push([]), // se ingresa un array que tendrá las coordenadas del numero ingresado actualmente
            possibleValues.splice(pos, 1); // se elimina el numero ingresado para que no se repita

        for (let j = start; !stopcol(j);) {
            if ((j + 1) % 3 == 0) { // si la cuadricula de referencia a la actual está debajo de esta 
                // si es diferente de 9 es porque no es la última cuadrícula, entonces solo se tomarán
                //de referencia las coordenadas de la cuadrícula de abajo, pero si es 9 se tomarán de referencia
                // las coordenadas de la primer cuadrícula de la matriz, aquí es cuando se termina de colocar
                //el numero actual en todas las cuadriculas de la matriz
                ((j + 1) != 9) ? row = lastNumberCoordinates[j + 1].row - 3: row = lastNumberCoordinates[0].row + 6;
                ((j + 1) != 9) ? col = lastNumberCoordinates[j + 1].col + 6: col = lastNumberCoordinates[0].col + 6;
            }
            // si la cuadrícula de referencia está a la derecha de la actual
            else {
                row = lastNumberCoordinates[j + 1].row;
                col = lastNumberCoordinates[j + 1].col - 3;
            }
            // numero y coordenadas en la respectiva casilla
            cell = { row: row, col: col, num: number };
            yield cell;
            // se ingresa en las coordenadas todas las referencias del numero ingresado actualmente
            coordinates[0].push(cell);
            j = next(j);
        }
        // se vuelve a repetir el ciclo hasta que se agoten los numeros
        i = next(i);
    }
    coordinates.pop();
    return { done: true }
}

class Sudoku {
    constructor(n) {
            this.table = Array.from({ length: n }, () => new Array(n));
            this.rows = Array.from({ length: n }, (v, i) => []);
            this.columns = Array.from({ length: n }, (v, i) => []);
            this.sections = Array.from({ length: n / 3 }, (v, i) => Array.from({ length: n / 3 }, (v, i) => []));
            [this.start, this.delta, this.stopRow, this.stopCol] = [0, x => x + 1, i => i == 8, j => j == 9];
        }
        [Symbol.iterator]() {
            this.iter = sudokuGenerator(this.start, this.delta, this.stopRow, this.stopCol);
            return this;
        }
    next() {
        return this.iter.next();
    }
    get generate() {
        this.table.forEach(v => v.fill(' '));
        this.rows.forEach(i => i.fill([]));
        this.columns.forEach(j => j.fill([]));
        this.sections.forEach(i => i.forEach(j => j.fill([])));
        this.generateSudoku();
    }
    generateSudoku() {
        let yes;
        for (let cell of this) {
            yes = getRandomInt(1, 4);
            if (yes % 2 == 0) {
                this.rows[cell.row].push(cell.num);
                this.columns[cell.col].push(cell.num);
                this.sections[Math.floor(cell.row / 3)][Math.floor(cell.col / 3)].push(cell.num);
                this.table[cell.row][cell.col] = cell.num;
            }
        }
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function test() {



    var s = new Sudoku(9);
    s.generate;
    console.log(s.table);
    //console.log(s.getNextFreeSquare(0,0));
    s.solveSudoku(0, 0);
    //console.log(s.rows);

    console.log(s.table);
    s.generate;

    console.log(s.table);
    s.solveSudoku(0, 0);
    console.log(s.table);
}
//test();