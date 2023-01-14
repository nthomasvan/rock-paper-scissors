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
    }
}

let answer = prompt("Rock Paper Scissors! Please type in choice:");
var test = getComputerChoice();
console.log("computer choice: " + test);
console.log("Player choice: " + answer);
console.log(playRound(answer,test));