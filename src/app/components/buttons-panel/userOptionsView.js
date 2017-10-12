class UserOptionsView {

    constructor() {}
    getUser() {
        let user = $('#showUsername').text();
        if (user != "")
            return user;
        $('#warningLogin').modal();
        return "empty";
    }

    showModal() {
        $('#loadModal').modal();
    }

    showSaveGameModal() {
        $('#saveModal').modal();
    }

    setStorageDifficulty(d) {
        window.sessionStorage.setItem('difficulty', d);
    }

    getStorageDifficulty() {
        return window.sessionStorage.getItem('difficulty');
    }

    setStorageSudokuId(newId, newGame) {
        window.sessionStorage.setItem('_id', newId);
        window.sessionStorage.setItem('newGame', newGame);
    }

    getStorageSudokuId() {
        return window.sessionStorage.getItem('_id');
    }

    getIsNewGame() {
        return (window.sessionStorage.getItem('newGame') == 'true') ? true : false;
    }
    storageClient(obj) {
        window.localStorage.setItem(obj._id, JSON.stringify(obj));
    }
    getStorageClient(id) {
        return JSON.parse(window.localStorage.getItem(id));
    }
    getStorageClientByUser(user) {
        return Array.from({ length: window.localStorage.length },
             (v, i) => JSON.parse(window.localStorage.getItem(window.localStorage.key(i))))
             .filter(v => v.user == user)
    }
   
    getSudokuIdStorage(id) {
        return Array.from({ length: window.localStorage.length }, 
            (v, i) => JSON.parse(window.localStorage.getItem(window.localStorage.key(i))))
        .find(v => v._id === id);
    }

    createRow(sudoku) {
        let icon = '<td><span class="glyphicon glyphicon-user"></span></td>',
            difficulty = '<td>' + sudoku.difficulty + '</td>',
            lastPlayed = '<td>' + sudoku.lastPlayed + '</td>',
            button = '<td><button type="button" data-target="#loadModal" data-toggle="modal" class="btn btn-primary badge" id="' + sudoku._id + '"><span class="glyphicon glyphicon-plus"></button></span>',
            row = '<tr>' + icon + difficulty + lastPlayed + button + '</tr>';
        return row;

    }

    getCurrentDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }
    warning(text){
        $('#warningText').text(text);
        $('#warningModal').modal();
    }

}

module.exports = UserOptionsView