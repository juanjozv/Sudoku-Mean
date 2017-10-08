/*let minutesLabel = $('#minutes');
let secondsLabel = $('#seconds');*/
let totalSeconds = 0;

let mypad = val => {
    let valString = val + "";
    if (valString.length < 2) return "0" + valString;
    return valString;
}


/*
    Never forget, class functions needs to be called using this inside same class functions :( 4 A.M
*/
class Timer {
    constructor() {
        this.timerID = 'undef';
        this.restart = false;
    }
    // pad(val) {
    //     let valString = val + "";
    //     if (valString.length < 2) return "0" + valString;
    //     return valString;
    // }

    setTime() {
        (this.restart) ? totalSeconds = 0 : ++totalSeconds;
        this.restart = false;
        let var1 = mypad(totalSeconds % 60);
        let var2 = mypad(parseInt(totalSeconds / 60))
        $('#seconds').text(var1);
        $('#minutes').text(var2);
    }

    startTimer() {
        this.timerID = setInterval(this.setTime, 1000);
    }
    stopTimer() {
        this.restart = true;
        clearInterval(this.timerID);
    }
}

module.exports = Timer