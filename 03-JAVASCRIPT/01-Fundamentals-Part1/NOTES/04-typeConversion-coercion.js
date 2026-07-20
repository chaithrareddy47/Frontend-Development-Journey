// 📘 Chapter 4 – Type Conversion & Type Coercion
// What is Type Conversion? - Type Conversion means manually converting one data type into another.

const year = "2002";
console.log(typeof year);

console.log(Number(year));

console.log(typeof year);

/*
The original value remains the same.
Type conversion does not modify the original variable unless you assign the converted value back.
*/

const age = "23";
console.log(typeof age);

const newAge = Number(age);
console.log(typeof newAge);

// 1.string to number
const age1 = "23";
console.log(typeof Number(age1));

// 2.Number to string
const x = 23;
console.log(typeof String(x));

//3.Boolean to number
const y = true;
console.log(typeof Number(y));

//4.Number to boolean
const z = 1;
console.log(typeof Boolean(z));

//5.String to boolean
const name = "chai";
console.log(typeof Boolean(name));

/*
Type Coercion
Definition
Type Coercion means JavaScript automatically converts one data type into another.
*/

console.log("10" + 5);
console.log(5 + "10");

console.log("10" * 2);
console.log("10" / 2);

// + concatinates if one operand is string









