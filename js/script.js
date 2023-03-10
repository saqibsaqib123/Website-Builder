let buttoncreated = 0;
let textcreated = 0;
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

//Set an text to the created element
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
    active.style.position = 'absolute';

    active.style.top = ((yPos - ((parseFloat(active.offsetHeight)) / 2)) + window.scrollY) + 'px';
    active.style.left = (xPos - ((parseFloat(active.offsetWidth)) / 2)) + 'px';
    //Top Contraint
    if (parseFloat(active.style.top.replace('px', "")) <= (0.43 * (innerHeight / 2.3))) {
        active.style.top = (0.4 * (innerHeight / 2.3)) + 'px';
    }
    //Bottom Contraint
    if (parseFloat(active.style.top.replace('px', "")) >= (2.57 * (innerHeight / 2.3))) {
        active.style.top = (2.59 * (innerHeight / 2.3)) + 'px';
    }
    //left Contraint
    if (parseFloat(active.style.left.replace('px', "")) <= 168) {
        active.style.left = 163 + 'px';
    }
    //Right Contraint
    if (parseFloat(active.style.left.replace('px', "")) >= (1095 - (parseFloat(active.offsetWidth)))) {
        active.style.left = 1100 - ((parseFloat(active.offsetWidth))) + 'px';
    }

    document.getElementById('x').value = active.style.left.replace('px', "");
    document.getElementById('y').value = active.style.top.replace('px', "");

    // console.log("Coordinate (X) : " + xPos + " " + "px Coordinate (Y) : " + yPos + " " + "px");

}

//When an element is created or clicked it is run
function showproperties(id) {
    active = document.getElementById(id);
    console.log(active);
    let x_container = document.getElementById('x');
    let y_container = document.getElementById('y');
    let width_container = document.getElementById('width');
    let height_container = document.getElementById('height');
    let color_container = document.getElementById('color');
    let bord_container = document.getElementById('bord');
    let bord_thick_container = document.getElementById('bord-thick');
    let bord_color_container = document.getElementById('bord-color');
    x_container.value = active.offsetLeft;
    y_container.value = active.offsetTop;
    width_container.value = active.offsetWidth;
    height_container.value = active.offsetHeight;
    color_container.value = "#EFEFEF";
    bord_thick_container.value = (active.style.borderWidth.replace('px', ''));
    color_container.value = "#000000";

}

function createtextbox() {
    let text = createElement('input', 'main-content');
    // textnode('Button', button);
    textcreated += 1;
    let id = 'text-' + textcreated;
    text.setAttribute('class', 'default');
    text.setAttribute('id', id);
    text.setAttribute('onclick', 'showproperties(id)');
    showproperties(id);
}

function createbutton() {
    let button = createElement('button', 'main-content');
    textnode('Button', button);
    buttoncreated += 1;
    let id = 'btn-' + buttoncreated;
    button.setAttribute('class', 'default');
    button.setAttribute('id', id);
    button.setAttribute('onclick', 'showproperties(id)');
    showproperties(id);
}

function valueChanged(id, property) {
    let value = document.getElementById(id).value;
    switch (id) {
        case 'x':
            active.style.left = value + 'px';
            break;

        case 'y':
            active.style.top = value + 'px';
            break;

        case 'width':
            active.style.width = value + 'px';
            break;

        case 'height':
            active.style.height = value + 'px';
            break;

        case 'color':
            active.style.backgroundColor = value;
            break;

        case 'bord':
            if (document.getElementById(id).checked) {
                active.style.border = '2px solid black'
                document.getElementById('bord-thick').parentElement.style.display = 'block';
                document.getElementById('bord-color').parentElement.style.display = 'block';
                document.getElementById('bord-thick').value = 2;
                document.getElementById('bord-color').value = "#000000";
            } else {
                active.style.border = 'none'
                document.getElementById('bord-thick').parentElement.style.display = 'none';
                document.getElementById('bord-color').parentElement.style.display = 'none';
            }
            break;

        case 'bord-thick':
            active.style.borderWidth = value + 'px';
            break;

        case 'bord-color':
            active.style.borderColor = value;
            break;
    }
}


//Responsiveness
if (innerWidth <= 660) {
    console.log('hellow')
    let nav = document.getElementById('top-nav');
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('Show More'));
    nav.prepend(button);
    button.setAttribute('id', 'showitemsbar');
    button.setAttribute('onclick', 'showitemsbar()');
}
//  else {
//     document.getElementById('showitemsbar').remove();
// }

let show = true;
function showitemsbar() {
    if (show) {
        document.getElementsByClassName('buttons-container')[0].style.width = 37 + '%';
        show = false
    } else {
        document.getElementsByClassName('buttons-container')[0].style.width = 0 + '%';
        show = true
    }
}