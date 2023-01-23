/**
 * @author Thomas Nguyen
 * @version 1.0.0
 * ...
 */

//Initial variable declarations
let playerScore = 0;
let computerScore = 0;
const timeDelay = 500;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

//Sets background colour to tomato to provide confirmation of player choice
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

//Prevents buttons from being clicked while computer choice animation is running
function disableClick(){
    document.getElementById("rockBtn").className = "btn unclickable";
    document.getElementById("paperBtn").className = "btn unclickable";
    document.getElementById("scissorsBtn").className = "btn unclickable";
}

//Enables buttons to be clickable
function enableClick(){
    document.getElementById("rockBtn").className = "btn";
    document.getElementById("paperBtn").className = "btn";
    document.getElementById("scissorsBtn").className = "btn";
}

//Hides game UI and reveals the GAME OVER splash screen
function endGame(playerScore,computerScore){
    let gameContainer = document.querySelector('.gameContainer');
    let endContainer = document.querySelector('.endContainer');
    gameContainer.style.display = 'none';
    endContainer.style.display = 'flex';

    if(playerScore == 5){
        document.getElementById('result').innerHTML = `You Won! ${playerScore}:${computerScore}`;
    }
    else{
        document.getElementById('result').innerHTML = `You Lost! ${playerScore}:${computerScore}`;
    }
}

//Randomises computer's move
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

//Produces random integer used for computer choice
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

//Logic for Rock paper scissors game, 
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
    setTimeout(updateScore,500);

    if(playerScore == 5 || computerScore == 5){
        endGame(playerScore,computerScore);
    }
}

//Updates image to show move selected for round
function processChoice(playerSelection){
    const computerSelection = getComputerChoice();
    confirmChoice(playerSelection);
    document.getElementById("playerChoice").src=`images/${playerSelection}.png`;
    document.getElementById("computerChoice").src="images/randomiser.gif";
    disableClick();
    setTimeout(() => {document.getElementById("computerChoice").src=`images/${computerSelection}.png`;},timeDelay);
    setTimeout(enableClick,500);
    playRound(playerSelection,computerSelection);
}

//Updates player score and hearts health bar
function updateScore(){
    document.getElementById('computerScore').innerHTML = `SCORE: ${computerScore}`
    document.getElementById('playerScore').innerHTML = `SCORE: ${playerScore}`
    
    if(playerScore == 4){
        document.getElementById(`computerHeath-${playerScore}`).src = "images/heartEmpty.png"
        document.getElementById(`computerHeath-5`).src = "images/lastHeart.gif"
    }
    else if(playerScore != 0 ){
        document.getElementById(`computerHeath-${playerScore}`).src = "images/heartEmpty.png"
    }

    if(computerScore == 4){
        document.getElementById(`playerHeath-${computerScore}`).src = "images/heartEmpty.png"
        document.getElementById(`playerHeath-5`).src = "images/lastHeart.gif"
    }
    else if(computerScore != 0){
        document.getElementById(`playerHeath-${computerScore}`).src = "images/heartEmpty.png"
    }
}

//Event listeners for move button clicks
rockBtn.addEventListener('click',() => processChoice('rock'));
paperBtn.addEventListener('click',() => processChoice('paper'));
scissorsBtn.addEventListener('click',() => processChoice('scissors'));
