const clicking = document.querySelector('#clicking')
const mouseOverMouseOut = document.querySelector('#mouseOverMouseOut')
const mouseDownMouseUp = document.querySelector('#mouseDownMouseUp')
const changing = document.querySelector('#changing')

clicking.onclick = (event) => {
  clicking.textContent = "clicked"

  setTimeout(() => clicking.textContent = "click", 2000)
}

mouseOverMouseOut.onmouseover = (event) => {
  mouseOverMouseOut.textContent = "over"
}

mouseOverMouseOut.onmouseout = (event) => {
  mouseOverMouseOut.textContent = "out"
}

mouseDownMouseUp.onmousedown = (event) => {
  mouseDownMouseUp.textContent = "down"
}

mouseDownMouseUp.onmouseup = (event) => {
  mouseDownMouseUp.textContent = "up"
}

changing.oninput = (event) => {
  setTimeout(() => changing.textContent = "changed", 2000)
}

const validationMessage = document.querySelector('#validationMessage')
const inputting = document.querySelector('#inputting > input')
const selecting = document.querySelector('#selecting > select')

inputting.oninput = function (event) {
  validationMessage.textContent = event.target.value
}

selecting.onchange = function (event) {
  validationMessage.textContent = event.target.value
}


const parentClicker = document.querySelector('#parentClicker')
const childClicker = document.querySelector('#childClicker')
const clickMessage = document.querySelector('#clickMessage')

parentClicker.onclick = function (event) {
  setTimeout(() => clickMessage.textContent = "Parent Clicked", 1000)
  setTimeout(() => clickMessage.textContent = "", 3000)
}

childClicker.onclick = function (event) {
  clickMessage.textContent = "Child Clicked"
}