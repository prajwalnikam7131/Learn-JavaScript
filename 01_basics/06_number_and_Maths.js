const score = 100;
// console.log(score); // 100

const balanced = new Number(100);
// console.log(balanced); // [Number: 100]

// console.log(balanced == score); // true
// console.log(balanced === score); // false

/*

const balanced = 100;
console.log(balanced === score); // false

*/

/* 
    # toFixed() Method: 
    the toFixed() method of Number value formats.
*/
// console.log(balanced.toFixed(2)); // 100.00

function financial(x) {
    return x.toFixed(2);
}
// console.log(financial(123.456)); // 123.46
// console.log(financial(0.004)); // 0.00
// console.log(financial(1.23e+5)); // 123000.00

/* 
    # toPricision() Method:
    the toPrecision() method of Number value returns a string representing this Number to the specified precision.
*/

let num = 5.123456;

// console.log(num.toPrecision()); // 5.123456
// console.log(num.toPrecision(5)); // 5.1235
// console.log(num.toPrecision(4)); // 5.123
// console.log(num.toPrecision(3)); // 5.12
// console.log(num.toPrecision(2)); // 5.1
// console.log(num.toPrecision(1)); // 5


num = 123.456;

// console.log(num.toPrecision(5)); // 123.46
// console.log(num.toPrecision(3)); // 123
// console.log(num.toPrecision(1)); // 1e+2

/* 
    # toLocaleString():    
*/
let value = 200000;
// console.log(value.toLocaleString()); // 200,000
// console.log(value.toLocaleString('en-In')); // 2,00,000

/* 
    # toExponential():
    return string representing this number in exponential notation.    
*/
value = 200000;

// console.log(value.toExponential()); // 2e+5
// console.log(value.toExponential(2)); // 2.00e+5
// console.log(value.toExponential(3)); // 2.000e+5

/* 
    # toString(): [Advanced topic]    
*/
// let valuetoString = 200000;
// console.log(valuetoString.toString(16));


/* ++++++++++++++++++++++++++++++++++ javaScript Properties ++++++++++++++++++++++++++++++++++ */


/* ++++++++++++++++++++++++++++++++++ javaScript Methods ++++++++++++++++++++++++++++++++++ */

/*
    # Math.abs() Method:
    returns the absolute value.
*/

// console.log(Math.abs(-7)); // 7
// console.log(Math.abs(2.5)); // 2.5
// console.log(Math.abs(null)); // 0
// console.log(Math.abs(`Hello`)); // NaN
// console.log(Math.abs(2-3)); // 1


/*
    # Math.ceil() Method:
    always round up and returns the smallest integer than or equal to a given number.
*/

// console.log(Math.ceil(0.60)); // 1
// console.log(Math.ceil(0.40)); // 1
// console.log(Math.ceil(5)); // 5
// console.log(Math.ceil(5.1)); // 6
// console.log(Math.ceil(-5.1)); // -5
// console.log(Math.ceil(-5.9)); // -5

/*
    # Math.floor() Method:
    always round down and returns the largest integer less than or equal to a given number.
*/

console.log(Math.floor(0.60)); // 0
console.log(Math.floor(0.40)); // 0
console.log(Math.floor(5)); // 5
console.log(Math.floor(5.1)); // 5
console.log(Math.floor(-5.1)); // -6
console.log(Math.floor(-5.9)); // -6