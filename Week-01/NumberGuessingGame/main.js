// Step 1 - Grab the h1 and store it in a variable
var h1 = document.querySelector('h1');

// Step 2 - Grab the input and store it in a variable
var input = document.querySelector('input');

// Step 2b - Add focus to input
input.focus();

// Step 3 - Grab the button and store it in a variable
var button = document.querySelector('button');

// Step 4 - Initialize a variable to store the number of guesses
var guessCount = 0;

// Step 5 - Generate a random number
var randomNum = Math.ceil(Math.random() * 100);

// Step 6 - Add an event listener that will execute when the button is clicked
button.addEventListener('click', function () {
  // Step 6b - Increment the guess count
  guessCount += 1;
  
  // Step 6c - Provide a win condition 
  if (input.value == randomNum) {
    h1.textContent = 'Awesome! You Won!';
    h1.textContent += ' (total guesses: ' + guessCount + ')';
    return;
  }

  // Step 6d - Fail if the guess count has exceeded 10 guesses
  if (guessCount == 10) {
    h1.textContent = "You lose!!! The correct number was " + randomNum;
    return;
  }

  // Step 6e - Provide hints
  if (input.value > randomNum) {
    h1.textContent = 'Too High!!!';
  } else {
    h1.textContent = 'Too Low!!!';
  }

  // Step 6f - Clear the input and add focus
  input.value = "";
  input.focus();
});
