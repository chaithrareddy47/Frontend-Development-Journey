/*
Create an object for yourself.
Store:
name
age
city

Print all values.
*/

const personDetails = {
    name: "chaithra",
    age: 28,
    city:"bangalore"
}
console.log(personDetails);

/*
2

Create a car object.
Store:
brand
model
price

Print the model
*/

const car = {
    brand: 'xuv',
    model: 2027,
    price: 200000

}
console.log(car);
car.price = 30000;
console.log(car);

car.color = "blue";
console.log(car);

delete car.color;
console.log(car);

//Create an object containing an array.
const person = {
    name: "akshay",
    hobbies: ["coding", "teaching","reading"]
}
console.log(person.hobbies[1]);


// Create an object inside another object.
const newPerson = {
    name: "john",
    address: {
        city: "bangalore",
        pincode: 654392,
    }
}

console.log(newPerson.address.city);


/*
⭐ Mini Challenge
Do the following:
Print the name.
Print the marks.
Add "JavaScript" to the skills array.
Change age to 21.
Add a new property city.
Delete marks.
Print the final object.
*/

const student = {
    name: "john",
    age: 20,
    marks: 30,
    skills:["javascript", "react"]
}

console.log(student.name);
console.log(student.marks);
console.log(student.skills = "javascript");
console.log(student.age = 21);
console.log(student.city = "bangalore");
console.log(delete student.marks);

console.log(student);








