import { newTaskOrder, cancelNewTask, taskCompleted } from './index.js';
import {
    createTask,
    getElements,
    priority,
    taskNameValidation,
    projectArray,
    switchProjectView,
} from './taskLogic.js';

import addTaskRed from './icons/addTaskRed.svg'
import addTaskWhite from './icons/addTaskWhite.svg'
import dot2 from './icons/dot2.svg'

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
    placeholderOption.selected = true; placeholderOption.hidden = true;
    placeholderOption.textContent = 'Priority'; placeholderOption.classList.add('greyFlag');

    // priority options
    let option1 = document.createElement('option');
    option1.classList.add('priorityOption'); option1.value = 1;
    option1.textContent = 'Priority 1'; option1.classList.add('redFlag');

    let option2 = document.createElement('option');
    option2.classList.add('priorityOption'); option2.value = 2;
    option2.textContent = 'Priority 2'; option2.classList.add('orangeFlag');

    let option3 = document.createElement('option');
    option3.classList.add('priorityOption'); option3.value = 3;
    option3.textContent = 'Priority 3'; option3.classList.add('blueFlag');

    let option4 = document.createElement('option');
    option4.classList.add('priorityOption'); option4.value = 4;
    option4.textContent = 'Priority 4'; option4.classList.add('greyFlag');


    let dateInput = document.createElement('input');
    dateInput.id = 'dateInput'; dateInput.classList.add('dateInput');
    dateInput.type = 'date'; dateInput.placeholder = 'Today';


    let projectList = document.createElement('select');
    projectList.id = 'projectList'; projectList.classList.add('projectList');
    let daily = document.createElement('option');
    daily.selected = true; daily.textContent = 'Daily';

    let homework = document.createElement('option'); homework.textContent = 'Homework';
    let exercise = document.createElement('option'); exercise.textContent = 'Exercise';

    daily.value = 'daily'; homework.value = 'homework'; exercise.value = 'exercise';


    let taskSubmitDiv = document.createElement('div');
    taskSubmitDiv.classList.add('taskSubmitDiv');

    let submitTask = document.createElement('button');
    submitTask.id = 'submitTask'; submitTask.classList.add('submitTask');
    submitTask.classList.add('unClickable'); submitTask.textContent = 'Add task';

    submitTask.addEventListener('click', createTask);
    taskNameInput.addEventListener('input', (event) => {
        taskNameValidation(event.target.value);
    });

    let cancel = document.createElement('button');
    cancel.id = 'cancel'; cancel.classList.add('cancel'); cancel.textContent = 'cancel';

    cancel.addEventListener('click', cancelNewTask);

    taskSubmitDiv.append(cancel, submitTask);
    projectList.append(daily, homework, exercise);
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

    return taskItemDiv;
};

function taskContent(task) {
    let checkBoxWrapper = document.createElement('div');
    checkBoxWrapper.classList.add('checkBoxWrapper');
    checkBoxWrapper.classList.add(priority(task)());

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox'; checkBox.id = 'checkbox';
    checkBox.classList.add('checkBox'); checkBox.classList.add(task.taskID);
    checkBox.classList.add(priority(task)());

    let paraBox = document.createElement('div');
    paraBox.classList.add('paraBox');

    let paraName = document.createElement('p'); paraName.classList.add('paraName');
    paraName.textContent = task.name;

    paraBox.append(paraName);

    if (task.description) {
        let paraDescription = document.createElement('p');
        paraDescription.classList.add('paraDescription');
        paraDescription.textContent = task.description;
        paraBox.append(paraDescription);
    };

    if (task.date) {
        let paraDate = document.createElement('p');
        paraDate.classList.add('paraDate');
        paraDate.textContent = task.date;
        paraBox.append(paraDate);
    };

    checkBoxWrapper.append(checkBox);
    let taskDiv = taskItemDOM(task);
    taskDiv.append(checkBoxWrapper, paraBox);

    document.querySelector(`.${task.taskID}`).addEventListener('click', function () {
        taskCompleted(task);
    });

    return taskDiv
};

function populateProjectDOM(projectArray) {
    let projectElements = [];
    for (let project of projectArray) {
        let projectWrapper = document.createElement('div');
        projectWrapper.classList.add('projectWrapper');
        projectWrapper.id = `${project.toLowerCase()}`;

        let projectHeading = document.createElement('p');
        projectHeading.classList.add('projectHeading');
        projectHeading.textContent = project;

        projectWrapper.append(projectHeading);
        projectElements.push(projectWrapper);
    };

    let workspace = document.getElementById('workspace');
    
    let projectsWrapper = document.createElement('div');
    projectsWrapper.classList.add('projectsWrapper');

    for (let element of projectElements) {
        projectsWrapper.append(element);
    };

    workspace.append(projectsWrapper);
};

function pinToProject(task, taskDiv) {
    let targetProject = document.getElementById(task.project);
    targetProject.append(taskDiv);
};

function populateSidebarProjects(projectsArray) {
    let projectBar = document.getElementById('sidebarProjectsBar');
    let array = [];
    for (let proj of projectsArray) {
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('projectDiv');
        let projectDot = document.createElement('img');
        projectDot.src = dot2;
        let projectName = document.createElement('p');
        projectName.classList.add('sidebarProjectTitle');
        projectName.textContent = proj;
        projectDiv.append(projectDot, projectName);
        array.push(projectDiv);

        //eventListener for each projectDiv
        projectDiv.addEventListener('click', () => {
            switchProjectView(proj)
        });

        for (let elements of array) {
            projectBar.append(elements);
        };
    };
};

function projectForm() {
    console.log('test');
    let projectFormWrapper = document.createElement('div');
    let projectNameInput = document.createElement('input');
    projectNameInput.type = 'text'; projectNameInput.id = 'projectNameInput';
    projectNameInput.classList.add('projectNameInput'); 


    let targetElement = document.querySelector('sidebarProjectHeader');
    projectFormWrapper.append(projectNameInput);
};

export {
    populateForm,
    createAddTask,
    taskItemDOM,
    taskContent,
    pinToProject,
    populateProjectDOM,
    populateSidebarProjects,
    projectForm
}
