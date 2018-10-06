const cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const deck = [cardValues, cardValues, cardValues, cardValues].flat();

const messages = document.querySelector('#messages');
const player1Ele = document.querySelector('#player-1 .cards');
const player2Ele = document.querySelector('#player-2 .cards');

const players = [player1Ele, player2Ele];
let playerHands = [];

let currentPlayer = 0;
let selectedCard;
let gameWon = false;


function dealCards (numOfCards) {
  if (deck.length < numOfCards) {
    messages.textContent = "No more cards. Game over!";
    return false;
  }
  
  let selectedCards = [];

  for (let i = 0; i < numOfCards; i++) {
    let index = Math.floor(Math.random() * deck.length);
    selectedCards.push(String(deck.splice(index, 1)[0]));
  }

  return selectedCards.sort();
}


function removePairs (playerIndex) {
  let cards = {}

  for (let card of playerHands[playerIndex]) {
    cards[card] = ++cards[card] || 1;
  }

  playerHands[playerIndex] = [];
  for (let card in cards) {
    if (cards[card] !== 2) {
      playerHands[playerIndex].push(card);
    } else {
      console.log('Removed Pair: ', card);
    }
  }
}


function removeCard (card) {
  for (let [handIndex, cards] of playerHands.entries()) {
    let cardIndex = cards.indexOf(card);

    if (cardIndex !== -1) {
      playerHands[handIndex].splice(cardIndex, 1);
    }
  }
}


function goFish (playerIndex) {
  let card;

  if (card = dealCards(1)) {
    playerHands[playerIndex].push(card[0]);
  }

  console.log("Go Fish Player " + currentPlayer, card);
}


function hasCard(playerIndex, card) {
  return playerHands[playerIndex].indexOf(card) !== -1;
}


function evaluateBoard () {
  let opponent = currentPlayer === 0 ? 1 : 0;

  if (selectedCard && hasCard(opponent, selectedCard)) {
    removeCard(selectedCard);
    messages.textContent = `Awesome! Play again, Player ${currentPlayer + 1}!`;
    displayCards();

    if (playerHands[currentPlayer].length === 0) {
      return win();
    }
  } else if (selectedCard) {
    messages.textContent = `Player ${currentPlayer === 0 ? 2 : 1} says, "GO FISH!".`;

    goFish(currentPlayer);
    removePairs(currentPlayer);
    displayCards();

    currentPlayer = opponent;
    messages.textContent = `Player ${currentPlayer + 1}! Your Turn!`;

    refreshBoard();
  } else {
    messages.textContent = `Player ${currentPlayer + 1}! Your turn!`;
  }

  // reset the selected card
  selectedCard = null;
  console.log(playerHands[0]);
  console.log(playerHands[1]);
}


function win () {
  gameWon = true;
  messages.textContent = `Congratulations, Player ${currentPlayer + 1}!!!`;
}


// Starting game functions
function initDeal () {
  for (let i = 0; i < 2; i++) {
    playerHands.push(dealCards(8));
    removePairs(i);
  }
}


function displayCards () {
  players.forEach(function (ele, index) {
    ele.innerHTML = "";

    for (let card of playerHands[index]) {
      let cardEle = document.createElement('div');
      cardEle.classList.add('card', 'cardStyle');
      cardEle.dataset.value = card;
      cardEle.onclick = cardClicked;
      
      if (index === 0) {
        cardEle.textContent = card;
      }

      ele.appendChild(cardEle);
    }
  });
}


function refreshBoard () {
  document.querySelectorAll('.card').forEach(function (ele) {
    ele.classList.remove('cardSelected');
  });
}


// human functions
function cardClicked (event) {
  selectedCard = event.target.dataset.value;

  refreshBoard();

  event.target.classList.add('cardSelected');
  evaluateBoard();
}

initDeal();
displayCards();
console.log(playerHands);

let AIinTurn = false;
setInterval (function () {
  if (currentPlayer === 1 && !AIinTurn) {
    AIinTurn = true;
    let cards = player2Ele.querySelectorAll('.card');

    let cardIndex = Math.floor(Math.random() * cards.length);
    selectedCard = cards[cardIndex].dataset.value;

    console.log('AI chose:', selectedCard);
    evaluateBoard();
    AIinTurn = false;
  }
}, 500);