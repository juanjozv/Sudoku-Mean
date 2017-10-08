class NavbarView {
    constructor() {}
    setUsername() {
        let usernameTextField = $('#username').val();
        if (usernameTextField != '') $('#showUsername').html(usernameTextField);
    }
}

module.exports = NavbarView