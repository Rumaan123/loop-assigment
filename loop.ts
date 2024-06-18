//part1
// Define an interface for the lesson object
interface Lesson {
    name: string;
    status: boolean;
  }
// 1. Create a blank array named myWork
let myWork: Lesson[] = [];

// 2. Use a loop to create lessons
for (let i = 1; i <= 10; i++) {
  // Create an object representing a lesson
  let lesson = {
    name: `Lesson ${i}`,
    status: i % 2 === 1 // true for odd numbers, false for even numbers
  };
  
  // 3. Add the lesson to the array
  myWork.push(lesson);
}

// 4. Print the result
console.log(myWork);

//part2
// 1. Set a maximum value
const maxValue = 100;

// 2. Generate a random number
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random Number (for development purposes): ${randomNumber}`);

// 3. Track the guess status
let isCorrectGuess = false;

// 4. Simulate user guesses
const guesses = [10, 25, 50, 75, 85, 95, 100]; // Example predefined guesses

// 5. Iterate over guesses
let i = 0;
while (i < guesses.length && !isCorrectGuess) {
  let currentGuess = guesses[i];
  console.log(`User guessed: ${currentGuess}`);

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

