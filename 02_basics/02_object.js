// singleton Object (constructor Method):
const student = new Object();
// console.log(typeof student, student); // Object 

// literals Method:

/*
    javaScript Symbols:
        symbols are immutable and are uniqe.
*/
// creating Symbol:
// const sym = Symbol();
// console.log(typeof sym); // symbol


// you can pass an optional string as its description.
const sym = Symbol("key1");
console.log(typeof sym, sym); // symbol Symbol(key1)

// Access Symbol Description:
const access = sym.description;
console.log(access); // key1

// Add Symbol as an Object Key:
// you can add symbol as a key in an object using square bracket [].

let id = Symbol("id");

let persons = {
    firstName: "prajwal",
    lastName: "Nikam",
    age: 24,
    location: "Malegoan",

    // adding symbol as a key
    [id]: 123,
    [sym]: 431
};

console.log(typeof persons); // object


// Accessing Object properties:
// we can access object properties in two ways:

// 1st Method: objectName.propertyName:
console.log(persons.location); // Malegoan

// 2nd Method: objectName["propertyName"]
console.log(persons["location"]); // Malegoan

// change or update value:
persons.firstName = "Pirate";

// adding property in object:
persons.email = "pn@microsoft.com";

console.log(persons);
