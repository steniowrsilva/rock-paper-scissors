function getComputerChoice () {
    // it'll return Rock, Paper or Scissors
    let randomNumber = Math.floor(Math.random()*9);
    if (randomNumber < 3) {
        return "rock";
    } else if ( randomNumber > 3 && randomNumber < 9) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    // returns a string that declares the winner of
    // the round like so: "You Lose! paper beats Rock".
    let player = playerSelection.toLowerCase();
    if (player === "rock") {
        switch (computerSelection) {
            case "rock":
                return "Tie!";
            case "paper":
                return "You lose!";
            case "scissors":
                return "You win!";
        }
    } else if (player === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You win!";
            case "paper":
                return "Tie!";
            case "scissors":
                return "You lose!";
        }
    } else {
        switch (computerSelection) {
            case "rock":
                return "You lose!";
            case "paper":
                return "You win!";
            case "scissors":
                return "Tie!";
        }
    }
    
}

function game() {
    for (let i=0; i < 5; i++) {
        
    }
}
