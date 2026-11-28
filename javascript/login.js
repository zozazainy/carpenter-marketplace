
// CRAFTORA - Login JavaScript


// 1. SELECT HTML ELEMENTS

const loginForm = document.getElementById("loginForm");

const password = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const roleButtons = document.querySelectorAll(".role-btn");

const userRole = document.getElementById("userRole");

const message = document.getElementById("message");

const forgotPassword = document.getElementById("forgotPassword");


// 2. CUSTOMER AND CARPENTER SELECTION

roleButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons

        roleButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Activate selected button

        button.classList.add("active");

        // Update user role

        userRole.value = button.dataset.role;

        // Clear previous message

        message.textContent = "";

    });

});


// 3. SHOW AND HIDE PASSWORD

togglePassword.addEventListener("click", function() {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "Hide";

    }

    else {

        password.type = "password";

        togglePassword.textContent = "Show";

    }

});


// 4. LOGIN FORM SUBMISSION

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const passwordValue = password.value;

    const selectedRole = userRole.value;


    if (email === "" || passwordValue === "") {

        message.textContent = "Please enter your email and password.";

        return;

    }


    // Frontend demonstration only

    message.textContent =
        "Login form submitted as " +
        selectedRole +
        ". Authentication is not connected yet.";

    console.log("Email:", email);

    console.log("Selected Role:", selectedRole);

});


// 5. FORGOT PASSWORD

forgotPassword.addEventListener("click", function(event) {

    event.preventDefault();

    alert("Password recovery functionality will be added later.");

});


console.log("CRAFTORA Login Page Loaded Successfully!");
