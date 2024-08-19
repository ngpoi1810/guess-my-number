'use strict';
const checkButton = document.querySelector('.check');
let againButton = document.querySelector('.again');
let number = document.querySelector('.number').textContent;
let numberRandom = Math.trunc(Math.random(number) * 20)
let score = document.querySelector('.score').textContent
let highScore = 0;
console.log(numberRandom)
function messageFunc(message) {
    document.querySelector('.message').textContent = message
}
checkButton.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        messageFunc('🚫 No Number')
    } else if (guess === numberRandom) {
        messageFunc('🎉 Correct Number')
        document.querySelector('.number').textContent = numberRandom
        document.body.style.background = 'rgb(96, 179, 71)';
        document.querySelector('.number').style.width = '30rem'
        if(Number(score) > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

    }
    else if (guess !== numberRandom) {
        if(score > 1) {
            messageFunc(guess > numberRandom ? '📈 Too high' : '📉 Too low')
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.score').textContent = '0';
            messageFunc('😢 You loose')
        }
    }
})

againButton.addEventListener('click', function () {
    document.body.style.background = '#222';
    messageFunc('Start guessing...')
    document.querySelector('.number').style.width = '15rem'
    score = 20
    numberRandom = Math.trunc(Math.random(number) * 20)
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
})
