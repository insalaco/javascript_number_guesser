// game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// create variables for ids and classes
const guessBtn   = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message    = document.querySelector('.message'),
      minNum     = document.querySelector('.min-num'),
      maxNum     = document.querySelector('.max-num'),
      game       = document.querySelector('#game'); // get parent element for event listener

// assign the text content of span element classes min-num and max-num to variables
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
}); 

// listen for guess when click #guess-btn
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value); // converts string to a number when entering a value

  // validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  
  // check if game won
  if(guess === winningNum) {
    gameOver(true, `You won! ${winningNum} is the winning number.`);
  
  } else {   
    guessesLeft -= 1; // guessesLeft = guessesLeft - 1;

    // game over 
    if(guessesLeft === 0) {
      gameOver(false, `Game over! The correct number is ${winningNum}.`);

    } else {
      // game continues answer wrong
      guessInput.value = '';
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // disable input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  // set text color
  message.style.color = color;
  // set message
  setMessage(msg);

  // play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
  message.style.color = color; //
  message.textContent = msg;
}
