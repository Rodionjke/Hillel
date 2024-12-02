"use strict";

var $form = $('form');
var $userInput = $('.js--form__input');
var $toDoList = $('.js--todos-wrapper');
var $taskText = $('#task_text');
function addNewTask(task) {
  var isChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var $newTask = $('<li></li>').addClass('todo-item');
  addElementsToTask($newTask, task, isChecked);
  $toDoList.append($newTask);
}
function addElementsToTask($taskElement, task, isChecked) {
  var $checkbox = $('<input>', {
    type: 'checkbox',
    checked: isChecked
  });
  var $textWhatToDo = $('<span>', {
    text: task,
    "class": 'todo-item__description'
  });
  if (isChecked) {
    $textWhatToDo.addClass('todo-item--checked');
  }
  var $deleteButton = $('<button></button>').text('Видалити').addClass('btn btn-primary ms-2').attr('type', 'button').attr('id', 'deleteTask_button');
  var $viewTextButton = $('<button></button>').text('Подивитися задачу').addClass('btn btn-primary').attr('type', 'button').attr('id', 'viewTask_button');
  $taskElement.append($checkbox, $textWhatToDo, $viewTextButton, $deleteButton);
}
$form.on('submit', function (event) {
  event.preventDefault();
  var task = $userInput.val().trim();
  if (task) {
    addNewTask(task);
    $form[0].reset();
  }
});
$toDoList.on('click', function (event) {
  var $target = $(event.target);
  var $taskElement = $target.closest('.todo-item');
  var $textWhatToDo = $taskElement.find('.todo-item__description');
  if ($target.is(':checkbox')) {
    var isChecked = $target.prop('checked');
    $textWhatToDo.toggleClass('todo-item--checked', isChecked);
  } else if ($target.is('#deleteTask_button')) {
    $taskElement.remove();
  } else if ($target.is('#viewTask_button')) {
    var taskText = $textWhatToDo.text();
    var isTaskCompleted = $textWhatToDo.hasClass('todo-item--checked');
    if (isTaskCompleted) {
      $taskText.text("".concat(taskText, " \u0437\u0440\u043E\u0431\u043B\u0435\u043D\u043E. \u0412\u0456\u0442\u0430\u044E!"));
    } else {
      $('#task_text').text(taskText);
    }
    $('#exampleModal').modal('show');
  }
});