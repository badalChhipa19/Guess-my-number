'use strict';
// secret number
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const messageContent = function (v) {
  document.querySelector('.message').textContent = v;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    messageContent('No number');
  } else if (guess === secret) {
    messageContent('correct number🎇');
    document.querySelector('body').style.backgroundColor = '#ce3a3a';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secret) {
    if (score > 1) {
      messageContent(guess > secret ? 'to High 📈' : 'to Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageContent('You Lose the game🩸');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset
document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  messageContent('Start guessing...');
  document.querySelector('.guess').value = '';
});
