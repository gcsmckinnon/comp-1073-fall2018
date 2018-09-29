// Normal Function Syntax
function normalFunction (param1, param2, defaultParam3 = "Bob") {
  console.log(`Hello, ${param1}, ${param2}, and ${defaultParam3}`)
}
normalFunction('Shaun', 'You')
normalFunction('Shaun', 'You', 'Emily')


// Functional Scope
let variable = "Bob";
function changeValue (newValue) {
  variable = newValue
  otherVariable = newValue
  var otherOtherVariable = newValue
  let otherOtherOTHERVariable = newValue
}
changeValue("Sarah")
console.log(variable)
console.log(otherVariable)
// console.log(otherOtherVariable) // Scoped within the function
// console.log(otherOtherOTHERVariable) // Scoped within the block {}


// Anonymous Function Syntax
let myFunc = function () {
  console.log("Hello")
}
myFunc()


// Callbacks
function hollaBack(callbackVarName) {
  console.log("I hollared");
  callbackVarName()
}

hollaBack(function () {
  console.log("This is the mighty callback!")
})

// Callbacks with parameters
function hollaBackPassingArgs (callbackVarName) {
  console.log("Hollaring again!")
  callbackVarName("My very cool argument I am passing to the callback function!")
}

hollaBackPassingArgs(function (theArgWillStoreInThisParam) {
  console.log(theArgWillStoreInThisParam)
})

function hollaBackWithParamsAndPassingArgs (param1, param2, callbackVarName) {
  console.log("Hollaring for the last time!")
  callbackVarName(param1, param2)
}

hollaBackWithParamsAndPassingArgs("My param 1", "My param 2", function (p1, p2) {
  console.log(p1, p2)
})


// Asynchronocity Issues
function  output(message){
  console.log(message);
}
setTimeout(output, 1000, 'I  want  to  go  first!')
output('No,  I  want  to  go  first!')

// Callbacks to the Rescue
function orderedOutput(message, callback) {
  output(message)
  callback()
}
setTimeout(function () {
  orderedOutput("I'm first", function () {
    orderedOutput("I'm second", function () {
      output("I'm third")
    })
  })
}, 1000)

// Quick look at Promises/Then
function wePromise () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(output("I promise, I'm first"))
    }, 2000)
  })
}

wePromise()
.then(function () {
  output("I promise, I'm second")
})
.then(function () {
  output("I promise, I'm third")
})

// Quick look at Async/Await
function thePromise () {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(output("I am the promise!"))
    }, 3000)
  })
}
async function asyncOutput () {
  await thePromise()
  output("I'm happening after the promise")
  setTimeout(function () {
    output("I am also happening after the promise")
  }, 1000)
}

asyncOutput();

// IIFE (Immediately Invoked Function Expression)
(function (name) {
  console.log(`Hello, ${name}`)
})("Shaun")