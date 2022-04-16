
alert("Welcome to the game Rock Paper Scissors, please click OK to start playing");
let playerScore = 0;
let computerScore = 0;

function getPlayerSelection() {
    let playerSelection = prompt("Please enter rock, paper or scissors");
    if (playerSelection === null){
        alert("You have cancelled the game");
        return 0;
    }
    let playerSelectionLC = playerSelection.toLowerCase();
        if (playerSelectionLC === "rock" || playerSelectionLC == "scissors" || playerSelectionLC === "paper") {
            if (playerSelectionLC === "rock"){
                return 1;
            }
            if (playerSelectionLC === "paper"){
                return 2;
            }
            if (playerSelectionLC === "scissors"){
                return 3;
            }
            
        }
        else {
            alert("You have cancelled the game");
            return 0;
        }
    
}
function getComputerSelection() {
    let computerSelection = Math.ceil(3*Math.random());
    return computerSelection
}

function playRound(pS, cS){
        if (pS === 1){
            if (cS === 1){
                alert ("computer has chosen rock as well: tie!")
                return 0;
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
                return 0;
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
                return -1;
            }
        }
        else{
            return 2
        }
}

function game(){
        pS = getPlayerSelection();
        if (pS === 0){
            return 0;
        }
        console.log(pS);
        cS = getComputerSelection();
        console.log(cS)
        roundResult = playRound(pS, cS);
        console.log(roundResult);
    for (let i = 0; i<4; i++) {
        if (roundResult === 1){
            playerScore = playerScore +1;
        }
        else if (roundResult === -1){
            computerScore = computerScore +1;
        }
        console.log("score = " + playerScore + " - " + computerScore);
        pS = getPlayerSelection();
        if (pS === 0){
            return 0;
        }
        console.log(pS);
        cS = getComputerSelection();
        console.log(cS)
        roundResult = playRound(pS, cS);
        console.log(roundResult);
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





