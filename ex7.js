(function (){
    'use strict';
    const readlineSync = require('readline-sync');

    let choice = readlineSync.question('\nplease choose 1 for iterative process or 2 for recursive process\n ');
    
    if (!isNaN(choice) && parseInt(choice) ===1){
        let aPositiveInteger = readlineSync.question('please type in a positive number to calculate its Factorial\n ');
        console.log('iterative process');
        let n = 1;
        if(!isNaN(aPositiveInteger) && aPositiveInteger >0){ 
            for(let i=1; i <=aPositiveInteger; i++ ){
                n *=i;
            }
            console.log(aPositiveInteger+' factorial is: ', n);
        }else{
            console.log('Wrong input, thank you');
            return false;
        }
    }else if(!isNaN(choice) && parseInt(choice) ===2){
        let aPositiveInteger = readlineSync.question('please type in a positive number to calculate its Factorial\n ');
        console.log('recursive process');
        if(!isNaN(aPositiveInteger) && aPositiveInteger >0){ 
            console.log(aPositiveInteger+' factorial is: ', fact(aPositiveInteger));
        }else{
            console.log('Wrong input, thank you');
            return false;
        }  
    }else{
        console.log('not an option');
        return;
    }

    function fact(a){
        if(a -1 <1 )
            return 1;
        else{
            return a * fact(a-1);
        }        
    }

//cd exercises
//node ex7.js
})();