(function (){
    'use strict';
    const readlineSync = require('readline-sync');

    let aString = readlineSync.question('\nPlease input a string that contian spaces to demo replacing spaces \x1b[36m" "\x1b[0m with "\x1b[36m*\x1b[0m"\nPlease note: \x1b[36m"starting"\x1b[0m & \x1b[36m"ending"\x1b[0m spaces will not count\n');
    let counter = 0;
    let newString = "";
    //testing if the string has at least one space
    for(let i=0; i< aString.length; i++){
        if(aString[i] ===" "){
            counter++;
        }
    }
    if(aString.length >0 && counter > 1){
        for(let i=0; i< aString.length; i++){
            if(aString[i] ===" "){
                newString += "*";
            }else
            newString +=aString[i]
        }
        console.log('\nThe new string is: \n'+newString);
    }else{
        console.log('Your string does not include spaces to be replaced');
    }
//cd exercises
//node ex10.js
})();
