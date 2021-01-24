(function (){
    'use strict';
    const readlineSync = require('readline-sync');
    
    let kashrutLemehadrinFoods = ["Sfenj", "Khachapuri", "Shakshuka", "Burika", "Babka"];
    let not_kashrutLemehadrinFoods = ["Sabich", "Ful", "Falafel", "Hummus", "Shawarma"];
    let notKasherFoods =["Jerusalem mixed grill", "Kubba seleq", "Shashlik", "Skewered Goose Liver", "Merguez", "Moussaka", "Schnitzel"];

    let numOfDinners = readlineSync.question('\nHow many dinners will be dinning with you? '); 
    if(!isNaN(numOfDinners)){
        numOfDinners = parseFloat(numOfDinners);
        if(Number.isInteger(numOfDinners)){
            if(numOfDinners > 0){
                let isKosher = readlineSync.question('Should the resturant be Kosher? Y/N ');
                if(isKosher.toUpperCase() === 'Y'){
                    let kashrutLemehadrin = readlineSync.question('Should the resturant be with kashrut Lemehadrin? Y/N ');
                    if(kashrutLemehadrin.toUpperCase() == 'Y'){
                        let myChoice = readlineSync.keyInSelect(kashrutLemehadrinFoods, 'Which kasher Lemehadrin food would like to have? ');
                        if(myChoice >= 0){                            
                            console.log('Thank you, since you are '+ numOfDinners +' dinners, you would like to have Kasher Lemehadrin foods, and you want to eat ' +kashrutLemehadrinFoods[myChoice]+ '!, you should dine in Taizu resturant');
                        }else{
                            console.log('OK, You chose to Cancel. \nThank you and Good Bye');
                        }                        
                    }else if(kashrutLemehadrin.toUpperCase() == 'N'){
                        let myChoice = readlineSync.keyInSelect(not_kashrutLemehadrinFoods, 'Which none kasher Lemehadrin food would like to have? ');
                        if(myChoice >= 0){
                            console.log('Thank you, since you are '+ numOfDinners +' dinners, you would like to have none Kasher Lemehadrin foods, and you want to eat ' +not_kashrutLemehadrinFoods[myChoice]+ '!, you should dine in Mezcal resturant');
                        }else{
                            console.log('OK, You chose to Cancel. \nThank you and Good Bye');
                        }                        
                    }else{
                        throw Error('you have input wrong input!, it was a Yes/No question. Thank you, Good Bye');
                    }
                }else if(isKosher.toUpperCase() == 'N'){
                    let myChoice = readlineSync.keyInSelect(notKasherFoods, 'Which not kasher food would like to have? ');
                    if(myChoice >= 0){
                        console.log('Thank you, since you are '+ numOfDinners +' dinners, you would like to have none Kasher food, and you want to eat ' +notKasherFoods[myChoice]+ '!, you can eat anywhere you like, i recommend Yafo street resturants');
                    }else{
                        console.log('OK, You chose to Cancel. \nThank you and Good Bye');
                    }                    
                }else{
                    throw Error('you have input wrong input!, it was a Yes/No question. Thank you, Good Bye\n');
                } 
                //--------
            }else{
                throw Error('you should have input a number greater than 0 diners, Thank you and Good Bye\n');                
            }
        }else{
            throw Error('\"' +numOfDinners+'\" cannot be number of diners, wrong input. \nThank you and Good Bye\n');
        }
    }else{
        throw Error('\"' +numOfDinners+'\" cannot be number of diners, wrong input. \nThank you and Good Bye\n');  
    }
})();

