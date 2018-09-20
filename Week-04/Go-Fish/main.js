// Create an array of cards
let cards = [
  '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', 'Js', 'Qs', 'Ks', 'As',
  '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', 'Jd', 'Qd', 'Kd', 'Ad',
  '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', 'Jc', 'Qc', 'Kc', 'Ac',
  '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', 'Jh', 'Qh', 'Kh', 'Ah',
]

let players = ['player-1', 'player-2'];
let playersHand = [];
let currentPlayer;
let currentCard;

// this can be run by human or machine
function selectCard (card) {
  if (playersHand[currentPlayer].indexOf(card) !== -1) {
    currentCard = card;

    let match;
    if (match = compareCard()) {
      removeCard(match);
    } else {
      
      currentPlayer = currentPlayer === 0 ? 1 : 0;
    }
  }

  console.log(playersHand);
}

// this is a human function
function cardSelect (event) {
  let card = event.target;

  document.querySelectorAll('.card').forEach(function (ele) {
    ele.classList.remove('cardSelected');
  });

  card.classList.toggle('cardSelected');

  selectCard(event.target.textContent);
}

function drawCards (cards, numOfCards ) {
  if (cards.length < numOfCards) return [];
  
  let selectedCards = [];

  for (let i = 0; i < numOfCards; i++) {
    let index = Math.floor(Math.random() * cards.length);
    selectedCards.push(cards.splice(index, 1)[0]);
  }

  return selectedCards.sort();
}

function dealCards () {
  let suits = [['d', 'diamond'], ['h', 'heart'], ['c', 'club'], ['s', 'spade']];

  for (let player of players) {
    let hand = drawCards(cards, 5);
    playersHand.push(hand);

    console.log(player, hand);

    // Only display if Player 1 (the computer's hand is hidden)
    if (player === 'player-1') {
      for (let card of hand) {
        let cardEle = document.createElement('div');
        cardEle.textContent = card;
        cardEle.classList.add('card', 'cardStyle');

        for (let suit of suits) {
          if (card.indexOf(suit[0]) !== -1) {
            cardEle.classList.add(suit[1]);
          }
        }

        cardEle.addEventListener('click', cardSelect);
        document.querySelector(`#${player}`).appendChild(cardEle);
      }
    }
  }
}


function removeCard(match) {
  let index = playersHand[currentPlayer].indexOf(currentCard);
  playersHand[currentPlayer].splice(index, 1);

  let otherPlayer = currentPlayer === 0 ? 1 : 0;
  index = playersHand[otherPlayer].indexOf(match);
  playersHand[otherPlayer].splice(index, 1);
}


function compareCard () {
  let otherPlayer = currentPlayer === 0 ? 1 : 0;
  let cardWithoutSuit = currentCard.match(/^\d+|^[JQKA]/g);

  let matches = playersHand[otherPlayer].filter(function (ele) {
    if (ele.indexOf(cardWithoutSuit) !== -1) return ele;
  });

  if (matches.length > 0) {
    return matches[0];
  }

  return false;
}


function startGame () {
  dealCards();

  currentPlayer = 0;
}


function resetGame () {}


startGame();