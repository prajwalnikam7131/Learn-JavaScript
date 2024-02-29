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
console.log(myDate);
