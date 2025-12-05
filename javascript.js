let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

/* Unused in button version, but kept for reference
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
*/

function playRound (computerChoice, humanChoice) {
   computerChoiceDiv.textContent = `Computer choice: ${computerChoice}`;
   humanChoiceDiv.textContent = `Your choice: ${humanChoice}`;
   let outcomeMessage = "";

    if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
        outcomeMessage = "Computer wins! Paper beats Rock.";
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore++;
        outcomeMessage = "Computer wins! Rock beats Scissors.";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        outcomeMessage = "Computer wins! Scissors beats Paper.";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        outcomeMessage = "You win! Paper beats Rock.";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        outcomeMessage = "You win! Rock beats Scissors.";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        outcomeMessage = "You win! Scissors beats Paper.";
    } else {
        outcomeMessage = "It's a tie!";
    }

    outcomeDiv.textContent = `Outcome: ${outcomeMessage}`;
    resultDiv.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;

    // Check for game end
    if (humanScore === 5) {
        alert("Congratulations! You reached 5 points and won the game!");
        humanScore = 0;
        computerScore = 0;
        resultDiv.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;
    } else if (computerScore === 5) {
        alert("Computer reached 5 points and won the game! Better luck next time.");
        humanScore = 0;
        computerScore = 0;
        resultDiv.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;
    }
} 

// Create buttons and display areas
const scissorsButton = document.createElement('button');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');

scissorsButton.textContent = 'Scissors';
rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';

document.body.appendChild(scissorsButton);
document.body.appendChild(rockButton);
document.body.appendChild(paperButton);

// Create display areas
const computerChoiceDiv = document.createElement('div');
computerChoiceDiv.textContent = 'Computer Choice: ';
document.body.appendChild(computerChoiceDiv);

const humanChoiceDiv = document.createElement('div');
humanChoiceDiv.textContent = 'Your Choice: ';
document.body.appendChild(humanChoiceDiv);

const outcomeDiv = document.createElement('div');
outcomeDiv.textContent = 'Outcome: ';
document.body.appendChild(outcomeDiv);

// Add event listeners to buttons
scissorsButton.addEventListener('click', (event) => {
    let computerChoice = getComputerChoice();
    let humanChoice = 'Scissors';
    playRound(computerChoice, humanChoice);
});

rockButton.addEventListener('click', (event) => {
    let computerChoice = getComputerChoice();
    let humanChoice = 'Rock';
    playRound(computerChoice, humanChoice);
});

paperButton.addEventListener('click', (event) => {
    let computerChoice = getComputerChoice();
    let humanChoice = 'Paper';
    playRound(computerChoice, humanChoice);
});

// Initial score display
const resultDiv = document.createElement('div');
resultDiv.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;
document.body.appendChild(resultDiv);
