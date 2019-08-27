var wins, guessesRemaining, chosenWord, guess
var lettersGuessed = [], blankedWord = [], indexOfGuess =[]
var words = ["tiger", "lion", "panther", "leopard", "cougar", "cheetah", "cat", "jaguar", "lynx", "ocelot", "serval"]

//Assign HTML element vars
var chosenWordElem = document.getElementById("chosenWord")
var lettersGuessedElem = document.getElementById("lettersGuessed")
var blankedWordElem = document.getElementById("blankedWord")
var guessesLeftElem = document.getElementById("guessesLeft")


var chosenWordIndex = Math.floor(Math.random() * words.length)
chosenWord = words[chosenWordIndex]
console.log(chosenWord)
chosenWordElem.innerText = chosenWord

for (let i = 0; i < chosenWord.length; i++) {
    blankedWord.push("_")
    //blankedWordElem.innerHTML += "<div id='letter" + i + ">" + blankedWord[i] + "</div>"
}

guessesRemaining = 10

document.onkeyup = function (event) {
    guess = event.key
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

}