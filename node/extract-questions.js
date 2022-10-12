const fs = require('fs');
const path = require('path');
console.log(__dirname);

const file = fs.readFileSync(path.join(__dirname, 'questions.txt'), 'utf8');

console.log(file.split('\n\n').filter( (question) => question.length > 0).length);

fs.writeFileSync(path.join(__dirname, 'questions-formatted.txt'), file.split('\n\n').filter( (question) => question.length > 0).map(question => `"${question.trim()}"`).toString());