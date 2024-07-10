//part 1 :creating a lesson plan
// 1. Create a blank array named myWork
var myWork = [];
// 2. Use a loop to create lessons
for (var i = 1; i <= 10; i++) {
    // Create an object representing a lesson
    var lesson = {
        name: "Lesson ".concat(i),
        status: i % 2 === 1 // true for odd numbers, false for even numbers
    };
    // 3. Add the lesson to the array
    myWork.push(lesson);
}
// 4. Print the result
console.log(myWork);
