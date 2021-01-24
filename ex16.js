(function (){
    'use strict';

    let arr1 = [1,2,3,4,5,6];
    let arr2 = [1,2,3,4,5,6];
    reverseListWithReverse(arr1);
    reverseListWithTemp(arr2);
    
    function reverseListWithReverse(array){
        array = array.reverse();
        console.log('reversed Array: ', array);
    }    
    function reverseListWithTemp(array){
        let len= array.length -1;
        let start = 0;        
        while(start != len && start < len){
            let temp = array[len];
            array[len] = array[start];
            array[start] = temp;
            start++;
            len--;
        }
        console.log('reversed List With Temp: ',array);
    }   
//cd exercises
//node ex16.js
})();