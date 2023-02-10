function getComputerChoice() {
    // it'll return Rock, Paper or Scissors
    let randomNumber = Math.random()*9;

    if (randomNumber < 3) {
        return "rock";
    } else if ( randomNumber > 3 && randomNumber < 6) {
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

    for (let i=1; i < 6; i++) {
        let playerSelection = prompt("Write 'rock', 'paper' or 'scissors");
        playerSelection = playerSelection.toLowerCase();
        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            playerSelection = prompt("Invalid Choice! Write 'rock', 'paper' or 'scissors'!");
            playerSelection = playerSelection.toLowerCase();
        }
        
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        let message = "";

        switch (result) {
            case "You win!":
                message = `You win!
                            ${playerSelection} beats ${computerSelection}`;

                document.getElementById("partial"+i).innerHTML=message;
                console.log(message);
                winner++;
            break;

            case "You lose!":
                message = `You lose!
                            ${playerSelection} beats ${computerSelection}`
                document.getElementById("partial"+i).innerHTML=message;
                console.log(message);
                loser++;
            break;

            default:
                message = `Tie!
                            both chose ${computerSelection}!`
                document.getElementById("partial"+i).innerHTML=message;
                console.log(message);
                tie++;
        }

    }

    if (tie%2 === 0) {
        if (winner>loser) {
            document.getElementById("final").innerHTML="YOU ARE THE WINNER!!";
            console.log("YOU ARE THE WINNER!");
        } else {
            document.getElementById("final").innerHTML="YOU ARE THE LOSER!!";
            console.log("YOU ARE THE LOSER!");
        }
    } else {
        if (winner>loser) {
            document.getElementById("final").innerHTML="YOU ARE THE WINNER!!";
            console.log("YOU ARE THE WINNER!");
        } else if (winner<loser){
            document.getElementById("final").innerHTML="YOU ARE THE LOSER!!";
            console.log("YOU ARE THE LOSER!");
        } else {
            document.getElementById("final").innerHTML="TIE!";
            console.log("TIE!");

        }
    }

}

