// function playerPlay(){
//     let number = Math.floor(Math.random() * 3);
//     let final = number + 1;
    
//     if(final == 1){
//         return "Piedra"
//     }else if(final == 2){
//         return "Papel"
//     }else if(final == 3){
//         return "Tijera"
//     }
// }

let winner = '';
let empate = "Empate!";
let cpuWin = "Gana la CPU!";
let userWin = "Gana el User!"
let cpuScore = 0;
let userScore = 0;

function computerPlay(){
    let number = Math.floor(Math.random() * 3);
    let final = number + 1;

if(final == 1){
    return "Piedra"
}else if(final == 2){
    return "Papel"
}else if(final == 3){
    return "Tijera"
}

}

function playerPlay(){
    let selection = prompt("1, 2 o 3");
    let final;
    if(selection==1){
        final = "Piedra";
    }else if (selection==2){
        final = "Papel";
    }else if(selection==3){
        final = "Tijera";
    }
    return final
}

function playround(){

    let player = playerPlay();
    let cpu = computerPlay();


    if(player === cpu){
        winner = empate; 
        return winner
    }
    else if(
    player=="Tijera" && cpu=="Piedra" ||
    player=="Papel"  && cpu=="Tijera" ||
    player=="Piedra" && cpu=="Papel"  ) {

        winner = cpuWin; 
        return winner
    }
    else if(
    cpu=="Tijera" && player=="Piedra" ||
    cpu=="Papel"  && player=="Tijera" ||
    cpu=="Piedra" && player=="Papel"  ){
    
        winner = userWin; 
        return winner
        }
}

function game(){

    for(let i=0; i<5 ; i++){
        playround();
            
        if(winner == cpuWin){
            cpuScore += 1;
            console.log(cpuWin);
        }
        if(winner == userWin){
            userScore += 1;
            console.log(userWin);
        }
        if(winner == empate){
            console.log(empate);
        }

    console.log(cpuScore)
    console.log(userScore)
    }

    if(cpuScore<userScore){
        console.log("Has ganado contra la CPU! Felicitaciones")
    }
    if(cpuScore<userScore){
        console.log("La CPU ha ganado! Intenta de nuevo")
    }
}

const rock = document.querySelector('#Rock')
const paper = document.querySelector('#Paper')
const scissors = document.querySelector('#Scissors')

rock.addEventListener('click', () =>{
    "Piedra"
})
paper.addEventListener('click', () =>{
    "Papel"
})
scissors.addEventListener('click', () =>{
    "Tijera"
})