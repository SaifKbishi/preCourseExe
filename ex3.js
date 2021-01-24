//there are other way to accomplish the same result, like using a switch case and others. i learned this new one from the lessons so i used it
(function (){
    'use strict';
    
    let prompt = require('prompt');
    prompt.start();

    let mapObj = {
        1: 'ONE',
        2: 'TWO',
        3: 'THREE',
        4: 'FOUR',
        5: 'FIVE',
        6: 'SIX',
        7: 'SEVEN',
        8: 'EIGHT',
        9: 'NINE',
        10: 'TEN'
    };
    let numArr =[1,2,3,4,5,6,7,8,9,10];
    let mappedArray = Array.from(numArr, function (item){
        return this[item];
    },mapObj);

    prompt.get(['Number'], function (err, result) {
        if(err){
            console.log(err);
        }else if(!isNaN(result.Number )){
            console.log(mappedArray[result.Number-1]);
        }else{
            console.log('This is a NaN, try again');
        }        
      });
})();