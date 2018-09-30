// Harnessing elements
const thingResult = document.querySelector('#thingResult');

// Step 1 - Create a function, with 3 parameters, using the standard
// function syntax, making the 3rd parameter have a default value
function normFuncSyntax (param1, param2, defaultParam = "Default Parameter Value") {
  console.log(param1, param2, defaultParam);
}

// Step 1a - Call the function passing only 2 arguments
normFuncSyntax("Argument 1", "Argument 2");

// Step 1b - Call the function passing all 3 arguments
normFuncSyntax("Argument 1", "Argument 2", "Override Value");


// Step 2 - Using the standard function syntax, create an
// operation for the Thing 1 button to execute
function thing1Action () {
  thingResult.textContent = "Thing 1 says: I have done a thing...";
}

// Step 2a - Call our function
thing1Action();


// Step 3 - Create a function using the anonymous function syntax
// using 2 parameters, the second having a default value
const anonFuncSyntax = function (param1, param2 = "Anonymous") {
  console.log(param1, param2);
}

// Step 3a - Call our function with just one argument
anonFuncSyntax("We are");

// Step 3b - Call our function with both arguments
anonFuncSyntax("We are", "Venom");


// Step 4 - Using the anonymous function syntax, create an
// operation for the Thing 2 button to execute
const thing2Action = function () {
  thingResult.textContent = "Thing 2 says: I have a done a thing...";
}

// Step 4a - Call our function
thing2Action();


// Step 5 - Create a function using the arrow function syntax
// using 2 parameters, the second having a default value
const arrowFuncSyntax = (param1, param2 = "AWESOME") => {
  console.log(param1, param2);
}

// Step 5a - Call the function passing 1 parameter
arrowFuncSyntax("Arrow functions are");

// Step 5b - Rewrite the arrow function, removing the block
const arrowFunc2 = (param1, param2 = "SAWEEET") => console.log(param1, param2)

// Step 5c - Call the function passing 2 parameters
arrowFunc2("Arrow functions are", "...Interesting");


// Step 6 - Using the arrow function syntax, create an
// operation for the Thing 3 button to execute
const thing3Action = () => thingResult.textContent = "Thing 3 says: I have done a thing...";

// Step 6a - Call our function
thing3Action();


// Step 7 - Create an output function using the arrow function
const output = (message) => thingResult.textContent = message;

// Step 7a - Create a function that takes a callback parameter
function cbFuncSyntax (callbackParam) {
  callbackParam("Callbacks are maaaagic!");
}

// Step 7b - Call the function passing output in as the
// argument (only the function definition is passed)
// NOTE: If you pass a function with the parenthesis
// output(), you will call the function, and the return
// value will be passed. If you pass the function without
// the parenthesis, you are only passing the definition
console.log("Function call:", output());
console.log("Function definition:", output);
cbFuncSyntax(output);

// Step 7c - Call the function passing an anonymous function
// as the argument that provides a parameter to be filled
// by the calling function
cbFuncSyntax(function (thePassedArg) {
  output(thePassedArg);
});


// Step 8 - Using the callback function syntax, create an
// operation for the Thing 4 button to execute
const thing4Action = function (callback) {
  callback("Thing 4 says: I have done a thing...");
}

// Step 8a - Call the function using an anonymous function
// as a callback
thing4Action(function (message) {
  thingResult.textContent = message;
});


// Step 9 - Using our Thing 1, 2, 3, and 4 actions, bind the
// functions to our event listeners by providing them as
// callbacks
const thing1Btn = document.querySelector('#btnThing1');
const thing2Btn = document.querySelector('#btnThing2');
const thing3Btn = document.querySelector('#btnThing3');
const thing4Btn = document.querySelector('#btnThing4');

thing1Btn.onclick = thing1Action;
thing2Btn.addEventListener('click', thing2Action);
thing3Btn.onmouseover = thing3Action;
thing4Btn.addEventListener('mouseover', function () {
  thing4Action(function (message) {
    thingResult.textContent = message;
  });
});


// Step 10 - Recap on functional scope
let variable = "Bob";
function changeValue (newValue) {
  variable = newValue
  otherVariable = newValue
  var otherOtherVariable = newValue
  let otherOtherOTHERVariable = newValue
}
changeValue("Janel")
console.log(variable)
console.log(otherVariable)
// console.log(otherOtherVariable) // Scoped within the function
// console.log(otherOtherOTHERVariable) // Scoped within the block {}