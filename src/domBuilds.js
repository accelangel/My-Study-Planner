import { cancelNewTask } from './index.js';

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

    let placeholderOption = document.createElement('option');
    placeholderOption.classList.add('priorityOption'); placeholderOption.disabled = true;
    placeholderOption.selected = true; placeholderOption.hidden = true; placeholderOption.textContent = '🏳️ Priority';

    let option1 = document.createElement('option');
    option1.classList.add('priorityOption'); option1.textContent = 'Priority 1';
    let option2 = document.createElement('option');
    option2.classList.add('priorityOption'); option2.textContent = 'Priority 2';
    let option3 = document.createElement('option');
    option3.classList.add('priorityOption'); option3.textContent = 'Priority 3';
    let option4 = document.createElement('option');
    option4.classList.add('priorityOption'); option4.textContent = 'Priority 4';


    let dateInput = document.createElement('input');
    dateInput.classList.add('dateInput'); dateInput.type = 'date';
    dateInput.placeholder = 'Today';


    let projectList = document.createElement('select');
    projectList.id = 'projectList'; projectList.classList.add('projectList');
    let toDoList = document.createElement('option'); toDoList.selected = true; toDoList.textContent = 'Daily To Do';


    let taskSubmitDiv = document.createElement('div');
    taskSubmitDiv.classList.add('taskSubmitDiv');

    let submitTask = document.createElement('button');
    submitTask.id = 'submitTask'; submitTask.classList.add('submitTask'); submitTask.textContent = 'Add task';


    let cancel = document.createElement('button');
    cancel.id = 'cancel'; cancel.classList.add('cancel'); cancel.textContent = 'cancel';

    cancel.addEventListener('click', cancelNewTask);

    taskSubmitDiv.append(cancel, submitTask);
    projectList.append(toDoList);
    prioritySelect.append(placeholderOption, option1, option2, option3, option4)
    taskOptionDiv.append(dateInput, prioritySelect, projectList);
    form.append(taskNameInput, taskDescriptionInput, taskOptionDiv, taskSubmitDiv);

    taskNameInput.focus();
}

export { populateForm }