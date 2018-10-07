// Step 1a - Select and store our event exammples
let clickEvents = document.querySelector('#clickEvents')
let mouseEvents = document.querySelector('#mouseEvents')
let focusBlurEvents = document.querySelector('#focusBlurEvents')
let inputEvents = document.querySelector('#inputEvents')
let changeEvents = document.querySelector('#changeEvents')
let removeEvents = document.querySelector('#removeEvents')

// Step 1b - Iterate and add 3 new properties to each
// element representing a selector for each child
for (let event of [clickEvents, mouseEvents, focusBlurEvents, inputEvents, changeEvents, removeEvents]) {
  event.htmlEx = event.querySelector('.eventExamples .htmlEx')
  event.eventListenerEx = event.querySelector('.eventExamples .eventListenerEx')
  event.propertyEx = event.querySelector('.eventExamples .propertyEx')
}


// Step 1 - Click Events
// Step 1a - htmlEx
function clickEventFunction () {
  clickEvents.htmlEx.textContent = "clicked"
}
// Step 1b - eventListenerEx
clickEvents.eventListenerEx.addEventListener('click', function (event) {
  event.target.textContent = "clicked"
})
// Step 1c - propertyEx
clickEvents.propertyEx.onclick = (event) => {
  event.target.textContent = "clicked"
}


// Step 2 - Mouse Events
// Step 2a - htmlEx
function mouseoverEventFunction () {
  mouseEvents.htmlEx.textContent = "over"
}

function mouseoutEventFunction () {
  mouseEvents.htmlEx.textContent = "out"
}

// Step 2b - eventListenerEx
mouseEvents.eventListenerEx.addEventListener('mouseover', function (event) {
  event.target.textContent = "over"
})

mouseEvents.eventListenerEx.addEventListener('mouseout', function (event) {
  event.target.textContent = "out"
})

// Step 2c - propertyEx
mouseEvents.propertyEx.onmouseover = (event) => {
  event.target.textContent = "over"
}

mouseEvents.propertyEx.onmouseout = (event) => {
  event.target.textContent = "out"
}


// Step 3 - Focus/Blur Events
// Step 3a - htmlEx
function focusEventFunction () {
  focusBlurEvents.htmlEx.querySelector('input').value = "focused"
}

function blurEventFunction () {
  focusBlurEvents.htmlEx.querySelector('input').value  = "blurred"
}

// Step 3b - eventListenerEx
focusBlurEvents.eventListenerEx.querySelector('input').addEventListener('focus', function (event) {
  event.target.value = "focused"
})

focusBlurEvents.eventListenerEx.querySelector('input').addEventListener('blur', function (event) {
  event.target.value = "blurred"
})

// Step 3c - propertyEx
focusBlurEvents.propertyEx.querySelector('input').onfocus = (event) => {
  event.target.value = "focused"
}

focusBlurEvents.propertyEx.querySelector('input').onblur = (event) => {
  event.target.value = "blurred"
}



// Step 4 - Input Events
// Step 4a - htmlEx
function inputEventFunction () {
  setTimeout(
    () => inputEvents.htmlEx.querySelector('input').value = "changed"
  , 1000)
}

// Step 4b - eventListenerEx
inputEvents.eventListenerEx.querySelector('input').addEventListener('input', function (event) {
  setTimeout(
    () => event.target.value = "changed"
  , 1000)
})

// Step 4c - propertyEx
inputEvents.propertyEx.querySelector('input').oninput = (event) => {
  setTimeout(
    () => event.target.value = "changed"
  , 1000)
}



// Step 5 - Change Events
// Step 5a - htmlEx
function changeEventFunction () {
  setTimeout(
    () => changeEvents.htmlEx.querySelector('select').value = "changed"
  , 1000)
}

// Step 5b - eventListenerEx
changeEvents.eventListenerEx.querySelector('select').addEventListener('change', function (event) {
  setTimeout(
    () => event.target.value = "changed"
  , 1000)
})

// Step 5c - propertyEx
changeEvents.propertyEx.querySelector('select').onchange = (event) => {
  setTimeout(
    () => event.target.value = "changed"
  , 1000)
}


// Step 6 - Remove Events
// Step 6a - htmlEx
function removeThisEventFunction () {
  removeEvents.htmlEx.textContent = "clicked"

  setTimeout(function () {
    removeEvents.htmlEx.removeEventListener('click', removeThisEventFunction)
    removeEvents.htmlEx.textContent = "removed"
  }, 1000)
}
// Step 6b - eventListenerEx
function reallyRemoveThisEventFunction (event) {
  event.target.textContent = "clicked"

  setTimeout(function () {
    event.target.removeEventListener('click', reallyRemoveThisEventFunction)
    event.target.textContent = "removed"
  }, 1000)
}

removeEvents.eventListenerEx.addEventListener('click', reallyRemoveThisEventFunction)

// Step 6c - propertyEx
removeEvents.propertyEx.onclick = reallyRemoveThisEventFunction


// Step 7a - Stopping default action
const stoppingDefaultActions = document.querySelector('#stoppingDefaultActions')
stoppingDefaultActions.onclick = (event) => {
  event.preventDefault()

  event.target.textContent = "GAH! Foiled again!!!"
}

// Step 7b - Stop bubbling
const parentEle = document.querySelector('#parentEle')
const childEle = document.querySelector('#childEle')
parentEle.onclick = function (event) {
  event.target.textContent = "You clicked the parent!"
}

childEle.onclick = function (event) {
  event.stopPropagation()
  event.target.textContent = "You clicked the child!"
}


// Step 8a - Create an new event
let myEvent = new Event('theEvent')
document.querySelector('#createEvent').textContent = myEvent.constructor.name

// Step 8b - Subscribe to an event
const subscribeToEvent = document.querySelector('#subscribeToEvent')
subscribeToEvent.addEventListener('theEvent', function (event) {
  document.querySelector('#publishEvent').textContent = "The event has published!"
})
subscribeToEvent.textContent = subscribeToEvent

// Step 8c - Publish the event
subscribeToEvent.dispatchEvent(myEvent)