//import { newTaskOrder } from './index.js';
import {
    createAddTask,
    populateSidebarProjects,
    projectForm
} from './domBuilds.js';
import { projectArray, homeView } from './taskLogic.js';
import dot2 from './icons/dot2.svg'
import addProject from './icons/addProjectSVG.svg'

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

    //sidebar section
    let sidebarProjectsWrapper = document.createElement('div');
    sidebarProjectsWrapper.classList.add('sidebarProjectsWrapper');

    let sidebarProjectHeader = document.createElement('div');
    sidebarProjectHeader.classList.add('sidebarProjectHeader');
    let addProjectSVG = document.createElement('img');
    addProjectSVG.src = addProject; addProjectSVG.id = 'addProjectSVG';
    addProjectSVG.classList.add('addProjectSVG');

    let sidebarProjectName = document.createElement('p');
    sidebarProjectName.textContent = 'Projects';
    sidebarProjectName.classList.add('sidebarProjectName');

    let sidebarProjectsBar = document.createElement('div');
    sidebarProjectsBar.id = 'sidebarProjectsBar';
    sidebarProjectsBar.classList.add('sidebarProjectsBar');

    sidebarProjectHeader.append(sidebarProjectName, addProjectSVG);
    sidebarProjectsWrapper.append(sidebarProjectHeader, sidebarProjectsBar);
    sidebar.append(sidebarProjectsWrapper);

    let homeDiv = document.createElement('div');
    homeDiv.classList.add('projectDiv');
    let projectDot = document.createElement('img');
    projectDot.src = dot2;
    let homeName = document.createElement('p');
    homeName.textContent = 'Home';

    homeDiv.append(projectDot, homeName);
    sidebarProjectsBar.append(homeDiv);

    populateSidebarProjects(projectArray);


    //event listeners
    sidebar.addEventListener('mouseenter', () => {
        addProjectSVG.classList.remove('addProjectSVG');
        addProjectSVG.classList.add('addProjectSVG_Hover');
        sidebar.addEventListener('mouseleave', () => {
            addProjectSVG.classList.add('addProjectSVG');
            addProjectSVG.classList.remove('addProjectSVG_Hover');
        });
    });

    homeDiv.addEventListener('click', () => homeView());

    addProjectSVG.addEventListener('click', () => projectForm());
};

export { initialize };