// Step 1 - If condition
let name = "Shaun";
if (name === "Shaun") {
  console.log("Hello Shaun");
}

// Step 2 - If/Else
name = "Sarah";
if (name === "Sandra") {
  console.log("Hello Sandra");
} else {
  console.log("I don't know you.");
}

// Step 3 - If/Else If/Else
name = "Bob";
if (name === "Pete") {
  console.log("Hello Pete");
} else if (name === "Bob") {
  console.log("Hello Bob");
} else {
  console.log("I don't know you.");
}

// Step 4 - Various Operators
if (5 === 5) {
  console.log("That's true");
}

if (5 === "5") {
  console.log("That's false");
}

if (5 == "5") {
  console.log("That's true");
}

if (5 > 4) { console.log("That's true") }
if (5 < 4) console.log("That's false");
if (5 !== "5") console.log("That's true");
if (5 != "5") console.log("That's false");

// Step 5 - Logical Operators
if ((4 > 5) || (6 > 5)) console.log("That's true");
if ((5 >= 5) && (6 > 5)) console.log("That's true");
if (((4 >= 5) && (6 > 5)) || !(5 < 7)) console.log("That's true");

// Step 6 - Ternary Statement
name = "Constance";
let result = (name === "Constance") ? `Hi ${name}` : "I don't know you";

// Step 7 - Switch with Condition
name = "Amrit";
switch (name) {
  case "Sarah":
    console.log("Sarah");
    break;
  case "Amrit":
    console.log("Amrit");
    break;
  default:
    console.log("Nobody there");
    break;
}

// Step 8 - Switch with No Condition
switch (true) {
  case (5 < 4):
    console.log("That's false");
    break;
  case (5 > 4):
    console.log("That's true");
    break;
}

// Step 9 - Inline Comparitive Statements
let result;
let variable;
result = variable || "This side!";
console.log(result);

result = "This side!" || variable;
console.log(result);

result = "This side..." && "Nope, this side because that side is true!";
console.log(result);

result = "Neither side" && false;
console.log(result);