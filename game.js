const choice = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    //Main method

    for (let i = 1; i <= 5 ; i++)
    {
        playRound(i);
    }
    scoreKeeper();
 
}

function playRound(round)    {
    //Play a round of Rock Paper Scissors
    const playerSelection = getPlayerChoice();
    const compSelection = getCompChoice();
    const winner = checkWinner(playerSelection,compSelection);
    winners.push(winner);
    logRound(playerSelection, compSelection, winner, round);

}

function getCompChoice()    {
    //Randomly selects Rock, Paper, or Scissors for the computer
    return choice[Math.floor(Math.random()*choice.length)]
}

function getPlayerChoice()  {
    //Prompts for the user to input Rock, Paper, Or Scissors
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null)
    {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = inputValidator(input);
    while (check == false)
    {
        input = prompt("Type Rock, Paper, or Scissors. Spelling must be exact");
        check = inputValidator(input);
    }
    return input;
}

function inputValidator(input)  {
    if (choice.includes(input)) {
        return true;
    }
        return false;
}

function checkWinner(choiceP, choiceC)  {
    if (choiceP == choiceC){
        return "Tie";
        tieScore++;
    } else if ((choiceP == "rock" && choiceC == "scissors") || (choiceP == "paper" && choiceC == "rock") || (choiceP == "scissors" && choiceC == "paper")) {
        return "Player";
        playerScore++;
    } else if ((choiceC == "rock" && choiceP == "scissors") || (choiceC == "paper" && choiceP == "rock") || (choiceC == "scissors" && choiceP == "paper")) {
        return "Computer";
        compScore++;
    }

}

function scoreKeeper()  {
    let playerWins = winners.filter((item) => item == "Player").length;
    let compWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;

    console.log("Results:");
    console.log("Player Wins: " + playerWins);
    console.log("Computer Wins: " + compWins);
    console.log("Ties: " + ties);
}

function logRound(playerChoice, compChoice, winner, round)
{
    console.log("Round: " + round);
    console.log("Player Chose " + playerChoice);
    console.log("Computer Chose " + compChoice);
    console.log(winner + " Wins!!");
    console.log("----------------");
    
}
