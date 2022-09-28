// variables are nicknames for data
// declare a variable
// let, const, var
const appName = "My App";
let username = "John";





// appName = "My Cool App"; // error
username = "Jane";



// data types
// string, number, boolean, *array, *object

// string
username = "John" // double quotes
username = 'John' // single quotes
username = `      John ${5 * 10}n      ` // backticks (super powers)( template literal)

console.log(username);


// string operators
// + 
// concatenation
console.log(`hello ` + "world");

let number = 300;

console.log(number + 100);
// 400
console.log(number += 100);
// 400

console.log(number += 100);
// 500
console.log(number);

// bigInt

// number in memory is 64 bits
// 1111 1111 1111 1111 1111 1111 1111 1111

// how does bigInt work?

//  forget about decimal and use everything for integers

// console.log(640n * 64n)
myBint = BigInt(640 * 64)
// console.log(myBint)

// DAY 3

// string methods that are useful
// .length
console.log(username)
console.log('length', username.length);
// .toUpperCase()
console.log('toUpperCase', username.toUpperCase());
console.log(username)

// .toLowerCase()
console.log('toLowerCase', username.toLowerCase());
// .trim()
console.log('trim', username.trim());
username = username.trim();
// .split()
console.log('split', username.split(''));
// .replace()
console.log('replace', username.replace('50', '100'));
// .includes()
console.log('includes', username.includes('J'));
// .indexOf()
console.log('indexOf', username.indexOf('n'));
// .lastIndexOf()
console.log('lastIndexOf', username.lastIndexOf('n'));
// .slice()
console.log('slice', username.slice(3, 4));
// .substring()
console.log('substring', username.substring(3, 0));
// .substr()
console.log('substr', username.substr(3, 4));
// .charAt()
console.log('charAt', username.charAt(3));
console.log('same as [3]', username[3]);
// .charCodeAt()
console.log('charCodeAt', username.charCodeAt(3));
console.log('charCodeAt', 'm'.charCodeAt(0));
// .concat()
console.log('concat', username.concat('hello'));
console.log('same as +', username + 'hello');
// .endsWith()
console.log('endsWith', username.endsWith('50n'));
// .startsWith()
console.log('startsWith', username.startsWith('Jo'));
// .repeat()
console.log('repeat', username.repeat(3));
// .padStart()
console.log('padStart', '1'.padStart(2, '0')); // 10:09 / 10:9
console.log('padStart', '10'.padStart(2, '0')); // 10:09 / 10:9
// .padEnd()
console.log('padEnd', '1'.padEnd(2, '0')); // 10:09 / 10:9
// .match()
console.log('match', username.match(/J/g));

document.addEventListener('click', function (event) {
    document.querySelector('.modal').classList.toggle('hidden');
});

// pop up methods
// alert() // message to the user
// alert('hey you forgot to do something');

// prompt() // message to the user and get input
// const myName = prompt('what is your name?');
// alert(`hello ${myName}`);
// confirm() // message to the user and get a yes or no
// const isCool = confirm('are you cool?');
// alert(`I knew it! ${isCool}`);

// // customize pop ups
// alert('hello')

console.log('Math')
// Math
// .random()
console.log('random', Math.random());
// .floor()
console.log('floor', Math.floor(3.9));
// .ceil()
console.log('ceil', Math.ceil(3.1));
// .round()
console.log('round', Math.round(3.5));
// .max()
console.log('max', Math.max(3, 4, 5, 6, 7, 8, 9, 10));
// .min()
console.log('min', Math.min(3, 4, 5, 6, 7, 8, 9, 10));

console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.pow(2, 3))
console.log(Math.sqrt(9))
console.log(Math.abs(-9))
console.log(Math.cbrt(27))
console.log(Math.hypot(3, 4))
console.log(Math.log(10))
console.log(Math.log10(10))
console.log(Math.log2(10))
console.log(Math.log1p(10))
console.log(Math.expm1(10))
console.log(Math.sin(10))
console.log(Math.cos(10))
console.log(Math.tan(10))
console.log(Math.asin(10))
console.log(Math.acos(10))

// Date
// .now()
console.log('now', Date.now());
// .parse()
console.log('parse', Date.parse('2021-01-01'));

console.log('date', new Date());
console.log('date', new Date(2021, 0, 1));
console.log('date', new Date('2000-01-01'));
const theMillenium = new Date('2000-01-01');
theMillenium.setDate(theMillenium.getDate() + 1);
console.log('date', theMillenium);
theMillenium.setFullYear(theMillenium.getFullYear() -2000);
console.log('date', theMillenium);
const today = new Date();
today.setHours(prompt('what hour is it?'));
if (today.getHours() < 12) {
    console.log('good morning');
    document.body.style.backgroundColor = 'orange';
    document.body.innerHTML = '<h1>good morning</h1>';

}
else if (today.getHours() < 18) {
    console.log('good afternoon');
    document.body.style.backgroundColor = 'blue';
    document.body.innerHTML = '<h1>good afternoon</h1>';

}
else {
    console.log('good evening');
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.innerHTML = '<h1>Good Evening</h1>';
}





const firstNumber = prompt('first number', 10)// always a string
console.log(firstNumber, parseInt(firstNumber), parseFloat(firstNumber), Number(firstNumber))
console.log(10);
