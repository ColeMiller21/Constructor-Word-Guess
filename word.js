let Letter = require("./letter.js");
let word = "dallas"
let notAnswer;
function Word(word) {
    this.word = word
    this.objectArr = [];
    this.createObject = () => {
        let wordArr = word.split("");
        console.log(wordArr);
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
        console.log(guessedString);
    }
}

let word1 = new Word(word)

word1.createObject();

word1.createString();
