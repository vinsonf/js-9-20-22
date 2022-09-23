// primitive types
const NO = false; // boolean
// no means no
let number = 42; // number
number = 42.0; // number

var string = "kill bill"; // string
// var you can redeclare or reassign
var string = "kill bill vol. 2";
var string = 'kill bill';

string.length; // 12
console.log(string.length); // 12

test = "test"; // string


// complex types / orginized data
favoriteMovies = ["kill bill", "pulp fiction", "reservoir dogs"]; // array of strings
FavoriteMovies = ["kill bill", "pulp fiction", "reservoir dogs"]; // array of strings

// object
person = {
    name: "John",
    age: 42,
    favoriteMovies: ["kill bill", "pulp fiction", "reservoir dogs"],
    favoriteDirector:  {name:               "Quentin Tarantino",
        age: 55
    }
};





// null and undefined
null; // user set value
undefined; // default value

let selectedCharacter;
selectedCharacter = 'Ryu';
selectedCharacter = null



// very rare types**
// Symbol(); // symbol // memory address
// BigInt(); // bigint // big numbers
// Infinity; // number


// syntax
// semicolons are not optional
// semicolons are used to separate statements
// case sensitive
// camelCase (preferred)
// snake_case
// kebab-case // not used in js
// PascalCase // used for classes (2nd)
// ALL_CAPS // used for constants (2nd)

// variables
// most variable should be camelCase
// CONSTANTS should be all caps
// constructor functions should be PascalCase

// comments
// single line comment

/*
multi
line
comment
*/
validJavaScript = true;
console.log(10 + 27 - 32 * 4 / 2); // 10 + 27 - 32 * 4 / 2

// operators
// arithmetic
// + - * / %
// addition
// +
// subtraction
// -
// multiplication
// *
// division
// /
// modulo / modulus / remainder
console.log(5 % 2)
// 1 // left over

// assignment
// =

nickName = "John";

one = 1;
two = 2;
one = two;
console.log(one); // 2


// simple sumary of what we know so far
// 1. variables are nicknames for data
// 2. data has a type (string, number, boolean, array, object)
// 3. we can use operators to manipulate data



number = 5;
console.log(number);
console.log(number += 2);
console.log(number %= 2);
console.log(number + '1')

console.log(number);
const year = 2022;

const header = `
    <h1 class="add'>
        hello my name is ${nickName}
        <button>click me</button>
    </h1>
`;
const section = ` 
<section>
    <p> number is ${number} </p>
</section> `;
const footer = ` <footer> <p> &copy; ${year} </p> </footer> `;

const h1 = document.createElement('h1');
const button = document.createElement('button');
const section1 = document.createElement('section');
const p = document.createElement('p');
const footer1 = document.createElement('footer');
const p1 = document.createElement('p');

h1.innerHTML = 'hello my name is ' + nickName;
button.innerHTML = 'click me';
p.innerHTML = 'number is ' + number;
p1.innerHTML = '© ' + year;

document.body.append(h1);
document.body.append(section1);
document.body.append(footer1);

h1.append(button);
section1.append(p);
footer1.append(p1);

function createElement(tag, text, parent) {
    const element = document.createElement(tag);
    element.innerHTML = text;
    rparent.append(element);
}

createElement('h1', 'hello my name is ' + nickName, document.body);
createElement('button', 'click me', document.body);
createElement('section', 'number is ' + number, document.body);
createElement('footer', '© ' + year, document.body);




// strings

myString = "Hello World";
myString = 'Hello World';
myString = `Hello World`; // special string (template literal)

// document.body.innerHTML = header + section + footer;










