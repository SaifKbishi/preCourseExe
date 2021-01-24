(function (){
    'use strict';

    //print all the odd numbers from 1 to 100
    console.log('Odd numbers are any integers that cannot be divided exactly by 2. \nAnd there last digit is 1, 3, 5, 7 or 9. \n');
    console.log('The odd numbers from 1 to 100 are:');
    for(let i=1; i <= 100; i++){
        if(i%2 === 1){
            //console.log('\n ');
            process.stdout.write(i +' ');                        
        }
    }
    console.log('\n');    
    
})();