// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    // Check if the input is not empty
    if (task) {
        const taskList = document.getElementById('taskList');

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = task;

        // Create a delete button for the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the delete button to the list item
        li.appendChild(deleteBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}
