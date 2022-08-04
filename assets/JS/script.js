const variables = ["rock", "paper", "scissors"];

// Waits for DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    runGame();
    }
);


function oneClick() {
    if (window.pageYOffset >= 300) {
        return;
    } else {
        window.scrollBy(0, 100);
    };
}
        
function runGame() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
        let user = this.getAttribute("data-type");
        console.log(user);
        appendUserSelection(user);
        let computer = randomChoice();
        console.log(computer);
        oneClick();
        
        if (user === computer) {
            console.log("Tie");
            appendSelection(computer);
            tie();
        } else if (user === "rock") {
            rockArray(computer);
        } else if (user === "paper") {
            paperArray(computer);
        } else {
            scissorsArray(computer);
        }
        })
        }
    }

function rockArray(computer) {
    console.log(computer);
    appendSelection(computer);
    if (computer === "paper" ? (console.log("Computer Wins"), incrementWrongAnswer()) : (console.log("User Wins"), incrementScore())); 
}

function paperArray(computer) {
    console.log(computer);
    appendSelection(computer);
    if (computer === "scissors" ? (console.log("Computer Wins"), incrementWrongAnswer()) : (console.log("User Wins"), incrementScore())); 
}
 
function scissorsArray(computer) {
    console.log(computer);
    appendSelection(computer);
    if (computer === "rock" ? (console.log("Computer Wins"), incrementWrongAnswer()) : (console.log("User Wins"), incrementScore())); 
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

    const prevScore = parseInt(document.getElementById("games-won").innerText);
    const newScore = prevScore + 1;
    document.getElementById("games-won").innerText = newScore;

    let winner = document.getElementById("column1").lastChild
    winner.classList.add("userWin", "selection");

    let loser = document.getElementById("column3").lastChild
    loser.classList.add("computerLoss", "selection");

    let div = document.createElement('div');
    div.innerHTML = 'Win!';
    div.classList.add("userWin", "selection");
    document.getElementById("column2").appendChild(div);

    if (newScore === 5) {
        userChampion();
    };
}

function incrementWrongAnswer() {

    const prevScore = parseInt(document.getElementById("games-lost").innerText);
    const newScore = prevScore + 1;
    document.getElementById("games-lost").innerText = newScore;

    let winner = document.getElementById("column3").lastChild
    winner.classList.add("computerWin", "selection");

    let loser = document.getElementById("column1").lastChild
    loser.classList.add("userLoss", "selection");

    let div = document.createElement('div');
    div.innerText = 'Damnnnn!';
    div.classList.add("loser", "selection");
    document.getElementById("column2").appendChild(div);
    
    if (newScore === 5) {
        computerChampion();
    }

}

function tie() {
    let div = document.createElement('div');
    div.innerText = 'Tie!';
    div.classList.add("tie", "selection");
    document.getElementById("column2").appendChild(div);

    let userTie = document.getElementById("column1").lastChild
    userTie.classList.add("tie", "selection");

    let computerTie = document.getElementById("column3").lastChild
    computerTie.classList.add("tie", "selection");
}

function userChampion() {

    removeElementsByClass();

    let champion = document.createElement('div');
    champion.innerHTML = '<i class="fa-solid fa-trophy"></i>';
    champion.classList.add("champion");
    document.getElementById("column1").appendChild(champion);

    setTimeout(resetScore, 3000);
}

function computerChampion() {

    removeElementsByClass();

    let champion = document.createElement('div');
    champion.innerHTML = '<i class="fa-solid fa-trophy"></i>';
    champion.classList.add("champion");
    document.getElementById("column3").appendChild(champion);

    setTimeout(resetScore, 3000);
}

function resetScore() {

    document.getElementById("games-lost").innerText = 0;
    document.getElementById("games-won").innerText = 0;
    
    let elements = document.getElementsByClassName("champion");
    elements[0].parentNode.removeChild(elements[0]);

}

function removeElementsByClass() {
    let elements = document.getElementsByClassName("selection");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function appendSelection(computer) {
    let div = document.createElement('div');
    if (computer === "paper") {
        div.innerHTML = '<i class="fa-regular fa-hand"></i>';
    } else if (computer === "rock") {
        div.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (computer === "scissors") {
        div.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
    };

    document.getElementById("column3").appendChild(div);
}

function appendUserSelection(user) {
    let div = document.createElement('div');
    if (user === "paper") {
        div.innerHTML = '<i class="fa-regular fa-hand"></i>';
    } else if (user === "rock") {
        div.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (user === "scissors") {
        div.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
    };

    document.getElementById("column1").appendChild(div);
    };
