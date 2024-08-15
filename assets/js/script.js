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
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});

// Run Game

/** 
 * The main game loop, called when the script is first loaded
 * and after the user's answer has been processed.
*/

function runGame(gameType) {

    // Create two random numbers between 1 and 25

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert("Unknown game type!");
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

// Check Answer

function checkAnswer() {

}

/** Gets the operands and the operator directly from the DOM and returns the correct answer. */

// Calculate correct answers

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById(operand1).innerText);
    let operand2 = parseInt(document.getElementById(operand2).innerText);
    let operator = document.getElementById("operator").innerText;

}

// Increment score count

function incrementScore() {

}

// Increment wrong answer count

function incrementWrongAnswer() {

}

// Display addition question

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

    if (operator === "+") {
        return [operand1, operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}`;
    }

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