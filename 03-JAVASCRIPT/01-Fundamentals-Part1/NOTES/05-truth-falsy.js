//Chapter 5 – Truthy & Falsy Values
//What are Truthy and Falsy Values?

//Whenever JavaScript expects a Boolean (true or false), it automatically converts values into either truthy or falsy.

if ("akshay") {
    console.log("hello");
    
}

// result - hello why bcs akshay is truthy js internally does Boolean("Akshay")


// What is a Falsy Value? A Falsy value becomes false when converted to a Boolean

/*
  There are only 6 falsy values in JavaScript.
false
0
""
null
undefined
NaN
*/