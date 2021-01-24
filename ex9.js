(function (){
    'use strict';
    const readlineSync = require('readline-sync');

    //A prime number can be divided, without a remainder, only by itself and by 1. 
    //For example, 17 can be divided only by 17 and by 1.
    let limitNumber = readlineSync.question('please choose a number, to print prime numbers smaller than it\n ');
    
    if (!isNaN(limitNumber) && parseInt(limitNumber) >1){
        process.stdout.write('Prime numbers between 1 and '+limitNumber+' are: \n');
        for(let num=1; num <= limitNumber; num++){
            let flag =0;
            for(let i=2; i< num; i++){
                if((num %i)==0){
                    flag =1;
                    break;
                }
            }
            if(num > 1 && flag ==0 ){
                process.stdout.write( num +' ');
            }
        }
    }else{
        console.log('not a valid number');
    }
//cd exercises
//node ex9.js
})();
