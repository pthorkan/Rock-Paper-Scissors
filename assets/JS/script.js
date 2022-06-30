const variables = ["rock", "paper", "scissors"];

// Waits for DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            userSelection = this.getAttribute("data-type");
            document.getElementsByClassName("results-column").innerHTML = `${userSelection}`;
            }
        )}
})

function userChoice(userSelection) {
    console.log(userSelection)
}

/**
 * The computer guess
 */
function randomChoice() {

    const computerChoice = Math.floor(Math.random() * 3);
    const computerSelection = variables[computerChoice];
    console.log(computerSelection);
}

function computerChoice() {

    computerAnswer = randomChoice();
    document.getElementById("column1").innerText = "computerAnswer";
}

function runGame() {

}

function checkAnswer() {
    if(userSelection === computerSelection) {
        alert("Its a draw");
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}