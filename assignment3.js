/*
i have created the game based on global words array and some global variables that are used multiple times by different functions.
to make sure the suer clicks only one letter per round, i used the 'Keypress' library, found all  of its indexes in the word and replaced thme on 
the displayed Asterisks array.
 */
(function (){
    'use strict';
    const readlineSync = require('readline-sync');
    const figlet = require('figlet');
    const keypress = require('keypress');
    keypress(process.stdin);
    
    let words = ['Adventure','outdoors','campfire', 'mountains','wildlife','skydiving','climbing','traveling'];
    let asterisksArray = [];
    let counter = 10;
    let guessed = 0;
    let aLetter;
    let usedLetters = [];
    let flag = 0;    
    let randomWord = getRandomWord();
    let randomWordLength = randomWord.length;
    displayWelcome();
    
       
    function game(){
        while(!flag){
            if(guessed >= randomWordLength){
                console.log('\x1b[31mCongratulations\x1b[0m, you have guessed the word');            
                let newAsterisksArray = asterisksArray.join('');
                console.log(newAsterisksArray);
                flag =1;
            }else if(guessed < randomWordLength && counter >0){
                aLetter = getLetterFromUser();
                if(!isValidLetter(aLetter)){
                    console.log('Please enter an English letter, not numbers nor signs');
                }else{
                    let indexes = findAllIndexes(aLetter);    
                    if(indexes.length > 0){
                        if(wasNotUsed()){
                            guessed +=indexes.length;
                            console.log('letter found in the word');
                            replaceLetterInAsterisks(indexes, asterisksArray);
                            let newAsterisksArray = asterisksArray.join('');
                            console.log(newAsterisksArray);
                        }else{//letter was used before
                            console.log('you have found this letter before, no need for typing it any more');            
                        }
                    }else{
                        console.log('\x1b[31m'+aLetter+'\x1b[0m is NOT in the word');
                        counter--;
                        console.log('You have '+counter+' tires left');
                    }
                }            
            }else if(counter ===0){
                throw Error("\x1b[31mYou have 0 attempts left, and you have not guessed the Word.\x1b[0m\n \x1b[33mGame Over\x1b[0m");
            }
          }
    }    
    function wasNotUsed(){
        if(usedLetters.indexOf(aLetter) === -1){ //letter was not used before
            usedLetters.push(aLetter);
            return true;
        }
    }
    function replaceLetterInAsterisks(array, asterisksArray){
        aLetter = aLetter.toLowerCase();
        for(let i=0; i < array.length; i++){
            asterisksArray[array[i]] = '\x1b[32m'+aLetter+'\x1b[0m';
        }        
    }
    function findAllIndexes(){
        let indexes = [];
        for(let i=0; i< randomWord.length; i++){
            if(randomWord[i].toUpperCase() === aLetter.toUpperCase() ){
                indexes.push(i);
            }
        }
        return indexes;        
    }
    function getLetterFromUser(){
        let aLetter = readlineSync.keyIn('Please enter one letter: \x1b[34m');
        console.log('\x1b[0m');        
        return aLetter;
    }
    function isValidLetter(bChar){
        return /^[A-Za-z]+$/.test(bChar);
    }
    function displayAsterisks(randomWordLength){
        for(let i=0; i < randomWordLength; i++){
            asterisksArray.push('*');
        }
        let newAsterisksArray = asterisksArray.join('');
        console.log(newAsterisksArray);
    }
    function getRandomWord(){
        let arrayLength = words.length;
        let randomWord = words[Math.floor(Math.random() * arrayLength - 1) + 1];
        //console.log('the randomWord is: ', randomWord);
        return randomWord.split('');
    }
    function displayWelcome(){
        figlet.text('HANG MAN!', {
            font: 'doh',
            horizontalLayout: 'default',
            verticalLayout: 'controlled smushing',
            width: 450,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);           
            displayAsterisks(randomWordLength);
            game();
        });
   
    }
//cd exercises
//node assignment3.js
})();