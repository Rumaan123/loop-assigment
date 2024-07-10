//part 4.Exploring Objects with for...in Loop.........

// Step 1: Create a simple object with three items
const myObject: { [key: string]: string } = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
  };
  
  // Step 2: Use a for...in loop to get properties' names and values from the object
  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      const value = myObject[key];
      console.log(`Property: ${key}, Value: ${value}`);
    }
  }
  