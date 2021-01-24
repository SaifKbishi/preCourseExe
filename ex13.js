(function (){
    'use strict';
    const readlineSync = require('readline-sync');

    let aString = readlineSync.question('\nPlease input a string to find its longest word\n');

    if(aString.length >0){
        let strArray = aString.split(' ');
        let newString = "";
        for(let i=0; i< strArray.length; i++){
            if(newString.length < strArray[i].length){
                if(isWord(strArray[i])){
                    newString = strArray[i];
                }                
            }
        }
        console.log('\x1b[36m'+ newString +'\x1b[0m');
    }else{
        console.log('You have not input a string');
    }
    
    function isWord(bChar){
        return /^[A-Za-z]+$/.test(bChar);
    }

//cd exercises
//node ex13.js
})();
