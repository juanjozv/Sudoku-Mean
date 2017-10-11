/**
 * Sudoku
 * @author juanjozv@gmail.com
 * @author osqui.salazar@gmail.com
 * @author manca64@gmail.com
 * @author leogodinezs15@gmail.com
 */


const numbers = Array.from({ length: 9 }, (v, i) => i + 1);
const coordinates = [];
const { Random } = require('./random.js');
const random = new Random();

// este metodo lo que hace es un yield del primer numero con las coordenadas con las que empieza el patron
function* initialSudokuNumberGenerator(start = 0, next = x => x + 3, stop = x => x == 9, possibleValues) {
    // se genera un random de 0 a possibleValues.length de modo que se elija una posicion cualquiera
    //del array y así elegir un número desocupado un numero desocupado
    let pos = random.rand(0, possibleValues.length),
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
    for (let i = start; !stoprow(i);) { // i < 8 debido a que ya se ingresó un número de los 9 posibles en la matriz
        pos = random.rand(0, possibleValues.length), // lo mismo que el anterior, se elije una posicion random y su respectivo numero
            number = possibleValues[pos],
            lastNumberCoordinates = coordinates.pop(), // se le hace pop a el array de cordenadas para así tener todas las coordenadas del numero ingresado anteriormente

            coordinates.push([]), // se ingresa un array que tendrá las coordenadas del numero ingresado actualmente
            possibleValues.splice(pos, 1); // se elimina el numero ingresado para que no se repita

        for (let j = start; !stopcol(j);) {
            if ((j + 1) % 3 == 0) { // si la cuadricula de referencia a la actual está debajo de la que se está llenando actualmente

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



class SudokuGen {
    constructor(n) {
            [this.start, this.delta, this.stopRow, this.stopCol] = [0, x => x + 1, i => i == 8, j => j == 9];
        }
        [Symbol.iterator]() {
            this.iter = sudokuGenerator(this.start, this.delta, this.stopRow, this.stopCol);
            return this;
        }
    next() {
        return this.iter.next();
    }
}

module.exports = {
    SudokuGen
};