var game = {
    wins: 0,
    guessesRemaining: 0,
    chosenWord: "",
    guess: "",
    lettersGuessed: [],
    blankedWord: [],
    indexOfGuess: [],
    letters: "abcdefghijklmnopqrstuvwxyz",
    words: [
        "tiger",
        "lion",
        "panther",
        "leopard",
        "cougar",
        "cheetah",
        "cat",
        "jaguar",
        "lynx",
        "ocelot",
        "serval"
    ],
    chosenWordElem : document.getElementById("chosenWord"),
    lettersGuessedElem : document.getElementById("lettersGuessed"),
    blankedWordElem : document.getElementById("blankedWord"),
    guessesLeftElem : document.getElementById("guessesLeft"),
    chosenWordIndex : Math.floor(Math.random() * this.words.length)


}