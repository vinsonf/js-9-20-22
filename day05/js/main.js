// create a variable at the top of the file
let score = 0; // global variable are accessible anywhere in the file
let scoreKeeper;

// functions in the middle of the file

function createButton() {
    const button = document.createElement('button');
    document.body.append(button);
    button.textContent = 'Click Me';
    button.addEventListener('click', updateScore);
}

function updateScore() {
    score += 5;
    scoreKeeper.textContent = `Score: ${score}`;
}

function createScoreKeeper() {
    scoreKeeper = document.createElement('p');
    document.body.append(scoreKeeper);
    scoreKeeper.textContent = `Score: ${score}`;
}

// work at bottom
createButton();
createScoreKeeper();

const element = document.createElement('h1');
element.textContent = 'Hello World';

document.body.append(element);



// create element
// const button = document.createElement('button');

// set content
// button.textContent = 'Add Point';

// add to page
// document.body.appendChild(button);

// add event listener
// button.addEventListener('click', updateScore);

// get element already on page
// const scoreKeeper = document.querySelector('p');





