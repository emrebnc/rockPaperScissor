
alert("Welcome to the game Rock Paper Scissors, please click OK to start playing");

function getPlayerSelection() {
    let playerSelection = prompt("Please enter rock, paper or scissors");
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
            alert("You have cancelled the round");
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
                alert ("computer has chosen rock as well: tie! Choose again")
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
                alert ("computer has chosen paper as well: tie! Choose again")
                return 0;
            }
            else{
                alert ("computer chose scissors: you lose!")
                return -1;
            }
        }
        else{
            if (cS === 1){
                alert ("computer chose rock : you lose!")
                return -1;
            }
            else if (cS === 2){
                alert ("computer chose paper: you win!")
                return 1;
            }
            else{
                alert ("computer has chosen scissors as well: tie! choose again")
                return -1;
            }
        }
}

playerSelection = getPlayerSelection();
computerSelection = getComputerSelection();
roundValue = playRound(playerSelection, computerSelection);

console.log(playerSelection);
console.log(computerSelection);
console.log(roundValue);



