const arr = [1, 2, 3, true, `Prajwal`];
// console.log(`type-of array: `,typeof arr);
// console.log(arr, arr.length);

/* 
    at() Method :
        returns indexed element from an array.
*/
const fruits = [`Banana`, `Orange`, `Apple`, `Mango`];
// let index = 2;
// let fruit = fruits.at(index); // Apple

// let fruit = fruits.at(3); // Mango
let fruit = fruits.at(-3);   // Orange
console.log(fruit);

/*
    concat() method: 
     join two or more array.
*/
const arr1 = ['a','b','c','d'];
const arr2 = ['e','f','g','h'];

const alphabets = arr1.concat(arr2);
console.log(alphabets);