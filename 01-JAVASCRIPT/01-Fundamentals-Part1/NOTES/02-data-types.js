// 📘 Chapter 2 – JavaScript Data Types
// A Data Type defines the kind of value stored in a variable.


/*
JavaScript has 8 Data Types.

│

├── Primitive

│     ├── Number

│     ├── String

│     ├── Boolean

│     ├── Undefined

│     ├── Null

│     ├── Symbol

│     └── BigInt

│

└── Non Primitive (Reference)

      └── Object
*/

/*
 Primitive Data Types
Definition : Primitive values are simple values.
They store only one value.
They are immutable (their value itself cannot be changed; assigning a new value creates a new value).
*/

// 1. Number
let age = 23;
let price = 199.99;
let marks = 43;


// 2.String
let name = "Hello";

// String Concatenation
let firstName = "Akshay";
let lastName = "saini";

console.log(firstName + " " + lastName);

//3.Boolean - stroes true or false
let isStudent = true;
let hasJob = false;

// 4. Undefined -A variable is declared but not assigned a value.

let city;
console.log(city); // value is not assiged

//5. Null- empty object

let user = null;


//6.symbol - used to create unique values
const id = Symbol("id");
console.log(id); // mostly used in advance javascrpt


// 7. BigInt - Used for very large integers.
const big = 1234577777777777777777777773080n;
console.log(big);


// Non Primitive Data Type - Object
// eveything in js is an object

const student = {
    name: "akshay",
    age: 22
};

console.log(student);


// Arrays are also objects internally.
// Functions are also objects in JavaScript.

/*
 typeof Operator - Used to check the data type of a value
*/
// typeof value;

let age1 = 22;
console.log(typeof age);
