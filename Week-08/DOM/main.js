// Step 1 - Select and store querySelectorEx span and output the class name
const querySelectorEx = document.querySelector('#querySelectorEx')
querySelectorEx.textContent = querySelectorEx.constructor.name


// Step 2a - Create and store a new DOM element in myNewElement
let myNewElement = document.createElement('span')

// Step 2b - Select and store createElementEx and output the class name
const createElementEx = document.querySelector('#createElementEx')
createElementEx.textContent = myNewElement.constructor.name


// Step 3a - Select and store all the H3s on the page and output the class name
const h3s = document.querySelectorAll('h3')
// Step 3b - Select and store the querySelectorAllEx and output the H3 store class name
const querySlectorAllEx = document.querySelector('#querySlectorAllEx')
querySlectorAllEx.textContent = h3s.constructor.name.toString()


// Step 4a - Select and store attributeEx1, 2, and 3 spans
const attributeEx1 = document.querySelector('#attributeEx1')
const attributeEx2 = document.querySelector('#attributeEx2')
const attributeEx3 = document.querySelector('#attributeEx3')

// Step 4b - Using the myNewElement we created, set the id of the element
// then output
myNewElement.id = "my-id-value"
attributeEx1.textContent = myNewElement.id

// Step 4c - Using the myNewElement we created, set the title of the element
// then output
myNewElement.title = "This is my custom element that I created."
attributeEx2.textContent = myNewElement.title

// Step 4d - Using the myNewElement we created, set the title of the element
// then output
myNewElement.title = "This is my custom element that I created."
attributeEx2.textContent = myNewElement.title

// Step 4e - Select and store the input in attributeEx3
const attribute3Input = attributeEx3.querySelector('input')

// Step 4f - Add all the necessary attributes to the input
attribute3Input.name = "color"
attribute3Input.id = "color"
attribute3Input.placeholder = "color"
attribute3Input.type = "color"


// Step 5a - Select and store styleEx1, 2, and 3 spans
const styleEx1 = document.querySelector('#styleEx1')
const styleEx2 = document.querySelector('#styleEx2')
const styleEx3 = document.querySelector('#styleEx3')

// Step 5b - Using the myNewElement we created, set the color style
// of the element (which will change the font color) and output the styles
myNewElement.style.color = "#e67e22"
styleEx1.textContent = myNewElement.style.color

// Step 5c - Using the myNewElement we created, set the background-color style
// of the element and output the styles
myNewElement.style.backgroundColor = "#2c3e50"
styleEx2.textContent = myNewElement.style.backgroundColor

// Step 5d - Using the myNewElement we created, set the padding style
// of the element and output the styles
myNewElement.style.padding = "1em"
styleEx3.textContent = myNewElement.style.padding


// Step 6a - Select and store all the classList examples
const classListAddEx = document.querySelector('#classListAddEx')
const classListAddMultipleEx = document.querySelector('#classListAddMultipleEx')
const classListRemoveEx = document.querySelector('#classListRemoveEx')
const classListToggleEx = document.querySelector('#classListToggleEx')

// Step 6b - Add a new class to myNewElement
myNewElement.classList.add('theAwesomeClass')
classListAddEx.textContent = myNewElement.classList

// Step 6d - Add multiple new classes to myNewElement
myNewElement.classList.add('btn', 'btn-primary')
classListAddMultipleEx.textContent = myNewElement.classList

// Step 6e - Remove btn and btn-primary from myNewElement
myNewElement.classList.remove('btn', 'btn-primary')
classListRemoveEx.textContent = myNewElement.classList

// Step 6f - Toggle theAwesomeClass
myNewElement.classList.toggle('theAwesomeClass')
classListToggleEx.textContent = myNewElement.classList
myNewElement.classList.toggle('theAwesomeClass')


// Step 7a - Select and store all the content examples
const textContentReadEx = document.querySelector('#textContentReadEx')
const textContentWriteEx = document.querySelector('#textContentWriteEx')
const valueReadEx = document.querySelector('#valueReadEx')
const valueWriteEx = document.querySelector('#valueWriteEx')
const innerHTMLReadEx = document.querySelector('#innerHTMLReadEx')

// Step 7b - Read the text content of the H1 element
const h1 = document.querySelector('h1')
let h1Text = h1.textContent
textContentReadEx.textContent = h1Text

// Step 7c - Create new text content
textContentWriteEx.textContent = "Hello. My name is Bob!"

// Step 7d - Read the value of the input
const exInput1 = valueReadEx.querySelector('input')
let input1Val = exInput1.value
exInput1.value = input1Val

// Step 7e - Write the value
const exInput2 = valueWriteEx.querySelector('input')
exInput2.value = 512 

// Step 7f - write/read the innerHTML of myNewElement
myNewElement.innerHTML = "<p>I am some inner HTML!</p>"
innerHTMLReadEx.textContent = myNewElement.innerHTML


// Step 8a - Select and store the append/prepend elements
const appendEx = document.querySelector('#appendEx')
const prependEx = document.querySelector('#prependEx')

// Step 8b - Append the myNewElement to appendEx
appendEx.append(myNewElement.cloneNode(true))

// Step 8c - Prepend the myNewElement to prependEx
prependEx.prepend(myNewElement.cloneNode(true))


// Step 9a - Select and store the dataset example elements
const writeDatasetEx = document.querySelector('#writeDatasetEx')
const readDatasetEx = document.querySelector('#readDatasetEx')