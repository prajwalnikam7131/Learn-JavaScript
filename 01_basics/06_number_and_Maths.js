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

console.log(num.toPrecision(5)); // 123.46
console.log(num.toPrecision(3)); // 123
console.log(num.toPrecision(1)); // 1e+2

/* 
    # toLocaleString():    
*/
const value = 200000;
console.log(value.toLocaleString()); // 200,000
console.log(value.toLocaleString('en-In')); // 2,00,000
