// Get elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage when page loads
window.onload = function() {
    loadTasks();
};

// Add task function
function addTask() {

    // Get input value
    const taskText = taskInput.value.trim();

    // If empty, do nothing
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Click to mark complete
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
        saveTasks();
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.onclick = function() {
        li.remove();
        saveTasks();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Save tasks
    saveTasks();
}

// Save tasks to localStorage
function saveTasks() {

    const tasks = [];

    document.querySelectorAll("li").forEach(function(task) {
        tasks.push({
            text: task.firstChild.textContent,
            completed: task.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task) {

        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
            saveTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.onclick = function() {
            li.remove();
            saveTasks();
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}