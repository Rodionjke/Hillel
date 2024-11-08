const form = document.querySelector('form');
const userInput = document.querySelector('.js--form__input');
const toDoList = document.querySelector('.js--todos-wrapper');

window.addEventListener('load', initTasks);

function initTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        JSON.parse(tasks).forEach(task => addNewTask(task.task, task.uuid, task.isChecked));
    }
}

function addNewTask(task, uuid, isChecked = false) {
    const newTask = document.createElement('li');
    newTask.classList.add('todo-item');
    newTask.setAttribute('data-uuid', uuid);
    addElementsToTask(newTask, task, isChecked);
    toDoList.appendChild(newTask);
}

function addElementsToTask(taskElement, task, isChecked) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = isChecked;
    taskElement.appendChild(checkbox);

    const textWhatToDo = document.createElement('span');
    textWhatToDo.textContent = task;
    textWhatToDo.classList.add('todo-item__description');
    if (isChecked) {
        textWhatToDo.classList.add('todo-item--checked');
    }
    taskElement.appendChild(textWhatToDo);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add('todo-item__delete');
    taskElement.appendChild(deleteButton);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = userInput.value.trim();
    const uuid = +new Date();

    if (task) {
        addNewTask(task, uuid);

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({task, uuid, isChecked: false});
        localStorage.setItem('tasks', JSON.stringify(tasks));

        form.reset();
    }
});

toDoList.addEventListener('click', (event) => {
    const target = event.target;
    const taskElement = target.closest('.todo-item');
    const uuid = taskElement.getAttribute('data-uuid');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (target.type === 'checkbox') {
        const isChecked = target.checked;
        taskElement.querySelector('.todo-item__description').classList.toggle('todo-item--checked', isChecked);

        const updatedTasks = tasks.map(task => {
            if (task.uuid === +uuid) {
                return {...task, isChecked};
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    } else if (target.tagName === 'BUTTON') {
        taskElement.remove();
        const updatedTasks = tasks.filter(task => task.uuid !== +uuid);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});
