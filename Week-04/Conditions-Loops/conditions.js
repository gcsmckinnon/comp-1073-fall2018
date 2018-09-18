// The output function
HTMLElement.prototype.output = function (value) {
  if (value instanceof Element) {
    this.appendChild(value);
  } else {
    let p = document.createElement('p');
    p.textContent = value;
    this.appendChild(p);
  }
}

// Random card function
function drawCards (cards, numOfCards = 1) {
  let selectedCards = [];

  if (cards.length < numOfCards) return [];

  for (let i = 0; i < numOfCards; i++) {
    let index = Math.floor(Math.random() * cards.length);
    console.log(index);
    selectedCards.push(cards.splice(index, 1)[0]);
  }

  return selectedCards.sort();
}

function cardSelect (event) {
  let card = event.target;

  if (card.classList.contains('cardSelected')) {
    card.classList.remove('cardSelected');
  } else {
    card.classList.add('cardSelected');
  }
}

// Step 1 - Select and Store the conditions section and loops section
const Player1Ele = document.querySelector('#player1');
const Player2Ele = document.querySelector('#player2');

// Create an array of cards
let cards = [
  '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', 'Js', 'Qs', 'Ks', 'As',
  '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', 'Jd', 'Qd', 'Kd', 'Ad',
  '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', 'Jc', 'Qc', 'Kc', 'Ac',
  '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', 'Jh', 'Qh', 'Kh', 'Ah',
]

let hand = drawCards(cards, 5);

for (let card of hand) {
  let cardEle = document.createElement('div');
  cardEle.textContent = card;
  cardEle.classList.add('cardStyle');
  
  if (card.indexOf('d') !== -1) {
    cardEle.classList.add('diamond');
  } else if(card.indexOf('h') !== -1) {
    cardEle.classList.add('heart');
  } else if(card.indexOf('c') !== -1) {
    cardEle.classList.add('club');
  } else if(card.indexOf('s') !== -1) {
    cardEle.classList.add('spade');
  }

  cardEle.addEventListener('click', cardSelect);
  Player1Ele.output(cardEle);
}