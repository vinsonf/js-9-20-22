import{button, input} from './elements.js';
import {addItem} from './list-actions.js';

button.addEventListener('click', () => {
    addItem();
});
input.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        addItem();
    }
});
