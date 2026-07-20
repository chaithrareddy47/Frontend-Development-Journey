// Chapter - Destructuring
// What is Destructuring? Destructuring lets you extract values from an array or object and store them in variables.

const person = {
  name: "akshay",
  age: 22,
};

const { name, age } = person;
console.log(person.name);

// array destructuing
const colors = ["Red", "Blue", "Green"];

const [first, second, third] = colors;

console.log(first);
console.log(second);

// renaming variables 
const person1 = {
    name :"akshay",
}

const { name: fullName } = person;
console.log(fullName);


