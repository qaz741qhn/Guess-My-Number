'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;
const setMessage = (message) => document.querySelector('.message').textContent = message;
const setScore = (score) => document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if(!guess) {
		setMessage('No Number!');
  } else if (guess === secretNumber) {
		document.querySelector('.number').textContent = secretNumber;
		setMessage('Correct Number!');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			setMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
			score -= 1; 
			setScore(score);
		} else {
			setScore(0);
			setMessage('You lost the game!');
		}
	}

})

document.querySelector('.again').addEventListener('click', function() {
	score = 20;
	setScore(score);
	document.querySelector('body').style.backgroundColor = '#222';
	setMessage('Start guessing...');
	document.querySelector('.guess').value = null;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width = '15rem';
})

