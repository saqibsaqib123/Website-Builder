function createElement(tag, parent) {
    let element = document.createElement(tag);
    let element_container = document.getElementsByClassName(parent)[0];
    element_container.appendChild(element);
    return element;
}

function textnode(text_value, parent) {
    let text = document.createTextNode(text_value);
    parent.appendChild(text);
}

function createtextbox() {
    createElement('input', 'main-content');
}

function createbutton() {
    // let button = document.createElement('button');
    // let button_text = document.createTextNode('Button');
    // button.appendChild(button_text);
    // let button_container = document.getElementsByClassName('main-content')[0];
    // button_container.appendChild(button);
    let button = createElement('button', 'main-content');
    textnode('Button', button);
    button.setAttribute('id', 'btn-1');
    button.setAttribute('onclick', 'showproperties(id)');
}

function getproperties(id) {
    let width_container = document.getElementById('width');
    let height_container = document.getElementById('height');
    width_container.value = document.getElementById(id).offsetWidth;
    height_container.value = document.getElementById(id).offsetHeight;
}

function showproperties(id) {
    getproperties(id);
}

// if (innerWidth <= 650) {
//     let nav = document.getElementById('top-nav');
//     let button = document.createElement('button');
//     button.appendChild(document.createTextNode('Show More'));
//     nav.appendChild(button);
//     button.setAttribute('class', 'showitemsbar');
// } else {
//     button.setAttribute('class', 'hideitemsbar');
// }

function valueChanged(id){
    console.log(id)
}