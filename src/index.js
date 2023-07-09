import './styles.css'

import { initialize } from './initialize.js'
import { populateForm, createAddTask } from './domBuilds'
import {
    taskArray,
    setTaskArray,
    updateTaskArray,
    updateTaskElementID,
    storeOldTaskID
} from './taskLogic';

initialize();

function newTaskOrder() {
    let newTaskDiv = document.getElementById('newTaskDiv');

    while (newTaskDiv.firstChild) {
        newTaskDiv.removeChild(newTaskDiv.firstChild);
    }

    let newTaskForm = document.createElement('div');
    newTaskForm.id = 'newTaskForm'; newTaskForm.classList.add('newTaskForm');

    newTaskDiv.append(newTaskForm);
    populateForm();
};

function cancelNewTask() {
    let oldNewTaskDiv = document.getElementById('newTaskDiv');
    oldNewTaskDiv.remove();

    let newTaskDiv = createAddTask();
    let workspace = document.getElementById('workspace');
    workspace.append(newTaskDiv);
};

function taskCompleted(task) {
    setTimeout(() => document.getElementById(task.taskID).remove(), 200);
    setTaskArray(taskArray.filter((index) => index.name !== task.name));
    storeOldTaskID();
    updateTaskArray();
    updateTaskElementID();
};

export { newTaskOrder, cancelNewTask, taskCompleted }

console.clear();

