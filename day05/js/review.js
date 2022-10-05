// datatypes
// 1. primitive
[0, 1, false, true, '', 'hello']
// 2. reference types
[{}, [], function(){}]

let a = 'a'; // a
let b = a; // a
let c = b;

b = 'b'; // b

b = a; // a

console.log(a, b, c); // a b

a = {
    name: 'a'
}
b = a;

b.name = 'b';

console.log(a, b); // 

const memory = [1, 'Joe', true, {name: 'Joe'},{name: 'James'}, 1, 5, 5, 'a'];

const one = 1;
const name = 'Joe';
const isPresent = true;
const person1 = {name: 'Joe', age: 30};
const myVar = one;
const person2 = person1;
const person3 = person1;
person3.name = 'John';

{
   const one  = 10
   console.log(one);
}
console.log(one);



function add(a, b) {
    const one = 10;
    return  a * b * one;
}

const answer1 = add(1, 2);
const answer2 = add(3, 4);
console.log(answer1, answer2);
const car = 'Model-T';
console.log('grandpa has a car', car);

{

    const car = 'Model-S';
    console.log('dad has a car', car);
    {
        const car = 'Model-X';
        console.log('son has a car', car);
        {
           
            console.log('grandson borrows a car', car);
          
        }
    }

}

function count() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter1 = count();
const counter2 = count();
const counter3 = count();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

console.log(counter1());

function updateName(name) {
    return name.toUpperCase();
}

const name1 = updateName('Joe');
const name2 = updateName('James');
console.log(name1, name2);

const player1 = {
    score : 0,
    updateScore: function() {
        this.score += 7;
    }
}

const player2 = {
    score : 0,
    updateScore: function() {
        this.score += 7;
    }
}

player1.updateScore();
player1.updateScore();
player1.updateScore();
console.log(player1.score);
player2.updateScore();
console.log(player2.score);