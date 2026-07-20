/*
Chapter 7 – Switch Statement
What is a Switch Statement?
A switch statement is used to execute different blocks of code based on the value of a variable.

It is an alternative to writing many if...else if...else conditions when checking one variable against multiple values.

switch (expression) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
*/

const day = "Monday";

switch (day) {
    case "Monday": console.log("Start working");
        break;
    case "Tuesday": console.log("Continue working");
        break;
    default : console.log("Holiday");
    
    
}

// break stops execution

// default - runs whn no case matches

/*
When to Use Switch? - ✅ Good
Checking: 
Day of week
Month
Menu options
User role
Calculator operation
*/