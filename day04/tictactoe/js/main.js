const players = ['X', 'O'];
// const player1 = players[0];
// const player2 = players[1];
let turn = 0;
let max = 9;

const buttons = document.querySelectorAll('button');
console.log(buttons);


buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        if (button.innerHTML === '-') {
            console.log('current turn', turn);
            button.innerHTML = players[turn % 2];
            console.log('new turn', turn);

            // if top row is all the same
            checkThreeInARow(0, 1, 2);
            // if middle row is all the same
            checkThreeInARow(3, 4, 5);
            // if bottom row is all the same
            checkThreeInARow(6, 7, 8);
            // if left column is all the same
            checkThreeInARow(0, 3, 6);
            // if middle column is all the same
            checkThreeInARow(1, 4, 7);

            // if right column is all the same
            checkThreeInARow(2, 5, 8);
            // if diagonal is all the same
            checkThreeInARow(0, 4, 8);
            // if diagonal is all the same
            checkThreeInARow(2, 4, 6);

            turn += 1;
           if (turn >= max) {
               console.log('game over', 'it is a tie');
           }
        }
    });
    
});


function checkThreeInARow(a, b, c) {
    if (buttons[a].innerHTML === buttons[b].innerHTML && buttons[c].innerHTML === buttons[a].innerHTML && buttons[b].innerHTML !== '-') {
        alert(`${players[turn % 2]} wins!`);
    }
}

