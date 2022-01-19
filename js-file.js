let playerSelection = 0;
let computerSelection = 0;
let empate = 'Empate!';
let cpuWin = 'La CPU Ha ganado! Intentalo de nuevo';
let userWin = 'Le ganaste a la CPU! Felicitaciones!';
let partidas = 0;
let userPoints = 0;
let cpuPoints = 0;
let juegos = prompt("Ingrese el numero de juegos")

const start = document.querySelector('#start')
const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')
start.addEventListener('click', inicio)

function inicio(){
    rock.addEventListener('click', playerRock)
    paper.addEventListener('click', playerPaper)
    scissors.addEventListener('click', playerScissors)
}

function computerPlay(){
    let number = Math.floor(Math.random() * 3) +1;
    return number;
}

function playround(){ 

    if(partidas<juegos){
        if(playerSelection === computerSelection){
            console.log(empate);
       }
       else if(
            playerSelection==3 && computerSelection==1 ||
            playerSelection==2 && computerSelection==3 ||
            playerSelection==1 && computerSelection==2  ) {
            cpuPoints = cpuPoints + 1;
            console.log(cpuWin);
        }
        else if(
            computerSelection==3 && playerSelection==1 ||
            computerSelection==2 && playerSelection==3 ||
            computerSelection==1 && playerSelection==2  ){
            userPoints = userPoints + 1;
            console.log(userWin);

        }
        partidas = partidas + 1;
    }

    if(partidas>=juegos){

        if(cpuPoints>userPoints){
            console.log("El juego ha terminado, la Cpu te ha vencido!")
        }else if(cpuPoints<userPoints){
            console.log("El juego ha terminado, le ganaste a la CPU! Felicitaciones")
        }else if(cpuPoints==userPoints){
            console.log("El juego ha terminado, empataste con la CPU!")
        }

    }
    
}

function playerRock(){
    playerSelection = 1;
    computerSelection = computerPlay();
    playround();
    console.log(partidas)
}

function playerPaper(){
    playerSelection = 2;
    computerSelection = computerPlay();
    playround();
    console.log(partidas)
}

function playerScissors(){
    playerSelection = 3;
    computerSelection = computerPlay();
    playround();
    console.log(partidas)
}






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