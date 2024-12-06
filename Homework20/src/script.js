import './styles.scss';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';

const $form = $('form');
const $userInput = $('.js--form__input');
const $toDoList = $('.js--todos-wrapper');
const $taskText = $('#task_text')

function addNewTask(task, isChecked = false) {
    let $newTask = $('<li></li>')
        .addClass('todo-item');
    addElementsToTask($newTask, task, isChecked);
    $toDoList.append($newTask);
}

function addElementsToTask($taskElement, task, isChecked) {
    const $checkbox = $('<input>', {
        type: 'checkbox',
        checked: isChecked,
    });

    const $textWhatToDo = $('<span>', {
        text: task,
        class: 'todo-item__description',
    });
    if (isChecked) {
        $textWhatToDo.addClass('todo-item--checked');
    }

    const $deleteButton = $('<button></button>')
        .text('Видалити')
        .addClass('btn btn-primary ms-2')
        .attr('type', 'button')
        .attr('id', 'deleteTask_button');

    const $viewTextButton = $('<button></button>')
        .text('Подивитися задачу')
        .addClass('btn btn-primary')
        .attr('type', 'button')
        .attr('id', 'viewTask_button');

    $taskElement.append($checkbox, $textWhatToDo, $viewTextButton, $deleteButton);
}

$form.on('submit', function (event) {
    event.preventDefault();
    const task = $userInput.val().trim();
    if (task) {
        addNewTask(task);
        $form[0].reset();
    }
});

$toDoList.on('click', function (event) {
    const $target = $(event.target);
    const $taskElement = $target.closest('.todo-item');
    const $textWhatToDo = $taskElement.find('.todo-item__description');

    if ($target.is(':checkbox')) {
        const isChecked = $target.prop('checked');
        $textWhatToDo.toggleClass('todo-item--checked', isChecked);
    } else if ($target.is('#deleteTask_button')) {
        $taskElement.remove();
    } else if ($target.is('#viewTask_button')) {
        const taskText = $textWhatToDo.text();
        const isTaskCompleted = $textWhatToDo.hasClass('todo-item--checked');
        if (isTaskCompleted) {
            $taskText.text(`${taskText} зроблено. Вітаю!`);
        } else {
            $('#task_text').text(taskText);
        }
        $('#exampleModal').modal('show');
    }
});
