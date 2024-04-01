
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        } else {
            alert("Please enter a task");
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);

        // Adding a delete button to each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-btn");
        taskItem.appendChild(deleteButton);

        // Deleting task when delete button is clicked
        deleteButton.addEventListener("click", function() {
            taskItem.remove();
        });
    }
});
