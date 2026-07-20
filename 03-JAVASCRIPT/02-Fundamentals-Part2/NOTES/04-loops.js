// Chapter – Loops
// What is a Loop? - A loop is used to execute the same block of code multiple times.

//Instead of writing the same code again and again, we use a loop.

/*
Types of Loops
You'll mainly use:
✅ for
✅ while
✅ for...of (Arrays)
✅ for...in (Objects)
*/

/*
1. for Loop - Most commonly used.
for (initialization; condition; update) {

}
*/

for (let i = 0; i < 5; i++) {
  console.log("hello world");
}

//2. while Loop Runs as long as the condition is true.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 4. for...of Loop - Used to loop through arrays.
const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
  console.log(fruit);
}

//5. for...in Loop - Used to loop through object properties.
const person = {
  name: "Akshay",
  age: 22,
  city: "Hyderabad",
};

for (const key in person) {
  console.log(key);
}