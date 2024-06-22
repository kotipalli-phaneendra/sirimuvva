// script.js
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        // Adjust the scroll value as needed
        navbar.classList.add("navbar-onscroll");
      } else {
        navbar.classList.remove("navbar-onscroll");
      }
    });
  });
  