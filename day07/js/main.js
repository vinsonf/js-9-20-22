const APP_NAME = `Question of the Day Generator`;

const questions = [
  "Out of the four seasons, what’s your favorite one?",
  "What is your favorite thing in nature, and why?",
  "If you could live in a book, tv show, or movie, what would it be?",
  "Are you an introvert or an extrovert?",
  "what is your favorite board game and why?",
  "What do you do for your relaxation YOU time?",
  "What is the best thing to eat on a rainy day?",
  "What was the quote you heard that you now live by every day?",
  "What event from your life would someone from a younger generation ask you about in the distant future?",
  "What does your ideal vacation look like?",
  "What's the best restaurant you've eaten at?",
  "What is your dream job?",
  "Stuck on an island with nothing but 3 items, no help, just your instincts and animals , and trees and land- what 3 items would you use to survive on the island?",
  "Pancakes or waffles?",
  "If you could be any cartoon character which one would you be?",
  "What is your favorite movie?",
];


const h1 = document.createElement('h1');
h1.innerHTML = APP_NAME;
document.body.appendChild(h1);
h1.style.textAlign = 'center';

const button = document.createElement('button');
button.innerHTML = 'Generate Question';
document.body.appendChild(button);
button.style.display = 'block';
button.style.margin = '0 auto';
button.style.fontSize = '1.4rem';
button.style.padding = '1rem 2rem';

const h3 = document.createElement('h3');
h3.innerHTML = 'here';
h3.style.textAlign = 'center';
document.body.appendChild(h3);




function generateQuestion() {
    const randomDecimal = Math.random() * questions.length;
    const randomInteger = Math.floor(randomDecimal);
    h3.innerHTML = questions[randomInteger];
}


button.addEventListener('click', generateQuestion);

questions.forEach((question) => {
    const li = document.createElement('li');
    li.innerHTML = question;
    document.body.appendChild(li);
});

const hr = document.createElement('hr');
document.body.appendChild(hr);
for(let i = 0; i < 3; i++){
    const li = document.createElement('li');
    li.innerHTML = questions[i];
    document.body.appendChild(li);
}
let x = 0;
while(x < 10){
    const li = document.createElement('li');
    li.innerHTML = x;
    document.body.appendChild(li);
    x = Math.random() * 12;
}