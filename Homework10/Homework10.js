// task 1
const chooseSite = document.getElementById('chooseSite');
const moveThere = document.getElementById('moveThere');
let siteUrl = '';
chooseSite.addEventListener("click", () => {
    siteUrl = prompt('Choose site')
});
moveThere.addEventListener('click', () => {
    if (siteUrl.startsWith('https://')) {
        location.href = siteUrl;
    } else {
        location.href = `https://${siteUrl}`;
    }
})

// task 2
const buttonsBlock = document.querySelector('.buttons_block');
buttonsBlock.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        alert(`You pressed ${target.textContent}`);
    } else {
        alert(`You've missed the button`)
    }
});

// task 3
const userList = document.querySelector('ul');
const userInput = document.querySelector('input');
const addButton = document.querySelector('#addTask');
addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const userNewTask = document.createElement('li');
    const userNewTaskButton = document.createElement('button');
    userNewTask.textContent = userInput.value;
    if (userInput.value.trim()) {
        userList.appendChild(userNewTask);
        userNewTaskButton.textContent = 'Delete';
        userNewTask.appendChild(userNewTaskButton);
    }

});
userList.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        userList.removeChild(target.closest('li'));
    }
});