let playerSelection = 0;
let computerSelection = 0;
let empate = 'Empate!';
let cpuWin = 'La CPU Ha ganado! Intentalo de nuevo'
let userWin = 'Le ganaste a la CPU! Felicitaciones!'

const start = document.querySelector('#start')
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')



function computerPlay(){
    let number = Math.floor(Math.random() * 3) +1;
    return number;
}

function playround(){

    if(playerSelection === computerSelection){
        console.log(empate);
    }
    else if(
        playerSelection==3 && computerSelection==1 ||
        playerSelection==2 && computerSelection==3 ||
        playerSelection==1 && computerSelection==2  ) {

            console.log(cpuWin)
    }
    else if(
        computerSelection==3 && playerSelection==1 ||
        computerSelection==2 && playerSelection==3 ||
        computerSelection==1 && playerSelection==2  ){

            console.log(userWin)
        }
}

function playerRock(){
    playerSelection = 1;
    computerSelection = computerPlay();
    playround();
}

function playerPaper(){
    playerSelection = 2;
    computerSelection = computerPlay();
    playround();
}

function playerScissors(){
    playerSelection = 3;
    computerSelection = computerPlay();
    playround();
}

function inicio(){
    rock.addEventListener('click', playerRock)
    paper.addEventListener('click', playerPaper)
    scissors.addEventListener('click', playerScissors)
}

start.addEventListener('click', inicio)


// function game(){

//     for(let i=0; i<5 ; i++){
//         playround();
            
//         if(winner == cpuWin){
//             cpuScore += 1;
//             console.log(cpuWin);
//         }
//         if(winner == userWin){
//             userScore += 1;
//             console.log(userWin);
//         }
//         if(winner == empate){
//             console.log(empate);
//         }

//     console.log(cpuScore)
//     console.log(userScore)
//     }

//     if(cpuScore<userScore){
//         console.log("Has ganado contra la CPU! Felicitaciones")
//     }
//     if(cpuScore<userScore){
//         console.log("La CPU ha ganado! Intenta de nuevo")
//     }
// }