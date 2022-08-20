const choice = ["rock", "paper", "scissors"];

function game() {
    //Main method

    playRound();
    
 
}

function playRound()    {
    //Play a round of Rock Paper Scissors
    const playerSelection = getPlayerChoice();
    const compSelection = getCompChoice();

}

function getCompChoice()    {
    //Randomly selects Rock, Paper, or Scissors for the computer
    return choice[Math.floor(Math.random()*choice.length)]
}

function getPlayerChoice()  {
    //Prompts for the user to input Rock, Paper, Or Scissors
    let input = prompt("Type Rock, Paper, or Scissors");
    

}

game();