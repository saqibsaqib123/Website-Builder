let buttoncreated = 0;
let active;
let ismoving = false;
let xPos;
let yPos;

//Make an Element with
function createElement(tag, parent) {
    let element = document.createElement(tag);
    let element_container = document.getElementsByClassName(parent)[0];
    element_container.appendChild(element);
    return element;
}

//Set an text to the element
function textnode(text_value, parent) {
    let text = document.createTextNode(text_value);
    parent.appendChild(text);
}

//TO move the Element Around
document.addEventListener('mousedown', () => {
    document.onmousemove = (event) => {
        xPos = event.clientX;
        yPos = event.clientY;
        move();
    }
});
document.addEventListener('mouseup', () => {
    document.onmousemove = null;
});
function move() {
    active.style.position = 'absolute'
    active.style.top = yPos + 'px';
    active.style.left = xPos + 'px';

    console.log("Coordinate (X) : " + xPos + " " + "px Coordinate (Y) : " + yPos + " " + "px");

}

//When an element is created or clicked it is run
function showproperties(id) {
    let width_container = document.getElementById('width');
    let height_container = document.getElementById('height');
    width_container.value = document.getElementById(id).offsetWidth;
    height_container.value = document.getElementById(id).offsetHeight;
    active = document.getElementById(id);
    console.log(active);
}

// function createtextbox() {
//     createElement('input', 'main-content');
// }

function createbutton() {
    let button = createElement('button', 'main-content');
    textnode('Button', button);
    buttoncreated += 1;
    let id = 'btn-' + buttoncreated;
    button.setAttribute('id', id);
    button.setAttribute('onclick', 'showproperties(id)');
    showproperties(id);
}

function valueChanged(id, property) {
    let value = document.getElementById(id).value;
    switch (id) {
        case 'width':
            active.style.width = value + 'px';
            break;
        case 'height':
            active.style.height = value + 'px';
            break;
        case 'color':
            active.style.backgroundColor = value;
            break;
    }
}




    //Responsiveness
    // if (innerWidth <= 650) {
    //     let nav = document.getElementById('top-nav');
    //     let button = document.createElement('button');
    //     button.appendChild(document.createTextNode('Show More'));
    //     nav.appendChild(button);
    //     button.setAttribute('class', 'showitemsbar');
    // } else {
    //     button.setAttribute('class', 'hideitemsbar');
    // }