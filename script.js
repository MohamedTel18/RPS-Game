const container = document.querySelector('.container');
const content= document.createElement("div");
content.className = "content";

const matchdetails = document.createElement("p");
const GameResult = document.createElement("p");
const playersChoosing = document.createElement("p");
const Result = document.createElement("p");

let playerChoice;
        
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

let PlayerScore = 0;
let ComputerScore = 0;
let round = 1;

rockButton.addEventListener("click", function() {
    playerChoice = "rock";
    playersChoosing.textContent = `You chose ${playerChoice}`;
    PlayRound();
});

paperButton.addEventListener("click", function() {
    playerChoice = "paper";
    playersChoosing.textContent = `You chose ${playerChoice}`;
    PlayRound();
});

scissorsButton.addEventListener("click", function() {
    playerChoice = "scissors";
    playersChoosing.textContent = `You chose ${playerChoice}`;
    PlayRound();
});

content.appendChild(playersChoosing);

function GetComputerChoice() 
{
    let choices=["rock", "paper", "scissors"];
    let randomValue = Math.floor(Math.random() * choices.length);

    return choices[randomValue];
}

function PlayRound()
{
    let computerChoice = GetComputerChoice();
                
                
    matchdetails.textContent = `Round ${round}: You chose ${playerChoice}, Computer chose ${computerChoice}`;
    content.appendChild(matchdetails);

    if(playerChoice === computerChoice) {
        GameResult.textContent = "It's a tie!";
    } else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) 
    {
        PlayerScore++;
        GameResult.textContent = "You win this round!";
    }

    else
    {
        ComputerScore++;
        GameResult.textContent = "Computer wins this round!";
    }
    content.appendChild(GameResult);
    round++;
    Result.textContent = `Score: You ${PlayerScore} - Computer ${ComputerScore}`;
    content.appendChild(Result);

    if(PlayerScore ==5)
    {
        alert(`You win the game! ${Result.textContent}`);
        resetGame();
    }
    else if(ComputerScore == 5)
    {
        alert(`Computer wins the game! ${Result.textContent}`);
        resetGame();
    }

}

container.appendChild(content);

function resetGame() {
    PlayerScore = 0;
    ComputerScore = 0;
    round = 1;
    matchdetails.textContent = "";
    GameResult.textContent = "";
    playersChoosing.textContent = "";
    Result.textContent = "";
}
