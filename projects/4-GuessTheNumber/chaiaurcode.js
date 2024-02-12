const randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const submitButton = document.querySelector("#subt");
// console.log(submitButton);
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const userInput = document.querySelector("#guessField");
    const guess = parseInt(userInput.value);
    userInput.value = "";
    // console.log(guess);

    validateGuess(guess);
})
function validateGuess(guess) {
    const prevGuessFeild = document.querySelector(".guesses");
    if (isNaN(guess) || guess < 0 || guess > 100) {
        const lowOrHi = document.querySelector(".lowOrHi");
        // console.log(lowOrHi);
        showMessage("Enter valid input between 1 to 100");
        setTimeout(function () {
            lowOrHi.innerHTML = "";
        }, 2000);
    } else {
        prevGuessFeild.innerHTML += `${guess} `;
        checkTheGuess(guess);
    }
}

function checkTheGuess(guess) {
    if (guess > randomNumber) {
        showMessage("Number is too big");
    } else if (guess < randomNumber) {
        showMessage("Number is too small");
    } else {
        
    }
}

function showMessage(message) {
    const lowOrHi = document.querySelector(".lowOrHi");
    // console.log(lowOrHi);
    lowOrHi.innerHTML = `<span>${message}</span>`;
}

