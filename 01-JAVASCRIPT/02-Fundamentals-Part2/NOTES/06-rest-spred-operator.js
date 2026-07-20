//chapter -  Spread & Rest Operator
// Both use ... but have different purposes.

// Spread Operator
//What is it? - Spread expands arrays or objects.
const arr1 = [1, 3];
const arr2 = [...arr1, 5, 6];
console.log(arr2);

const person = {
  name: "Akshay",
};

const updated = {
  ...person,
  city: "Hyderabad",
};

console.log(updated);

// Rest Operator - Collects multiple values into one variable.

function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4);


/*
| Spread             | Rest                 |
| ------------------ | -------------------- |
| Expands            | Collects             |
| Used while calling | Used while receiving |
*/