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
console.log(typeof str); // string

let stringInNumber = Number(str);

console.log(stringInNumber); // NaN
console.log(typeof stringInNumber); // number