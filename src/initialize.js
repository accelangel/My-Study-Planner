import { newTaskOrder } from './index.js';
import addTaskRed from './icons/addTaskRed.svg'
import addTaskWhite from './icons/addTaskWhite.svg'

const initialize = function () {
    let container = document.createElement('div');
    container.id = 'container'; container.classList.add('container');

    let header = document.createElement('div');
    header.id = 'header'; header.classList.add('header');

    let main = document.createElement('div');
    main.id = 'main'; main.classList.add('main');

    let sidebar = document.createElement('div');
    sidebar.id = 'sidebar'; sidebar.classList.add('sidebar');

    let workspace = document.createElement('div');
    workspace.id = 'workspace'; workspace.classList.add('workspace');

    let workspaceHeader = document.createElement('div');
    workspaceHeader.id = 'workspaceHeader'; workspaceHeader.classList.add('workspaceHeader');

    let today = document.createElement('p');
    today.classList.add('today'); today.textContent = 'Today';

    let date = document.createElement('p');
    date.id = 'date'; date.classList.add('date');
    date.textContent = new Date().toString().split(' ').slice(0, 3).join(' ');

    let newTaskDiv = document.createElement('div');
    newTaskDiv.id = 'newTaskDiv'; newTaskDiv.classList.add('newTaskDiv');

    let newTaskIconDiv = document.createElement('div');
    newTaskIconDiv.id = 'newTaskIconDiv'; newTaskIconDiv.classList.add('newTaskIconDiv');

    let newTaskIcon = document.createElement('img');
    newTaskIcon.classList.add('newTaskIcon');
    newTaskIcon.src = addTaskRed;

    newTaskDiv.addEventListener('mouseenter', function () {
        newTaskIcon.src = addTaskWhite;
        newTaskDiv.addEventListener('mouseleave', function () {
            newTaskIcon.src = addTaskRed;
        })
    });

    newTaskDiv.addEventListener('click', function () {
        newTaskOrder();
    });

    let addTask = document.createElement('div');
    addTask.id = 'addTask'; addTask.classList.add('addTask');
    addTask.textContent = 'Add task'

    workspaceHeader.append(today, date);
    newTaskIconDiv.append(newTaskIcon);
    newTaskDiv.append(newTaskIconDiv, addTask);
    workspace.append(workspaceHeader, newTaskDiv);
    main.append(sidebar, workspace);
    container.append(header, main);
    document.body.append(container);
};

export { initialize };