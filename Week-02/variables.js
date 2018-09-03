/* Step 1 - Declaring variables */
// The Rules
// - Variables must contain only alphanumeric characters
// - Variables cannot begin with a number
// - Variables cannot be reserved keywords (for, else, of, if, in, etc...)

/* Step 1a - Global Variables */
// Global variables have global scope
x = 26;
var y = 27; // global because it is at the top of the scope

/* Step 1b - Function Scope */
// var declares the variable within the scope of the current function.
// The file has an unseen main function(). var y; is defined in that.
(function () { // IIFE (pronounced iffee) (Instantly Invoked Function Expression)
  w = 40; // Global scope (notice the missing var)
  var j = 29; // Block scope (notice the var)
  console.log(j);
})() // End of IIFE
console.log(w);
// console.log(j); // Will result in an uncaught reference error because it isn't defined

/* Step 1c - Block Scope */
// Blocks are contained in curly braces {}.
// These include for()/while/do while loops, if() conditions, and any other structures
// that use blocks.
if (true) {
  // Variables declared with var are functionally scoped.
  // They are not constrained within loops, if conditions, or any block
  // that isn't a function.
  var m = 5;

  // Variables declared with let are block scoped.
  // Outside their block, they are undefined.
  let n = 5;
}
console.log(m);
// console.log(n); // Will result in an uncaught reference error because it isn't defined

/* Step 2 - Updating Variables */
// Almost all variable values can be updated
var me = "Shaun";
me = "Janel";
console.log(me);

let age = 39;
age = 39;
console.log(me);

/* Step 2b - Constants */
// Constants are NOT changeable
const earth = "Rotates around the sun.";
// earth = "Rotates around the moon."; // Throws an error: Assignment to constant variable

/* Step 2c - Constant Scope */
// Constants are block scoped. This means, like let, they are only accessible
// within their blocks {}.
if (true) {
  const hello = "World";
}
// console.log(hello); // Will result in an uncaught reference error because it isn't defined

/* Step 3 - Scope access */
// Variables defined with var, let, or const are all available
// within child scopes.
let parentScope = 39;
let redeclareVar = 50;
let explodingVar = 43;
if (true) {
  console.log(parentScope);
  console.log(explodingVar);

  /* Step 3a - Redeclare variable */
  // A variable can be redeclared providing it hasn't been
  // used within the scope.
  let redeclareVar = 5;
  console.log(redeclareVar);

  // let explodingVar = 53; // Reference error because it can't be redeclared
}
console.log(redeclareVar);

/* Step 4a - Data Types: String */
// Strings are defined by wrapping characters within quotes
var name = "";

// Double quotes (easier when attempting to use apostrophes)
name = "Shaun McKinnon's Legendary Name";
console.log(name);

// Single quotes (easier when wanting to use quote characters)
name = 'Janel McKinnon: "The Queen"';
console.log(name);

// Backticks (ES6) allow for string interpolation.
// String Interpolation tells the interpreter to parse any
// logic between the ${} syntax.
name = `Humphrey Bogart fights ${name}`;
console.log(name);

// Escaping characters is necessary if you need
// to use a character that may be interpreted as 
// JavaScript syntax instead of part of the string.
name = 'Bob\'s Bait and Tackle Shop';
console.log(name);

name = "The \"Spring Fling\" Party"
console.log(name);

/* Step 4b - Data Types: Number */
// There are 3 numbers: Integer, Float, and Double.
// Integers are negative to positive whole numbers.
var myInt = 25;
console.log(typeof myInt);

myInt = -40;
console.log(typeof myInt);

// typeof is an operator that returns a string indicating the type of the
// passed operand.

// Floats and Doubles are decimal numbers. Doubles have higher precision.
// In JavaScript, all numbers are stored as double precision floating
// point numbers. This means the number is stored in 64 bits.
var myFloat = 0.2;

/* Step 4c - Data Types: Boolean */
// Booleans are a binary value, meaning they can only be on or off.
var myBool = true;
console.log(myBool);
console.log(myBool == 1);

myBool = false;
console.log(myBool);
console.log(myBool == 0);

// Strict comparison
console.log(myBool === 0);

/* Step 4d - Data Types: Arrays */
// Arrays are indexed collections of data. Unlike in strict languages,
// JavaScript arrays can contain a mixture of data types. They don't all
// have to be of the same type.
var myArr = ['Bob', 39, true];
console.log(myArr);

// Arrays have so many helpers (thanks to the Array.protoype) that they
// get their own lesson next week!

/* Step 4e - Data Types: Objects */
// Most things in JavaScript are objects. This means most things you create
// will have properties and methods on them. This includes values you store
// in variables, such as Strings, Numbers, and Arrays.
var animal = { type: 'dog', name: 'Murray', breed: 'Retriever', color: 'Golden' }
console.log(animal);
console.log(animal.name);

/* Step 5 - Output to the DOM */
var output;

var varEle = document.querySelector('#variables > p');

// Integer
var inty = 5;
output = "The variable inty is " + inty + " and is type " + (typeof inty);
varEle.innerHTML = output;
// innerHTML will allow us to use HTML elements.

// Decimal
var floaty = 5.5;
varEle.innerHTML += "<br>";
varEle.innerHTML += "The variable floaty is " + floaty + " and is type " + (typeof floaty);

// String
var stringy = "Hello World!";
varEle.innerHTML += "<br>";
varEle.innerHTML += "The variable stringy is " + stringy + " and is type " + (typeof stringy);

// Boolean
var booleany = true;
varEle.innerHTML += "<br>";
varEle.innerHTML += "The variable booleany is " + booleany + " and is type " + (typeof booleany);

// Array
var arry = ['Me', 'You', 'Them'];
varEle.innerHTML += "<br>";
varEle.innerHTML += "The variable arry is " + arry + " and is type " + (typeof arry);
// Arrays are converted to a string when you attempt to add them
// to a string. This is because the method .toString() is called
// on the array.

// Object
var objy = {name: 'Shaun', age: 39, eyeColour: 'brown'};
varEle.innerHTML += "<br>";
varEle.innerHTML += "The variable objy is " + objy + " and is type " + (typeof objy);
// Like arrays, .toString() is called on objects as well, however
// it doesn't provide the same clean output. We simply get [object Object].