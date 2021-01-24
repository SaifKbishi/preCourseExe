(function (){
    'use strict';
    const readlineSync = require('readline-sync');

    let aString = readlineSync.question('\nPlease input a string to check if it is a Palindrome\n');    
    isPalindrome(aString);

    function isPalindrome(str){
        let string = str;
        if(string.length >0){
            let stringArr = string.split('');
            let reversed = string.split('');
            reversed = reversed.reverse();
            for(let i=0; i<stringArr.length; i++){
                if(stringArr[i] == reversed[i])
                {
                    i++;
                }
                else{            
                    console.log('\x1b[36m'+ aString +'\x1b[0m is NOT a Palindrome');
                    return false;
                }
            }        
            console.log('\x1b[36m'+ aString +'\x1b[0m is a Palindrome');
            return true;
        }else{
            console.log('You did not input a string');
        }
    }
//cd exercises
//node ex11.js
})();
