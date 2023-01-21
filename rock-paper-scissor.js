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

function endGame(playerScore,computerScore){
    let gameContainer = document.querySelector('.gameContainer');
    let endContainer = document.querySelector('.endContainer');
    gameContainer.style.display = 'none';
    endContainer.style.display = 'block';

    if(playerScore == 5){
        document.getElementById('result').innerHTML = `You Won! ${playerScore}:${computerScore}`;
    }
    else{
        document.getElementById('result').innerHTML = `You Lost! ${playerScore}:${computerScore}`;
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
    setTimeout(updateScore,500,playerSelection, computerSelection);

    if(playerScore == 5 || computerScore == 5){
        endGame(playerScore,computerScore);
    }
}

function log(e){
    console.log(this);
}

function disableClick(){
    document.getElementById("rockBtn").className = "btn unclickable";
    document.getElementById("paperBtn").className = "btn unclickable";
    document.getElementById("scissorsBtn").className = "btn unclickable";
}

function enableClick(){
    document.getElementById("rockBtn").className = "btn";
    document.getElementById("paperBtn").className = "btn";
    document.getElementById("scissorsBtn").className = "btn";
}

function confirmChoice(playerSelection){
    rockBtn.style.backgroundColor = "white";
    paperBtn.style.backgroundColor = "white";
    scissorsBtn.style.backgroundColor = "white";

    if(playerSelection == "rock"){
        rockBtn.style.backgroundColor = "tomato";
    }
    else if(playerSelection == "paper"){
        paperBtn.style.backgroundColor = "tomato";
    }
    else{
        scissorsBtn.style.backgroundColor = "tomato";
    }
}

function processChoice(playerSelection){
    const computerSelection = getComputerChoice();
    confirmChoice(playerSelection);
    document.getElementById("playerChoice").src=`images/${playerSelection}.png`;
    document.getElementById("computerChoice").src="images/randomiser.gif";
    disableClick();
    setTimeout(() => {document.getElementById("computerChoice").src=`images/${computerSelection}.png`;},500);
    setTimeout(enableClick,500);
    playRound(playerSelection,computerSelection);
}

function updateScore(playerSelection,computerSelection){
    document.getElementById('playerScore').innerHTML = `Player: ${playerScore}`
    document.getElementById('computerScore').innerHTML = `Computer: ${computerScore}`
}

//
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