/* 
    In this chapter learn let, const and var.
    
    *) what is let, const and var ?
    difination:- let, const and var are the keywords used for declaring the variables.

    let's understand with example.
*/

const accountId = 123231;
let accountEmail = "newuser@123google.in";
var accountPassword = "53421";
accountCity = "Malegon";


/* 
    when use 'const' keyword then we cannot change or update value later.
*/

// accountId = 123123; // error shown becase you declare const keyword already.

/*
    There are different type's to print output.
    1) console.log(); 
    2) document.write();
    3) console.table([variable_name1, variable_name2, variable_name3, ...]) 
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]); // output shown in table format.

/* 
    prefer not to use 'var'.
    becase of issue in block scope and functional scope.
*/ 