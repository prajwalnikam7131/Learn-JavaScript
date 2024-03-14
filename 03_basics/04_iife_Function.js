/*
    Immediately Invoked Function Expression (IIFE).
*/

// "IIFE name" function:

(function chai() {

    console.log(`connected`);

})();

// simple IIFE function

((name) => {
console.log(`connected to ${name}`);
})(`Prajwal`);
