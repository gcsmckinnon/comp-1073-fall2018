/* Step 1 - Store the element section#numbers > p */
let numEle = document.querySelector('#numbers > p');


/* Step 1b - Simple function to display some output */
function numDisplay (name, value) {
  var str = "The " + name + " statement equals " + value + ".<br>";
  numEle.innerHTML += str;
}


/* Step 2 - Arithmetic */
let addition = 5 + 5;
numDisplay('addition', addition);

let subtraction = 10 - 5;
numDisplay('subtraction', subtraction);

let multiplication = 10 * 5;
numDisplay('multiplication', multiplication);

let division = 10 / 5;
numDisplay('division', division);

// Modulo returns the remainder of a division expression.
let modulo = 10 % 3;
numDisplay('modulo', modulo);

let orderOfOperations = ((10 + 5) * (2 + 6)) + (4 * 6 + 3 - 1);
numDisplay('orderOfOperations', orderOfOperations);

// Because floating point arithmetic is NOT always 100% accurate,
// you need to be strategic in decimal calculations:
var myFloat = 0.2 + 0.1;
numDisplay('myFloat', myFloat);

// We can use order of operations (BEDMAS) to perform the same calculation
// using multiplication and division to first convert our numbers to whole
// numbers, add them together, then divide by 10 to return them to decimals.
var myFloat = ((0.2 * 10) + (0.1 * 10)) / 10;
numDisplay('myFloat corrected', myFloat);

/* Step 2 - Arithmetic with Strings */
var myStrMath = "5" + 5;
numDisplay('"5" + 5', myStrMath);
// This expression concatenated the string 5 to the number 5.

myStrMath = "5" * 5;
numDisplay('"5" * 5', myStrMath);
// This expression performed the operation accurately.

// Because math with strings can be unpredictable, it is better to cast them
// to Numbers first.
myStrMath = Number("5") + 5;
numDisplay('"5" + 5', myStrMath);


/* Step 3 - Increment/Decrement */
// Incrementing
var increment = 5;
increment++;
numDisplay('increment', increment);

// Decrementing
var decrement = 5;
decrement--;
numDisplay('decrement', decrement);

// Order of Operations in incrementing/decrementing
numDisplay('--decrement', --decrement);
numDisplay('decrement--', decrement--);
numDisplay('final value of decrement', decrement);
// Decrement-- passes the value of decrement to the function, then
// decrements it, appearing as though the decrementation didn't change.


/* Step 4 - Comparison Operators */
var comparison;

// Greater Than
comparison = 5 > 4;
numDisplay('5 > 4', comparison);

// Lesser Than
comparison = 5 < 4;
numDisplay('5 < 4', comparison);

// Greater Than or Equal To
comparison = 4 >= 4;
numDisplay('4 >= 4', comparison);

// Lesser Than or Equal To
comparison = 3 <= 4;
numDisplay('3 <= 4', comparison);

// Equal To (Loose Comparison)
comparison = 5 == '5';
numDisplay('5 == "5"', comparison);

// Equal To (Strict Comparison)
comparison = 5 === '5';
numDisplay('5 === "5"', comparison);

// Not Equal To (Loose Comparison)
comparison = 5 != '5';
numDisplay('5 != "5"', comparison);

// Not Equal To (Strict Comparison)
comparison = 5 !== '5';
numDisplay('5 !== "5"', comparison);

/* Step 4b - Using || and && */
// The || operator will return the first value that is true
numDisplay('false || 5', false || 5);
numDisplay('true || 5', true || 5);

// The && operator will return the right side if the whole
// expression is true
numDisplay('true && 5', true && 5);
numDisplay('5 && true', 5 && true);
numDisplay('false && 5', false && 5);
numDisplay('5 && false', 5 && false);

// In 2 weeks we will be discussing Conditional Statements. We'll
// take a look at all of these more in depth then, as they also
// apply to other data types and not just numbers.