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
// console.log(contact);

// access properties of properties.
// console.log(contact.fullName.userfullName.lastName); //Nikam

//concatinate:

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);

// Methods:
