function* sudokuIterator(start = 0, next = x => x + 1, stop = NEVER) {
    for (let i = start; !stop(i);) {
        yield i;
        i = next(i);
    }
}

class Sudoku {
    constructor(obj) {
        this.table = obj.table;
        this.rows = obj.rows;
        this.columns = obj.columns;
        this.sections = obj.sections;
        [this.start, this.delta, this.stop] = [0, i => i + 1, i => i == 9];
    }
    [Symbol.iterator]() {
        this.iter = sudokuIterator(this.start, this.delta, this.stop);
        return this;
    }
    next() {
        return this.iter.next();
    }
    pushNewValue(i, j, number) {
        this.table[i][j] = number;
        this.rows[i].push(number);
        this.columns[j].push(number);
        this.sections[Math.floor(i / 3)][Math.floor(j / 3)].push(number);
    }
    popLastValueInserted(i, j, number) {
        this.table[i][j] = ' ';
        this.rows[i].pop();
        this.columns[j].pop();
        this.sections[Math.floor(i / 3)][Math.floor(j / 3)].pop();
    }
    hasLegalValues(array) {
        return (new Set(array)).size === array.length;
    }
    isValueRepeated(position){
        return (!this.hasLegalValues(this.rows[position]) || !this.hasLegalValues(this.columns[position]) 
                || !this.hasLegalValues(this.sections[Math.floor(position / 3)][position % 3]))
    }
    isSudoku() {
        for(let i of this){
           if(this.isValueRepeated(i)) return false;
        }
        return true;
    }


}

module.exports = { Sudoku };