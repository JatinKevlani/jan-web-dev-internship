// State: store tasks in an array
let tasks = [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Function to add task
function addTask() {
    const taskText = input.value.trim();

    // Validation: prevent empty task
    if (taskText === "") {
        alert("Task cannot be empty");
        return;
    }

    tasks.push(taskText);
    renderTasks();
    input.value = "";
}

// Render tasks to UI
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task;

        // Toggle completed state
        span.addEventListener("click", function () {
            span.classList.toggle("completed");
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    console.log("Tasks:", tasks);
}
