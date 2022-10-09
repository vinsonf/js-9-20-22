const baseUrl = 'https://pokeapi.co/api/v2/pokemon/meowth'; // url to fetch

fetch(baseUrl) // fetch the data
.then(response => { // when the data is fetched
    return response.json(); // what kind of data is it?
})
.then(data => { // when the data is converted from json
    console.log(data);
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    document.body.append(img);

    const h3 = document.createElement('h3');
    h3.innerHTML = `Name: ${data.name} <br>
    Height: ${data.height}
    Weight: ${data.weight}`;
    document.body.append(h3);
});

`{
    "name": "John",
    "age":30,
    "car":null
}`;

const simpsonUrl = 'https://thesimpsonsquoteapi.glitch.me/quotes?character=homer';

fetch(simpsonUrl)
.then(function(response) {
    console.log(response);
    return response.json();
})
.then(function(data) {
    console.log('data', data);
    const char = data[0];
    console.log('character', char.character);
    console.log('quote', char.quote);
    console.log('image', char.image);
    console.log('characterDirection', data[0].characterDirection);
    const img = document.createElement('img');
    img.src = char.image;
    document.body.append(img);
    const h3 = document.createElement('h3');
    h3.innerHTML = `${char.character}: ${char.quote}`;
    document.body.append(h3);
})