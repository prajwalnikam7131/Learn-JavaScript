// control flow:
// <, >, <=, >=, ==, !=, ===, !==

// if :
const temperature = 20;

if (temperature < 50) {
    console.log(`temperature is less than 50.`);
}

// if-else :
if (temperature > 23) {
    console.log(`temperature is hot.`);
} else {
    console.log(`temperature is cold.`);
}

// else-if :
const balance = 4000;

if (balance <= 500) {
    console.log(`less than 500 balance.`);
} else if (balance <= 1000) {
    console.log(`less than 1000 balance`);
} else if (balance == 2000) {
    console.log(`your balance is 2000`);
} else if (balance < 2000) {
    console.log(`less than 2000`);
} else if (balance > 2000) {
    console.log(`balance is more than 2000. your clear balance is ${balance}.`);
} else {
    console.log(`please contact your bank!`);
}

// && operator (Logical AND):

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log(`Allow to Buy course.`);
}

// || operator (Logical Operator):
const loggedInFromGoggle = true;
const loggedInFromEmail = false;

if(loggedInFromEmail || loggedInFromGoggle) {
    console.log(`user logged in.`);
}