/* 
Generate a random color for the target box.
Create six random colors, ensuring one matches the target.
Add click events to check if the chosen color is correct.
Update the score when the player guesses correctly.
Reset the game when the new game button is clicked. 
*/

// Array of predefined colors
const colors = ["#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",];

// Select HTML elements
const colorBox = document.getElementById("colorBox");
const colorOptions = document.querySelectorAll(".colorOption");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let targetColor;
let score = 0;

// Function to pick a random color from the array
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to set up a new game round
function startNewGame() {
    targetColor = getRandomColor();
    colorBox.style.backgroundColor = targetColor;

    let shuffledColors = [...colors].sort(() => Math.random() - 0.5);

    // Ensure target color is included
    if (!shuffledColors.includes(targetColor)) {
        shuffledColors[Math.floor(Math.random() * shuffledColors.length)] = targetColor;
    }

    colorOptions.forEach((button, index) => {
        button.style.backgroundColor = shuffledColors[index];
        button.dataset.color = shuffledColors[index];
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
    } else {
        gameStatus.textContent = "Wrong! Try again. ❌";
        event.target.classList.add("wrong"); 
        setTimeout(() => event.target.classList.remove("wrong"), 500);
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
