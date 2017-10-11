/**
 * Sudoku
 * @author juanjozv@gmail.com
 * @author osqui.salazar@gmail.com
 * @author manca64@gmail.com
 * @author leogodinezs15@gmail.com
 */

class NavbarView {
    constructor() {}
    setUsername() {
        let usernameTextField = $('#username').val();
        if (usernameTextField != '') $('#showUsername').html(usernameTextField);
    }
}

module.exports = NavbarView