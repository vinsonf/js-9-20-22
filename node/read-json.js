const fs = require('fs');

const data = fs.readFileSync('data.json');

const jsonData = JSON.parse(data);
console.log(jsonData);
console.log(jsonData.name);