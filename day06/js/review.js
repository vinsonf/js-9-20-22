// primitive types
let score = 0; // number
const name = 'John'; // string
let isCool = true; // boolean

// var is not used anymore

// organization types
let scores = [0, 0, 0, 0, 0]; // array

// object
let player = {
    name: 'John',
    score: 0,
    isCool: true,
    friends: ['Jane', 'Joe', 'Jill'],
};

// operations
1 + 1; // 2

'hello' + 'world'; // 'helloworld' (concatenation)
`hello ${name}`; // 'hello John' (template literal)

// alert('hello world'); // tell the user something (undefined)
// prompt('what is your name?'); // ask the user for something (string)
// confirm('are you sure?'); // ask the user a yes or no question (boolean)

Math.pow(2, 37); // 137438953472
Math.random(); // 0.123456789 (random number between 0 and 1)

// common
Math.random() * 10; // 0.123456789 (random number between 0 and 10)
Math.floor(Math.random() * 10); // 0 (random number between 0 and 9)
Math.ceil(Math.random() * 10); // 1 (random number between 1 and 10)
Math.round(Math.random() * 10); // 1 (random number between 0 and 10)


const today = new Date();
today.getFullYear(); // 2020
today.getMonth(); // 0 (january)
today.getDate(); // 1
today.getDay(); // 0 (sunday)
today.getHours(); // 0
today.getMinutes(); // 0
today.getSeconds(); // 0
today.getMilliseconds(); // 0

// control flow
if (score > 0) { // if score is greater than 0
    // do something
}

if (score > 0) { // if score is greater than 0
    // do something
} else { // otherwise
    // do something else
}

if (score > 0) { // if score is greater than 0
    // do something
} else if (score < 0) { // otherwise if score is less than 0
    // do something else
} else { // otherwise
    // do something else
}

const grade = 'A';
switch (grade) {
    case 'A':
        // do something
        break;
    case 'B':
        // do something
        break;
    case 'C':
        // do something
        break;
    default:
        // do something
}

// functions
let globalVariable = 0;

function nameOfFunction(parameter1, parameter2, parameter3) {
    // do something
    globalVariable += 1;
    return 'something';
}
// arrow functions
(parameter1, parameter2, parameter3) => {
    // do something
    globalVariable += 1;
    return 'something';
}

const answer = nameOfFunction('hello', 'world', '!');


const person2 = {
    first: 'Jane',
    last: 'Doe',
    age: 25,
    isCool: true,
    greeting: function() {
        return `Hello, my name is ${this.first} ${this.last} and I am ${this.age} years old.`;
    }
}

function universe() {


    function solarSystem() {
        const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

        function planet() {
            const index = Math.floor(Math.random() * planets.length);
            function country() {
                const countries = ['USA', 'Canada', 'Mexico'];
               function state() {
                function city() {

                }
               }
                return countries[index];
            }
            return planets[index];
        }
    }
}

// parents share variables with children
// children do not share variables with parents
// children do not share variables with siblings

function letMeKnowWhenDone(callback) {
    // do something
    console.log('now im using the tool');
    console.log('now im done');
    callback();
}

function someoneElseNeedsItAfterMe() {
    console.log('they using the tool');
    console.log('they done');
   
}

function someOneUsingATool(callback, callback2) {
    console.log('using tool');
    console.log('done');
    callback(callback2); // calls the function passed in
}

someOneUsingATool(letMeKnowWhenDone, someoneElseNeedsItAfterMe);

// promise

const promise = new Promise((resolve, reject) => {
    // do something
    resolve('first done');

    // reject('something went wrong');
    // reject('something');
});

promise.then((result) => {
    console.log(result);
    return 'second done';
}).then((result) => {
    console.log(result);
    return 'third done';
}).then((result) =>{
    console.log(result);
    return 'fourth done';
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
})