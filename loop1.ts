//part 1 :creating a lesson plan


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

