/* Date */
let currentDate = new Date();
// console.log(typeof currentDate); // object
// console.log(currentDate); // 2024-02-29T08:07:44.941Z

// console.log(currentDate.toString()); // Thu Feb 29 2024 16:37:03 GMT+0000 (Coordinated Universal Time)
// console.log(currentDate.toDateString()); // Thu Feb 29 2024
// console.log(currentDate.toLocaleString()); // 2/29/2024, 4:43:44 PM
console.log(currentDate.toLocaleDateString()); // 2/29/2024

// const myDate = new Date(2025, 0, 14 , 23, 30);
// const myDate = new Date(`2025-01-14`); // yy-mm-dd
const myDate = new Date(`01-14-2023`); // mm-dd-yy
// console.log(myDate);


/* Get Date Method */
const date = new Date()
console.log(date); // yy-mm-dd 

console.log(date.getDate()); // returns current date.
console.log(date.getMonth()); // returns the month of a date as a number(0 - 11).
console.log(date.getFullYear()); // returns the current year.
console.log(date.getTime()); // return current time in milliseconds for e.g.: 1709274063834

/* Get set Method */
const d = new Date()

d.setDate(14);
d.setMonth(0);
d.setFullYear(2025);

// d.setHours()
// d.setMinutes()
// d.setSeconds()
// d.setMilliseconds()

console.log(d);