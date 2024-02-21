/*
    # Primitive data type:

    all primitive data type value is 'call by value'.
    there are 7 primitive types: string, number, boolean, undefined, 
    null, symbol.
*/

let a = 5;
let b = a;

console.log(a); // 5
console.log(b); // 5

a = 3;

console.log(a); // 3
console.log(b); // 5

/* 
Note:
    here the 'b' was jsut a copy of 'a' and it has its own space in memory.
    changing 'a' does not impact the value of 'b'. known as call by value.
*/

/*
    # references(non-primitive) data type:

    all reference data type value are 'call by reference'.
    there are 3 reference data types: Array, object and functions.
*/

let c = {
    greeting: "Welcome to DEVS"
};
let d = c;

console.log(c); // { greeting: 'Welcome to DEVS' }
console.log(d); // { greeting: 'Welcome to DEVS' }

c.greeting = "welcome to Programers"

console.log(c); // { greeting: 'welcome to Programers' }
console.log(d); // { greeting: 'welcome to Programers' }

/*
    # Summary of 'call-by-Value' and 'call-by-Reference':

    1.) call by value: 
        copies the value of a variable pass to a function.
        resulting(storing) in separate memory locations.

    2.) call by references: 
        variables refers to a same object,
        sharing memory location and affecting each other's value.
*/
