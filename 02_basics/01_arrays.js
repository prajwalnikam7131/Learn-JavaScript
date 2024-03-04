/*
    array:
        The Array object, storing a collection of multiple items under a single variable name.
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"]; // array
// console.log(fruits);

// new keyword: For simplicity, readability and execution speed, use the array literal method.
const cars = new Array("fortuner", "innova", "range_rover", "swift");
// console.log(cars);

// Accessing Array Elements: we can access an array element by referring to the index number.
// let car = cars[0];
// console.log(car); // fortuner
// console.log(cars[0]); // fortuner

// Changing an Array Element: 
// cars[3] = "jaguar";
// console.log(cars); // ['fortuner', 'innova', 'range_rover', 'jaguar']

// Converting an Array to a String: The JavaScript method toString() converts an array to a string of array values.
// console.log(cars.toString()); // fortuner,innova,range_rover,jaguar


/* Arrays Property */
// length property: The length property returns the length (size) of an array.

// let size = cars.length;
// console.log(size); // 4

/* Arrays Methods */

/* 
    at() Methods: 
        The at() method returns an 'indexed element' from an array.
*/
// const index = 3;
// let fruit = fruits.at(index);
// console.log(fruit); // Mango

// OR 
// console.log(fruits.at(3)); // Mango
// console.log(fruits.at(-3)); // Orange

/* 
    push() Methods: 
        The push() method adds new items to the end of an array.
*/
// console.log(fruits.push('Lemon')); // 5
// console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango', 'lemon']

/* 
    pop() Methods: 
        The pop() method removes (pops) the last element of an array.
*/
// console.log(fruits.pop()); // lemon
// console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango']
/* 
    unshift() Methods: 
        The unshift() method adds new elements to the beginning of an array.
*/
// console.log(fruits.unshift("Pineapple")); // 5
// console.log(fruits); // ['Pineapple', 'Banana', 'Orange', 'Apple', 'Mango']

/* 
    shift() Methods: 
        The shift() method removes the first item of an array
*/
// console.log(fruits.shift()); // Banana
// console.log(fruits); // ['Orange', 'Apple', 'Mango']

/* 
    slice() Methods: 
        The slice() method returns selected elements in an array, as a new array.
*/
// console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango']

const slice = fruits.slice(1, 3);
// console.log(slice); // ['Orange', 'Apple']

const slice2 = fruits.slice(-1, -3);
// console.log(slice2); // []

const slice3 = fruits.slice(-3, -1);
// console.log(slice3); // ['Orange', 'Apple']

const slice4 = fruits.slice(-1, 3);
// console.log(slice4); // []

const slice5 = fruits.slice(1, -3);
// console.log(slice5); // []

/* 
    splice() Methods: 
        The splice() method adds and/or removes array elements.
*/
console.log(fruits);

// At position 2, delete 0 element add 2 elements:

// const splice = fruits.splice(2,0,"Lemon","kiwi"); 
// console.log(splice); // []
// console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'kiwi', 'Apple', 'Mango']

// At position 2, delete 1, add 2 elements:
// console.log(fruits.splice(2,1,"grapes","Pineapple")); // Apple
// console.log(fruits); // ['Banana', 'Orange', 'grapes', 'Pineapple', 'Mango']

// At position 2, remove 2 items:
// console.log(fruits.splice(2,2)); // ['Apple', 'Mango']
// console.log(fruits); // [ 'Banana', 'Orange' ]

/* 
    concat() Methods: 
        The concat() method concatenates (joins) two or more arrays.
*/
// const arr = fruits.concat(cars);
// console.log(arr); // ['Banana','Orange', 'Apple','Mango','fortuner','innova','range_rover','swift']

/* 
    spread() operator Methods instead of concat() method: 
       The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
       This allows us to quickly copy all or parts of an existing array into another array.
*/

// const spread = [...cars, ...fruits];
// console.log(spread); // ['fortuner','innova','range_rover','swift','Banana','Orange','Apple','Mango']

/*
    flat() Method:
        The flat() method concatenates sub-array elements.
*/
const numArr = [[1, 2], [3, 4], [5, 6]];
const numArr2 = [1, 2, [3, [4, 5, 6], 7], 8];

const newNumArr = numArr.flat();
// console.log(newNumArr); // [1, 2, 3, 4, 5, 6]

const newNumArr2 = numArr2.flat();
// console.log(newNumArr2); // [1, 2, 3, [ 4, 5, 6 ], 7, 8]

const newNumArr3 = numArr2.flat(Infinity);
// console.log(newNumArr3); // [1, 2, 3, 4, 5, 6, 7, 8]

/*
    join() Method:
        The join() method returns an array as a string.
        The join() method does not change the original array.
        Any separator can be specified. The default is comma (,).
*/
let text = fruits.join();
// console.log(text); // Banana,Orange,Apple,Mango

let text2 = fruits.join(" and "); // and is seprator.
// console.log(text2); // Banana and Orange and Apple and Mango

/*
    includes() Method:
        The includes() method returns 'true' if an array contains a specified value.
        The includes() method returns 'false' if the value is not found.
        The includes() method is case sensitive.
*/

const includes = fruits.includes("Mango");
// console.log(includes); // true

// Start the search at position 1:
const includes2 = fruits.includes("Orange", 1);
// console.log(includes2); // true

// Start the search at position 3:
const includes3 = fruits.includes("Banana", 3);
// console.log(includes3); // flase

/*
    indexOf() Method:
        The indexOf() method returns the first index (position) of a specified value.
        The indexOf() method returns -1 if the value is not found.
        The indexOf() method is case sensitive.
*/

let index_of = fruits.indexOf("Apple");
// console.log(index_of); // 2

// start at index 3:
let index_of2 = fruits.indexOf("Apple", 3);
// console.log(index_of2); // -1

let index_of3 = fruits.indexOf("kiwi"); // not found 
// console.log(index_of3); // -1


/*
    isArray() Method:
        Check if an object is an array.
        The isArray() method returns true if an object is an array, otherwise false.
*/
const result = Array.isArray(fruits);
// console.log(result); // true

/*
    from() Method:
        The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
        The Array.from() method returns an array from any object with a length property.
*/
let alpha = "ABCDEFG";
const alpha_arr = Array.from(alpha);
// console.log(alpha_arr); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

/*
    of() Method:
        The Array.of() method creates a new array from any number of arguments.
        The Array.of() method can take any type of arguments.
*/
let score1 = 100;
let score2 = 200;
let score3 = 300;

const new_arr = Array.of(score1, score2, score3);
// console.log(new_arr);