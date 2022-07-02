let playerScore = 0
let computerScore = 0
function computerPlay() {
    let random = Math.random()
    if (random <= 0.33) {
        return "Rock"
    } else if (random >= 0.34 && random <= 0.66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
function playRound(computer, player) {
    player = player.toLowerCase()
    player = player.charAt(0).toUpperCase() + player.slice(1)
    if (computer == "Rock" && player == "Scissors") {
        computerScore++;
        return `${computer} beats ${player}. You lose!`
    } else if (computer == "Rock" && player == "Paper") {
        playerScore++;
       return `${player} beats ${computer}. You win!`
    } else if (computer == "Rock" && player == "Rock") {
        return "It's a tie!"
    } else if (computer == "Scissors" && player == "Rock") {
       playerScore++;
      return `${player} beats ${computer}. You win!`
    } else if (computer == "Scissors" && player == "Paper") {
        computerScore++;
        return `${computer} beats ${player}. You lose!`
    } else if (computer == "Scissors" && player == "Scissors") {
        return "It's a tie!"
    } else if (computer == "Paper" && player == "Scissors") {
       playerScore++;
      return `${player} beats ${computer}. You win!`
    } else if (computer == "Paper" && player == "Rock") {
        computerScore++;
        return `${computer} beats ${player}. You lose!`
    } else if (computer == "Paper" && player == "Paper") {
        return "It's a tie"
    } else {
        if (player != "Scissors" && player != "Rock" && player != "Paper") {
            return "Invalid input"
        }
    }
}
function game() {
    playerScore = 0
    computerScore = 0
    while (playerScore < 5 && computerScore < 5) {
        let player = prompt("Rock, paper, scissors?")
        console.log(playRound(computerPlay(), player))
    }
    let endMessage = (playerScore == 5) ? "You won!" : "Computer wins. You lost!"
    console.log(endMessage)
}