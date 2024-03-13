var c = 100; // Global Scope
console.log(c);  // 100

{
    let a = 10
    const b = 20
    c = 30 // block scope
}

// console.log(a); // error
// console.log(b); // error
console.log(c);  // 30

function one() {
    const firstFunction = `Run Outer Function`;

    // console.log(secondFunction); // error

    function two() {
        const secondFunction = `Run Inner Function`;

        console.log(firstFunction);
    }
    // console.log(secondFunction); // error

    two();

    // console.log(secondFunction); // error

}

// one();

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*   how to work function before & after execution.     */

/*
    Normal Function, before and after both execution acceptable.
*/
console.log(addone(5)); // 6

function addone(num) {
    return num + 1
}

console.log(addone(5)); // 6


/*
    When we store a function in variable then always after execution.
    when we try before execution then throw error.
*/

// console.log(addtwo(5)); // error

const addtwo = function (num) {
    return num + 2
}

console.log(addtwo(5)); // 7
