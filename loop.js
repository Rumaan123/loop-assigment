// 1. Create a blank array named myWork
var myWork = [];
// 2. Use a loop to create lessons
for (var i_1 = 1; i_1 <= 10; i_1++) {
    // Create an object representing a lesson
    var lesson = {
        name: "Lesson ".concat(i_1),
        status: i_1 % 2 === 1 // true for odd numbers, false for even numbers
    };
    // 3. Add the lesson to the array
    myWork.push(lesson);
}
// 4. Print the result
console.log(myWork);
//part2
// 1. Set a maximum value
var maxValue = 100;
// 2. Generate a random number
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random Number (for development purposes): ".concat(randomNumber));
// 3. Track the guess status
var isCorrectGuess = false;
// 4. Simulate user guesses
var guesses = [10, 25, 50, 75, 85, 95, 100]; // Example predefined guesses
// 5. Iterate over guesses
var i = 0;
while (i < guesses.length && !isCorrectGuess) {
    var currentGuess = guesses[i];
    console.log("User guessed: ".concat(currentGuess));
    // 6. Check the user's guess
    if (currentGuess === randomNumber) {
        console.log("Congratulations! Your guess is correct.");
        isCorrectGuess = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Your guess is too low.");
    }
    else {
        console.log("Your guess is too high.");
    }
    i++;
}
if (!isCorrectGuess) {
    console.log("You've used all your guesses. Better luck next time!");
}
