import {
    createAddTask,
    taskItemDOM,
    taskContent,
    pinToProject,
    populateSidebarProjects,
    populateProjectDOM
} from './domBuilds'

const getElements = function () {
    let name = document.getElementById('taskNameInput').value;
    let description = document.getElementById('taskDescriptionInput').value;
    let date = document.getElementById('dateInput').value;
    let priority = document.getElementById('prioritySelect').value;
    let project = document.getElementById('projectList').value;
    let workspace = document.getElementById('workspace');
    let newTaskDiv = document.getElementById('newTaskDiv');
    return { name, description, date, priority, project, newTaskDiv, workspace };
};

function createTask() {
    let elements = getElements();

    class Task {
        constructor(name, description, date, priority, project) {
            this.name = name;
            this.description = description;
            this.date = date;
            this.priority = priority;
            this.project = project;
        };
    };

    let newTask = new Task(
        elements.name,
        elements.description,
        elements.date,
        elements.priority,
        elements.project
    );

    trackTask(newTask);

    pinTask(newTask);

    workspaceProjectsUpdate(newTask);
};

function taskNameValidation(name) {
    let submitButton = document.getElementById('submitTask');
    if (name.length < 1) {
        submitButton.classList.add('unClickable');
    }
    else {
        submitButton.classList.remove('unClickable');
    };
};

let taskArray = [];
let oldTaskIDs = [];
//stores tasks within the projects
let workspaceProjects = {
    'daily': [],
    'homework': [],
    'exercise': []
};
//stores the order of the projects
let projectArray = ['Daily', 'Homework', 'Exercise'];

function setTaskArray(array) {
    taskArray = array;
};

function trackTask(task) {
    taskArray.push(task);
    updateTaskArray();
};

function updateTaskArray() {
    for (let task of taskArray) {
        task.taskID = `task_${taskArray.indexOf(task)}`;
    };
};

function storeOldTaskID() {
    for (let task of taskArray) {
        class OldIDs {
            constructor(taskID) {
                this.oldID = taskID;
            };
        };
        let storageID = new OldIDs(task.taskID);
        oldTaskIDs.push(storageID);
    };
};

function updateTaskElementID() {
    let counter = 0;
    for (let task of taskArray) {
        let target = oldTaskIDs[counter].oldID;
        document.getElementById(target).id = task.taskID;
        counter++;
    };
    oldTaskIDs = [];
};

function priority(task) {
    return () => {
        let priorityObject = {
            4: 'priorityFour',
            3: 'priorityThree',
            2: 'priorityTwo',
            1: 'priorityOne'
        };
        return priorityObject[task.priority]
    };
};

function pinTask(task) {
    let elements = getElements();
    elements.newTaskDiv.remove();

    pinToProject(task, taskContent(task));

    newTaskButton(elements.workspace);
};

function newTaskButton(workspace) {
    workspace.insertBefore(createAddTask(), workspace.children[1]);
};

function workspaceProjectsUpdate(task) {
    for (let proj in workspaceProjects) {
        if (task.project === proj) {
            workspaceProjects[proj].push(task);
        };
    };
};

function workspaceProjectRemove(task) {
    workspaceProjects[task.project] =
        workspaceProjects[task.project].filter((index) => {
            return index.name !== task.name
        });
};

function emptyDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    };
};

function switchProjectView(projectTab) {
    document.querySelector('.projectsWrapper').remove();
    populateProjectDOM([projectTab]);
    let array = workspaceProjects[projectTab.toLowerCase()];
    for (let index of array) {
        pinToProject(index, taskContent(index));
    };
};

function homeView() {
    document.querySelector('.projectsWrapper').remove();
    populateProjectDOM(projectArray);
    for (let array in workspaceProjects) {
        for (let task of workspaceProjects[array]) {
            pinToProject(task, taskContent(task));
        };
    };
};

function addNewProject(projectName) {
    console.log(projectName);
    
};

export {
    createTask,
    getElements,
    setTaskArray,
    taskArray,
    updateTaskArray,
    updateTaskElementID,
    storeOldTaskID,
    priority,
    taskNameValidation,
    workspaceProjectRemove,
    projectArray,
    switchProjectView,
    emptyDiv,
    homeView,
    addNewProject
}