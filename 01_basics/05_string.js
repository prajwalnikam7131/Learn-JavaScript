/*
    # In this chapter learn string and strings Methods

    What is string:
        strings are storing text and written with quotes.
*/

let doubleQuotes_String = "I am a double line quotes string.";
let sigleQuotes_String = 'A';
let sigleQuotes_WithNumber = '49';

/*
    # quotes inside quotes:
*/

let str1 = " It's alright! ";
let str2 = " He is called 'Prajwal' ";
let str3 = ' He is called also "Prajwal" ';

/*
    # Template Strings:
        Templates were introduced with ES6.
        Templates are strings enclosed in backticks ``.
        Templates allows single and double quotes inside a string:
*/

let templateString = `this is the template method to write`;


/*
    # Escape Characters: (\), ('), (") 
*/

let TempStringOne = `This is Template\\ string.`
console.log(TempStringOne); // This is Template\ string.

let TempStringTwo = `This is Template\' string.`
console.log(TempStringTwo); // This is Template' string.

let tempStringThree = `we are the \"Vikings\" of the north`;
console.log(tempStringThree); // we are the "Vikings" of the north.


/*
    # String Methods:
*/
/*
    # .length:
        Length is a Property not Method.
        Length property returns the Length of string.
*/

let sentence = `I love coding.`;
let sentence_2 = `or Programming.`;

console.log(sentence, sentence.length); // 14 

/*
    # chartAt():
        .charAt() method returns the character at a specified index(position) in a string.
*/

sentence = `I love coding.`;
console.log(sentence.charAt(4)); // v


/*
    # at():
        .at() method returns the character at a specified index(position) in a string.
        It allows the use of negative indexes 'while charAt() do not'.
*/

sentence = `I love coding.`;
console.log(sentence.at(4)); // v  (allow to negative method.)

/*
    # slice() Method:
*/
sentence = `I love coding.`;
let sliceSentence = sentence.slice(2, 5); // end index not include.i.e.--> 0 to 5
console.log(sliceSentence); // lov

/*    Example: for better undustanding slice() method.    */

let fullNumber = '9728391468';
 console.log(fullNumber.slice(1,8)); // 7283914
 console.log(fullNumber.slice(4)); // 391468
 console.log(fullNumber.slice(-4)); // 1468

/*
    # substring
*/
sentence = `I love coding.`;
let substringSentence = sentence.substring(2, 5)
console.log(substringSentence); // lov


/*
    # toUpperCase(): 
*/
sentence = `I love coding.`;
let toUpperCaseSentence = sentence.toUpperCase()
console.log(toUpperCaseSentence); // I LOVE CODING.


/*
    # toLowerCase(): 
*/
sentence = `I love coding.`;
let toLowerCaseSentence = sentence.toLowerCase()
console.log(toLowerCaseSentence); // i love coding.


/*
    # concat(): 
        Join two or more string.
*/
sentence = `I love coding.`;
sentence_2 = `or Programming.`;
let concatSentence = sentence.concat(" ", sentence_2)
console.log(concatSentence); // I love coding. or Programming.

/*
    # trim() method:
        to remove white-spaces both sides.
*/
let sentence_3 = "   I Love Coding.  ";
let trimSentence = sentence_3.trim();
console.log(trimSentence); // "I Love Coding."

/*
    # trimStart() method:
        to remove white-spaces only from the start of the string.
*/
sentence_3 = "   I Love Coding.  ";
let trimStartSentence = sentence_3.trimStart();
console.log(trimStartSentence); // "I Love Coding.  "

/*
    # trimEnd() method:
        to remove white-spaces only from the end of the string.
*/
sentence_3 = "   I Love Coding.  ";
let trimEndSentence = sentence_3.trimEnd();
console.log(trimEndSentence); // "  I Love Coding."


/*
    # padding:
        i) padStart():
        ii) padEnd():
*/
let strNumber = "5";

let padStartNumber = strNumber.padStart(3, '1');
console.log(padStartNumber); // 115

let padEndNumber = strNumber.padEnd(3, '1');
console.log(padEndNumber); // 511

/* Example: for understanding padStart() method. */
const debitNumber = `2131 2376 7483 9282`;
const last4Digit = debitNumber.slice(-4);
const disableDebitNumber = last4Digit.padStart(debitNumber.length, "*");

console.log(last4Digit); // 9282
console.log(disableDebitNumber); // ***************9282

/*
    # repeat():
        The repeat() method returns a string with a number of copies of a string.
*/
sentence = `I love coding.`;
let repeatSentence = sentence.repeat(3);
console.log(repeatSentence);

/*
    # replace():
        the replace() method replace a specified value with another value in a string.
*/
sentence = `I love coding.`;
let replaceSentence = sentence.replace('coding', 'Programming');
console.log(replaceSentence);

/*
    # replaceAll():
        the replaceAll() method allows you to specifiy a regular expression 
        instead of a string to be replaced.
*/
let text = `I love cats. Cats are very easy to love. Cats are very populars.`
text = text.replaceAll(`cats`, `dogs`);
text = text.replaceAll(`Cats`, `dogs`);
console.log(text);

/*
    # split():
        A string can be converted to an array with the split() method.
        split() splits a string into an array of substrings, and returns the array.
*/
text = `I love cats. Cats are very easy to love. Cats are very populars.`
// let newArry = text.split(); /* [ 'I love cats. Cats are very easy to love. Cats are very populars.' ] */

// let newArry = text.split(); 
                            /* [
                                'I', 'love',
                                'cats.', 'Cats',
                                'are', 'very',
                                'easy', 'to',
                                'love.', 'Cats',
                                'are', 'very',
                                'populars.'
                            ] */

// let newArry = text.split(); 
                            /* [
                                'I', ' ', 'l', 'o', 'v', 'e', ' ', 'c', 'a',
                                't', 's', '.', ' ', 'C', 'a', 't', 's', ' ',
                                'a', 'r', 'e', ' ', 'v', 'e', 'r', 'y', ' ',
                                'e', 'a', 's', 'y', ' ', 't', 'o', ' ', 'l',
                                'o', 'v', 'e', '.', ' ', 'C', 'a', 't', 's',
                                ' ', 'a', 'r', 'e', ' ', 'v', 'e', 'r', 'y',
                                ' ', 'p', 'o', 'p', 'u', 'l', 'a', 'r', 's',
                                '.'
                            ] */


text = `I love cats. Cats are very easy to love. Cats are very populars.`
let newArry = text.split(" ")
let word = newArry[1]
console.log(newArry);
console.log(word);
