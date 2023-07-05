'use strict';

var secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

let score = 20;
let highScore = 0;

function displayMessage(str) {
    document.querySelector('.message').textContent = str;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //to display, if user dont give any input. no input means 0, so to true that condtn, negetaion is added
    if (!guess) {
        document.querySelector('.message').textContent = "⛔️ No Number";
    }
    else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess > secretNumber) {
        displayMessage("Number is too high");
        if (score > 1) {
            console.log("score-->", score);
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 0;
            displayMessage("🥴You lost the game");
        }
    }
    else {
        displayMessage("Number is too low");
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = 0;
            displayMessage("🥴You lost the game");
        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage("Start guessing......");


    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
});
