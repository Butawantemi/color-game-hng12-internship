/*
====================================
    Color Guessing Game Script
    - Randomly selects a color
    - Allows user to guess the correct color
    - Provides visual feedback on guesses
====================================
*/

// Select HTML elements
const colorBox = document.getElementById("colorBox");
const colorOptions = document.querySelectorAll(".colorOption");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");

// Array of predefined colors
const colors = ["#2C3E50", "#34495E", "#2C2C2C", "#616A6B", "#4A235A", "#2F4F4F"];

let targetColor;
let score = 0;

// Function to pick a random color from the array
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to start a new game
function startNewGame() {
    targetColor = getRandomColor();
    colorBox.style.backgroundColor = targetColor;

    // Shuffle colors and ensure target color is included
    let shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    if (!shuffledColors.includes(targetColor)) {
        shuffledColors[0] = targetColor; // Ensure the target color is in the list
    }

    // Assign colors to buttons
    colorOptions.forEach((button, index) => {
        button.style.backgroundColor = shuffledColors[index];
        button.dataset.color = shuffledColors[index];
        button.classList.remove("correct", "wrong"); // Reset animations
    });

    gameStatus.textContent = "Guess the correct color!";
}

// Function to check the player's guess
function checkGuess(event) {
    let chosenColor = event.target.dataset.color;

    if (chosenColor === targetColor) {
        gameStatus.textContent = "Correct! 🎉";
        score++;
        scoreDisplay.textContent = score;
        event.target.classList.add("correct");

        setTimeout(() => {
            event.target.classList.remove("correct");
        }, 500);
    } else {
        gameStatus.textContent = "Wrong! Try again. ❌";
        event.target.classList.add("wrong");

        setTimeout(() => {
            event.target.classList.remove("wrong"); 
        }, 500);
    }
}

// Attach event listeners to color buttons
colorOptions.forEach(button => {
    button.addEventListener("click", checkGuess);
});

// Event listener for new game button
newGameButton.addEventListener("click", startNewGame);

// Start the first game when the page loads
startNewGame();
