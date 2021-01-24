(function (){
    'use strict';
    const readlineSync = require('readline-sync');

    let arrLength = readlineSync.question('\nPlease enter an array length: ');
    if(!isNaN(arrLength)){
        arrLength = parseInt(arrLength);        
        if(arrLength > 0){
            minMax(getRandomArray(arrLength));
        }else{
            throw Error("cannot create an array with this length.");
        }                        
    }else{
        throw Error("this is not a valid number1");
    }
    function getRandomArray(arrayLength){
        let randomArray = new Array(arrayLength);
        for(let i=0; i < arrayLength; i++){
            let rand = Math.floor(Math.random() * 50) + 1;
            randomArray[i] = rand;
       }       
       return randomArray;
    }
    function minMax(randomArray){
        console.log('minMax: '+ randomArray);
        let min = Math.min(...randomArray);
        let max = Math.max(...randomArray);
        console.log('min is: '+ min +'\nmax is: '+max);
    }
//cd exercises
//node ex15.js
})();