document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#todoForm');
    const taskList = document.querySelector('#taskList');

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskInput = document.querySelector('#taskInput');
        if (taskInput.value.trim()) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskInput.value;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });
});
