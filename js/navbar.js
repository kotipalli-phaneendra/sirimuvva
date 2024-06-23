document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("header");
    var scrollableContainer = document.body;

    scrollableContainer.addEventListener("scroll", function () {
        if (scrollableContainer.scrollTop > 50) {
            navbar.classList.add("navbar-onscroll");
        } else {
            navbar.classList.remove("navbar-onscroll");
        }
    });
});