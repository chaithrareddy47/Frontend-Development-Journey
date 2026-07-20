// chapter optional chaining
// What is Optional Chaining? Optional chaining (?.) safely accesses properties that may not exist.

// without thsi we get error
const person = {};
// console.log(person.address.city);


console.log(person.address?.city);

// Why use it? Sometimes an object doesn't have every property. ?. prevents your program from crashing.

//React uses this a lot