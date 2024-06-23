document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-onscroll");
        } else {
            navbar.classList.remove("navbar-onscroll");
        }
    });
});
