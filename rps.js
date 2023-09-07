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
let compScore = 0;
let playerScore = 0;
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (computerSelection==="rock") {
        if (playerChoice==="paper") {
            playerScore++;
            return "You win! Paper beats rock"
        }
        else if (playerChoice==="scissors") {
            compScore++;
            return "You lose! Rock beats scissors"
        }
        else return "It's a tie"
    }
    else if (computerSelection==="paper") {
        if (playerChoice==="rock") {
            compScore++;
            return "You lose! Paper beats rock"
        }
        else if (playerChoice==="scissors") {
            playerScore++;
            return "You win! Scissors beats paper"
        }
        else return "It's a tie"
        }
    else {
        if (playerChoice==="rock") {
            playerScore++;
            return "You win! Rock beats scissors"
        }
        else if (playerChoice==="paper") {
            compScore++;
            return "You lose! Scissors beats paper"
        }
        else return "It's a tie"
    }    
}

function game() {
   for (let i=0; i<5; i++) {
        const playerSelection = prompt("Choose rock, paper, or scissors: ");
        const computerSelection = getComputerChoice();
        console.log(`Player selects ${playerSelection}
Computer selects ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playerScore}   Computer Score: ${compScore}
----------`);
   }
}



game();