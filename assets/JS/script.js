let variables = ["rock", "paper", "scissors"];

// Waits for DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    runGame(Event);
    }
);
        
function runGame() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
        let user1 = this.getAttribute("data-type");
        console.log(user1);
        let computer1 = randomChoice();
        console.log(computer1);
        
        if (user1 == computer1) {
            console.log("Tie")
        } else if (user1 == "rock") {
            rockArray(computer1);
        } else if (user1 == "paper") {
            paperArray(computer1);
        } else {
            scissorsArray(computer1);
        } 
        })
        }
    }


function rockArray(computer1) {
    console.log(computer1);
    let array = ["paper", "rock", "scissors"];
    if (computer1 =="paper" ? console.log("Computer Wins") : console.log("User Wins")); 
}

function paperArray(computer1) {
    console.log(computer1);
    let array = ["scissors", "paper", "rock"];
    if (computer1 =="scissors" ? console.log("Computer Wins") : console.log("User Wins")); 
}
 
function scissorsArray(computer1) {
    console.log(computer1);
    let array = ["rock", "scissors", "paper"];
    if (computer1 =="rock" ? console.log("Computer Wins") : console.log("User Wins")); 
}

/**
 * The computer guess
 */
function randomChoice() {

    const computerChoice = Math.floor(Math.random() * 3);
    const computerSelection = variables[computerChoice];
    return computerSelection;
}

function incrementScore() {

}

function incrementWrongAnswer() {

}