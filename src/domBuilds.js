import { newTaskOrder, cancelNewTask, taskCompleted } from './index.js';
import { createTask, getElements } from './taskLogic.js';

import addTaskRed from './icons/addTaskRed.svg'
import addTaskWhite from './icons/addTaskWhite.svg'

function populateForm() {
    let form = document.getElementById('newTaskForm');



    let taskNameInput = document.createElement('input');
    taskNameInput.id = 'taskNameInput'; taskNameInput.classList.add('takeNameInput');
    taskNameInput.type = 'text'; taskNameInput.placeholder = 'Task name';


    let taskDescriptionInput = document.createElement('input');
    taskDescriptionInput.id = 'taskDescriptionInput'; taskDescriptionInput.classList.add('taskDescriptionInput');
    taskDescriptionInput.type = 'text'; taskDescriptionInput.placeholder = 'Description';


    let taskOptionDiv = document.createElement('div');
    taskOptionDiv.classList.add('taskOptionDiv');


    let prioritySelect = document.createElement('select');
    prioritySelect.id = 'prioritySelect'; prioritySelect.classList.add('prioritySelect');

    let placeholderOption = document.createElement('option'); placeholderOption.value = 4;
    placeholderOption.classList.add('priorityOption'); placeholderOption.disabled = true;
    placeholderOption.selected = true; placeholderOption.hidden = true; placeholderOption.textContent = '🏳️ Priority';

    let option1 = document.createElement('option'); option1.value = 1;
    option1.classList.add('priorityOption'); option1.textContent = 'Priority 1';
    let option2 = document.createElement('option'); option2.value = 2;
    option2.classList.add('priorityOption'); option2.textContent = 'Priority 2';
    let option3 = document.createElement('option'); option3.value = 3;
    option3.classList.add('priorityOption'); option3.textContent = 'Priority 3';
    let option4 = document.createElement('option'); option4.value = 4;
    option4.classList.add('priorityOption'); option4.textContent = 'Priority 4';


    let dateInput = document.createElement('input');
    dateInput.id = 'dateInput'; dateInput.classList.add('dateInput');
    dateInput.type = 'date'; dateInput.placeholder = 'Today';


    let projectList = document.createElement('select');
    projectList.id = 'projectList'; projectList.classList.add('projectList');
    let toDoList = document.createElement('option'); toDoList.selected = true; toDoList.textContent = 'Daily To Do';
    //temp for testing
    let homework = document.createElement('option'); homework.textContent = 'Homework';
    let chores = document.createElement('option'); chores.textContent = 'Chores';
    let health = document.createElement('option'); health.textContent = 'Exercise';
    let fish = document.createElement('option'); fish.textContent = 'Feed fish';


    let taskSubmitDiv = document.createElement('div');
    taskSubmitDiv.classList.add('taskSubmitDiv');

    let submitTask = document.createElement('button');
    submitTask.id = 'submitTask'; submitTask.classList.add('submitTask'); submitTask.textContent = 'Add task';

    submitTask.addEventListener('click', createTask);

    let cancel = document.createElement('button');
    cancel.id = 'cancel'; cancel.classList.add('cancel'); cancel.textContent = 'cancel';

    cancel.addEventListener('click', cancelNewTask);

    taskSubmitDiv.append(cancel, submitTask);
    projectList.append(toDoList, homework, chores, health, fish);
    prioritySelect.append(placeholderOption, option1, option2, option3, option4);
    taskOptionDiv.append(dateInput, prioritySelect, projectList);
    form.append(taskNameInput, taskDescriptionInput, taskOptionDiv, taskSubmitDiv);

    taskNameInput.focus();
};

function createAddTask() {
    let newTaskDiv = document.createElement('div');
    newTaskDiv.id = 'newTaskDiv'; newTaskDiv.classList.add('newTaskDiv');

    let newTaskIconDiv = document.createElement('div');
    newTaskIconDiv.id = 'newTaskIconDiv'; newTaskIconDiv.classList.add('newTaskIconDiv');

    let newTaskIcon = document.createElement('img');
    newTaskIcon.classList.add('newTaskIcon');
    newTaskIcon.src = addTaskRed;

    function mouseenter() {
        newTaskIcon.src = addTaskWhite;
    };

    function mouseleave() {
        newTaskIcon.src = addTaskRed;
    };

    newTaskDiv.addEventListener('mouseenter', mouseenter);
    newTaskDiv.addEventListener('mouseleave', mouseleave);

    function newTask() {
        newTaskOrder();
        newTaskDiv.removeEventListener('mouseenter', mouseenter);
        newTaskDiv.removeEventListener('mouseleave', mouseleave);
        newTaskDiv.removeEventListener('click', newTask);
    };

    newTaskDiv.addEventListener('click', newTask);

    let addTask = document.createElement('div');
    addTask.id = 'addTask'; addTask.classList.add('addTask');
    addTask.textContent = 'Add task';

    newTaskIconDiv.append(newTaskIcon);
    newTaskDiv.append(newTaskIconDiv, addTask);

    return newTaskDiv;
};

function taskItemDOM(task) {
    let workspace = document.getElementById('workspace');

    let taskItemDiv = document.createElement('div');
    taskItemDiv.id = task.taskID;
    workspace.append(taskItemDiv);

    taskItemDiv.classList.add('taskItemDiv');

    document.getElementById(taskItemDiv.id).addEventListener('click', function () {
        taskCompleted(task);
    });
    return taskItemDiv;
};

export { populateForm, createAddTask, taskItemDOM }