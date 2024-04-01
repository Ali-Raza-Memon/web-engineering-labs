document.addEventListener("DOMContentLoaded", function() {
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const message = document.getElementById("message");

    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    let attempts = 0;

    guessButton.addEventListener("click", function() {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = "Please enter a valid number between 1 and 100.";
        } else {
            attempts++;
            if (guess === randomNumber) {
                message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
                guessInput.disabled = true;
                guessButton.disabled = true;
            } else if (guess < randomNumber) {
                message.textContent = "Too low. Try again.";
            } else {
                message.textContent = "Too high. Try again.";
            }
        }
    });
});
