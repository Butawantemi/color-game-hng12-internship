/* 
Generate a random color for the target box.
Create six random colors, ensuring one matches the target.
Add click events to check if the chosen color is correct.
Update the score when the player guesses correctly.
Reset the game when the new game button is clicked. 
*/

const colorBox = document.getElementById('colorBox');
const gameStatus = document.getElementById('gameStatus');
const score = document.getElementById('score');
const newGameButton = document.getElementById('newGameButton');


const randomColor = () => {
    return Math.floor(Math.random * 256);
}

const randomRGB = () => {
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

const targetColor = randomRGB();

console.log(targetColor);