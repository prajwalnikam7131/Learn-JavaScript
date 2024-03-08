/* function */

// basic function to print sentence:
function sayMyName() {
    console.log("Prajwal");
    console.log("Nikam");
}

sayMyName();

// function with 'Parameter':
function addition(num1, num2) {
    console.log(num1 + num2);
}

addition(2, 3); // 5

// function with 'Parameter', another method:
function add(num1, num2) {
    let addition = num1 + num2;
    console.log(addition);
}

add(2,4); // 6

// function with return keyword:
function addTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(addTwoNumbers(10,5)); // 15

/* 
    working of shopping 'add to cart' function: 
    (...) rest operator collect all values and return in Array format.

*/
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(100,200,400,2000));

/* 
    How to set default parameter:
*/
function loginUserMessage(username = "user") {
    if (! username) {
        console.log(`please enter a username.`);
    }

    return `${username} is logged in.`
}

console.log(loginUserMessage()); // user is logged in.
console.log(loginUserMessage("Pirate")); // Pirate is logged in.

/* 
    Object in function:
 */
const user = {
    userName: "Prajwal",
    price: "399"
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.userName} and the course price is ${anyObject.price}`)
}

// handleObject(user);

/*
    you can directly pass the Object as parameter:
*/
// handleObject({
//     userName: "Pirate",
//     price: "420"
// })