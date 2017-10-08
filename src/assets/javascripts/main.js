$(document).ready(function() {
    let row = 0,
        column = 0;
    $('.hint').focus(function() {

            $(this).css("background-color", "#81F79F")

        })
        .blur(function() {
            $(this).css("background-color", "white");
        })
        .keydown(function(e) {
            row = Math.floor(parseInt($(this).attr('id')) / 9)
            column = parseInt($(this).attr('id')) % 9
            if (e.keyCode === 8) $(this).val(" ");
            if (e.keyCode === 37 && column > 0) {
                $(this).focusout();
                $('#' + (parseInt($(this).attr('id')) - 1).toString()).focus();

            }
            if (e.keyCode === 38 && row > 0) {
                $(this).focusout();
                $('#' + (parseInt($(this).attr('id')) - 9).toString()).focus();
            }
            if (e.keyCode === 39 && column < 8) {
                $(this).focusout();
                $('#' + (parseInt($(this).attr('id')) + 1).toString()).focus();
            }
            if (e.keyCode === 40 && row < 8) {
                $(this).focusout();
                $('#' + (parseInt($(this).attr('id')) + 9).toString()).focus();
            }
        })
        .keypress(function(e) {
            if (!isNaN(String.fromCharCode(e.which)) && String.fromCharCode(e.which) != 0) {
                event.preventDefault(); //stop character from entering input
                var v = String.fromCharCode(e.which)
                $(this).val(v);
            }
        })
})

/*let minutesLabel = $('#minutes');
let secondsLabel = $('#seconds');
let totalSeconds = 0;

class Timer {
    constructor() {
        this.timerID = 'undef';
        this.restart = false;
    }
    setTime() {
        (this.restart) ? totalSeconds = 0: ++totalSeconds;
        console.log(totalSeconds);
        this.restart = false;
        secondsLabel.html(pad(totalSeconds % 60));
        minutesLabel.html(pad(parseInt(totalSeconds / 60)));
    }
    pad(val) {
        let valString = val + "";
        if (valString.length < 2) return "0" + valString;
        return valString;
    }
    startTimer() {
        this.timerID = setInterval(setTime, 1000);
    }
    stopTimer() {
        this.restart = true;
        clearInterval(this.timerID);
    }
}

module.exports = Timer

//Methods for the Timer
/*let minutesLabel = $('#minutes');
let secondsLabel = $('#seconds');
let totalSeconds = 0;


let setTime = () => {
    ++totalSeconds;
    secondsLabel.html(pad(totalSeconds % 60));
    minutesLabel.html(pad(parseInt(totalSeconds / 60)));
}

let pad = (val) => {
    let valString = val + "";
    if (valString.length < 2) return "0" + valString;
    return valString;
}

//This executes the timer
//var mytimer = setInterval(setTime, 1000); */