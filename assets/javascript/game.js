var wins, guessesRemaining, chosenWord, guess, wins
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
var winsElem = document.getElementById("wins");

var chosenWordIndex;
//chosenWordElem.innerText = chosenWord


menuElem.hidden = true;
ingGameTitleElem.hidden = true;
resetButtonElem.hidden = true;


document.onkeyup = function (event) {
    welcomeMessageElem.hidden = true;
    menuElem.hidden = false;
    ingGameTitleElem.hidden = false;
    resetButtonElem.hidden = false;

    wins = 0;
    gameLoop();
}

function restartGame() {
    gameLoop();
}

function gameLoop() {
    winsElem.textContent = wins.toString();
    chosenWordIndex = Math.floor(Math.random() * words.length);
    chosenWord = words[chosenWordIndex]
    guessesRemaining = Math.ceil(chosenWord.length * 2);
    lettersGuessed = []
    blankedWord = []
    indexOfGuess = []

    for (let i = 0; i < chosenWord.length; i++) {
        blankedWord.push("_")
        //blankedWordElem.innerHTML += "<div id='letter" + i + ">" + blankedWord[i] + "</div>"
    }

    lettersGuessedElem.innerText = lettersGuessed
    blankedWordElem.innerText = blankedWord.join(" ")
    guessesLeftElem.innerText = guessesRemaining



    document.onkeyup = function (event) {
        if (guessesRemaining <= 0) {
            alert("Out of guesses!");
        } else {
            guess = event.key
            if (!lettersGuessed.includes(guess)) {
                if (alphabet.includes(guess)) {



                    //////////////////////////////////
                    ////// /////
                    console.log("letters guessed: " + lettersGuessed)
                    guessesRemaining--

                    if (chosenWord.includes(guess)) {
                        //iterate through each letter of the chosen word
                        //and get that letters index
                        for (let i = 0; i < chosenWord.length; i++) {
                            if (chosenWord[i] === guess) {
                                indexOfGuess.push(i)
                            }
                        }
                        //add the guessed letter to the lettersGuessed array
                        lettersGuessed.push(guess)

                        console.log("Indices: " + indexOfGuess)
                        
                        //iterate through each index grabbed above
                        indexOfGuess.forEach(element => {
                            blankedWord[element] = guess
                        });
                    } else {
                        lettersGuessed.push(guess)
                        console.log("di letter guessed: " + lettersGuessed)
                    }

                    console.log("Blanked Word: " + blankedWord.toString().replace(/,/g, ""))
                    if (blankedWord.toString().replace(/,/g, "") === chosenWord) {
                        alert("Job Well Done!")
                        showImage(chosenWord);
                        wins++;
                        gameLoop();
                    }


                    lettersGuessedElem.innerText = lettersGuessed
                    blankedWordElem.innerText = blankedWord.join(" ")
                    guessesLeftElem.innerText = guessesRemaining
                    indexOfGuess = []
                } else {
                    alert("You didn't press a letter, try again.")
                    console.log(guess)
                }
            } else {
                alert("You have already guessed that letter. Try again!");
            }
        }
    }
}
