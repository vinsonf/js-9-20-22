import {Player, Enemy} from './player.js';

const APP_NAME  = 'Day 11' ;
let score = 0;
let isVIP = true;

const objects = {
    name: 'Fresno',
    state: 'California',
    population: 500000,
};

const listOfThings = ['a', true, 1, {name: 'John'}, [1, 2, 3]];

const falsey = [0, '', false, null, undefined, NaN];

// var NOT USED ANYMORE( use let or const)


// arithmetic operators
// + - * / % 

// comparison operators
// > < >= <= == === != !==

// logical operators
// && || !

if (true && 0) {
    console.log('true');
}

if (true && 1) {
    console.log('true');
}

if (true || 0) {
    console.log('true');
}

if (!0) {
    console.log('true');
}

const age = 27;

const obj = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(age, this.age);
    }
}

obj.greet();

console.log('Joe'.toUpperCase());

const string = {
    value: 'Joe',
    toUpperCase: function() {
        return this.value.toUpperCase();
    }
}

console.log(string.toUpperCase());
// debugger;
let answer;
// answer = alert('Hello');
// answer = confirm('Are you sure?');
// answer = prompt('What is your name?');

if(!answer) {
    // alert('Your name is Player 1')
} else {
// alert(answer.toUpperCase());
}

new Date();
new Date('December 17, 1995 03:24:00');
new Date(1995, 11, 17);
new Date(1995, 11, 17, 3, 24, 0);
new Date('01/01/2019');

Math.random();
Math.floor(1.9);
Math.ceil(1.1);
Math.round(1.5);

let outcome = ['win', 'lose', 'draw'][Math.floor(Math.random() * 3)];
console.log(outcome)

if (outcome === 3) {
    outcome = 2;
}


'.01' // 0
'0.8'
'.9'

'.01' // 0
'1.1' // 1
'1.9' // 1

'0.01' // 0
'1.8' // 1
'2.999999' // 2


function giveTip(amount, tipPercentage) {
    return amount * tipPercentage;
}

console.log(giveTip(60, .15));

const input = document.createElement('input');
const select = document.createElement('select');
const option1 = document.createElement('option');
const option2 = document.createElement('option');
const option3 = document.createElement('option');
const button = document.createElement('button');

option1.value = '10';
option1.textContent = '10%';
option2.value = '15';
option2.textContent = '15%';
option3.value = '20';
option3.textContent = '20%';

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);

document.body.append(select);
document.body.append(input);

button.textContent = 'Calculate Tip';
document.body.append(button);

button.addEventListener('click', () => {  
    const tip = giveTip(input.value, select.value / 100);
    alert(tip);
})

function functionName(parameter1, parameter2) {
    // code
}

functionName(1, 2);



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });


function orderPizza(type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Pizza is being made');
            resolve(type + ' pizza');
        }, Math.random() * 4000);
    });
}

function bakePizza(pizza) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(pizza + ' and baked');
            resolve(pizza + ' is ready');
        }, Math.random() * 4000);
    });
}

function deliverPizza(pizza) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Pizza is being delivered');
            resolve(pizza + ' and delivered');
        }, Math.random() * 4000);
    });
}

orderPizza('pepperoni')
    .then(pizza => bakePizza(pizza))
    .then(pizza => deliverPizza(pizza))
    .then(pizza => console.log(pizza));


[7, 8, 9, 10].forEach((item, index) => {
    console.log(item, index);
});

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    if(i === 5) {
        break;
    }
    i++;
}

let letters = ['a', 'b', 'c'];

letters.forEach((letter) => {
    console.log(letter);
});
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}
let l = 0;
while (l < letters.length) {
    console.log(letters[l]);
    l++;
}

for(let letter of letters) {
    console.log(letter);
}

// document model object (DOM)

const element = {
    tagName: 'div',
    innerHTML: 'Hello World',
    style: {
        color: 'red',
    },
    onclick: function() {},
    onmouseover: function() {},
    children: [

    ],
    append: function(el) {
        this.children.push(el);
    },
}

const childEl = document.createElement('div');
const div = document.createElement('div');
console.dir(div);
div.innerHTML = 'Hello World';
div.style.color = 'red';
div.onclick = function() {};
div.onmouseover = function() {};
div.append(childEl);




const player1 = new Player('Mario', 'red');
const player2 = new Player('Luigi', 'green');
const player3 = new Player('Peach', 'pink');
const player4 = new Player('Toad', 'brown');
const player5 = new Enemy('Bowser', 'black');

console.log(
document.forms[0],
document.forms['signup'],
document.forms.signup)

console.log(
document.forms[0][0],
document.forms[0].name,
document.forms[0]['name'])

document.forms.signup.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(document.forms[0][0].value);

});

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

    const typesOfHTTPMETHODS = [
        {name: 'GET', description: 'Get data from a server'},
        {name: 'POST', description: 'Send data to a server'},
        {name: 'PUT', description: 'replace data on a server'},
        {name: 'PATCH', description: 'update data on a server'},
        {name: 'DELETE', description: 'Delete data from a server'},

    ]


    // const yourNameIs = localStorage.getItem('name');
    // if(yourNameIs) {
    //     alert('Your name is ' + yourNameIs);
    // } else {
    //     localStorage.setItem('name', prompt('What is your name?'));
    // }
  
    // const yourFavoriteAppIs = sessionStorage.getItem('app');
    // if(yourFavoriteAppIs) {
    //     alert('Your favorite app is ' + yourFavoriteAppIs);
    // } else {
    //     sessionStorage.setItem('app', prompt('What is your favorite app?'));
    // }





setTimeout(() => {
    console.log('Hello World');
    document.body.style.backgroundColor = 'purple';
}, 5000);
console.log('start countdown')

let times = 0;

const id = setInterval(() => {
    times++;
    console.log('Hello World');
    document.body.style.backgroundColor = 'purple';
    if(times === 5) {
        clearInterval(id);
    }
}, 5000);

const toast = document.createElement('div');
toast.style.position = 'fixed';
toast.style.top = '0';
toast.style.right = '0';
toast.style.backgroundColor = 'red';
toast.style.color = 'white';
toast.style.padding = '10px';
toast.style.borderRadius = '5px';
toast.style.margin = '10px';




const messages = [
    'Hello World',
    'Did you know that the first computer virus was created in 1983?',
    "Have you heard of the 'I Love You' virus?",
    'It was a worm that spread through email and infected over 50 million computers.',
    'It was created by a 22-year-old Filipino computer programmer named Onel de Guzman.',
    'He was sentenced to 10 years in prison and fined $10,000.',
]

setInterval(() => {
    document.body.append(toast);
    toast.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    setTimeout(() => {
        toast.remove();
    }, 3000);
}, 8000);