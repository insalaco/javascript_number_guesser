// game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// create variables for ids and classes
const guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num');

// assign the text content of span element classes min-num and max-num to variables
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess when click #guess-btn
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value); // converts string to a number when entering a value

  // validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
});

function setMessage(msg, color) {
  message.style.color = color; //
  message.textContent = msg;
}
