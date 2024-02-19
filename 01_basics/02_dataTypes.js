/*
    In this chapter to learn dataTypes and what is "use strict"?
 */
"use strict";
/*
    'use strict' means treat all js code as new version.
    when we write 'use strict' that means all code treat as modern javaScript.
    this line always write in first line.
*/

/* 
    data types in javascript.

    data type are used to define type-of variable.

    1) Number => 4, 10, 3.49, 0, etc.
    2) String => "Prajwal", 'a', '7', etc.
    3) BigInt => handles large Integers.
    4) Boolean => true or false
    5) undefined
    6) Null
    7) Symbol
    8) Object

    let understand with examples:
*/

let a = 49; // number data type
let Name = "Prajwal"; // string data type
let bool = false; // boolean data type
let age; // undefined

const person = {   
    name: "prajwal",
    age: 23,
    city: "Malegaon"
}
// object data type

/* 
    'typeof' operator is determine data type of variable.
*/
console.log(typeof a);
console.log(typeof Name);
console.log(typeof name); // undefined
console.log(typeof bool);
console.log(typeof age); // undefined
console.log(typeof person);
