// Chapter 3 – JavaScript Operators
// What is an Operator?
// An Operator is a symbol that performs an operation on one or more values

// 10 20 these are operands
// + - * / operators

/*
- Types of Operators
JavaScript has many operators, but these are the important ones.
Arithmetic
Assignment
Comparison
Logical
Increment & Decrement
Ternary
*/

// 1. Arithmetic Operators
let a = 20;
let b = 30;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a ** b);

// 2.Assignment Operators
// let a = 10 assign teh values
let x = 10;
 x += 20;
x -= 30;
x *= 40;
x /= 100;

// 3. Comparison Operators
// compare 2 values (>,<, >=, <=, ===, !==)
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);


// 4. Logical Operators combine conditions
// AND Both conditions should be true &&
console.log(true && true);

// OR operator - any one condition should be true ||
console.log(true || false);

//NOT operator - reverse boolean
console.log(!true);

// 5. Increment and Decrement
let count = 100;
count++;
console.log(count);

++count;
console.log(count);

count--;
console.log(count);

--count;
console.log(count);

// 7. Ternary Operator short from of if...else
// condition ? trueValue : falseValue;

const age = 18;
console.log((age>18) ? "eligible" : "not eligible");

// Operator Precedence
console.log((10 + 5) *2);








