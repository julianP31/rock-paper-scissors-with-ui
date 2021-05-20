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
    showScore()
    gameWinner()
})
let btnPaper = document.querySelector("#paper").addEventListener("click", function (e) {
    playerSelection = "paper"
    playARound()
    showScore()
    gameWinner()
})
let btnScissors = document.querySelector("#scissors").addEventListener("click", function (e) {
    playerSelection = "scissors"
    playARound()
    showScore()
    gameWinner()
})
function createDiv(resultado) {
    let divResult = document.querySelector("#results")
    let resultados = document.createElement("div")
    resultados.className = "resultados"
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
        return createDiv(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        (++computerScore)
        return createDiv(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        (++computerScore)
        return createDiv(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        (++playerScore)
        return createDiv(`You WIN! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        (++playerScore)
        return createDiv(`You WIN! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        (++playerScore)
        return createDiv(`You WIN! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection === computerSelection) {
        return createDiv(`It's a tie: ${playerSelection} and ${computerSelection} are equal`)
    }
}
function showScore() {
    document.querySelector("#player-score").textContent = `player score: ${playerScore}`
    document.querySelector("#computer-score").textContent = `computer score: ${computerScore}`
}
function deleteResults() {
    const $results = document.querySelectorAll('.resultados');
    for (let i = 0; i < $results.length; i++) {
        $results[i].remove();
    }
}
function gameWinner() {
    if (playerScore === 5) {
        deleteResults()
        finishGame()
        showWinner("you have won, congratulations! ")
        playaAgainBTN()

    }
    else if (computerScore === 5) {
        deleteResults()
        finishGame()
        showWinner("you have lost :( better luck in the next game")
        playaAgainBTN()
    }
}
function showWinner(resultado) {
    let result = document.querySelector("#results")
    let div = document.createElement("div")
    div.textContent = resultado
    div.className = "ganador"
    let containerResult = document.querySelector("#container-result")
    let button = document.createElement("button")
    button.textContent = "play again"
    button.className = "play-again"
    button.style = "margin-left: 30%; margin-top: 20px;"
    containerResult.appendChild(button)
    result.appendChild(div)
}
function finishGame() {
    let botones = document.querySelectorAll(".boton")
    for (let i = 0; i < botones.length; i++) {
        botones[i].className = "oculto";
    }
}
function playaAgainBTN() {
    document.querySelector(".play-again").addEventListener("click", function (e) {
        reset()
    })
}
function reset() {
    playerScore = 0
    computerScore = 0
    showScore()
    deleteResults()
    restartGame()
    deleteWinner()
    deletePlayAgain()
}

function restartGame() {
    let botones = document.querySelectorAll(".oculto")
    for (let i = 0; i < botones.length; i++) {
        botones[i].className = "boton";
    }
}
function deleteWinner() {
    let $ganador = document.querySelector(".ganador")
    $ganador.remove()
}
function deletePlayAgain() {
    let $playAgain = document.querySelector(".play-again")
    $playAgain.remove()
}

