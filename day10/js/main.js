import {button, input, ul} from './elements.js';
import * as listeners from './listeners.js';
import {getItemsFromLocalStore} from './storage-actions.js';
import {addItem} from './list-actions.js';


document.body.append(input, button, ul);

const items = getItemsFromLocalStore();
if(items){
    items.forEach((item, index) => addItem(item, index));
}



const person = {
    name: 'John',
    greet: function(age, height){
        console.log(this.name, age, height);
    }
}

const user = {
    name: 'Jane',
    hello: function() {
        // console.log(this);
        sayHi.bind(this)();
    }

}


person.greet.call(user, 30, 6);
person.greet.apply(user, [30, 6]);



function sayHi() {
    console.log(this);
}

user.hello();



console.time('test');



console.timeEnd('test');