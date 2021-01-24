(function (){
    'use strict';
    const readlineSync = require('readline-sync');

    let player1_Balance=50;
    let player2_Balance=50;
    let player1Card = 0;
    let player2Card = 0;
    let player1_Bet = 0;
    let player2_Bet = 0;
    let shapes= ['\x1b[31m\x1b[47m \u2665 \x1b[0m','\x1b[30m\x1b[47m \u2663 \x1b[0m','\x1b[31m\x1b[47m \u2666 \x1b[0m','\x1b[30m\x1b[47m \u2660 \x1b[0m'];
    //console.log('heart:\x1b[31m \u2665 \x1b[0m  club:\x1b[30m\x1b[47m \u2663 \x1b[0m, Diamond:\x1b[31m \u2666 \x1b[0m spade: \x1b[30m\x1b[47m \u2660 \x1b[0m');1
    welcomeLogo();
    let Player1 = readlineSync.question('\nPlease enter your name player1:\x1b[34m ');
    console.log('\x1b[0m Hello \x1b[34m'+Player1+'\x1b[0m, You currently have 50 ILS ');      
    let Player2 = readlineSync.question('\nPlease enter your name player2:\x1b[34m ');
    console.log('\x1b[0m Hello \x1b[34m'+Player2+'\x1b[0m, You currently have 50 ILS ');      
    game();

    function game(){
        player1_Bet = getPlayerBet(Player1, player1_Balance);
        player2_Bet = getPlayerBet(Player2, player2_Balance);
        if(isValidBet(Player1, player1_Bet, player1_Balance)){
            if(isValidBet(Player2, player2_Bet, player2_Balance)){
                player1Card = randomizeCard();
                player2Card = randomizeCard();
                printResults(player1Card, player2Card);
                whichUserWon(player1Card, player2Card);
            }
        }//END isValidBet
    }
    function getPlayerBet(player, playerBalance){
        let player_Bet = readlineSync.question('\x1b[34m'+ player +'\x1b[0m place your bet for the next round: 1 to '+playerBalance+': \x1b[32m');
        console.log('\x1b[0m');
        if(!isNaN(player_Bet)){
            if(player_Bet <= 0){
                player_Bet = parseInt(player_Bet);
                return player_Bet;
            }else{
                throw Error('\x1b[34m'+player+'\x1b[0m, Your bet is negative! \nPlease take it seriously');
            }            
        }else{
            throw Error("this is not a bet at all");            
        }
    }
    function isValidBet(player, bet, balance){        
        if(!isNaN(bet)){
            bet = parseFloat(bet);
            if(typeof(bet) === "number"){
                if(Number.isInteger(bet)){
                    console.log(bet);
                    if(bet > balance){
                        console.log('I said between 1 to '+balance+' \x1b[34m'+player+'\x1b[0m. and you typed \x1b[42m\x1b[30m'+bet+'\x1b[0m. \n Thank you Good Bye');
                        return false;
                    }else if(bet < 0){
                        console.log('\x1b[34m'+player+'\x1b[0m, Your bet is negative! \nPlease take it seriously');
                        return false;
                    }else if(isNaN(bet)){
                        console.log('\x1b[34m'+player+'\x1b[0m, You cannot bet that!');
                        return false;            
                    }else
                        console.log('bet is good');
                        return true;
                }//
            }else{
                console.log('\x1b[34m'+player+'\x1b[0m, You cannot bet that!');
            }            
        }else{
            console.log('\x1b[34m'+player+'\x1b[0m, You cannot bet that!');
        }            
            
    }
    function printResults(){
        console.log('Player1 card: ' + player1Card +' '+randomShape()+ ' \x1b[35mVS\x1b[0m Player2 card: '+ player2Card +' '+randomShape1());
    }
    function randomizeCard(){
        return Math.floor(Math.random() * 12) + 1;
    }
    function whichUserWon(player1, player2){
        if(player1 > player2){
            player2_Balance -= player2_Bet;
            player1_Balance += player2_Bet;
            console.log('Player1 WON');
            console.log('Player1 balance: \x1b[33m'+ player1_Balance +'\x1b[0m');
            console.log('Player2 balance: \x1b[33m'+ player2_Balance +'\x1b[0m');
            if(!isUserBroke(player2_Balance, Player2)){
                anotherRound();
            }                        
        }else if(player1 < player2){
            player1_Balance -= player1_Bet;
            player2_Balance += player1_Bet;
            console.log('Player2 WON');
            console.log('Player1 balance: \x1b[33m'+ player1_Balance +'\x1b[0m');
            console.log('Player2 balance: \x1b[33m'+ player2_Balance +'\x1b[0m');
            if(!isUserBroke(player1_Balance, Player1)){
                anotherRound();
            }       
        }else{
            console.log('You both got equal results :)');
            anotherRound();
        }
    }
    function isUserBroke(balance, player){
        if(balance <= 0){
            console.log('\x1b[34m'+ player +'\x1b[0m, You are broke');
            console.log('Game Over!');
            process.exit();
        }
    }
    function anotherRound(){        
        let anotherRoundGame = readlineSync.question('\nWhat would you like to do? \n1. Play another round. \n2. Leave with my money :-) \n');        
        if(!isNaN(anotherRoundGame)){
            anotherRoundGame=parseInt( anotherRoundGame);
            if(anotherRoundGame ==1 ){
                game();
            }else if(anotherRoundGame ==2){
                console.log('Player1 balance: \x1b[33m'+ player1_Balance +'\x1b[0m');
                console.log('Player2 balance: \x1b[33m'+ player2_Balance +'\x1b[0m');
                console.log('Good Bye');
                return;
            }else{
                console.log('What is wrong with 1 and 2?! :)');
                process.exit();
            }
        }else{
            console.log('That\'s not a number, What is wrong with 1 and 2?! :)');
            process.exit();
        }
    }
    function randomShape(){
        return shapes[Math.floor(Math.random() * 3) + 0];
    }
    function randomShape1(){//this function was added to try to get different random number than before        
        return shapes[Math.floor(Math.random() * 3) + 0];
    }    
    function welcomeLogo(){
        console.log('                           \x1b[32m             _________________');
        console.log('                                       |"""""""""""""""""|===============[]');
        console.log('                                      /______________ג4___\\_______');
        console.log('                                     |==+=========================\\');
        console.log('                                     |_____________________________|');
        console.log('                                      \\(@)(@)(@)(@)(@)(@)(@)(@)(@)/');
        console.log('                                       ***************************\x1b[0m');    
        console.log('                                    \x1b[34m********* Wellcome to WAR *********\x1b[0m');
    }
//cd exercises
//node assignment2_2player.js
})();

