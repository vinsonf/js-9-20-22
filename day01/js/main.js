// alert when button clicked
document.querySelector("button").addEventListener("click", () => {
  alert();
});

// create elements
const h1 = document.createElement('h1');

// place on page
document.body.append(h1);

// update text
h1.innerHTML = 'Hello World';

// interact with css
h1.style.color = 'red';

// add a class
h1.classList.add('big');

// add listeners
h1.addEventListener('click', () => {
  h1.innerHTML = 'world';
});