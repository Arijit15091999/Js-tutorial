``` javascript


const randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
let remainningGuesses = 10;
let playGame = true;

const submitButton = document.querySelector("#subt");
// console.log(submitButton);
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const userInput = document.querySelector("#guessField");
    const guess = parseInt(userInput.value);
    userInput.value = "";
    // console.log(guess);

    if(playGame)
        validateGuess(guess);
})
function validateGuess(guess) {
    const prevGuessFeild = document.querySelector(".guesses");
    if (isNaN(guess) || guess < 0 || guess > 100) {
        const lowOrHi = document.querySelector(".lowOrHi");
        // console.log(lowOrHi);
        showMessage("Enter valid input between 1 to 100");
    } else {
        prevGuessFeild.innerHTML += `${guess} `;
        checkTheGuess(guess);
    }
}

function checkTheGuess(guess) {
    remainningGuesses--;
    document.querySelector(".lastResult").innerHTML = remainningGuesses;
    if (remainningGuesses < 1) {
        showStartButton("Game Over");
    }
    else if (guess > randomNumber) {
        showMessage("Number is too big");
    } else if (guess < randomNumber) {
        showMessage("Number is too small");
    } else {
        showStartButton(`You won the game and the random number was ${randomNumber}`);
    }
}

function showMessage(message) {
    const lowOrHi = document.querySelector(".lowOrHi");
    // console.log(lowOrHi);
    lowOrHi.innerHTML = `<span>${message}</span>`;
    setTimeout(function () {
        lowOrHi.innerHTML = "";
    }, 2000);
}

function showStartButton(message) {
    endGame();
    const p = document.createElement("p");
    // console.log(p);
    p.innerHTML = `${message}`;
    document.querySelector(".resultParas").appendChild(p);
    const startButton = document.createElement("p");
    // startButton.className = "button";
    startButton.innerHTML = "New Game";
    document.querySelector(".resultParas").appendChild(startButton);
    
    startButton.addEventListener("click", function () {
        startButton.remove();
        p.remove();
        startGame();
    })

}

function startGame() {
    playGame = true;
    document.querySelector(".guesses").innerHTML = "";
    remainningGuesses = 10;
    document.querySelector(".lastResult").innerHTML = remainningGuesses;
}

function endGame() {
    playGame = false;
    document.querySelector(".guesses").disabled = true;
}



```