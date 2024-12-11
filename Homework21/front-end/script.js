const api_Url = 'http://localhost:8080/todos';
const form = document.querySelector('form');
const userInput = document.querySelector('.js--form__input');
const toDoList = document.querySelector('.js--todos-wrapper');

async function fetchTodos() {
    try {
        const response = await fetch(api_Url);
        const todos = await response.json();
        clearTodos(todos);
    } catch (error) {
        console.error('Error:', error);
    }
}

function clearTodos(todos) {
    toDoList.textContent = '';
    todos.forEach(todo => addNewTask(todo._id, todo.text, todo.checked));
}

async function addNewTask(id, task, isChecked = false) {
    const newTask = document.createElement('li');
    newTask.classList.add('todo-item');
    newTask.dataset.id = id;
    await addElementsToTask(newTask, task, isChecked);
    toDoList.appendChild(newTask);
}

async function addElementsToTask(taskElement, task, isChecked) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isChecked;
    checkbox.addEventListener('change', () => {
        const textElement = taskElement.querySelector('.todo-item__description');
        if (checkbox.checked) {
            textElement.classList.add('todo-item--checked');
        } else {
            textElement.classList.remove('todo-item--checked');
        }
        updateTask(taskElement.dataset.id, task, checkbox.checked);

    });

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task;
    taskDescription.classList.add('todo-item__description');
    if (isChecked) {
        taskDescription.classList.add('todo-item--checked');
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.classList.add('btn', 'btn-primary', 'ms-2');
    deleteButton.type = 'button';
    deleteButton.addEventListener('click', () => {
        deleteTask(taskElement.dataset.id);
        taskElement.remove();
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Змінити задачу';
    editButton.classList.add('btn', 'btn-primary');
    editButton.type = 'button';
    editButton.addEventListener('click', () => {
        const newTaskText = prompt('Введіть новий текст для задачі:', task);
        if (newTaskText && newTaskText.trim() !== '') {
            updateTask(taskElement.dataset.id, newTaskText.trim(), checkbox.checked);
            taskDescription.textContent = newTaskText.trim();
        }
    });

    taskElement.append(checkbox, taskDescription, editButton, deleteButton);
}

async function createTask(task) {
    try {
        const response = await fetch(api_Url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: task, checked: false}),
        });
        const newTask = await response.json();
        await addNewTask(newTask._id, newTask.text, newTask.checked);
    } catch (error) {
        console.error('An error occurred while adding a task:', error);
    }
}

async function updateTask(id, text, checked) {
    try {
        await fetch(`${api_Url}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text, checked}),
        });
    } catch (error) {
        console.error('An error occurred while updating a task:', error);
    }
}

async function deleteTask(id) {
    try {
        await fetch(`${api_Url}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('An error occurred while deleting a task::', error);
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const task = userInput.value.trim();
    if (task) {
        await createTask(task);
        form.reset();
    }
});

fetchTodos();
