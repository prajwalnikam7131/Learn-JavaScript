/*
    array:
        The Array object, storing a collection of multiple items under a single variable name.
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"]; // array
// console.log(fruits);

// new keyword: For simplicity, readability and execution speed, use the array literal method.
const cars = new Array("fortuner", "innova", "range_rover", "swift");
// console.log(cars);

// Accessing Array Elements: we can access an array element by referring to the index number.
let car = cars[0];
// console.log(car); // fortuner
// console.log(cars[0]); // fortuner

// Changing an Array Element: 
cars[3] = "jaguar";
// console.log(cars); // [ 'fortuner', 'innova', 'range_rover', 'jaguar' ]

// Converting an Array to a String: The JavaScript method toString() converts an array to a string of array values.
// console.log(cars.toString()); // fortuner,innova,range_rover,jaguar


/* Arrays Property */
// length property: The length property returns the length (size) of an array.

let size = cars.length;
// console.log(size); // 4

/* Arrays Methods */