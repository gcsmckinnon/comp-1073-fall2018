// Step 1 - Global Functions
// Step 1a - Cast a string to a number
let stringToNum = Number("256")
console.log(typeof stringToNum)

// Step 1b - Cast a number to a string
let numToString = String(67)
console.log(typeof numToString)


// Step 2 - Browser Prompt Functions
// Step 2a - Write an alert
alert("Welcome to the Game!!!")

// Step 2b - Write a confirm
let confirmation = confirm("Do you like the game?")
console.log(typeof confirmation, confirmation)

// Step 2c - Write a prompt
let response = prompt("How often do you play games?")
console.log(typeof response, response)

// Step 2d - Comment out the above code to avoid it
// calling each time


// Step 3 - Parsing Functions
// Step 3a - Parse a float
let float = "3.14"
float = parseFloat(float)
console.log(typeof float, float)

// Step 3b - Demonstrate NaN issue
float = "I have 3.14 things"
float = parseFloat(float)
console.log(typeof float, float)

// Step 3c - Resolve NaN issue
float = "3.14 things"
float = parseFloat(float)
console.log(typeof float, float)

// Step 3d - Parse an integer
let integer = "3.14"
integer = parseInt(integer)
console.log(typeof integer, integer)

// Step 3e - Demonstrate NaN issue
integer = "I have 3.14 things"
integer = parseInt(integer)
console.log(typeof integer, integer)

// Step 3f - Resolve NaN issue
integer = "3.14 things"
integer = parseInt(integer)
console.log(typeof integer, integer)


// Step 4 - Number Verification Functions
// Step 4a - Check if not a number
let nanny = "3.14 things"
nanny = isNaN(nanny)
console.log(typeof nanny, nanny)

nanny = "3.14"
nanny = isNaN(nanny)
console.log(typeof nanny, nanny)

// Step 4b - Check if infinite
let finite = 3 / 0
finite = isFinite(finite)
console.log(typeof finite, finite)

finite = 3 / 1.5
finite = isFinite(finite)
console.log(typeof finite, finite)


// Step 5 - Evil Eval (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!)
// https://www.youtube.com/watch?feature=player_detailpage&v=6EJ801el-I8#t=1729s
eval('console.log("Hello, I am the evil Eval, who will allow parsing of strings as code! I am slow, and can be very dangerous as I run on the users machine using their privleges! Do not use me when parsing user input! Do not use me to execute 3rd party scripts!")')

// Step 5a - Eval can execute any dynamically built expressions
let myDynVars = []
const values = [1, 4, 7, 9]
for (let i = 0; i < values.length; i++) {
  myDynVars.push(`i${i}`)
}
eval(`var [${myDynVars.toString()}] = [${values.toString()}]`)
console.log(i0, i1, i2, i3)

/*
  Step 6 - Box Racing!  
*/
// Step 6a - Select both boxes
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')

// Step 6b - Set the starting position
let pos = 0

// Step 6c - Define the finish line
const finish = document.querySelector('#finish')

// Step 6d - Create a random acceleration function
function accelerate () {
  let speed = Math.round(Math.random(), 2)
  console.log(speed)
  return speed
}

// Step 6e - Create a function to trigger the race
function startRace () {
  // Step 6f - Using intervals, loop through every 30ms
  var intervalID = setInterval(function () {
    // Step 6g - For each box
    for (let box of [box1, box2]) {
      // Step 6h - Check the box offset
      if (box.offsetLeft < finish.offsetLeft) {
        // Step 6i - Increase the position
        pos += accelerate()
        // Step 6j - Add it to the styles
        box.style.left = `${box.offsetLeft + pos}px`
      } else {
        // Step 6k - Otherwise, set the second player to lose
        box.textContent = "You Lost!!!"
        // Step 6l - Clear the interval so it doesn't keep
        // iterating
        clearInterval(intervalID)
        // Step 6m - Break out of the loop
        break
      }
    }
  // Step 6n - Close the interval and set the second argument to
  // 30 ms
  }, 30)
}

// Step 7 - setTimeout()
var ms = 0
var intervalID = setInterval(function () {
  ms += 100
  console.log(ms)
}, 100)

function greet (greeting) {
  console.log(greeting)
  clearInterval(intervalID)
}

setTimeout(greet, 1000, "Hello Peeps!")

// Step 7a - clearTimeout()
var timeoutID = setTimeout(greet, 2000, "I love soup!")
setTimeout(function () {
  clearTimeout(timeoutID)
  console.log("No soup for you!")
}, 1500)


// Step 8 - Speech Synthesis
function theNewAndImprovedGreeting (greeting) {
  greeting = new SpeechSynthesisUtterance(greeting)
  speechSynthesis.speak(greeting)
}

// theNewAndImprovedGreeting("Hello, class! Waz zup home slices!")


// Step 9 - Data Methods
let names = ["Bob", "Amrit", "Arsh", "Sarah", "John", "Yuki", "Helen"]
let result = names.filter(function (ele) {
  return ele.length > 4;
});
console.log(result);

result = names.map(function (ele) {
  return ele.toUpperCase();
});
console.log(result);

result = names.sort();
console.log(result);

result = names.sort(function (a, b) {
 return a.length > b.length;
});
console.log(result)

result = names.reverse();
console.log(result);

names.forEach(function (ele) {
  console.log(ele)
})