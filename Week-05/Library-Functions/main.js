// Global Functions
// Casting Functions
let stringToNum = Number("256")
console.log(typeof stringToNum)

let numToString = String(67)
console.log(typeof numToString)

// Browser Prompt Functions
// alert("Welcome to the Game!!!")

// let confirmation = confirm("Do you like the game?")
// console.log(typeof confirmation, confirmation)

// let response = prompt("How often do you play games?")
// console.log(typeof response, response)

// Parsing Functions
let float = "3.14"
float = parseFloat(float)
console.log(typeof float, float)

float = "I have 3.14 things"
float = parseFloat(float)
console.log(typeof float, float)

float = "3.14 things"
float = parseFloat(float)
console.log(typeof float, float)


let integer = "3.14"
integer = parseInt(integer)
console.log(typeof integer, integer)

integer = "I have 3.14 things"
integer = parseInt(integer)
console.log(typeof integer, integer)

integer = "3.14 things"
integer = parseInt(integer)
console.log(typeof integer, integer)

// Number Verification Functions
let nanny = "3.14 things"
nanny = isNaN(nanny)
console.log(typeof nanny, nanny)

nanny = "3.14"
nanny = isNaN(nanny)
console.log(typeof nanny, nanny)

let finite = 3 / 0
finite = isFinite(finite)
console.log(typeof finite, finite)

finite = 3 / 1.5
finite = isFinite(finite)
console.log(typeof finite, finite)

// Evil Eval (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!)
// https://www.youtube.com/watch?feature=player_detailpage&v=6EJ801el-I8#t=1729s
eval('console.log("Hello, I am the evil Eval, who will allow parsing of strings as code! I am slow, and can be very dangerous as I run on the users machine using their privleges! Do not use me when parsing user input! Do not use me to execute 3rd party scripts!")')

// Eval can execute any dynamically built expressions
let myDynVars = []
const values = [1, 4, 7, 9]
for (let i = 0; i < values.length; i++) {
  myDynVars.push(`i${i}`)
}
eval(`var [${myDynVars.toString()}] = [${values.toString()}]`)
console.log(i0, i1, i2, i3)

/*
  Box Racing!  
*/
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')

let pos = 0
const finish = document.querySelector('#finish')

function accelerate () {
  let speed = Math.round(Math.random(), 2)
  console.log(speed)
  return speed
}

function startRace () {
  var intervalID = setInterval(function () {
    for (let box of [box1, box2]) {
      if (box.offsetLeft < finish.offsetLeft) {
        pos += accelerate()
        box.style.left = `${box.offsetLeft + pos}px`
      } else {
        box.textContent = "You Lost!!!"
        clearInterval(intervalID)
        break
      }
    }
  }, 30)
}

// setTimeout()
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

// clearTimeout()
var timeoutID = setTimeout(greet, 2000, "I love soup!")
setTimeout(function () {
  clearTimeout(timeoutID)
  console.log("No soup for you!")
}, 1500)


// Speech Synthesis
function theNewAndImprovedGreeting (greeting) {
  greeting = new SpeechSynthesisUtterance(greeting)
  speechSynthesis.speak(greeting)
}

// theNewAndImprovedGreeting("Hello, class! Waz zup home slices!")


// Data Methods
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