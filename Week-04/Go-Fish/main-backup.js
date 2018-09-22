const cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const deck = [cardValues, cardValues, cardValues, cardValues].flat();

const messages = document.querySelector('#messages');
const player1Ele = document.querySelector('#player-1 .cards');
const player2Ele = document.querySelector('#player-2 .cards');

const players = [player1Ele, player2Ele];
let playerHands = [];

let currentPlayer = 0;
let selectedCard;

let gameState = {
  start: true,
  initDeal: true,
  needToRemovePairs: true,
  delay: 2000,
  cardSelected: false,
  removeCard: false,
  goFish:false,
  playAgain: false,
  humanTurn: true,
  aiTurn: false
}


function removeCard (playerIndex, cardValue) {
  let index;

  if ((index = playerHands[playerIndex].indexOf(cardValue)) !== -1) {
    playerHands[playerIndex].splice(index, 1);
    return true;
  }

  return false;
}

function removePairs (playerIndex) {
  for (let card of playerHands[playerIndex]) {
    removeCard(playerIndex, card);
  }
}

function dealCards (numOfCards) {
  if (deck.length < numOfCards) {
    messages.textContent = "No more cards. Game over!";
    return [];
  }
  
  let selectedCards = [];

  for (let i = 0; i < numOfCards; i++) {
    let index = Math.floor(Math.random() * deck.length);
    selectedCards.push(deck.splice(index, 1)[0]);
  }

  return selectedCards.sort();
}

function cardSelected() {
  console.log(playerHands);
  let opponent = currentPlayer === 0 ? 1 : 0;

  if (removeCard(opponent, selectedCard)) {
    removeCard(currentPlayer, selectedCard);
    gameState.playAgain = true;
    return true;
  }

  gameState.goFish = true;
  gameState.playAgain = false;
  return false;
}

function goFish () {
  let goFish = dealCards(1);
  playerHands[currentPlayer].push(goFish[0]);
  removePairs(currentPlayer);

  currentPlayer = currentPlayer === 0 ? 1 : 0;

  if (currentPlayer === 1) {
    gameState.aiTurn = true;
    gameState.humanTurn = false;
  } else {
    gameState.humanTurn = true;
    gameState.aiTurn = false;
  }
}


// Human Player functions
function cardClicked (event) {
  selectedCard = event.target.dataset.value;
  gameState.cardSelected = true;
}

function displayHumanCards () {
  player1Ele.innerHTML = null;
  
  for (let card of playerHands[0]) {
    let cardEle = document.createElement('div');
    cardEle.classList.add('card');
    cardEle.dataset.value = card;
    cardEle.textContent = card;
    cardEle.onclick = cardClicked;

    player1Ele.appendChild(cardEle);
  }
}


// AI
function AISelect () {
  let index = Math.floor(Math.random() * playerHands[1].length);
  selectedCard = playerHands[1][index];
  gameState.cardSelected = true;
}


// The Game Loop
setInterval(function() {
  if (gameState.start) {
    messages.textContent = "Welcome to Bob's Go Fish!!!";
    gameState.start = false;
    return;
  }

  if (gameState.initDeal) {
    messages.textContent = "Let's deal some cards!";

    for (let i = 0; i < 2; i++) {
      playerHands.push(dealCards(8));
    }

    displayHumanCards();
    gameState.initDeal = false;
    console.log(playerHands);
    return;
  }

  if (gameState.needToRemovePairs) {
    messages.textContent = "Let's remove those pairs!";
    
    for (let i = 0; i < 2; i++) {
      playerHands.push(removePairs(i));
    }

    displayHumanCards();
    gameState.needToRemovePairs = false;
    console.log('After removePairs()', playerHands);
    return;
  }

  if (gameState.cardSelected) {
    messages.textContent = `Player ${currentPlayer + 1} wants to know if Player ${currentPlayer === 0 ? 2 : 1} has a ${selectedCard}...`;
    cardSelected();
    gameState.cardSelected = false;
    return;
  }

  if (gameState.goFish) {
    messages.textContent = `Player ${currentPlayer === 0 ? 2 : 1} says, "GO FISH!".`;

    if (currentPlayer === 1) {
      displayHumanCards();
    }

    goFish();
    gameState.goFish = false;
    return;
  }

  if (gameState.playAgain) {
    messages.textContent = `Awesome! Player again, Player ${currentPlayer + 1}!`;
    gameState.playAgain = false;
    return;
  }

  if (gameState.humanTurn) {
    messages.textContent = "Player 1's turn! Select a card!";
    return;
  }

  if (gameState.aiTurn) {
    messages.textContent = "Player 2's turn! They're selecting a card!";
    AISelect();
    return;
  }
}, gameState.delay);