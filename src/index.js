import './styles.css'

import { initialize } from './initialize.js'
import { populateForm, createAddTask } from './domBuilds'

import prioflagWhite from './icons/prioflag.svg'
import addTaskRed from './icons/addTaskRed.svg'
import addTaskWhite from './icons/addTaskWhite.svg'

initialize();

function newTaskOrder() {
    //console.log('test');
    let newTaskDiv = document.getElementById('newTaskDiv');

    while (newTaskDiv.firstChild) {
        newTaskDiv.removeChild(newTaskDiv.firstChild);
    }

    let newTaskForm = document.createElement('div');
    newTaskForm.id = 'newTaskForm'; newTaskForm.classList.add('newTaskForm');

    newTaskDiv.append(newTaskForm);
    populateForm();
}

function cancelNewTask() {
    let oldNewTaskDiv = document.getElementById('newTaskDiv');
    oldNewTaskDiv.remove();

    let newTaskDiv = createAddTask();
    let workspace = document.getElementById('workspace');
    workspace.append(newTaskDiv);
}



export { newTaskOrder, cancelNewTask }