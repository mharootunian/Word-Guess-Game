game.chosenWord = game.words[game.chosenWordIndex]
console.log(game.chosenWord)
game.chosenWordElem.innerText = game.chosenWord

for (let i = 0; i < game.chosenWord.length; i++) {
    game.blankedWord.push("_")
    //blankedWordElem.innerHTML += "<div id='letter" + i + ">" + blankedWord[i] + "</div>"
}

game.guessesRemaining = 10

function checkIfLetterPressed() {

}

function runGame() {

}
document.onkeyup = function (event) {
    game.guess = event.key
    game.lettersGuessed.push(game.guess)

    if (game.chosenWord.includes)
    game.guessesRemaining--

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

}