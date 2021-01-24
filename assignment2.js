(function (){
    'use strict';
    const readlineSync = require('readline-sync');

    let player ={
        name:"p1",
        balance: 50,
        bet: 0
    }
    //console.log(player.name, player.balance);
    let player1_Balance=50;
    let computer_Balance=50;
    let computerBetValue = 0;
    let player1Card = 0;
    let computerCard = 0;    
    let shapes= ['\x1b[31m\x1b[47m \u2665 \x1b[0m','\x1b[30m\x1b[47m \u2663 \x1b[0m','\x1b[31m\x1b[47m \u2666 \x1b[0m','\x1b[30m\x1b[47m \u2660 \x1b[0m'];
    console.log('heart:\x1b[31m \u2665 \x1b[0m  club:\x1b[30m\x1b[47m \u2663 \x1b[0m, Diamond:\x1b[31m \u2666 \x1b[0m spade: \x1b[30m\x1b[47m \u2660 \x1b[0m');1
    welcomeLogo();
    let Player1 = readlineSync.question('\nPlease enter your name:\x1b[34m ');
    console.log('\x1b[0m Hello \x1b[34m'+Player1+'\x1b[0m, You currently have 50 ILS ');      
    game();

    function game(){
        let player1_Bet = readlineSync.question('\nPlace your bet for the next round: 1 to '+player1_Balance+': \x1b[32m');
        console.log('\x1b[0m');
        player1_Bet = parseInt(player1_Bet);        
        if(isValidBet(player1_Bet, player1_Balance)){
            computerBetValue = computerBet();
            //console.log('computer Bet: '+computerBetValue);
            //draw user's and computer's cards
            player1Card = randomizeCard();
            computerCard = randomizeCard();
            console.log('Player 1 card: ' + player1Card +' '+randomShape()+ ' \x1b[35mVS\x1b[0m Computer card: '+ computerCard +' '+randomShape1());

            if(didUserWon(player1Card, computerCard)){// if user won
                computer_Balance -= computerBetValue;
                player1_Balance += computerBetValue;
                //console.log('Player balance: \x1b[33m'+ player1_Balance +'\x1b[0m');
                console.log('User WON :) \nUser balance: \x1b[33m'+ player1_Balance +'\x1b[0m');
                anotherRound();
            }else if(player1Card == computerCard){//if they are equal
                console.log('You both got equal cards. Another round maybe?! \n Balances were NOT changed');//                
            }else {//if computer won
                player1_Balance -= player1_Bet;
                computer_Balance += player1_Bet;
                console.log('Computer WON, user balance: '+ player1_Balance);
                console.log('computer balance: '+ computer_Balance);//
                if(!isUserBroke()){
                    anotherRound();
                }
            }       
        }//END isValidBet
    }

    function randomizeCard(){
        return Math.floor(Math.random() * 12) + 1;
    }
    function computerBet(){
        return Math.floor(Math.random() * 50) + 1;
    }
    function didUserWon(){
        if(player1Card > computerCard){           
            return true;
        }
    }
    function isUserBroke(){
        if(player1_Balance <0){
            console.log('You are broke');
            console.log('Game Over!');
            return;
        }
    }
    function anotherRound(){        
        let anotherRoundGame = readlineSync.question('\nWhat would you like to do? \n1. Play another round. \n2. Leave with my money :-) \n');
        anotherRoundGame=parseInt( anotherRoundGame);
        if(!isNaN(anotherRoundGame)){
            if(anotherRoundGame ==1 ){
                game();
            }else if(anotherRoundGame ==2){
                console.log('Your balance is: \x1b[38m'+player1_Balance +'\x1b[0m Good Bye');
            }else{
                return;
            }
        }
    }

    function isValidBet(bet, balance){ //test between 1 to 50 & if fits balance
        if(!isNaN(bet)){
            if(bet > 50){
                console.log('I said between 1 to 50. and you typed \x1b[42m\x1b[30m'+bet+'\x1b[0m. \n Thank you Good Bye');
                return false;
            }else if(bet < 0){
                console.log('Your bet is negative! \nPlease take it seriously');
                return false;
            }else if(bet > balance){
                console.log('You are short in balance');
                return false;
            }
        }else
            console.log('bet is good');
            return true;
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
//node assignment2.js
})();

