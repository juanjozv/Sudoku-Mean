class UserOptionsView {

    constructor() {}
    getUser() {
        let user = $('#showUsername').text();
        if (user != "")
            return user;
        window.alert("You must be logged in")
        return "empty";
    }
    showSudokus(sudokusList) {
        let row;
        console.log(sudokusList);
        for (let sudoku of sudokusList) {
            row = this.createRow(sudoku);
            $('#userGames').append(row)
        }
        $('#loadModal').modal();
    }


    createRow(sudoku) {
        let icon = '<td><span class="glyphicon glyphicon-user"></span></td>',
            difficulty = '<td>' + sudoku.difficulty + '</td>',
            lastPlayed = '<td>' + sudoku.lastPlayed + '</td>',
            button = '<td><button type = "button" data-target="#loadModal" data-toggle="modal" (click)="loadSudokuInMatrix(' + sudoku._id + ')" class="btn btn-primary badge" id="' + sudoku._id + '"><span class="glyphicon glyphicon-plus"></button></span>',
            row = '<tr>' + icon + difficulty + lastPlayed + button + '</tr>';
        return row;
    }
}

module.exports = UserOptionsView