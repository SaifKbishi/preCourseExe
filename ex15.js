(function (){
    'use strict';

    let arr1 = ['AppleSeeds', 'Bootcamp'];
    let arr2 = ['welcome', 'to'];

    join2Arrays(arr1, arr2);
    join2ArrayWithFor(arr1, arr2);

    function join2Arrays(array1, array2){
        console.log('\n\njoin 2 arrays with concat:');
        console.log('array1: ', array1);
        console.log('array2: ', array2);
        let newArray = array2.concat(array1);
        console.log('new concatenated array: ', newArray);
    }

    function join2ArrayWithFor(array1, array2){
        console.log('\njoin 2 arrays with For loop and push:');
        console.log('array1: ', array1);
        console.log('array2: ', array2);
        let newForArray = array2;
        for(let j=0; j< array1.length; j++){            
            newForArray.push(array1[j]);
        }
        console.log('join2ArrayWithFor: ');
        console.log(newForArray);
    }
//cd exercises
//node ex15.js
})();