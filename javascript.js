let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0



// la computadora elige su resultado dependiendo de el numero generado aleatoriamente
function computerPlay() {
    if (Math.random() <= 0.33) {
        return "rock"
    } else if (Math.random() <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

let btnRock = document.querySelector("#rock").addEventListener("click", selectionRock)
let btnPaper = document.querySelector("#paper").addEventListener("click", selectionPaper)
let btnScissors = document.querySelector("#scissors").addEventListener("click", selectionScissors)


function selectionRock(){
    playerSelection = "rock"
     playARound(computerSelection)
}
function selectionPaper(){
    playerSelection = "paper"
     playARound(computerSelection)
}
function selectionScissors(){
    playerSelection = "scissors"
     playARound(computerSelection)
}

let divResult = document.querySelector("#results")




function crearDiv(resultado) {
    let resultados = document.createElement("div")
    resultados.textContent = resultado
    divResult.appendChild(resultados)
}



function playARound(computerSelection) {
    // se pregunta al jugador cual va a ser su eleccion y se define la eleccion de la computadora
    // con la funcion de arriba
    computerSelection = computerPlay()
    playerSelection
    // una vez definidas ambas variables se retorna el resultado dependiendo de las elecciones
    if (computerSelection === "rock" && playerSelection === "scissors") {
        (++computerScore)
        return crearDiv(`You Lose! ${computerSelection} beats ${playerSelection}`) 
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        (++computerScore)
        return crearDiv(`You Lose! ${computerSelection} beats ${playerSelection}`) 
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        (++computerScore)
        return crearDiv(`You Lose! ${computerSelection} beats ${playerSelection}`) 
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        (++playerScore)
        return crearDiv(`You WIN! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        (++playerScore)
        return crearDiv(`You WIN! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        (++playerScore)
        return crearDiv(`You WIN! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return crearDiv(`It's a tie: ${playerSelection} and ${computerSelection} are equal`)
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return crearDiv(`It's a tie: ${playerSelection} and ${computerSelection} are equal`)
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return crearDiv(`It's a tie: ${playerSelection} and ${computerSelection} are equal`)
    } else {
        // en caso de que el usuario no introduzca alguno de los valores dados se volvera a preguntar
        console.log("you must choose rock paper or scissors")
        return playARound(computerSelection)
    }
}

// // function game() {
// //     let cantidadDeRondas=5
// //     for (let i = 0; i < cantidadDeRondas ; i++) {
// //         console.log(playARound(playerSelection, computerSelection))

// //     }
// //     gameWinner (playerScore,computerScore)
// // }
// function gameWinner (playerScore,computerScore) {
//     if (playerScore > computerScore) {
//         console.log("you have won!! CONGRATULATIONS :D")
//     }else if (playerScore < computerScore){
//         console.log("you've lost :( better luck next time ")
//     }else {
//         console.log("it's a draw play again to find a winner")
//     }
// }

// // const buttons = document.querySelectorAll("button")
// // buttons.forEach(button => {
// //     button.addEventListener("click", playARound)

// // });
// const buttons = document.querySelectorAll("#boton")
// buttons.onclick = function(){
//     clickboton()
// }
// function clickboton(){
    
// buttons.onclick = playARound(computerSelection)
   
// }


// (++playerScore)
