let h1 = document.querySelector('h1');
let gameboard = document.querySelector('#gameboard');
let cells = document.querySelectorAll('.cell');
let reset = document.querySelector('#reset');
let message = document.querySelector('#message');

let players = ['Player 1', 'Player 2'];
let playerPiece = ['x', 'o'];
let currentPlayer = 0;

cells.forEach(function (cell) {
  cell.addEventListener('click', toggleCell);
});

function toggleCell(event) {
  let target = event.target
  let val = target.textContent

  if (val === "") {
    target.textContent = playerPiece[currentPlayer];

    if (evaluateBoard()) {
      currentPlayer = (currentPlayer === 0) ? 1 : 0;
      message.textContent = `Player ${currentPlayer + 1}! Your Turn!`;
    }
  }
}

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

function killGame () {
  cells.forEach(function (cell) {
    cell.removeEventListener('click', toggleCell);
    cell.setAttribute('disabled', 'disabled');
    gameboard.classList.add('gameover');
    message.textContent = "GAME OVER";
  });
}

function evaluateBoard () {
  let boardFull = 0;

  for (let win of winConditions) {
    let [i1, i2, i3] = win;
    let [c1, c2, c3] = [cells[i1], cells[i2], cells[i3]].map(ele => ele.textContent);
    
    if (c1.length > 0 && c2.length > 0 && c3.length > 0) {
      boardFull += 1;

      if (c1 === c2 && c2 === c3) {
        h1.textContent = `Player ${currentPlayer + 1} Wins!`;
        killGame();
        return false;
      }
    }
  }

  if (boardFull === winConditions.length) {
    h1.textContent = "No more moves!";
    killGame();
    return false;
  }

  return true;
}

reset.addEventListener('click', function () {
  currentPlayer = 0;

  cells.forEach(function (ele) {
    ele.textContent = "";
    ele.addEventListener('click', toggleCell);
  });

  h1.textContent = "Tic! Tac!! TOE!!!";
  message.textContent = "Player 1! Your Turn!";
  gameboard.classList.remove('gameover');
});