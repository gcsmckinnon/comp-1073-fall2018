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

  // Step 2f - This is used to resume audio in Chrome
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

// Step 8 - Set a play speed
let playSpeed = 800

// Step 9 - Create a function to play the pattern
function playPattern () {
  // Step 9a - Clone the pattern
  let clonedPattern = patternState.slice(0)

  // Step 9b - Using an interval
  var intervalID = setInterval(function () {
    // Step 9c - Shift and store the first element in clonedpattern
    let light = clonedPattern.shift()

    // Step 9d - If we have a light
    if (light) {
      // Step 9e - Toggle the 'on' class
      light.classList.toggle('on')

      // Step 9f - Play the tone
      tone(light.dataset.note)

      // Step 9g - Using the timeout function,
      // toggle the light back off
      setTimeout(function () {
        light.classList.toggle('on')
      }, 500)
    }

    // Step 9h - If the clonedPattern has no more elements
    if (clonedPattern.length === 0) {
      // Step 9i - Clear the interval
      clearInterval(intervalID)
    }
  }, playSpeed) // Step 9j - Use the playSpeed as the delay
}


// Step 10 - When the reset button is clicked
reset.onclick = function () {
  // Step 10a - Clear the player pattern
  playerPattern = []

  // Step 10b - Clear the pattern state
  patternState = []

  // Step 10c - Push a new light onto pattern state
  patternState.push(randArrEle(lights))

  // Step 10d - Set the message to an empty string
  message.textContent = ""

  // Step 10e - Set the score to 0
  score.textContent = 0

  // Step 10f - Set the audio context to null to clear it
  context = null

  // Step 10g - Create a new audio context
  context = new AudioContext

  // Step 10h - Start the game over by playing the pattern
  playPattern()
}


// Step 11 - Create a function to evaluate the pattern
const evaluatePattern = function () {
  // Step 11a - Compare the playerPattern to the patternState arrays
  // by casting them to strings. If they are a match, the user has
  // gotten that pattern correct!
  if (playerPattern.toString() === patternState.map((light) => light.dataset.note).toString()) {

    // Step 11b - Add a new light to the pattern
    patternState.push(randArrEle(lights))

    // Step 11c - Reset the playerPattern
    playerPattern = []

    // Step 11d - Increase the score
    let tally = parseInt(score.textContent)
    score.textContent = `${(tally += 1)}`

    // Step 11e - Start the new pattern
    playPattern()

    // Step 11f - Return from the function
    return
  }

  // Step 11g - Using a for loop, iterate over the player pattern
  for (let i = 0; i < playerPattern.length; i++) {
    // Step 11h - If the player pattern element doesn't match the pattern state element note
    if (playerPattern[i] !== patternState[i].dataset.note) {
      // Step 11i - The player has lost, and it's game over for them
      message.textContent = 'GAME OVER'

      // Step 11j - Exit the loop
      break
    }
  }
}

// Step 12 - When start is clicked, play the pattern
start.onclick = playPattern

// Step 13 - Push a new light onto the pattern so it has one to start with
patternState.push(randArrEle(lights))