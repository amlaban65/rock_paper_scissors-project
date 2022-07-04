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
    alert.textContent = `${player} beats ${computer}. You get a point!`
}
function computerPoint(computer, player) {
    if (playerScore == 5 || computerScore == 5) {
        const endMsg = document.querySelector('.endMsg');
        endMsg.textContent = (playerScore == 5) ? "You won!" : 
        "Computer wins. You lost!";
        alert("Play Again?");
    }
    computerScore++;
    const computersc = document.querySelector('.computerscore');
    computersc.textContent = parseInt(computerScore);
    const alert = document.querySelector('.alert');
    alert.textContent = `${computer} beats ${player}. Computer gets a point!`;
}
function tie() {
    const alert = document.querySelector('.alert');
    alert.textContent = "It's a tie!";
}
function playRound(computer, player) {
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
    if (playerScore == 5 || computerScore == 5) {
        const buttons = document.querySelectorAll("Button").disabled=true;
        const buttonsArr = Array.from(buttons);
        buttonsArr.forEach((button) => button.disabled=True);
        const endMsg = document.querySelector('.endMsg');
        endMsg.textContent = (playerScore == 5) ? "You won!" : 
        "Computer wins. You lost!";
        const playAgaindiv = document.querySelector('.playAgain');
        const playAgain = document.createElement('button');
        playAgain.style.cssText = 
        `
                font-family: Helvetica, Arial, sans-serif;
                font-weight: 600;
                background-color: rgba(255, 255, 0, 0.47);
                border: 2px, solid, white;
                width: 150px;
                height: 80px;
                border-radius: 20px;
                color: rgb(26, 26, 26);
                font-size: large;
                transition-duration: 0.4s;
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        `
        playAgain.textContent = 'Play Again?';
        playAgain.id = 'playAgainButton';
        playAgaindiv.appendChild(playAgain);
        // const playAgainbutton = document.querySelectorAll('button.playAgain');
        playAgain.addEventListener('click', reset)

    } else {
   playRound(computerPlay(), this.id);
    }
}
function reset() {
    playerScore = 0;
    computerScore = 0;
    const computersc = document.querySelector('.computerscore');
    computersc.textContent = parseInt(computerScore);
    const playersc = document.querySelector('.playerscore');
    playersc.textContent = parseInt(playerScore);
    const endMsg = document.querySelector('.endMsg');
    endMsg.textContent = "";
    const playAgaindiv = document.querySelector('.playAgain');
    const playAgainbutton = document.getElementById('playAgainButton');
    playAgaindiv.removeChild(playAgainbutton);
    const alert = document.querySelector('.alert');
    alert.textContent = "";

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




