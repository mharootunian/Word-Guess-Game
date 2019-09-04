var wins, guessesRemaining, chosenWord, guess
var lettersGuessed = [], blankedWord = [], indexOfGuess = []
var words = ["tiger", "lion", "panther", "leopard", "cougar", "cheetah", "cat", "jaguar", "lynx", "ocelot", "serval"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

//Assign HTML element vars
//var chosenWordElem = document.getElementById("chosenWord")
var lettersGuessedElem = document.getElementById("lettersGuessed");
var blankedWordElem = document.getElementById("blankedWord");
var guessesLeftElem = document.getElementById("guessesLeft");
var welcomeMessageElem = document.getElementById("welcomeMessage");
var menuElem = document.getElementById("menu");
var ingGameTitleElem = document.getElementById("in-game-title");
var resetButtonElem = document.getElementById("restart-game-button");

var chosenWordIndex = Math.floor(Math.random() * words.length);
chosenWord = words[chosenWordIndex]
console.log(chosenWord)
//chosenWordElem.innerText = chosenWord

for (let i = 0; i < chosenWord.length; i++) {
    blankedWord.push("_")
    //blankedWordElem.innerHTML += "<div id='letter" + i + ">" + blankedWord[i] + "</div>"
}

menuElem.hidden = true;
ingGameTitleElem.hidden = true;

guessesRemaining = Math.ceil(chosenWord.length * 2.5);


lettersGuessedElem.innerText = lettersGuessed
blankedWordElem.innerText = blankedWord.join(" ")
guessesLeftElem.innerText = guessesRemaining

document.onkeyup = function (event) {
    welcomeMessageElem.hidden = true;
    menuElem.hidden = false;
    ingGameTitleElem.hidden = false;
    gameLoop();
}


function restartGame() {
    location.reload()
}

function gameLoop() {

    document.onkeyup = function (event) {
        guess = event.key
        if (!lettersGuessed.includes(guess)) {
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
                    showImage(chosenWord);
                    resetButtonElem.className = "btn btn-success";
                    resetButtonElem.value = "New Game";
                }


                lettersGuessedElem.innerText = lettersGuessed
                blankedWordElem.innerText = blankedWord.join(" ")
                guessesLeftElem.innerText = guessesRemaining
                indexOfGuess = []
            } else {
                alert("You didn't press a letter, try again.")
            }
        } else {
            alert("You have already guessed that letter. Try again!");
        }
    }
}
