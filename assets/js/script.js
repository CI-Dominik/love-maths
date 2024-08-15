// Wait for DOM to finish loading
// Add eventListeners to buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

// Run Game

function runGame() {

}

// Check Answer

function checkAnswer() {

}

// Calculate correct answers

function calculateCorrectAnswer() {

}

// Increment score count

function incrementScore() {

}

// Increment wrong answer count

function incrementWrongAnswer() {

}

// Display addition question

function displayAdditionQuestion() {

}

// Display subtract question

function displaySubtractQuestion() {

}

// Display multiply question

function displayMultiplyQuestion() {

}

// Display divide question

function displayDivideQuestion() {

}