/* Step 1 - Store the element section#numbers > p */
let strEle = document.querySelector('#strings > p');


/* Step 1b - Simple function to display some output */
function stringDisplay (value) {
  var str = value + "<br>";
  strEle.innerHTML += str;
}


/* Step 2 - Concatenation */
var concat = "Bob " + " is a " + " fantastic fisherman.";
stringDisplay(concat);

var name = "Shaun";
concat = name + " likes cheese.";
stringDisplay(concat);

var myAge = 39;
concat = name + " is " + myAge + " years old.";
stringDisplay(concat);

// Inline expressions using the addition operator will lead to unexpected results
concat = name + " will be " + myAge + 5 + " in 5 years.";
stringDisplay(concat);

// To fix this, you have to wrap the expression in parenthesis so it's evaluated
// first
concat = name + " will be " + (myAge + 5) + " in 5 years.";
stringDisplay(concat);

/* Step 2b - Interpolation (or Template Literals) */
// Template literals were introduced in ES5. They allow for expressions to be
// evaluated within a string.
concat = `Bob will be ${45 + 5} in 5 years. The date will be ${(new Date((2018 + 5), 9, 3)).toLocaleDateString('en-CA')}.`;
stringDisplay(concat);

// You may use single quotes, double quotes, or backticks with strings. However,
// if you want string interpolation you must use backticks.


/* Step 3 - Escaping Characters */
var escChr = 'You\'re so awesome!';
stringDisplay(escChr);

escChr = "The book, \"A Wrinkle in Time\", mentions the elusive tesseract.";
stringDisplay(escChr);


/* Step 4 - String Methods */
var strMth;
var output;

/* Step 4a - String length */
strMth = "This is my lengthy string.";
output = `The string, "${strMth}", is ${strMth.length} characters long`;
stringDisplay(output);

/* Step 4b - Retrieving a specific character */
strMth = "Shaun McKinnon";
output = `The character in the string "${strMth}", at index 3, is "${strMth[3]}".`;
stringDisplay(output);

/* Step 4c - Extracting part of a string */
output = `"McKinnon" starts at index ${strMth.indexOf('McKinnon')}.`;
stringDisplay(output);
// indexOf will return -1 if it can't find an instance of the substring.

// Using the index, and the length of the substring + the index, we can no extract the word from the string.
// .slice(start, end);
// .slice( strMth.indexOf("McKinnon"), (strMth.indexOf("McKinnon") + "McKinnon".length) )
var lastName = strMth.slice(6, 14);
stringDisplay(lastName);

/* Step 5 - Changing case */
// Uppercase
var theCase = "Wowza! JavaScript is so coooooool.";
stringDisplay(theCase.toUpperCase());

// Lowercase
stringDisplay(theCase.toLowerCase());

/* Step 5 - Replacing text */
stringDisplay(theCase.replace("Wowza!", "Holy cow..."));