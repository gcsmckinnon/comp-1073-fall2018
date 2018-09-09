// Step 1a: Store the Game Board element
const gameBoard = document.querySelector('#gameBoard');

// Step 1b: Store the Feedback element
const feedback = document.querySelector('#feedback');

// Step 1c: Store the Letter Placement element
const letterPlacement = document.querySelector('#letterPlacement');

// Step 1d: Store the Controls element
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

    // Step 4d: Send the letter to a function for checking
    checkThisLetter( event.target.textContent );
  });
});

// Step 5a: Create a variable to store a player's guesses
// CHALLENGE: The guesses must be stored in the order of the phrase
let guesses = new Array;

// Step 5b: Create a variable to store the guess count and set it to 0
let guessCount = 0;

// Auto add spaces
checkThisLetter(" ");

// The function for checking a letter
function checkThisLetter (letter) {
  // Step 5c: Check if the phrase contains the letter
  // The second argument is the starting index.
  let i = phrase.indexOf(letter, 0);

  // If the letter isn't found in the phrase
  if (i == -1) {
    // Step 5d: Increment the guess count
    guessCount += 1;

    // Step 5e: Add a hint to the feedback using interpolation.
    feedback.textContent = `Oops. You have ${10 - guessCount} guesses left!`;
  }
  
  // While the i is not equal to -1
  // .indexOf() will return -1 when it can't find an instance
  while(i != -1) {
    // Step 5f: Add the letter to our guesses array at
    // the same index as the phrase
    guesses[i] = letter;

    // Step 5g: Look for the next instance of the letter
    // by adding 1 to the starting point.
    i = phrase.indexOf(letter, i + 1);
  }


  // Step 6a: Grab all of the spans containing the blanks
  // we created earlier.
  var blanks = document.querySelectorAll('.blank');

  // Iterate over each element in our guesses array.
  guesses.forEach(function (ele, i) {
    // If the element does not equal empty
    if (ele != "") {
      // Step 6b: Change the text of the corresponding blank.
      // Remember: there will be an identical number of blanks
      // as there are letters in the phrase. We are relying on
      // indexes to keep track of blanks, phrase, and guesses.
      blanks[i].textContent = ele;
    }
  });

  // Step 7a: Create the win condition.
  if (phrase == guesses.join("")) {
    // Disable all the letters.
    letterControlEles.forEach(function (ele) {
      // Step 7b: Disable all the letters.
      ele.setAttribute('disabled', 'disabled');
    });

    // Step 7c: Add the "YOU WIN" text to the feedback element.
    return feedback.textContent = "YOU WIN!!!";
  }

  // Step 8a: Create the lose condition
  if (guessCount == 10) {
    // Disable all the letters.
    letterControlEles.forEach(function (ele) {
      // Step 8b: Disable all the letters.
      ele.setAttribute('disabled', 'disabled');
    });

    // Step 8c: Add the "YOU LOSE" text to the feedback element.
    return feedback.textContent = "YOU LOSE!!!"
  }
}