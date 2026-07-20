// chapter - Objects

// What is an Object? - An object is a collection of key-value pairs.

//It is used to store related information about a single thing.

// objects for storing about a particular person in one object

/*
const objectName = {
    key1: value1,
    key2: value2
    };
    */

const person = {
  name: "akshay",
  age: 20,
  city: "mumbai",
};
// Accessing Properties
// 1.Dot Notation

console.log(person.name);

//2.bracket notation
console.log(person["city"]);

// updating proprty
person.age = 21;
console.log(person);

// adding new property
person.occupation = "teacher";
console.log(person);

// deleting a property
delete person.occupation;
console.log(person);

// objects can store different data types

// nested object

const student = {
  name: "akshay",
  age: 20,
  address: {
    presentCity: "bangalore",
    capital: "new delhi",
  },
};

console.log(student.address);

/*
 Object

↓

Key : Value

↓

Dot Notation

↓

Bracket Notation

↓

Update

↓

Add

↓

Delete

↓

Nested Object

↓

Array Inside Object

↓

Object Inside Array
*/
