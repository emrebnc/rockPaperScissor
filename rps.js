
alert("Welcome to the game Rock Paper Scissors, please click OK to start playing");
let playerScore = 0;
let computerScore = 0;

function getPlayerSelection() {
    let keepAskingPS = 1;
    while (keepAskingPS === 1)
    {
    let playerSelection = prompt("Please enter rock, paper or scissors");
    if (playerSelection === null){
        alert("You have cancelled the game");
        return 0;
    }
    let playerSelectionLC = playerSelection.toLowerCase();
        if (playerSelectionLC === "rock" || playerSelectionLC == "scissors" || playerSelectionLC === "paper") {
            if (playerSelectionLC === "rock"){
                let keepAskingPS = 0;
                return 1;
            }
            if (playerSelectionLC === "paper"){
                let keepAskingPS = 0;
                return 2;
            }
            if (playerSelectionLC === "scissors"){
                let keepAskingPS = 0;
                return 3;
            }
            
        }
        else {
            alert("Invalid entry please enter again");
             }
    }
    
}
function getComputerSelection() {
    let computerSelection = Math.ceil(3*Math.random());
    return computerSelection
}

function playRound(pS, cS){
    let continueRound = 1;
    while (continueRound === 1){
        if (pS === 1){
            if (cS === 1){
                alert ("computer has chosen rock as well: tie!")
                pS = getPlayerSelection();
                cS = getComputerSelection();
            }
            else if (cS === 2){
                alert ("computer chose paper: you lose!")
                return -1;
            }
            else{
                alert ("computer chose scissors: you win!")
                return 1;
            }
        }

        else if (pS === 2){
            if (cS === 1){
                alert ("computer chose rock : you win!")
                return 1;
            }
            else if (cS === 2){
                alert ("computer has chosen paper as well: tie!")
                pS = getPlayerSelection();
                cS = getComputerSelection();
            }
            else{
                alert ("computer chose scissors: you lose!")
                return -1;
            }
        }
        else if (pS === 3){
            if (cS === 1){
                alert ("computer chose rock : you lose!")
                return -1;
            }
            else if (cS === 2){
                alert ("computer chose paper: you win!")
                return 1;
            }
            else{
                alert ("computer has chosen scissors as well: tie!")
                pS = getPlayerSelection();
                cS = getComputerSelection();
            }
        }
        else{
            return 2
        }
    }
}

function game(){
    for (let i = 0; i<5; i++) {
        pS = getPlayerSelection();
        cS = getComputerSelection();
        if (pS === 0){
            return 0;
        }
        roundResult = playRound(pS, cS);
        if (roundResult === 1){
            playerScore = playerScore +1;
        }
        if (roundResult === -1){
            computerScore = computerScore +1;
            }
        console.log(pS);
        console.log(cS)
        console.log(roundResult);
        console.log("score = " + playerScore + " - " + computerScore);
        }
    if (playerScore > computerScore){
        alert("You won the game. Congratulations");
    }
    else if (playerScore < computerScore){
        alert("You lost the game :(");
    }
    else if (playerScore = computerScore){
        alert("It's a tie");
    }
    else {
        alert("Something went wrong")
    }
}


game();



