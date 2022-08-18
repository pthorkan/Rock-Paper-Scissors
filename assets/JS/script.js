/*jshint esversion: 6 */
const variables = ["rock", "paper", "scissors", "lizard", "spock"];

// Waits for DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
    runGame();
});

// Scrolls the page down along with each selection but limits to 300px to keep the game selection options within screen
function oneClick() {
    if (window.pageYOffset >= 300) {
        return;
    } else {
        window.scrollBy(0, 100);
    }
}

// Main game run function
function runGame() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let user = this.getAttribute("data-type");
            console.log('User selects ' + user);
            appendUserSelection(user);
            let computer = randomChoice();
            console.log('Computer selects ' + computer);
            oneClick();

            if (user === computer) {
                console.log("Tie");
                appendSelection(computer);
                tie();
            } else if (user === "rock") {
                rockArray(computer);
            } else if (user === "paper") {
                paperArray(computer);
            } else if (user === "scissors") {
                scissorsArray(computer);
            } else if (user === "lizard") {
                lizardArray(computer);
            } else {
                spockArray(computer);
            }
        });
    }
}
/**
 * 
 * @param {string} computer 
 */
function rockArray(computer) {

    appendSelection(computer);

    if (computer === "paper") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else if (computer === "spock") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else {
        (console.log("User Wins"));
        incrementScore();
    }
}

function paperArray(computer) {

    appendSelection(computer);

    if (computer === "scissors") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else if (computer === "lizard") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else {
        (console.log("User Wins"));
        incrementScore();
    }
}

function scissorsArray(computer) {

    appendSelection(computer);

    if (computer === "rock") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else if (computer === "spock") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else {
        (console.log("User Wins"));
        incrementScore();
    }
}

function spockArray(computer) {

    appendSelection(computer);

    if (computer === "paper") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else if (computer === "lizard") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else {
        (console.log("User Wins"));
        incrementScore();
    }
}

function lizardArray(computer) {

    appendSelection(computer);

    if (computer === "rock") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else if (computer === "scissors") {
        (console.log("Computer Wins"));
        incrementWrongAnswer();
    } else {
        (console.log("User Wins"));
        incrementScore();
    }
}

// The computer random guess

function randomChoice() {
    let checkGame = document.getElementById('checkGame');
    /* Checks whether game selection is Easy or Hard for computer selection */
    if (checkGame.innerHTML === 'Easy') {
        console.log('Easy gameplay');
        const computerChoice = Math.floor(Math.random() * 3);
        const computerSelection = variables[computerChoice];
        return computerSelection;
    } else {
        console.log('Hard gameplay');
        const computerChoice = Math.floor(Math.random() * 5);
        const computerSelection = variables[computerChoice];
        return computerSelection;
    }
}

// If user wins, increases score by 1.
// Checks if the score reaches 5 before it declares the champion
function incrementScore() {

    const prevScore = parseInt(document.getElementById("games-won").innerText);
    const newScore = prevScore + 1;
    document.getElementById("games-won").innerText = newScore;

    let winner = document.getElementById("column1").lastChild;
    winner.classList.add("userWin", "selection");

    let loser = document.getElementById("column3").lastChild;
    loser.classList.add("computerLoss", "selection");

    let div = document.createElement('div');
    div.innerHTML = 'Win!';
    div.classList.add("userWin", "selection");
    document.getElementById("column2").appendChild(div);

    if (newScore === 5) {
        userChampion();
    }
}

// If computer wins, increases score by 1.
// Checks if the score reaches 5 before it declares the champion
function incrementWrongAnswer() {

    const prevScore = parseInt(document.getElementById("games-lost").innerText);
    const newScore = prevScore + 1;
    document.getElementById("games-lost").innerText = newScore;

    let winner = document.getElementById("column3").lastChild;
    winner.classList.add("computerWin", "selection");

    let loser = document.getElementById("column1").lastChild;
    loser.classList.add("userLoss", "selection");

    let div = document.createElement('div');
    div.innerText = 'Lose!';
    div.classList.add("loser", "selection");
    document.getElementById("column2").appendChild(div);

    if (newScore === 5) {
        computerChampion();
    }

}

// Tie event function

function tie() {
    let div = document.createElement('div');
    div.innerText = 'Tie!';
    div.classList.add("tie", "selection");
    document.getElementById("column2").appendChild(div);

    let userTie = document.getElementById("column1").lastChild;
    userTie.classList.add("tie", "selection");

    let computerTie = document.getElementById("column3").lastChild;
    computerTie.classList.add("tie", "selection");
}

// Resets the game area match results in order to declare  the User champion with a picture of a cup
// Time delay for 3s before resetting the scores for a new game
function userChampion() {

    removeElementsByClass();

    let champion = document.createElement('div');
    champion.innerHTML = '<i class="fa-solid fa-trophy"></i>';
    champion.classList.add("champion");
    document.getElementById("column1").appendChild(champion);

    setTimeout(resetScore, 3000);
}

// Resets the game area match results in order to declare  the Computer champion with a picture of a cup
// Time delay for 3s before calling resetScore function
function computerChampion() {

    removeElementsByClass();

    let champion = document.createElement('div');
    champion.innerHTML = '<i class="fa-solid fa-trophy"></i>';
    champion.classList.add("champion");
    document.getElementById("column3").appendChild(champion);

    setTimeout(resetScore, 3000);
}

// Resets score board to 0-0 for new game
function resetScore() {

    document.getElementById("games-lost").innerText = 0;
    document.getElementById("games-won").innerText = 0;

    let elements = document.getElementsByClassName("champion");
    elements[0].parentNode.removeChild(elements[0]);

}

// Removes the individual user and computer selections for each game from gameplay area
function removeElementsByClass() {
    let elements = document.getElementsByClassName("selection");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Adds the computer selection to the gameplay area
function appendSelection(computer) {
    let div = document.createElement('div');
    if (computer === "paper") {
        div.innerHTML = '<i class="fa-regular fa-hand"></i>';
    } else if (computer === "rock") {
        div.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (computer === "scissors") {
        div.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
    } else if (computer === "lizard") {
        div.innerHTML = '<i class="fa-solid fa-hand-lizard"></i>';
    } else if (computer === "spock") {
        div.innerHTML = '<i class="fa-solid fa-hand-spock"></i>';
    }

    document.getElementById("column3").appendChild(div);
}

// Adds user selection to the gameplay area
function appendUserSelection(user) {
    let div = document.createElement('div');
    if (user === "paper") {
        div.innerHTML = '<i class="fa-regular fa-hand"></i>';
    } else if (user === "rock") {
        div.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
    } else if (user === "scissors") {
        div.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
    } else if (user === "lizard") {
        div.innerHTML = '<i class="fa-solid fa-hand-lizard"></i>';
    } else if (user === "spock") {
        div.innerHTML = '<i class="fa-solid fa-hand-spock"></i>';
    }

    document.getElementById("column1").appendChild(div);
}