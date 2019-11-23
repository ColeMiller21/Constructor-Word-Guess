let Letter = require("./letter.js");


function Word(word) {
    this.word = word
    this.objectArr = [];
    this.createObject = () => {
        let wordArr = word.split("");
        wordArr.forEach(letter => {
            let currentLetter = new Letter(letter)
            this.objectArr.push(currentLetter);
        })
    }
    this.createString = () => {
        let guessedString = "";
        for (var i = 0; i < this.objectArr.length; i++) {
            guessedString += this.objectArr[i].displayLetter();
        }
        return guessedString;
    }
}

module.exports = Word;