// CRAFTORA Homepage JavaScript

// 1. Display a welcome message in the console
console.log("Welcome to CRAFTORA!");

// 2. Select all navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// 3. Add click functionality to navigation links
navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("You clicked: " + link.textContent);

    });

});