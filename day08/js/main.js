import {Movie} from './movie.js'

// variable types
// const, let, var

// data types
// primitives
// strings, numbers, booleans
// complex, compound, organization, refence, data types
// objects, arrays

// falsey
// null, undefined, NaN,
//  0, '', false, 

// other (memory)
// bigInt, symbol

// pop up functions
// alert(), confirm(), prompt()

// alert() returns undefined
// confirm() returns boolean
// prompt() returns either a string or null(cancel)

// string methods 
// length, endsWith, startsWith, substring, substr, slice, toUpperCase, toLowerCase, split(',')

// Math Object
// random, floor, ceil, round
// calculator functions

// Date Object
// getMonth returns 0 - 11
// getDay returns 0 - 6
// getDate returns 1 - 31
// getHours return 0 - 23 (19 = 7pm) 

// logic
let answer = true && true && false; // return false
answer = false && true || false; // return true
// debugger;
if (answer) { // positive case (truthy)
    console.log('this runs if the condition is true')
} else if ('second condition'){ // runs if previous conditions are falsey (optional)
    console.log('if second conditions is truthey')
}
else { // optional
    console.log('the false condition')
}


console.log(answer);

answer = 1 == '1'; // non strict equal  returns true
answer = 1 === '1'; // strict equal returns false

const isSameUser = {name: 'joe'} == {name: 'joe'};
console.log(isSameUser, 'isSameUser')


fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => {
        console.log(data);
        return data[2]
    }).then( user => {
        console.log(user);
        if (!user.usernames) {
            return 'no username provided';
        }
        return user.usernames.toUpperCase();
    }).then(username => {
        console.log(username)
    }).catch(e => {console.log(e)
        throw new Error('User does not have a username')
    });


 



try {
    abc
} catch(e) {
    console.log('no abc is declared')
}

const input = document.createElement('input');
document.body.append(input)

input.addEventListener('change', () => {
    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.innerHTML = input.value;
    setTimeout(function() {
        h1.remove();
    }, 5000)
});

[2,4,6,8].forEach( item => {
    console.log(item * 2)
});

// loops have 3 main components
// 1. starting point
// 2. condition to end
// 3. a means to invalidate that condition

for (let x = 0; x < 100; x++) {
    console.log(x)
    for(let j = 0; j < 5; j++){
        console.log(j);
    }
}

let person = {
    name: 'Joe',
    age: 27,
    isPresent: true,
}

for (let key in person) {
    console.log(key, person[key])
}

const favoriteMovies = ['b2tF', 'b2tf2']

for (let movie of favoriteMovies) {
    console.log(movie)
}

for(let i = 0; i < Object.keys(person).length; i++) {

}





function createTitle(actor, type){
    const h1 = document.createElement(type);
    document.body.append(h1);
    h1.innerHTML =  actor;
}

createTitle('Fox','h1');
createTitle('Lloyd', 'h2');


const movie = new Movie(
    'Back to the Future',
    'PG',
    [{name: 'm j fox'}, {name: 'Christopher Lloyd'}, {name: 'Leah Thompson'}],
    1985
);

const movie2 = new Movie(
    'Star Wars',
    'PG-13',
    [{name: 'Mark Hamill'}, {name: 'Carrie Fisher'}, {name: 'Harrison Ford'}],
    1977
)


movie2.addActor('James Earl Jones');
movie.addActor('Crispin Glover')

console.log(movie.toString())
console.log(movie2.toString())

