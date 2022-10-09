const fs = require('fs');

const data = {
    name: 'John',
    age: 30,
    car: null
};

const jsonData = JSON.stringify(data);

fs.writeFile('data.json', jsonData, (err) => {});