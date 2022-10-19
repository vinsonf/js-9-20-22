
import { dataTypes } from "./data-types.js";


// const form = document.querySelector('form');
// console.log(form);

// console.log(document.forms)

// const form2 = document.forms[0];
// form2[0].value = 'Hello World';

// console.log(form2[0].value);

// form2[2].min = '10';
// form2[2].max = '20';

// const h1 = document.createElement('h1');
// document.body.append(h1);


// form2[3].addEventListener('input', function() {
//     console.log(this.value);
//     document.body.style.backgroundColor = this.value;
// })

// const forms = document.forms

// forms.user.username.value = 'Kite Man';

// console.log(forms.user.submit);
// forms.user.submit.style.backgroundColor = 'red';

// prevent default behavior

const form = document.forms.element;

let selectedElement = null;


const elements = ['h1', 'h2', 'h3', 'p', 'div', 'span', 'a', 'li'];




document.forms.element.submit.addEventListener('click', function(event) {
    event.preventDefault();
    if (selectedElement) {
        selectedElement.remove();
        selectedElement = null;
    }
    let newELement = false;
    let element;
    if (form.createNew.checked) {
        newELement = true;
        element = document.createElement(elements[Math.floor(Math.random() * elements.length)]);
    } else {
        element = selectedElement;
        if (!element) {
            element = document.createElement('h1');
            newELement = true;
        }
    }

    


    element.style.backgroundColor = form.bg.value;
    element.style.color = form.color.value;
    element.style.fontSize = form.fontSize.value + 'px';
    element.innerHTML = form.text.value;
    element.style.borderColor = form.borderColor.value;
    element.style.borderWidth = form.border.value + 'px';
    element.style.borderStyle = 'solid';
    element.style.padding = form.padding.value + 'px';

    element.style.textAlign = form.textAlign.value;

    if (newELement){
        document.body.append(element);
    }
 
    console.log('submit prevented');

    element.addEventListener('click', function() {
        selectedElement = element;
    });

    selectedElement = element;

    form.remove();


});