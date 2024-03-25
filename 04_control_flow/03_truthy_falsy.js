// truty: In js, truty value is a value that is considered true encountered (to meet) in a boolean context.

const userEmail = "";

if (userEmail) {
    console.log(`got user email!`);
} else {
    console.log(`don't have user email!`);
}

// all falsy value's are : false, 0, -0, BigInt 0n, " ", null, Undefined ,NaN.
// all truty possible value's are : true, "0", "", [], {}, function () {}

// How to find, Array or string is empty or not?
// Ans:
if (userEmail.length == 0) {
    console.log(`Array / String is empty.`);
} else {
    console.log(`Array / String is not empty. `);
}

// How to find, Object's is empty or not?
// Ans:
const emptyObj = {};
// const emptyObj = { name: `Prajwal` };

if (Object.keys(emptyObj).length === 0) {

    console.log(`Object is empty.`);
} else {
    console.log(`Object is not empty.`);
}

// Nullish Coalesing Operator (??) : null, undefined.
// definition : Nullish coalesing operator (??) operator is a logical operator that returns its right-hand side operand when its left side operand is null or undefined. otherwise returns its left-hand side operand.

let value ;

value = 5 ?? 10; // 5
value = null ?? 10; // 10
value = undefined ?? 15; // 15
value = null ?? 12 ?? 20; // 12

console.log(value);

// ternary Operator:
// syntax: 
// (condition) ? true : false

const age = 17;

(age >= 18) ? console.log(`you are 18+`) : console.log(`you are not 18+`);