function getComputerChoice() {
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

    let winner = 0;
    let loser = 0;
    let tie = 0;

    for (let i=0; i < 5; i++) {
        const playerSelection = prompt("What is your choice?");
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        switch (result) {
            case "You win!":
                console.log(`You win! 
                             ${playerSelection} beats ${computerSelection}`);
                winner++;
            break;

            case "You lose!":
                console.log(`You lose! 
                            ${computerSelection} beats ${playerSelection}`);
                loser++;
            break;

            default:
                console.log(`Tie!
                             both chose ${computerSelection}`);
                tie++;
        }

    }

    if (tie%2 === 0) {
        if (winner>loser) {
            console.log("YOU ARE THE WINNER!");
        } else {
            console.log("YOU ARE THE LOSER!");
        }
    } else {
        if (winner>loser) {
            console.log("YOU ARE THE WINNER!");
        } else if (winner<loser){
            console.log("YOU ARE THE LOSER!");
        } else {
            console.log("TIE!");

        }
    }

}

