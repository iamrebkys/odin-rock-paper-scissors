let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissors:");
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Invalid input. Please try again.");
        return getHumanChoice();
    }
}

function playRound (computerChoice, humanChoice) {
    console.log("Computer choice: " + computerChoice);
    console.log("User choice: " + humanChoice);
    if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        return "Computer wins! Paper beats Rock.";
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        return "Computer wins! Rock beats Scissors.";
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        return "Computer wins! Scissors beats Paper.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats Scissors.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper.";
    } else {
        return "It's a tie!";
    }
} 

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(playRound(computerChoice, humanChoice));
        console.log("Score - You: " + humanScore + " Computer: " + computerScore);
        console.log("-------------------------");
    }
}

playGame();