var wins, guessesRemaining, chosenWord, guess
var lettersGuessed = [], blankedWord = [], indexOfGuess = []
var words = ["tiger", "lion", "panther", "leopard", "cougar", "cheetah", "cat", "jaguar", "lynx", "ocelot", "serval"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

//Assign HTML element vars
var chosenWordElem = document.getElementById("chosenWord")
var lettersGuessedElem = document.getElementById("lettersGuessed")
var blankedWordElem = document.getElementById("blankedWord")
var guessesLeftElem = document.getElementById("guessesLeft")
var welcomeMessageElem = document.getElementById("welcomeMessage")
var menuElem = document.getElementById("menu")

var chosenWordIndex = Math.floor(Math.random() * words.length)
chosenWord = words[chosenWordIndex]
console.log(chosenWord)
chosenWordElem.innerText = chosenWord

for (let i = 0; i < chosenWord.length; i++) {
    blankedWord.push("_")
    //blankedWordElem.innerHTML += "<div id='letter" + i + ">" + blankedWord[i] + "</div>"
}

menuElem.hidden = true;
document.onkeyup = function (event) {
    welcomeMessageElem.hidden = true;
    menuElem.hidden = false;
    gameLoop();
}

guessesRemaining = 10

function restartGame() {
    location.reload()
}

function gameLoop() {

    document.onkeyup = function (event) {
        guess = event.key

        if (alphabet.includes(guess)) {

            lettersGuessed.push(guess)

            guessesRemaining--

            if (chosenWord.includes(guess)) {
                //indexOfGuess = chosenWord.indexOf(guess)
                for (let i = 0; i < chosenWord.length; i++) {
                    if (chosenWord[i] === guess) {
                        indexOfGuess.push(i)
                    }
                }

                console.log("Indices: " + indexOfGuess)

                indexOfGuess.forEach(element => {
                    blankedWord[element] = guess
                });
            } else {
                lettersGuessed.push(guess)
            }

            console.log("Blanked Word: " + blankedWord.toString().replace(/,/g, ""))
            if (blankedWord.toString().replace(/,/g, "") === chosenWord) {
                alert("Job Well Done!")
            }


            lettersGuessedElem.innerText = lettersGuessed
            blankedWordElem.innerText = blankedWord.join(" ")
            guessesLeftElem.innerText = guessesRemaining
            indexOfGuess = []
        } else {
            alert("You didn't press a letter, try again.")
        }

    }
}
