// const info = new Object();

const info = {};

info.id = "prajwal@123";
info.name = "Prajwal";
info.location = "Malegaon";

// console.log(info);

const contact = {
    email: "some@gamil.com",
    fullName: {
        userfullName: {
            firstName: "Prajwal",
            lastName: "Nikam"
        }
    }
}
console.log(contact);

// access properties of properties.
console.log(contact.fullName.userfullName.lastName); //Nikam

//concatinate:

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

// Arrays in Object:

const arry = [
    {
        id: 1,
        email: "some1@gamil.com"
    },
    {
        id: 2,
        email: "some2@gamil.com"
    },
    {
        id: 3,
        email: "some3@gamil.com"
    }
];

console.log(arry[1].email); // some2@gamil.com

// method:
// console.log(info);

// acess the key:
console.log(Object.keys(info));

// access the value:
console.log(Object.values(info));

// access the property:
console.log(Object.entries(info));


/* 
    how to Object de-structure:
*/

const course = {
    cousrseName: "javaScript",
    price: "999",
    courseInstructor: "Prajwal"
}

const { courseInstructor: instructor } = course; // de-structure



/* what is json: json is { } */

// {
//     "name": "prajwal",
//     "age": "24",
//     "location": "Malegoan"
// }