const notes = [392.0, 440.0, 523.25, 587.33]

let context = new AudioContext()

function tone (frequency) {
  let osc = context.createOscillator()
  let gain = context.createGain()

  osc.connect(gain)
  osc.type = 'sine'
  osc.frequency.value = frequency
  gain.connect(context.destination)
  // gain.gain.exponentialRampToValueAtTime(0.5, context.currentTime)
  osc.start(0)
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1)
  context.resume()
}

function randArrEle (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


// HTML Elements
const actions = document.querySelector('#actions')
const message = document.querySelector('#message')
const scoreboard = document.querySelector('#scoreboard')
const score = scoreboard.querySelector('#score')
const gameboard = document.querySelector('#gameboard')
const lights = document.querySelectorAll('.light')
const start = document.querySelector('#start')
const scoreModifier = document.querySelector('#scoreModifier')
const scoreModifierValue = document.querySelector('#scoreModifierValue')


// Setup starting variables
let patternState = []
let playerPattern = []

// select 4 random tones
for (let i = 0; i < 4; i++) {
  let light = lights[i]
  light.dataset.note = notes[i]

  light.onmousedown = function () {
    light.classList.toggle('hover-light')
  }

  light.onmouseup = function () {
    light.classList.toggle('hover-light')
  }

  light.onclick = function () {
    tone(light.dataset.note)
    playerPattern.push(light.dataset.note)
    evaluatePattern()
  }
}

patternState.push(randArrEle(lights))
createHints()

let playSpeed = 1000
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

start.onclick = playPattern
reset.onclick = function () {
  context = null
  playerPattern = []
  patternState = []
  message.textContent = ""
  score.textContent = 0
  patternState.push(randArrEle(lights))
  context = new AudioContext

  document.querySelectorAll('.hint').forEach(function (hint) {
    actions.removeChild(hint)
  })

  createHints()
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

    // slightly increase the play speed
    // if (playSpeed > 200) playSpeed = (playSpeed - (patternState.length * 5))

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

function createHints () {

  for (let i = 0; i < 3; i++) {
    let hint = document.createElement('button')

    hint.textContent = `Hint ${i + 1}`
    hint.classList.add('btn', 'btn-warning', 'hint')

    hint.onclick = function () {
      hint.setAttribute("disabled", "disabled")

      playPattern()

      hint.parentNode.removeChild(hint)
    }

    actions.append(hint)
  }
}

scoreModifier.oninput = function (event) {
  scoreModifierValue.textContent = event.target.value

  playSpeed = 1000 - (event.target.value * 65)

  console.log(playSpeed)
}