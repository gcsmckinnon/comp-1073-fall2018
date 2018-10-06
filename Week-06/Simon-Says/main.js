// Step 1 - Create a new AudioContext
let context = new AudioContext()

// Some notes (G4, A4, C5, D5)
const notes = [392.0, 440.0, 523.25, 587.33]


// Step 2 - Using anonymous function syntax, create a tone function
// that accepts an argument called "frequency"
const tone = function (frequency) {
  // Step 2a - Create an oscillator and gain and store them in variables
  let osc = context.createOscillator()
  let gain = context.createGain()

  // Step 2b - Set the type and the frequency
  osc.type = 'sine'
  osc.frequency.value = frequency

  // Step 2c - Create a falloff effect for the note
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.5)

  // Step 2d - Connect the destination and the gain
  gain.connect(context.destination)
  osc.connect(gain)

  // Step 2e - Play the note
  osc.start(0)

  // This is used to resume audio in Chrome
  context.resume()
}


// Step 3 - Using arrow function syntax, create a function that
// returns a random element from an array
const randArrEle = arr => arr[Math.floor(Math.random() * arr.length)]


// Step 4 - Create all the needed HTML elementsHTML Elements
const actions = document.querySelector('#actions')
const message = document.querySelector('#message')
const scoreboard = document.querySelector('#scoreboard')
const score = scoreboard.querySelector('#score')
const gameboard = document.querySelector('#gameboard')
const scoreModifier = document.querySelector('#scoreModifier')
const scoreModifierValue = document.querySelector('#scoreModifierValue')
const start = document.querySelector('#start')

// Step 5 - Grab all the light elements from the DOM
const lights = document.querySelectorAll('.light')


// Step 6 - Create some variables to store state
let patternState = []
let playerPattern = []

// Step 7 - Using a for loop, iterate 4 times
for (let i = 0; i < 4; i++) {
  // Step 7a - Store the light we're working with
  let light = lights[i]

  // Step 7b - Store the note
  light.dataset.note = notes[i]

  // Step 7c - Using event binding, bind the
  // mousedown event to the light and supply a function
  // that will toggle the hover-light class
  light.onmousedown = function () {
    light.classList.toggle('hover-light')
  }

  // Step 7d - Using event binding, bind the
  // mouseup event to the light and supply a function
  // that will toggle the hover-light class
  light.onmouseup = function () {
    light.classList.toggle('hover-light')
  }

  // Step 7e - Using event binding, bind the
  // click event to the light and supply a function
  // that will execute the tone function,
  // push the light onto the player pattern
  // and evaluate the pattern
  light.onclick = function () {
    tone(light.dataset.note)
    playerPattern.push(light.dataset.note)
    evaluatePattern()
  }
}


let playSpeed = 800
function playPattern () {
  let clonedPattern = patternState.slice(0)

  var intervalID = setInterval(function () {
    let light = clonedPattern.shift()

    if (light) {
      light.classList.toggle('on')
      tone(light.dataset.note)

      setTimeout(function () {
        light.classList.toggle('on')
      }, 500)
    }

    if (clonedPattern.length === 0) {
      clearInterval(intervalID)
    }
  }, playSpeed)
}



reset.onclick = function () {
  playerPattern = []
  patternState = []
  patternState.push(randArrEle(lights))

  message.textContent = ""
  score.textContent = 0

  context = null
  context = new AudioContext
  playPattern()
}

const evaluatePattern = function () {
  if (playerPattern.toString() === patternState.map((light) => light.dataset.note).toString()) {

    // add a new light to the pattern
    patternState.push(randArrEle(lights))
    playerPattern = []

    // increase the score
    let tally = parseInt(score.textContent)
    let modifier = parseInt(scoreModifierValue.textContent)
    score.textContent = `${(tally += modifier)}`

    // play the pattern again
    playPattern()
    return
  }

  for (let i = 0; i < playerPattern.length; i++) {
    if (playerPattern[i] !== patternState[i].dataset.note) {
      message.textContent = 'GAME OVER'
      break
    }
  }
}

scoreModifier.oninput = function (event) {
  scoreModifierValue.textContent = event.target.value

  playSpeed = 1000 - (event.target.value * 65)
}

start.onclick = playPattern

patternState.push(randArrEle(lights))