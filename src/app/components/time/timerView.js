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
    return valString.length < 2 ? "0" + valString : valString
}

class Timer {
    constructor() {
        this.timerID = 'undef';
        this.restart = false;
    }

    setTime() {
      
        let milisText = pad(++totalSeconds % 100)
        let secondsText = pad(parseInt((totalSeconds / 100) % 60))
        let minutesText = pad(parseInt((totalSeconds / 6000) % 60))
        let hoursText = pad(parseInt(totalSeconds / 360000))
        $('#milis').text(milisText);
        $('#seconds').text(secondsText);
        $('#minutes').text(minutesText);
        $('#hours').text(hoursText);
    }

    startTimer() {
        this.timerID = setInterval(this.setTime, 10);
    }
    stopTimer() {
        totalSeconds = 0;
        $('#milis').text('00');
        $('#seconds').text('00');
        $('#minutes').text('00');
        $('#hours').text('00');
        $('#milis').text('00');
        clearInterval(this.timerID);
    }
    showLastTimer() {
        clearInterval(this.timerID);
    }
}

module.exports = Timer