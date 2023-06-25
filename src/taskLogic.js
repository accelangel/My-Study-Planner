function createTask() {
    console.log('task create');

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

    console.log(newTask);




};



let getElements = function () {
    let nameInput = document.getElementById('taskNameInput').value;
    let descriptionInput = document.getElementById('taskDescriptionInput').value;
    let dateInput = document.getElementById('dateInput').value;
    let priorityInput = document.getElementById('prioritySelect').value;
    let projectInput = document.getElementById('projectList').value;
    return { name: nameInput, description: descriptionInput, date: dateInput, priority: priorityInput, project: projectInput };
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