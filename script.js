'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '✅ Correct Number!!!';

document.querySelector('.number').textContent = 24;

document.querySelector('.label-score').textContent = '💯 Score: 19';

document.querySelector('.guess').value = 20;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When There is No Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
    //When Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number!!!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    //When Guess is Too High
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 💥';
      document.querySelector('.score').textContent = 0;
    }
    //When Guess is Too Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game 💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
