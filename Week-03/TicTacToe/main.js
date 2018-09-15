// Step 1a - Select & Store the h1, gameboard, reset, and message into variables
let h1 = document.querySelector('h1');
let gameboard = document.querySelector('#gameboard');
let reset = document.querySelector('#reset');
let message = document.querySelector('#message');

// Step 1b - Select & Store all the cells into a variable
let cells = document.querySelectorAll('.cell');


// Step 2a - Create a variable to store 2 player labels
let players = ['Player 1', 'Player 2'];

// Step 2b - Create a variable to store the player pieces
let playerPiece = ['x', 'o'];

// Step 2c - Create a variable to hold player state
let currentPlayer = 0;

// Step 2d - Create a new array to hold all the win
// condition combinations in our Tic Tac Toe game
let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


/* GAME FUNCTIONS */
// STEP 3 - Create a function to kill the game to
// stop any further interactions
function killGame () {
  // Step 3a - Iterate through the cells using a forEach loop
  cells.forEach(function (cell) {
    // Step 3b - Remove the event listener on each cell
    cell.removeEventListener('click', toggleCell);

    // Step 3c - Set a disabled attribute on the cell
    cell.setAttribute('disabled', 'disabled');

    // Step 3d - Add a gameover CSS class to the gameboard
    gameboard.classList.add('gameover');

    // Step 3e - Add a GAME OVER message
    message.textContent = "GAME OVER";
  });
}


// Step 4 - Create an Evaluate Board function to
// assess if the game is won or in a draw
function evaluateBoard () {
  // Step 4a - Set a variable to capture how many
  // pieces are currently on the board
  let boardFull = 0;

  // Step 4c - Iterate through the win conditions using the
  // newer ES5 method for iterating through a
  // loop
  for (let win of winConditions) {
    // Step 4d - Using destructoring, store the elements of the win array
    // into 3 new index variables
    let [i1, i2, i3] = win;

    // Step 4e - Using destructuring again, as well as the handy array
    // method, .map(), pass the textContent of each cell into 3 new
    // variables
    let [c1, c2, c3] = [cells[i1], cells[i2], cells[i3]].map(ele => ele.textContent);
    
    // Step 4f - Evaluate if the 3 variables have values
    if (c1.length > 0 && c2.length > 0 && c3.length > 0) {
      // Step 4g - If they do, add 1 to the board
      boardFull += 1;

      // Step 4h - Evaluate if the 3 variables are equal
      if (c1 === c2 && c2 === c3) {
        // Step 4i - If so, inform the players the player who has won
        h1.textContent = `Player ${currentPlayer + 1} Wins!`;

        // Step 4j - Kill the game
        killGame();

        // Step 4k - Return false to prevent the toggle event from
        // changing the message
        return false;
      }
    }
  }

  // Step 4l - Evaluate if the board is full by checking if
  // it equals the size of the winConditions array
  if (boardFull === winConditions.length) {
    // Step 4m - If so, inform the players the player who has won
    h1.textContent = "No more moves!";

    // Step 4n - Kill the game
    killGame();

    // Step 4o - Return false to prevent the toggle event from
    // changing the message
    return false;
  }

  // Step 4p - Return true. This will happen if neither of
  // the events above are executed. This will tell toggle
  // to proceed as normal.
  return true;
}


// Step 5 - Create a function to fill the blank cell with a piece
function toggleCell(event) {
  // Step 5a - Create variables to hold the target
  let target = event.target

  // Step 5b - Only execute if the value is empty
  if (target.textContent === "") {
    // Step 5c - Grab the player piece and set the target value to it
    target.textContent = playerPiece[currentPlayer];

    // Step 5d - Evaluate the board and see if the player
    // has won or the game is over. If not:
    if (evaluateBoard()) {
      // Step 5e - Change players
      currentPlayer = (currentPlayer === 0) ? 1 : 0;

      // Step 5f - Inform the players whose turn is next
      message.textContent = `Player ${currentPlayer + 1}! Your Turn!`;
    }
  }
}


// Step 6 - Iterate through the cells using a forEach loop
cells.forEach(function (cell) {
  // Step 6a - Add an event listener to each cell that will
  // call toggleCell on click
  cell.addEventListener('click', toggleCell);
});


// Step 7 - To allow for replay, add an event listener on
// the reset button that will execute a callback function
// on a click event
reset.addEventListener('click', function () {
  // Step 7a - Reset the currentPlayer
  currentPlayer = 0;

  // Step 7b - Iterate through the cells
  cells.forEach(function (ele) {
    // Step 7c - Reset the text content of each cell
    // to a blank
    ele.textContent = "";

    // Step 7d - Rebind the event listener to each cell
    ele.addEventListener('click', toggleCell);
  });

  // Step 7e - Reset the h1
  h1.textContent = "Tic! Tac!! TOE!!!";

  // Step 7f - Reset the message
  message.textContent = "Player 1! Your Turn!";

  // Step 7g - Remove the gameover class from the gameboard
  gameboard.classList.remove('gameover');
});