var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('what is your name? ');
console.log('Hi ' + userName + '!');
 
console.log('Hello, ' + userName + ' nice to meet you!');