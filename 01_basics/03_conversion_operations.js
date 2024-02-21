/* 
    In this chapter to learn conversion of data types.
*/

let num = 33;
// console.log(num);  // print 33
// console.log(typeof num); // number


let numToString = String(num);
// console.log(numToString); // string
// console.log(typeof numToString); // string


// let str = "45";
let str = "prajwal";

// console.log(str); // '45' is string.
// console.log(typeof str); // string

let stringInNumber = Number(str);

// console.log(stringInNumber); // NaN+
// console.log(typeof stringInNumber); // number



let a;

a = 25;
// console.log(a, typeof a);
a = String(25);
// console.log(a, typeof a);

a = 25.5;
// console.log(a, typeof a);


/*  ********************* Operations  ********************** */


/* 
    1). This are regular operator
    There are main 7 type of operator.
*/
let x = 10, y = 2, z;
let addition = x + y;
let subtraction = x - y;
let multiplication = x * y;
let division = x / y;
let exponetial = x ** y; // power operator
let modulo = x % y;      // remender 
let assign = z = y; // assign operator

console.table([addition, subtraction, multiplication, division, exponetial, modulo, assign]);

/* 
    2). Unary operator 
        1. Increment operator 
            i) pre-increment operator
            ii) post-increment operator
        2. Decrement operator
            i) pre-decrement operator
            ii) post-decrement operator


            let understand with example
*/

let age = 18;
++age //pre-increment  
age++ //post-increment
--age //pre-decrement
age-- //post-decrement



/*
   understand with some extra example.
*/
let value = 10;
let negValue = -value;

console.log(negValue); // -10 

let fixedValue = 20;
let subValue = fixedValue - (negValue);
console.log(subValue);  // 30

/* 
    Analysis:

    value => 10
    negValue => print => -10
    fixedValue => 20
    subValue => 20 - ( -10 ) => 30

*/

