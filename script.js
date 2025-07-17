let playerScore = 0;
let computerScore = 0;

        
function ReadPlayerChoise()
{
    let playerChoice;
    do 
    {
        playerChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();

    } while (!ValidatePlayerChoice(playerChoice));

    return playerChoice;
}

function ValidatePlayerChoice(choice) 
{
    return choice === "rock" || choice === "paper" || choice === "scissors";
}
            
function GetComputerChoice() 
{
    let choices=["rock", "paper", "scissors"];
    let randomValue = Math.floor(Math.random() * choices.length);

    return choices[randomValue];
}

function PlayRound(round)
{
    let playerChoice = ReadPlayerChoise();
    let computerChoice = GetComputerChoice();
                
                
    console.log(`Round ${round}: You chose ${playerChoice}, Computer chose ${computerChoice}`);
                
    if(playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) 
    {
        playerScore++;
        console.log("You win this round!");
    } 
                
    else 
    {
        computerScore++;
        console.log("Computer wins this round!");
    }
}

function PlayGame()
{
    for(let round=1;round<=5;round++)
    {
        PlayRound(round);
    }

    if(playerScore>computerScore)
        console.log("You Win the game!");
    else if(playerScore<computerScore)
        console.log("Computer Wins the game!");
    else
        console.log("It's a tie!");
}

PlayGame();