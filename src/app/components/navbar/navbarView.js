/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

class NavbarView {
    constructor() {}
    setUsername() {
        let usernameTextField = $('#username').val();
        if (usernameTextField != '') $('#showUsername').html(usernameTextField);
        window.sessionStorage.setItem('_id', 'na');
        window.sessionStorage.setItem('newGame', 'true');
    }
}

module.exports = NavbarView