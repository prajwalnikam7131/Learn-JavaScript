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


function firstFun() {
    let a = 30;
    let b = 20;

    console.log(a+b);
    secondFun();

    function secondFun() {
        console.log(a+b);

        // secondFun();
    }
}

firstFun();