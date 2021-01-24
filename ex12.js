(function (){
    'use strict';
    const readlineSync = require('readline-sync');

    let aString = readlineSync.question('\nPlease input a (NON CAPITALIZED) string to capitalize its vowels\n');
    let newString = "";
    //testing if the string has at least one space
    if(aString.length > 0){
        for(let i=0; i< aString.length; i++){
            if(isVowel(aString[i])){
                let newChar = aString[i].toUpperCase();
                newString +=  '\x1b[36m'+ newChar +'\x1b[0m';
            }else{
                newString +=aString[i];
            }
        }
    }else{
        console.log('You have not input anyhting!');
    }    
    console.log(newString);

    function isVowel(bChar){
        return /[aeiou]/.test(bChar);
    }
//cd exercises
//node ex12.js
})();
