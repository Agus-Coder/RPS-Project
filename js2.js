let playerSelection = 0;
let computerSelection = 0;
let empate = 'Empate!';
let cpuWin = 'La CPU Ha ganado! Intentalo de nuevo'
let playerWin = 'Le ganaste a la CPU! Felicitaciones!'

function computerPlay(){
    let number = Math.floor(Math.random() * 3) +1;
    return number;
}

function playround(){

    if(playerSelection === computerSelection){
        return empate;
    }
    else if(
        playerSelection==3 && computerSelection==1 ||
        playerSelection==2 && computerSelection==3 ||
        playerSelection==1 && computerSelection==2  ) {

        return cpuWin
    }
    else if(
        computerSelection==3 && playerSelection==1 ||
        computerSelection==2 && playerSelection==3 ||
        computerSelection==1 && playerSelection==2  ){

        return userWin
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


