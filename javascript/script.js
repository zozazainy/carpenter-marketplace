
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");
const navButtons = document.querySelector(".nav-buttons");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");
    navButtons.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

});
