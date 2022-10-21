// import my elements
import {button, input, ul} from './elements.js';
import { addItemsToLocalStore, getItemsFromLocalStore } from './storage-actions.js';

const items = getItemsFromLocalStore();


// add Item function to dynamically add items to the list
export function addItem(item, index){
    console.log(item);
    // create elements
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');



// check if an item is passed in
    if (item) {
        li.innerHTML = item;
    } else {
        //  get the value of the input
        li.innerHTML = input.value;
        index = items.length;
        items.push(input.value);
    }

    // save the items to local storage
    addItemsToLocalStore(items);

   
// creates a delete button
    deleteButton.innerHTML = 'X';

    // append elements to the DOM (nest elements)
    li.prepend(deleteButton);
    ul.append(li);

    // add event listener to interact with the delete button
    deleteButton.addEventListener('click', function(){

        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        li.prepend(cancelButton);

        deleteButton.style.display = 'none';
        let time = 5;
        const intervalId = setInterval(function(){
            time--;
            cancelButton.innerHTML = `Cancel ${time}`;
            console.log(time);
        }, 1000);



        const timeoutId = setTimeout(
            function(){
                deleteItem.call(deleteButton, index);
                clearInterval(intervalId);
            }, 5000
        );


        cancelButton.addEventListener('click', function(){
            deleteButton.style.display = 'inline';
            cancelButton.remove();
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        })

        // delete the parent element of the delete button
        // deleteItem.call(this, index);// call is a way to bind the this keyword to the deleteItem function
    });

}

function deleteItem(index){
    // delete the parent element of the delete button
    console.log(index);
    this.parentElement.remove();
    items.splice(index, 1);
    addItemsToLocalStore(items);
}















// const person = {
//     name: 'John',
//     age: 30,
//     greet: function(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// person.greet();

// const globalObject = {
//     name: 'this',
//     sayHi: sayHi,
//     person:{
//         name: 'this',
//         sayHi: sayHi,
//         friend: {
//             name: 'this',
//             sayHi: sayHi

//         }
//     }
// }

// function sayHi(){
//     console.log(this);
// }
// sayHi();
// globalObject.sayHi();
// globalObject.person.sayHi();
// globalObject.person.friend.sayHi();