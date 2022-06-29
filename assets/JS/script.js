// Waits for DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                console.log("You clicked Rock!");
            } else if (this.getAttribute("data-type") === "paper") {
                console.log("You clicked Paper!");
            } else if (this.getAttribute("data-type") === "scissors") {
                console.log("You clicked Scissors!");
            }
        })
    };
})

/**
 * The computer guess
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 3);

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}