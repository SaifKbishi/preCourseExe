let readlineSync = require('readline-sync');

const a = readlineSync.question('please enter first number: ');
const b = readlineSync.question('and the second number: ');

function makes10(a, b){
    if(!isNaN(a) && !isNaN(b)){
        let x = parseFloat(a);
        let y = parseFloat(b);
        if(x + y === 10){
            console.log("makes 10");
        }else{
            console.log("nope");
        }
    }else{
        console.log('your input is not a number');
    }
    
}

makes10(a,b);