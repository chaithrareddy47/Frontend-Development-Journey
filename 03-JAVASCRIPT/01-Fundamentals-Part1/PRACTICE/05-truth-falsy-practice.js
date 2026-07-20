if ("hello") {
  console.log("A");
} // prints a bcs its turty value condition has value in it

if ("") {
  console.log("A");
} // prints nothing bcs its falsy value

if (100) {
  console.log("Javascript");
} // prints 100 bcs condition hs value and its truthy

if (0) {
  console.log("React");
} // prints nothing its falsy value

if (-50) {
  console.log("Negative");
} // prints bcs its turthy value

if (null) {
  console.log("Hello");
} // falsy value

if (undefined) {
  console.log("Frontend");
} // fa;sy value

if (NaN) {
  console.log("Developer");
} // falsy value

if ("0") {
  console.log("Zero");
} // prints zero bcs its string and truty value

if (" ") {
  console.log("Space");
} // prints bcs its a string and it has space

let age = 21;

if (age) {
  console.log("Adult");
} // prints adult

let age1 = 0;

if (age1) {
  console.log("Adult");
} // does not print bcs 0 is falsy value

let username = "";

if (username) {
  console.log("Welcome");
} // falsy value

const cart = [];

if (cart) {
  console.log("Cart Exists");
}