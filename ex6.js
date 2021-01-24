(function (){
    'use strict';
    const readlineSync = require('readline-sync');
    let anInteger = readlineSync.question('please choose a number larger than 10:\n ');
    let flag = false;
    
    if(!isNaN(anInteger)){ //if a valid number
        if(!isIntegerTest(anInteger)){ //number fails the test
            do{
                let newInteger = readlineSync.question('please choose a number LARGER than 10:\n ');
                if(!isNaN(newInteger)){                    
                    isIntegerTest(newInteger);
                }else{
                    console.log('This is not a valid number, thank you');
                    return false;
                }
                
            }while(flag == false);
        }
    }else{//not a valid number
        console.log('This is not a valid number, thank you');
        return false;
    }

    function isIntegerTest(anInteger){
        if(anInteger < 10){
            return false;
        }else{
            flag = true;
            console.log('Thank you');
            return true;
        }
    }
//cd exercises
//node ex6.js
})();