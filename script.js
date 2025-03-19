function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3);

    if(randomChoice === 0){
        return "rock";
    } else if(randomChoice === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt('Enter your choice: rock, paper, or scissors');
    
    if (humanChoice) {
        humanChoice = humanChoice.toLowerCase();
    }

    return humanChoice;
}
function playGame(){
    let humanScore =  0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if(humanChoice === computerChoice){
        console.log("It's a tie!");
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors")||
           (humanChoice === "paper" && computerChoice === "rock")||
            (humanChoice === "scissors" && computerChoice === "paper")
    ){
        console.log("You win! " + humanChoice+ " beats " + computerChoice);
        humanScore++;
    } 
    else{
        console.log("You lose! " + computerChoice+ " beats " + humanChoice);
        computerScore++;
    }

    console.log("Current score - You: "+ humanScore + " Computer: " + computerScore);
}
    console.log("ROUND 1");
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log("\nROUND 2");
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log("\nROUND 3");
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log("\nROUND 4");
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log("\nROUND 5");
    playRound(getHumanChoice(), getComputerChoice());

    //Declare the final winner
console.log("\nGAME OVER!");
    if (humanScore > computerScore){
        console.log("You win the game! Final Score: You- " + humanScore + " Computer- " + computerScore);
    }
    else if(humanScore === computerScore){
        console.log("It's a tie!");
    }
    else{
        console.log("Computer wins the game! Final Score: You- " + humanScore + " Computer- " + computerScore);
    }
}



playGame()