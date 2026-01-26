// Select elements using DOM methods
const title = document.getElementById("title");
const description = document.querySelector("#description");
const button = document.getElementById("actionBtn");

// Button click event handler
button.addEventListener("click", function () {

    // Modify text dynamically
    title.textContent = "DOM Manipulation Successful!";
    description.textContent = "Text and styles were changed using JavaScript.";

    // Toggle CSS class
    button.classList.toggle("active");

    // Debug message
    console.log("Button clicked and DOM updated");
});
