import { createAddTask, taskItemDOM } from './domBuilds'

let getElements = function () {
    let name = document.getElementById('taskNameInput').value;
    let description = document.getElementById('taskDescriptionInput').value;
    let date = document.getElementById('dateInput').value;
    let priority = document.getElementById('prioritySelect').value;
    let project = document.getElementById('projectList').value;
    let workspace = document.getElementById('workspace');
    let newTaskDiv = document.getElementById('newTaskDiv');
    return { name, description, date, priority, project, newTaskDiv, workspace };
}

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

    let newTask = new Task(elements.name, elements.description, elements.date, elements.priority, elements.project);

    pinTask(newTask);
};

function pinTask(task) {
    let elements = getElements();
    elements.newTaskDiv.remove();

    let taskDiv = taskItemDOM();

    let checkBoxWrapper = document.createElement('div');
    checkBoxWrapper.classList.add('checkBoxWrapper');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox'; checkBox.id = 'checkBox'; checkBox.classList.add('checkBox');

    // you will have to add logic for the checkBox color based on priority
    // also logic for the date being tomorrow or today depending on the date
    let paraBox = document.createElement('div');
    paraBox.classList.add('paraBox');

    let paraName = document.createElement('p');
    paraName.textContent = task.name;
    let paraDescription = document.createElement('p');
    paraDescription.textContent = task.description;
    let paraDate = document.createElement('p');
    paraDate.textContent = task.date;




    let newTaskDiv = createAddTask();
    paraBox.append(paraName, paraDescription, paraDate);
    checkBoxWrapper.append(checkBox);
    taskDiv.append(checkBoxWrapper, paraBox);
    elements.workspace.append(taskDiv, newTaskDiv);
}










export { createTask }

/*
class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) { // invoked by the constructor
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}
let user = new User("John");
console.log(user.name); // John
user = new User("bob"); // Name is too short.

let user = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};
user.name = "Pete"; // activate setter to give _name value of pete so it can be gotten (get)
console.log(user.name); // Pete
user.name = "bob"; // Name is too short...

*/