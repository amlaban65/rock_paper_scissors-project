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
function playerPoint(computer, player) {
    playerScore++;
    const playersc = document.querySelector('.playerscore');
    playersc.textContent = parseInt(playerScore);
    const alert = document.querySelector('.alert');
    alert.textContent = `${player} beats ${computer}. You win!`
}
function computerPoint(computer, player) {
    computerScore++;
    const computersc = document.querySelector('.computerscore');
    computersc.textContent = parseInt(computerScore);
    const alert = document.querySelector('.alert');
    alert.textContent = `${computer} beats ${player}. You lose!`;
}
function tie() {
    const alert = document.querySelector('.alert');
    alert.textContent = "It's a tie!";
}
function playRound(computer, player) {
    if (playerScore == 5 || computerScore == 5) {
        const endMsg = document.querySelector('.endMsg');
        endMsg.textContent = (playerScore == 5) ? "You won!" : 
        "Computer wins. You lost!";
        (':button').prop('disabled', true); 
        alert("Play Again?");
        
    }
    player = player.toLowerCase()
    player = player.charAt(0).toUpperCase() + player.slice(1)
    if (computer == "Rock" && player == "Scissors") {
       computerPoint(computer, player);
    } else if (computer == "Rock" && player == "Paper") {
       playerPoint(computer, player);
    } else if (computer == "Rock" && player == "Rock") {
        tie();
    } else if (computer == "Scissors" && player == "Rock") {
       playerPoint(computer, player);
    } else if (computer == "Scissors" && player == "Paper") {
       computerPoint(computer, player);
    } else if (computer == "Scissors" && player == "Scissors") {
        tie();
    } else if (computer == "Paper" && player == "Scissors") {
        playerPoint(computer, player);
    } else if (computer == "Paper" && player == "Rock") {
      computerPoint(computer, player);
    } else if (computer == "Paper" && player == "Paper") {
        tie();
    } else {
        if (player != "Scissors" && player != "Rock" && player != "Paper") {
            return "Invalid input"
        }
    }
}
function playerPlay() {
   playRound(computerPlay(), this.id);
}
// function game() {
//     playerScore = 0
//     computerScore = 0
    
//     while (playerScore < 5 && computerScore < 5) {
//     }
//     let endMessage = (playerScore == 5) ? "You won!" : "Computer wins. You lost!"
//     console.log(endMessage)
// }

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playerPlay)
});



