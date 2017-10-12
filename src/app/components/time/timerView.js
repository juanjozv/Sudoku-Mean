/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
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