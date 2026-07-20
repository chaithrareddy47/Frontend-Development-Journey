// FUNCTIONS
/*
What is a Function?

A function is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, we write it once inside a function and call it whenever needed
*/

// why do we need  functions

console.log("welcome");
console.log("welcome");
console.log("welcome");

function greet() {
  console.log("Welcome");
}
greet();
greet();
greet();
/*
Benefits:
✅ Reusability
✅ Cleaner code
✅ Easier to maintain
✅ Reduces repetition

 Function Declaration - most common way
function functionName(parameters) {
    // code
    return value;
}
*/

// Function expression - stroe function inside a variable

const greeting = function name() {
  console.log("Nmaaste");
};
greeting();
/*
Difference:
Function Declaration → Can be called before it's written (hoisted).
Function Expression → Must be defined before calling.
*/

// Arrow function - modern es6 synatx
const greet1 = () => {
  console.log("Hello");
};

greet1();

// parameter vs argument
// parameter - vaibles in the function definition

function add(a, b) {
  // a and b are parameters
}

//arguments - actual value passed to the function
// add(10,20) 10 and 20 are the argumnets

// Return Keyword
//return sends a value back to the place where the function was called.

function sub(a, b) {
  return a + b;
}

const result = sub(10, 30);
console.log(result);

// Function Calling Another Function
function square(num) {
  return num * num;
}

function printSquare(num) {
  const result = square(num);
  console.log(result);
}

printSquare(5);