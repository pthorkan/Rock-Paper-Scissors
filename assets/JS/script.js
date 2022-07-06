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
        appendUserSelection(user1);
        let computer1 = randomChoice();
        console.log(computer1);
        
        if (user1 == computer1) {
            console.log("Tie");
            appendSelection(computer1);
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
    appendSelection(computer1);
    if (computer1 =="paper" ? (console.log("Computer Wins"), incrementWrongAnswer()) : (console.log("User Wins"), incrementScore())); 
}

function paperArray(computer1) {
    console.log(computer1);
    appendSelection(computer1);
    if (computer1 =="scissors" ? (console.log("Computer Wins"), incrementWrongAnswer()) : (console.log("User Wins"), incrementScore())); 
}
 
function scissorsArray(computer1) {
    console.log(computer1);
    appendSelection(computer1);
    if (computer1 =="rock" ? (console.log("Computer Wins"), incrementWrongAnswer()) : (console.log("User Wins"), incrementScore())); 
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

    let prevScore = parseInt(document.getElementById("games-won").innerText);
    let newScore = ++prevScore
    document.getElementById("games-won").innerText = newScore;

    if (newScore == 5) {
        alert("Whooop...you won!!");
        resetScore();
    };
}

function incrementWrongAnswer() {

    let prevScore = parseInt(document.getElementById("games-lost").innerText);
    let newScore = ++prevScore
    document.getElementById("games-lost").innerText = newScore;

    if (newScore == 5) {
        alert("Damn it!! Maybe next time!");
        resetScore();
    }
}

function resetScore() {
    document.getElementById("games-lost").innerText = 0;
    document.getElementById("games-won").innerText = 0;
    
    removeElementsByClass()
    
}

function removeElementsByClass() {
    var elements = document.getElementsByClassName('selection');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function appendSelection (computer1) {
    let div = document.createElement('div');
    if (computer1 == "paper") {
        div.innerHTML = '<i class="fa-regular fa-hand"></i>';
    } else if (computer1 == "rock") {
        div.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (computer1 == "scissors") {
        div.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
    };
    div.classList.add("selection");
    document.getElementById("column3").appendChild(div);
}

function appendUserSelection (user1) {
    let div = document.createElement('div');
    if (user1 == "paper") {
        div.innerHTML = '<i class="fa-regular fa-hand"></i>';
    } else if (user1 == "rock") {
        div.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (user1 == "scissors") {
        div.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
    };
    div.classList.add("selection");
    document.getElementById("column1").appendChild(div);
    div.scrollIntoView({behavior: "smooth"});
}