//part 5.Exploring Arrays with Loops(Using loop ).......

// Step 1: Create an empty array
const myArray: number[] = [];

// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i < 10; i++) {
  myArray.push(i + 1); // Adding incrementing value starting from 1
}

// Step 3: Log the array into the console
console.log("Array after populating:", myArray);

// Step 4: Use a for loop to iterate through the array
for (let i = 0; i < myArray.length; i++) {
  console.log(`Index: ${i}, Value: ${myArray[i]}`);
}

// Step 5: Use the for...of loop to output the value into the console from the array
for (const value of myArray) {
  console.log(`Value: ${value}`);
}
