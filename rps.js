function getComputerChoice() {
    let randNum = (Math.floor(Math.random() * 3)); //random number from 0 to 2
    let compChoice;
    if (randNum === 0) {
        compChoice = "rock";
    }
    else if (randNum === 1) {
        compChoice = "paper";
    }
    else {
        compChoice = "scissors";
    }
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (computerSelection==="rock") {
        if (playerSelection==="paper") {
            return "You win! Paper beats rock"
        }
        else if (playerSelection==="scissors") {
            return "You lose! Rock beats scissors"
        }
        else return "It's a tie"
    }
    else if (computerSelection==="paper") {
        if (playerSelection==="rock") {
            return "You lose! Paper beats rock"
        }
        else if (playerSelection==="scissors") {
            return "You win! Scissors beats paper"
        }
        else return "It's a tie"
        }
    else {
        if (playerSelection==="rock") {
            return "You win! Rock beats scissors"
        }
        else if (playerSelection==="paper") {
            return "You lose! Scissors beats paper"
        }
        else return "It's a tie"
    }    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(`Computer selects ${computerSelection}`)

console.log(playRound(playerSelection,computerSelection))