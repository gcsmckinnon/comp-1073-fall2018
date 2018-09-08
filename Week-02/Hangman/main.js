// Step 1a: Store the Game Board element
const gameBoard = document.querySelector('#gameBoard');

// Step 1b: Store the Feedback element
const feedback = document.querySelector('#feedback');

// Step 1c: Store the Visual element
const visual = document.querySelector('#visual');

// Step 1d: Store the Letter Placement element
const letterPlacement = document.querySelector('#letterPlacement');

// Step 1e: Store the Controls element
const controls = document.querySelector('#controls');


// Step 2a: Store the phrase
const phrase = getPhrase().toLowerCase();

// Step 2b: Iterate and add the blank
for (let i = 0; i < phrase.length; i++) {
  // Step 2c: Create the blank node
  let blank = document.createElement('span')

  // Step 2d: Set the class attribute
  blank.setAttribute('class', 'blank');

  // Step 2e: Set the text content
  if (phrase[i] != " ") {
    // If there is a letter
    blank.textContent = "_";
  } else {
    // If there is a space
    blank.textContent = " "
  }

  // Step 2f: Append the element to letterPlacement
  letterPlacement.append(blank);
}


// The QWERTY array
const qwerty = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["a", "s", "d", "f", "g", "h", "j", "k", "l", "'"], ["z", "x", "c", "v", "b", "n", "m", ","]];

// Iterate and draw each letter
for (let row of qwerty) {
  for (let letter of row) {
    // Step 3a: Create a new element to show a letter control
    let letterControlEle = document.createElement('button');

    // Step 3b: Set the class attribute to letterControl
    letterControlEle.setAttribute('class', 'letterControl');

    // Step 3c: Add the letter text to the Letter Control element
    letterControlEle.textContent = letter;

    // Step 3d: Append the Letter Control element to the Controls element
    controls.append(letterControlEle);
  }

  // Breaks between each row
  controls.innerHTML += '<br>';
}


// Step 4a: Grab all letter control elements
const letterControlEles = document.querySelectorAll('.letterControl');

// Iterate over the elements
letterControlEles.forEach(function (ele) {
  // Add an event listener to each one
  ele.addEventListener('click', function (event) {
    // Step 4b: Disable the element
    ele.setAttribute('disabled', 'disabled');

    guessCount += 1;

    // Step 4c: Send the letter to a function for checking
    checkThisLetter( event.target.textContent );
  });
});

// Step 5: Create a variable to store a player's guesses
// CHALLENGE: The guesses must be stored in the order of the phrase
let guesses = new Array;
let guessCount = 0;

// Auto add spaces
checkThisLetter(" ");

// The function for checking a letter
function checkThisLetter (letter) {
  var i = i = phrase.indexOf(letter, 0);
  
  while(i != -1) {
    guesses[i] = letter;
    i = phrase.indexOf(letter, i + 1);
  }

  // Draw the found letters
  var blanks = document.querySelectorAll('.blank');

  guesses.forEach(function (ele, i) {
    if (ele != "") {
      blanks[i].textContent = ele;
    }
  });

  if (phrase == guesses.join("")) {
    return feedback.textContent = "YOU WON!!!";
  }

  if (guessCount == 10) {
    return feedback.textContent = "YOU LOSS!!!"
  }
}