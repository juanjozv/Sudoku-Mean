let modal = $("#loginModal");
let link = $("#login");
let close = $("#cerrarLogin")[0];

// var modal = document.getElementById('loginModal');
// var link = document.getElementById("login");
// var close = document.getElementsByClassName("cerrarLogin")[0];

class NavbarView {
    constructor() {}
    openlogInModal() {
        modal.modal();
    }
    closeLogInModal() {
        modal.style.display = "none";
    }
}

/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/

module.exports = NavbarView