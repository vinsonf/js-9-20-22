// Variable Types
const APP_NAME = 'Day 7';
let score = 0;

// var is the old way of declaring variables

// Data Types
// primitive data types
// string
const name = 'John';
// number
let age = 30;
// boolean
const hasKids = true;

// complex data types
// reference data types
// array
const hobbies = ['movies', 'music'];
// object literal
const address = {
    city: 'Boston',
    state: 'MA',
    streetNumber: 123
}

// other
// undefined
let player1;
player1 = undefined;
// null
player1 = null;

// NaN
let x = 10;
let y = 'a';
let z = x * y;


// rarely used
const bigNumber = 1234567890123456789012345678901234567890n;

// Type Conversion
let a = 10;
let b = '10';

console.log(a == b);

// strict equality
console.log(a === b);

let c = '10';
let d = '10';

console.log(c === d);

// reference data types
const user1 = {name: 'John', age: 30};
const user2 = {name: 'John', age: 30};
// debugger;

console.log('reference', user1 == user2);

// string methods
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());

// string concatenation
const firstName = 'John';
const lastName = 'Doe';

const str = 'Hello, my name is ' + firstName + " " +lastName + ' and I am ' + age;

const templateStr = `Hello, my name is ${firstName} ${lastName} and I am ${age}`;

console.log(str);
console.log(templateStr);

// const value1 = alert('Welome to ' + APP_NAME); // undefined
// const value2 = prompt('Enter your name', 'Player1'); // string or null
// const value3 = confirm('Are you sure?'); // boolean

// Math Object
const num1 = 100;
const num2 = 50;

let val = Math.pow(num1, num2);
val = Math.sqrt(num1);
val = Math.abs(-3);
val = Math.round(2.5);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);

// useful even when your app is not Math related
val = Math.random();
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.round(2.4);

// Date Object
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();

birthday.setMonth(9);
birthday.setDate(25);
birthday.setFullYear(1985);

console.log(today > birthday);
console.log(today - birthday);

// if statements
const total = 100;

if (total > 100) { // evaluates to true or false (condition)
    console.log('You are over budget');
}

// if else
if (total > 100) {
    console.log('You are over budget');
    if (total > 200) {
        console.log('You are way over budget');
    }
}
else {
    console.log('You are under budget');
    if (total < 50) {
        console.log('You are way under budget');
    }
}

// else if
if (total > 100) {
    console.log('You are over budget');
}
else if (total > 50) {
    console.log('You are under budget');
}
else if (total > 0) {
    console.log('You are way under budget');
}
else { // else is optional
    console.log('You are a super saver');
}

// ternary operator
const points = 101;
const medal = points > 100 ? 'gold' : 'silver';

// falsey values
// false
// 0
// ''
// null
// undefined
// NaN

// truthy values
// everything else

if (points){
    console.log('You have points');
} else {
    console.log('You have no points');
}

// functions
function greet(firstName, lastName) {
    // console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log( greet('John', 'Doe') );
console.log( greet('Steve', 'Smith') );

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main st',
        state: 'MA',
        city: 'Boston',
    },
    greeting(){
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age}`;
    }
}

console.log(person.greeting());

// github api

async function listRepos(username) {
    const baseUrl = 'https://api.github.com/users/';
    
    return fetch(baseUrl + username)
        .then(response => response.json())
}


const promise1 = listRepos('bradtraversy');
const promise2 = listRepos('skwhit');
const promise3 = listRepos('vinsonf');
console.log(promise1, promise2, promise3);
Promise.all([promise1, promise2, promise3])
    .then( ([user1, user2, user3]) => {
        console.log('all done', user1, user2, user3);
        Promise.all([
            fetch(user1.repos_url).then(response => response.json()),
            fetch(user2.repos_url).then(response => response.json()),
            fetch(user3.repos_url).then(response => response.json()),
        ]).then(([repos1, repos2, repos3]) => {
            console.log('all repos', repos1, repos2, repos3);

            listUsersRepo(user1, repos1);
            listUsersRepo(user2, repos2);
            listUsersRepo(user3, repos3);
        })
    });

    function listUsersRepo(user,repos){
        const img = document.createElement('img');
            img.src = user.avatar_url;
            document.body.appendChild(img);

            const h2 = document.createElement('h2');
            h2.textContent = user.login;
            document.body.appendChild(h2);

            const ul = document.createElement('ul');
            document.body.appendChild(ul);
            
            repos.forEach(repo => {
                const li = document.createElement('li');
                li.textContent = repo.name;
                ul.appendChild(li);
            });
    }





