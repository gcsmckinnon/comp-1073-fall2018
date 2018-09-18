function randomArrayElement (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function clickAndWin (win) {
  for (let cellIndex of win) {
    if (cells[cellIndex].textContent === "") {
      cells[cellIndex].click();
      return;
    }
  }
}

setInterval(function () {
  if (currentPlayer === 1) {
    let p1PossibleWins = [];
    let p2PossibleWins = [];

    // assess the current board
    for (let win of winConditions) {
      let [i1, i2, i3] = win;
      let [c1, c2, c3] = [cells[i1], cells[i2], cells[i3]].map(ele => ele.textContent);

      let p1Plays = 0;
      let p2Plays = 0;

      for (let play of [c1, c2, c3]) {
        if (play === playerPiece[0]) p1Plays += 1;
        if (play === playerPiece[1]) p2Plays += 1;
      }

      if (p1Plays === 2 && p2Plays === 0) p1PossibleWins.push(win);
      if (p2Plays === 2 && p1Plays === 0) p2PossibleWins.push(win);
    }

    // attempt to win
    if (p2PossibleWins.length > 0) {
      clickAndWin(p2PossibleWins.pop());
      return;
    }

    // attempt to stop
    if (p1PossibleWins.length > 0) {
      succcess = clickAndWin(p1PossibleWins.pop());
      return;
    }

    // take a random blank spot
    let rando = randomArrayElement(cells)
    while(rando.textContent !== "") {
      rando = randomArrayElement(cells)
    }

    rando.click();
    return;
  }
}, 500);