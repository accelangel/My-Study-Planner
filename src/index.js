import './styles.css'

const initialize = function () {
    let container = document.createElement('div');
    container.id = 'container'; container.classList.add('container');

    let header = document.createElement('div');
    header.id = 'header'; header.classList.add('header');

    let main = document.createElement('div');
    main.id = 'main'; main.classList.add('main');




    container.append(header, main);
    document.body.append(container);
};

initialize();