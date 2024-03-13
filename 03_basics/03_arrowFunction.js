const user = {
    username: "Prajwal",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website.`);
        // console.log(this);
    }

}

user.welcomeMessage(); // Prajwal, Welcome to website.
user.username = "Pirate"; // update/change
user.welcomeMessage(); // Pirate, Welcome to website.

console.log(this); // {}


/* +++++++++++ Normal Function +++++++++++ */
/*
    In Function 'this' keyword can't work.
*/

function chai() {
    let username = `Prajwal`;

    console.log(this.username); // undefined
}

chai();

/* +++++++++++ Function store in variable +++++++++++ */

const chai2 = function () {
    let username = `Prajwal`

    console.log(username); // Prajwal
    console.log(this.username); // undefined
}

chai2();

/* +++++++++++ Arrow Function +++++++++++ */

const chai3 = () => {
    let username = `Prajwal`;

    console.log(username); // Prajwal
    console.log(this.username); // undefined
    console.log(this); // {}
}

chai3();

/* +++++++++++ Arrow Function +++++++++++ */
/*
    Arrow Function with return keyword.
*/

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(2, 3)); // 5


/* +++++++++++ Arrow Function +++++++++++ */
/*
    Arrow function without Curly Brackets.
*/

const addTwo2 = (num1, num2) => num1 + num2;

console.log(addTwo2(2, 3)); // 5


/* +++++++++++ Arrow Function +++++++++++ */
/*
    Arrow function using Parenthesis.
*/

const addTwo3 = (num1, num2) => (num1 + num2);

console.log(addTwo3(2, 3)); // 5


/* +++++++++++ Arrow Function +++++++++++ */
/*
    Arrow function with object.
*/

const addTwo4 = () => ({ username: "Prajwal" });

console.log(addTwo4());