//part 3 : counter increment
// 1. Set the starting counter to 0
var counter = 0;
// 2. Create a variable, step, to increase your counter by
var step = 5;
// 3. Add a do...while loop
do {
    // Print the counter to the console
    console.log(counter);
    // Increment the counter by the step amount
    counter += step;
} while (counter < 100); // 4. Continue to loop until the counter is equal to or more than 100
// For completeness, log the final counter if it's 100 or more
if (counter >= 100) {
    console.log(counter);
}
