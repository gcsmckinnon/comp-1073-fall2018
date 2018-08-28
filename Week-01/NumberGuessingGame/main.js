var h1 = document.querySelector('h1');
var input = document.querySelector('input');
var button = document.querySelector('button');

var guessCount = 0;
var randomNum = Math.ceil(Math.random() * 100);

button.addEventListener('click', function () {
  guessCount += 1;

  if (input.value == randomNum) {
    h1.textContent = 'Awesome! You Won!';
    h1.textContent += ' (total guesses: ' + guessCount + ')';
  } else if (input.value > randomNum) {
    h1.textContent = 'Too High!!!';
  } else {
    h1.textContent = 'Too Low!!!';
  }
})
