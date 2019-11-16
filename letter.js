function Letter(letter) {
    this.letter = letter;
    this.guessed = false;

    this.displayLetter = () => {
        if (this.guessed === true) {
            return this.letter + " ";
        } else {
            return "_ ";
        }
    }
    this.isGuessed = (guess) => {
        if (guess === this.letter) {
            this.guessed = true
        }
    }
}

module.exports = Letter





