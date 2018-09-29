// Step 1 - For Loop
for (let i = 0; i < 10; i++) {
  console.log(`Hello, ${i}`);
}

let j = 10;
for (j; j > 0; --j) {
  console.log(`Hey, ${j}`);
}

// Step 2 - For of Loop
let names = ['Shaun', 'Amrit', 'Arsh', 'Janel'];
for (let name of names) {
  console.log(name);
}

// Step 3 - For in Loop
let myObj = {
  name: 'Bob',
  age: 45,
  hobbies: ['skiiing', 'cycling', 'scuba-diving']
}
for (let key in myObj) {
  console.log(myObj[key]);
}

// Step 4 - forEach Loop
names.forEach(function (ele) {
  console.log(ele);
});

// Step 5 - While Loop
let name;
while (!name || name.length === 0) {
  name = prompt("What is your name?");
}

// Step 6 - Do While Loop
do {
  let goAgain = confirm("Do you wish to loop again?");
} while (!goAgain);

// Step 7 - Recursion
let count = 0;
function incrementCount () {
  count += 1;
  if (count < 10) incrementCount();
  console.log("Recursion...");
}
incrementCount();
console.log("Done iterating");

// Step 8 - Array Iterators
let testArr = [1, 2, 6, 24];
let newArr;

newArr = testArr.map(function (ele) {
  return ele += 1;
});
console.log(testArr);

newArr = testArr.filter(function (ele) {
  return ele < 3 && ele > 0;
});
console.log(newArr);

// Step 9 - Destructuring
let [var1, var2, var3, var4] = testArr;
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);