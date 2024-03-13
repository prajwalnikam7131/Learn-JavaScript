var c = 100; // Global Scope
// console.log(c);  // 100

{
    let a = 10
    const b = 20
    c = 30 // block scope
}

// console.log(a); // error
// console.log(b); // error
// console.log(c);  // 30

function one() {
    const firstFunction = `Run Outer Function`;

    console.log(secondFunction);

    function two() {
        const secondFunction = `Run Inner Function`;
        
        console.log(firstFunction);
    }
    two();
}

one();