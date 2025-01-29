'use strict';

let myNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No Number and Invalid Output
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Provided!';
  }
  // CORRECT!
  else if (guess === myNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 💕';
    document.querySelector('.number').textContent = myNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#4DD091';
    document.querySelector('.number').style.width = '100%';

    // Disable input field and check button
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  }
  // WRONG!
  else if (guess !== myNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    // VALIDATION 3 - Higher
    if (score > 0) {
      if (guess > myNumber) {
        document.querySelector('.message').textContent =
          'Wrong! Number is too high...';
      }
      // VALIDATION 4 - Lower
      else if (guess < myNumber) {
        document.querySelector('.message').textContent =
          'Wrong! Number is too low...';
      }
    }
    // LOST BEHAVIOR
    else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('body').style.backgroundColor = '#FF5768';
      // Disable input field and check button
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  myNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

  // Enable input field and check button
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});
