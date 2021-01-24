(function (){
    'use strict';
    const readlineSync = require('readline-sync');
    let theAnvengers = [
        {
            "name":"THE HULK",
            "score" : 0
        },
        {
            "name": "BLACK WIDOW",
            "score": 0
        },
        {
            "name": "IRON MAN",
            "score": 0
        },
        {
            "name": "THOR",
            "score": 0
        }  
    ];
    let questions = [  
        "WHAT SI YOUR BIGGEST FLAW?",
        "WITCH SKILL DO YOU MIST VALUE THAT SEPARATES YOU FROM OTHERS?",
        "WHAT MOTIVATES YOU MOST?",
        "WHAT'S YOUR FAVOURATE OLYMPIC SPORT?",
        "WHAT'S YOU FAVOURATE CLASS IN SCHOOL?",
        "WHAT IS YOUR BEST FEATURE?",
        "IT'S LOOKING BAD, AND THE ENEMY IS GAINING QUICK.. WHAT DO YOU DO?",
        "DESCRIBE YOUR PERSONAL STYLE?",
        "WHAT HEIGHT IS MOST SUITED TO YOU?",
        "WHERE ARE YOU ON A GENERAL SATURDAY NIGHT?",
        "WHICH WEAPON WOULD YOU LIKE MOST?",
        "HOW WOULD YOU LIKE BEST DESCRIBE YOUR PERSONALITY?",
        "WHAT DID YOU PLAY WITH WHE YOU WERE YOUNGER?",
        "HOW BEST WOULD YOU DESCRIBE YOUR ABILITY TO WORK WITH OTHERS?"        
    ];    
    let answers = [
        [
            "Beinga loner",
            "Perfectionist",
            "My temper",
            "Multi-tasking"
        ],
        [
            "Manipulation",
            "Leadership",
            "Perseverance",
            "Intelligence"
        ],
        [
            "Make up for the past",
            "To cure",
            "Being the lead in innovation",
            "Peacekeeping"
        ],
        [
            "High jump",
            "Gymnastics",
            "Weight lifting",
            "The Hammer"
        ],
        [
            "Astronomy",
            "Politics",
            "History",
            "Physics"
        ],
        [
            "My foresight",
            "My wit",
            "My mind",
            "My compassion"
        ],
        [
            "Plan the battle and lead the team",
            "Direct the fight away from civilians",
            "Rally the enemy, lead them into a trap",
            "Create a diversion and use it to our advantage"
        ],
        [
            "Loose fitting and ragged",
            "Comat ready",
            "Efficient and practial",
            "Formal"
        ],
        [
            "5'10",
            "6'4",
            "6'5",
            "6'3"
        ],
        [
            "Shooting range",
            "In the gym",
            "Home alone",
            "Working late"
        ],
        [
            "Temper",
            "A team",
            "Shield",
            "Bow and arrow"            
        ],
        [
            "Noble",
            "Calculated",
            "Lone wolf",
            "Split"
        ],
        [
            "Action figures",
            "Computers",
            "Board games",
            "Spay set"
        ],
        [
            "On my own - It's all about me",
            "Team player all the way",
            "Best as a mentor",
            "Team motivator"
        ]
    ];
    
    console.log('\n\n////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ \n            Hello! Welcome to the Avengers quiz');
    console.log('         Lets discover which avenger you would be?\n');
    console.log('         -----------------------------------------');
for(let i=0; i < questions.length; i++){
    let myChoice = readlineSync.keyInSelect(answers[i], questions[i]);
    switch( i % 2 ){
        case 0:
            {
                switch(myChoice + 1){
                    case 1:
                        theAnvengers[2].score +=10;
                        break;
                    case 2:
                        theAnvengers[1].score +=24;
                        break;
                    case 3:
                        theAnvengers[0].score +=17;
                        break;
                    case 4:
                        theAnvengers[3].score +=24;
                        break;
                }
            }
        break;
        case 1:
            {
                switch(myChoice + 1){
                    case 1:
                        theAnvengers[1].score +=23;
                        break;
                    case 2:
                        theAnvengers[3].score +=25;
                        break;
                    case 3:
                        theAnvengers[0].score +=18;
                        break;
                    case 4:
                        theAnvengers[2].score +=17;
                        break;
                }
            }
    }

}

console.log('\n~~~~~~~~~~~~~Quiz results~~~~~~~~~~~~~\n');
for(let i=0; i< theAnvengers.length; i++){
    console.log('You have '+theAnvengers[i].score+'% likely to be '+theAnvengers[i].name);
}
console.log('\n\n');
//assignment1.js
})();