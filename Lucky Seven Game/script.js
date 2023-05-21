// Initializing an array with numbers from 1 to 7
let numbers = Array.from({ length: 7 }, (_, i) => i + 1);
// Shuffling the numbers
numbers.sort(() => Math.random() - 0.5);

// Getting game container element
let gameContainer = document.getElementById('game-container');
// Message element
let messageElement = document.getElementById('message');

// Creating 7 buttons with hidden values
for (let i = 0; i < numbers.length; i++) {
	let button = document.createElement('button');
	button.innerText = i + 1;
	button.hiddenValue = numbers[i];
	button.className = 'game-button';
	button.onclick = function () {
		handleButtonClick(button);
	}
	gameContainer.appendChild(button);
}

let lastRevealedValue = 0;

function handleButtonClick(button) {
	// If button is disabled, do nothing
	if (button.disabled) return;

	// If it's the first button or it's the next button based on last revealed value
	if (lastRevealedValue === 0 || lastRevealedValue == button.innerText) {
		button.disabled = true;
		lastRevealedValue = button.hiddenValue;
		messageElement.innerText = "You revealed: " + button.hiddenValue;

		// Check if the game is won
		let remainingButtons = Array.from(gameContainer.children).filter(b => !b.disabled);
		if (remainingButtons.length === 0) {
			messageElement.innerText = "Congratulations! You won the game!";
			return;
		}

		// Check if the game is over
		let nextButton = remainingButtons.find(b => b.innerText == lastRevealedValue);
		if (!nextButton) {
			messageElement.innerText = "Sorry, game over. There's no available button for the next move.";

			// Reveal all hidden values
			Array.from(gameContainer.children).forEach(b => {
				b.disabled = true;
				b.innerText = b.hiddenValue;
			});
		}
	}
}

function restartGame() {
	// Remove all buttons from the game container
	while (gameContainer.firstChild) {
		gameContainer.removeChild(gameContainer.firstChild);
	}

	// Reset last revealed value
	lastRevealedValue = 0;
	messageElement.innerText = "";

	// Shuffle numbers again
	numbers.sort(() => Math.random() - 0.5);

	// Recreate the buttons
	for (let i = 0; i < numbers.length; i++) {
		let button = document.createElement('button');
		button.innerText = i + 1;
		button.hiddenValue = numbers[i];
		button.className = 'game-button';
		button.onclick = function () {
			handleButtonClick(button);
		}
		gameContainer.appendChild(button);
	}
}
