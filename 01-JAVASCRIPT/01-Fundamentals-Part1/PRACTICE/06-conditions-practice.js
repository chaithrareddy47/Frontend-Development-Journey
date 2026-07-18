let marks = 75;

if (marks >= 90) {
    console.log("GRADE A");
    
} else if (marks >= 75) {
    console.log("GRADE B");
    
} else if (marks >= 35) {
    console.log("GRADE C");
    
} else {
    console.log("FAIL");
    
}

// nested if 
let age = 15;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("can drive");
        
    } else {
        console.log("Get license first");
        
    }
} else {
    console.log("too young");
    
}

let age1 = 22;
if (age >= 18) {
    console.log("Adult");
    
} else {
    console.log("Minor");
    
}