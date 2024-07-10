//part 2 : guessing game

// 1. Set a maximum value
var maxValue = 100;
// 2. Generate a random number
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number (for development purposes): ${randomNumber}`); // Use template literals for cleaner code
// 3. Track the guess status
var isCorrectGuess = false;
// 4. Simulate user guesses
var guesses = [10, 25, 50, 75, 85, 95, 100]; // Example predefined guesses
// 5. Iterate over guesses
var i = 0;
while (i < guesses.length && !isCorrectGuess) {
    var currentGuess = guesses[i];
    console.log(`User guessed: ${currentGuess}`); // Use template literals
    // 6. Check the user's guess
    if (currentGuess === randomNumber) {
        console.log("Congratulations! Your guess is correct.");
        isCorrectGuess = true;
    } else if (currentGuess < randomNumber) {
        console.log("Your guess is too low.");
    } else {
        console.log("Your guess is too high.");
    }
    i++;
}
if (!isCorrectGuess) {
    console.log("You've used all your guesses. Better luck next time!");
}

