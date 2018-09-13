let h1 = document.querySelector('h1');
let gameboard = document.querySelector('#gameboard');
let cells = document.querySelectorAll('.cell');

let players = ['Player 1', 'Player 2'];
let playerPiece = ['x', 'o'];
let currentPlayer = 0;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', toggleCell);
}

let stopCounter = false;
function toggleCell(event) {
  let target = event.target
  let val = target.textContent

  if (val === "") {
    stopCounter = true;
    target.textContent = playerPiece[currentPlayer];
    evaluateBoard();
    currentPlayer = (currentPlayer === 0) ? 1 : 0;
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
  for (let i = 0; i < cells.length; i++) {
    cells[i].setAttribute('disabled', 'disabled');
    cells[i].style.backgroundColor = "#bdc3c7";
    cells[i].removeEventListener('click', toggleCell);
  }
}

function evaluateBoard () {
  let boardFull = 0;

  for (let i = 0; i < winConditions.length; i++) {
    let c1 = cells[winConditions[i][0]].textContent;
    let c2 = cells[winConditions[i][1]].textContent;
    let c3 = cells[winConditions[i][2]].textContent;
    
    if (c1.length > 0 && c2.length > 0 && c3.length > 0) {
      boardFull += 1;
      if (c1 === c2 && c2 === c3) {
        h1.textContent = `Player ${currentPlayer + 1} Wins!`;
        killGame();
      }
    }
  }

  if (boardFull === winConditions.length) {
    h1.textContent = "No more moves!";
    killGame();
  }
}