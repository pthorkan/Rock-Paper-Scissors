// Waits for DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    console.log("buttons")
    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "rock") {
                alert("You clicked Rock");
            } else {
                alert(`You clicked $(data-type)!`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}