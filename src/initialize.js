//import { newTaskOrder } from './index.js';
import { createAddTask } from './domBuilds.js';

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

    let newTaskDiv = createAddTask();

    workspaceHeader.append(today, date);
    workspace.append(workspaceHeader, newTaskDiv);
    main.append(sidebar, workspace);
    container.append(header, main);
    document.body.append(container);
};

export { initialize };