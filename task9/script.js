const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Regex for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Reusable error function
function showError(input, message) {
    input.className = "error";
    input.nextElementSibling.textContent = message;
}

// Reusable success function
function showSuccess(input) {
    input.className = "success";
    input.nextElementSibling.textContent = "";
}

// Individual field validations
function validateName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        return false;
    }
    showSuccess(nameInput);
    return true;
}

function validateEmail() {
    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Invalid email format");
        return false;
    }
    showSuccess(emailInput);
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        return false;
    }
    showSuccess(passwordInput);
    return true;
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
        return false;
    }
    showSuccess(confirmPasswordInput);
    return true;
}

// Real-time validation
nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);

// Form submit
form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form submission

    const isValid =
        validateName() &
        validateEmail() &
        validatePassword() &
        validateConfirmPassword();

    if (isValid) {
        alert("Registration Successful!");
        form.reset();
    }
});
