let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = getRandomInt(3);

    switch(computerChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "null";
    }
}

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function playRound(playerSelection, computerSelection){
    if(
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerScore++;
    }
    else if(
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ){
        computerScore++;
    }
    updateScore(playerSelection, computerSelection);

    if(playerScore == 5 || computerScore == 5){
        document.getElementById('result').innerHTML = "You Won!";
    }
    /*
    switch(playerSelection){
        case "rock":
            if(computerSelection == "rock")
            {
                return "It's a tie!";
            }
            else if (computerSelection == "paper")
            {
                return "You Lose! Paper covers rock!";
            }
            else
            {
                return "You Win! Rock smashes scissors";
            }
            break;
        case "scissors":
            if(computerSelection == "rock")
            {
                return "You lose! Rock smashes scissors";
            }
            else if (computerSelection == "paper")
            {
                return "You Win! Scissors cut paper!";
            }
            else
            {
                return "Its a tie!";
            }
            break;
        case "paper":
            if(computerSelection == "rock")
            {
                return "You Win! Paper covers rock";
            }
            else if (computerSelection == "paper")
            {
                return "Its a tie!";
            }
            else
            {
                return "You lose! Scissors cut paper!";
            }
            break;
            */
}

function log(e){
    console.log(this);
}

function processChoice(playerSelection){
    const computerSelect = getComputerChoice();
    playRound(playerSelection,computerSelect);
}

function updateScore(playerSelection,computerSelection){
    document.getElementById('playerScore').innerHTML = `Player: ${playerScore}`
    document.getElementById('computerScore').innerHTML = `Computer: ${computerScore}`
    document.getElementById('playerChoice').innerHTML = `Player Chose: ${playerSelection}`
    document.getElementById('computerChoice').innerHTML = `Computer Chose: ${computerSelection}`
}

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");


rockBtn.addEventListener('click',() => processChoice('rock'));
paperBtn.addEventListener('click',() => processChoice('paper'));
scissorsBtn.addEventListener('click',() => processChoice('scissors'));


/*
let answer = prompt("Rock Paper Scissors! Please type in choice:");
var test = getComputerChoice();
console.log("computer choice: " + test);
console.log("Player choice: " + answer);
console.log(playRound(answer,test));

*/