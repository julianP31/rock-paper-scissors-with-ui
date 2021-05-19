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

let btnRock = document.querySelector("#rock").addEventListener("click", function (e) {
    playerSelection = "rock"
    playARound()
    MostrarScore()
    gameWinner()
})
let btnPaper = document.querySelector("#paper").addEventListener("click", function (e) {
    playerSelection = "paper"
    playARound()
    MostrarScore()
    gameWinner()
})
let btnScissors = document.querySelector("#scissors").addEventListener("click", function (e) {
    playerSelection = "scissors"
    playARound()
    MostrarScore()
    gameWinner()
})

function crearDiv(resultado) {
    let divResult = document.querySelector("#results")
    let resultados = document.createElement("div")
    resultados.textContent = resultado
    divResult.appendChild(resultados)
}



function playARound() {
    // se pregunta al jugador cual va a ser su eleccion y se define la eleccion de la computadora
    // con la funcion de arriba
    computerSelection = computerPlay()
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
    } else if (playerSelection === computerSelection) {
        return crearDiv(`It's a tie: ${playerSelection} and ${computerSelection} are equal`)
    }
}

function MostrarScore() {
    document.querySelector("#player-score").textContent = playerScore
    document.querySelector("#computer-score").textContent = computerScore
}

function gameWinner() {
    if (playerScore === 5) {
        mostrarGanador("you have won, congratulations! ")
    }
    else if (computerScore === 5) {
        mostrarGanador("you have lost :( better luck in the next game")
    }
}
function mostrarGanador(resultado) {
    document.querySelector("#winner").textContent = resultado
}

