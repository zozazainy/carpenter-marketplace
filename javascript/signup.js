
// Select elements
const signupForm = document.getElementById("signupForm");

const roleButtons = document.querySelectorAll(".role-btn");
const userRole = document.getElementById("userRole");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");


// CUSTOMER / CARPENTER ROLE SELECTION
roleButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        roleButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        userRole.value = button.dataset.role;

    });

});


// SHOW / HIDE PASSWORD
togglePassword.addEventListener("click", function() {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "Hide";

    } else {

        password.type = "password";
        togglePassword.textContent = "Show";

    }

});


// SIGNUP FORM SUBMISSION
signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Check password
    if (password.value !== confirmPassword.value) {

        message.textContent = "Passwords do not match!";
        message.style.color = "red";

        return;
    }

    // Get form information
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const role = userRole.value;

    message.textContent =
        "Signup form submitted successfully as " + role +
        ". Account creation is not connected yet.";

    message.style.color = "#24734E";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Role:", role);

});
