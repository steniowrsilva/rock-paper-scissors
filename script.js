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

function playRound(playerSelection, computerSelection, message){
    // returns a string that declares the winner of
    // the round like so: "You Lose! paper beats Rock".
    // let player = playerSelection.toLowerCase();

    // console.log('teste');

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                message.textContent = `both chose ${computerSelection}`;
                return "Tie!";
            case "paper":
                message.textContent = `${computerSelection} beats ${playerSelection}`;
                return "You lose!";
            case "scissors":
                message.textContent = `${playerSelection} beats ${computerSelection}`;
                return "You win!";
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                message.textContent = `${playerSelection} beats ${computerSelection}`;
                return "You win!";
            case "paper":
                message.textContent = `both chose ${computerSelection}`;
                return "Tie!";
            case "scissors":
                message.textContent = `${computerSelection} beats ${playerSelection}`;
                return "You lose!";
                
        }
    } else {
        switch (computerSelection) {
            case "rock":
                message.textContent = `${computerSelection} beats ${playerSelection}`;
                return "You lose!";
            case "paper":
                message.textContent = `${playerSelection} beats ${computerSelection}`;
                return "You win!";
            case "scissors":
                message.textContent = `both chose ${computerSelection}`;
                return "Tie!";
        }
    }
    
}




const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function score(play){
    if (play==="You win!") {
        playerScore++;
        player.textContent = playerScore;
    } else if (play==="You lose!"){
        computerScore++;
        computer.textContent = computerScore;
    } else {
        tieScore++;
        tie.textContent = tieScore;
    }
}

const result = document.querySelector('#result');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const tie = document.querySelector('#tie');
const message = document.querySelector('#message');
const final = document.querySelector('#final');
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

rock.addEventListener("click", function() {
    if (playerScore<5 && computerScore<5){
        const play = playRound("rock", getComputerChoice(), message);
        score(play);
    } 
    if (playerScore===5) {
        final.textContent = 'YOU WIN!';
    } else if (computerScore===5) {
        final.textContent = 'YOU LOSE!';
    }
    
});

paper.addEventListener("click", function(){
    if (playerScore<5 && computerScore<5){
        const play= playRound("paper", getComputerChoice(), message);
        score(play);
    } 
    if (playerScore===5) {
        final.textContent = 'YOU WIN!';
    } else if (computerScore===5) {
        final.textContent = 'YOU LOSE!';
    }
});

scissors.addEventListener("click", function(){
    if (playerScore<5 && computerScore<5){
        const play = playRound("scissors", getComputerChoice(), message);
        score(play);
    }
    if (playerScore===5) {
        final.textContent = 'YOU WIN!';
    } else if (computerScore===5) {
        final.textContent = 'YOU LOSE!';
    }
});

let portuguese = document.querySelector('#portuguese');
let english = document.querySelector('#english');

portuguese.addEventListener('click', () => {
    let h1 = document.querySelector('h1');
    h1.textContent = "Vamos Jogar Pedra, Papel e Tesoura";

    rock.textContent = "Pedra";
    paper.textContent = "Papel";
    scissors.textContent = "Tesoura";

    let h3 = document.querySelector('h3');
    h3.textContent = "Resultado:"

    let playerText = document.querySelector('#playerScore');
    playerText.textContent = 'Jogador: ';
    let computerText = document.querySelector('#computerScore');
    computerText.textContent = 'Computador: ';
    let tieText = document.querySelector('#tieScore');
    tieText.textContent = 'Empate: ';

    let gameMessage = document.querySelector('#gameMessage');
    gameMessage.textContent = "JOGO:"
    let finalScore = document.querySelector('#finalScore');
    finalScore.textContent = "RESULTADO FINAL:"


})


