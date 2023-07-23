import './styles.css'

import { initialize } from './initialize.js'
import { populateForm, createAddTask, populateProjectDOM } from './domBuilds'
import {
    taskArray,
    setTaskArray,
    updateTaskArray,
    updateTaskElementID,
    storeOldTaskID,
    workspaceProjectRemove,
    emptyDiv,
    projectArray
} from './taskLogic';

initialize();
populateProjectDOM(projectArray);

function newTaskOrder() {
    let newTaskDiv = document.getElementById('newTaskDiv');

    //emptyDiv(newTaskDiv);

    while(newTaskDiv.firstChild) {
        newTaskDiv.removeChild(newTaskDiv.firstChild);
    };

    let newTaskForm = document.createElement('div');
    newTaskForm.id = 'newTaskForm'; newTaskForm.classList.add('newTaskForm');

    newTaskDiv.append(newTaskForm);
    populateForm();
};

function cancelNewTask() {
    let oldNewTaskDiv = document.getElementById('newTaskDiv');
    oldNewTaskDiv.remove();

    let newTaskDiv = createAddTask();
    //had a bug that broke the position of the add task button
    //had to change workspace append to this new position with a prepend to fix it
    //unsure as to what caused the issue in the first place, possibly the addition
    //of the projectWrapper, but not sure
    let position = document.querySelector('.projectWrapper');
    position.prepend(newTaskDiv); 
};

function taskCompleted(task) {
    setTimeout(() => document.getElementById(task.taskID).remove(), 200);
    setTaskArray(taskArray.filter((index) => index.name !== task.name));
    storeOldTaskID();
    updateTaskArray();
    updateTaskElementID();

    workspaceProjectRemove(task);
};

export { newTaskOrder, cancelNewTask, taskCompleted }

console.clear();