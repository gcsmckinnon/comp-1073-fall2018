let previewTemplate = document.querySelector('#previewTemplate').content.cloneNode(true);

const learningExamples = [
  ['Week-01/IntroducingJavaScript', 'Introducing JavaScript'],
  ['Week-02/Variables-Numbers-Strings', 'Variables, Numbers, & Strings'],
  ['Week-03/Arrays', 'Arrays'],
  ['Week-04/Conditions-Loops', 'Conditions & Loops'],
  ['Week-05/Library-Functions', 'Library Functions'],
  ['Week-05/Custom-Functions', 'Custom Functions'],
  ['Week-06/Events', 'Events'],
];

const games = [
  ['Week-01/NumberGuessingGame', 'Number Guessing Game'],
  ['Week-02/PhraseGuess', 'Guess that Phrase'],
  ['Week-03/TicTacToe', 'Tic Tac Toe'],
  ['Week-06/Simon-Says', 'Simon Says'],
];

[learningExamples, games].forEach(function (group) {
  group.forEach(function (ele) {
    let card = previewTemplate.cloneNode(true);

    card.querySelector('.card-title').textContent = ele[1];
    card.querySelector('.card-link').href = ele[0];

    document.querySelector('#examples').append(card);
  });
});