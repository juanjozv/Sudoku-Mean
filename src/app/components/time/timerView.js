/**
 * Sudoku
 * @author juanjozv@gmail.com
 * @author osqui.salazar@gmail.com
 * @author manca64@gmail.com
 * @author leogodinezs15@gmail.com
 */

let totalSeconds = 0;

let pad = val => {
    let valString = val + "";
    if (valString.length < 2) return "0" + valString;
    return valString;
}

class Timer {
    constructor() {
        this.timerID = 'undef';
        this.restart = false;
    }

    setTime() {
        ++totalSeconds;
        let secondsText = pad(totalSeconds % 60);
        let minutesText = pad(parseInt(totalSeconds / 60))
        $('#seconds').text(secondsText);
        $('#minutes').text(minutesText);
    }

    startTimer() {
        this.timerID = setInterval(this.setTime, 1000);
    }
    stopTimer() {
        totalSeconds = 0;
        $('#seconds').text('00');
        $('#minutes').text('00');
        clearInterval(this.timerID);
    }
    showLastTimer() {
        clearInterval(this.timerID);
    }
}

module.exports = Timer