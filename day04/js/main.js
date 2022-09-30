// primitive data types
const APP_NAME = "My App";
let score = 1;
let isPresent = true;

// complex data types
const users = ['John', 'Jane', 'Jack'];
const person = {
    name: "John",
    age: 30,
};

const personName = person.name;

console.log(APP_NAME, score, isPresent);


// what is truthy and falsy?
//  false, 0, "", // primitive data types
//  null, undefined, NaN,

// truthy
// all other values


// OPERATORS

// arithmetic (numbers only)
// +, -, *, /, %
// assignment
//  -=, *=, /=, %=

// string operators (string only)
// ${} - template literal

// comparison(both)
// >, <, >=, <=, ==, ===, !=, !==
// +, =, +=,

// logical (both)
// &&, ||, !
// and: &&, or: ||, not: !

const symbol1 = Symbol("symbol1");
const symbol2 = Symbol("symbol1");

console.log(symbol1 === symbol2);
console.log('symbol1' === 'symbol1');

const people ={
    0: 'John',
    1: 'Jane',
    2: 'Jack',
}

console.log(typeof users);

console.log(people[3]);
console.log(users[3]);

console.log(Array.isArray(users));
console.log(Array.isArray(people));

// constructor/prototype
console.log(Number, String, Boolean, Array, Object);

// if (condition) true will execute
// if (condition) false will not execute
if (false){
    // work
    console.log('hello');
}

// else will excute if the condition is false

if (!true){
    // work
    console.log('this wont execute');
} else {
    // work
    console.log('this will execute');
}

// else if will execute if the condition is false


if (1 === 2){
    // work
    console.log(1);
} else if(3 * 4 === 15){
    // work
    console.log(2);
}
else if (10 / 2 === 5){
    // work
    console.log(3);
}
else {
    // work
    console.log(4);
}

const age = 7;
const parentsPermission = false;

if (age >= 18){
    console.log('can visit this website');
} else if (age >= 13 || parentsPermission){
    console.log('can visit this website with the right conditions');
}
else {
    console.log('can not visit this website');
}

// important programming concepts
// variables/assignment
// data types
// operators
// control flow

// functions
// loops

// few others...
// events


if (APP_NAME){
    console.log('run this code');
}

const nameInput = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    nameInput.value.length > 5 && nameInput.value.length < 10 ? console.log('run this code') : alert('please enter a name');
    
});


// ternary operator (shorthand if else)

// age < 18 ? alert('not old enough') : alert('old enough');


// switch statement

const grade = 'F';
switch(grade) {
    case 'A':
        console.log('you got an A you get $100');
        break;
    case 'B':
        console.log('you got a B', 'you get $50');
        break;
    case 'C':
        console.log('you got a C', 'you get $25');
        break;
    case 'D':
        console.log('you got a D', 'you get to clean the room');
        break;
    default:
        console.log('you got an F', 'you get to clean the house');
    
}