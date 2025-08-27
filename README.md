
# Simon Says Game


This is a classic Simon Says game built with HTML, CSS, and JavaScript. The game tests your memory by challenging you to repeat a sequence of colors that increases in length with each level.

Features
Simple Interface: A clean and easy-to-use layout with four colored buttons.

Game Logic: The game generates a random sequence of button flashes for the player to follow.

User Interaction: Players can interact with the game by clicking on the colored buttons.

Score Tracking: Displays the current level as the score.

Mobile Responsive: The game is designed to be playable on both desktop and mobile devices.

# How to Play
Start the Game: Press any key or click the "START" button to begin.

Watch the Sequence: The game will flash a random color. Remember the color and its position.

Repeat the Sequence: Click the same colored button that flashed.

Level Up: If you click the correct button, the game will add another color to the sequence, and the level will increase.

Game Over: If you click the wrong button, the game will end. Your score is the level you reached.

Restart: Press any key or click "Start Again" to play a new game.

# Project Structure
index.html: The main HTML file that provides the structure of the game, including the title, score display, and the four colored buttons.

style.css: The CSS file that handles the styling of the game, including button colors, layout, and flash animations. It also includes media queries for responsiveness.

app.js: The JavaScript file that contains all the game logic, including:

Handling the start and restart of the game.

Managing the game's sequence (gameSeq) and the user's input (userSeq).

Generating random colors for each new level.

Adding and removing flash animations for both the game and the user.

Checking the user's answer against the game's sequence.

Displaying the current level and the final score.

# Technologies Used
HTML5: For the game's structure.

CSS3: For styling and layout.

JavaScript: For the game's core logic and functionality.
