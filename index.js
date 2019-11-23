let word = require("./word.js");
let inquirer = require("inquirer");
let chalk = require("chalk");
let wordArray = ["dallas", "fort worth", "austin"];
let randomWord = Math.floor(Math.random() * wordArray.length);
let guessWord = "dallas";
let gameWord = new word(guessWord);
//console.log(gameWord)

// gameWord.createObject();
let counter = 10;
gameWord.createObject();


var guessLetter = () => {


    console.log(gameWord.createString());

    inquirer.
        prompt([
            {
                type: "input",
                message: "Guess a letter",
                name: "letter"
            }
        ]).then((response) => {
            console.log("Letter Guessed was " + response.letter)
            let userGuess = response.letter;

            console.log(gameWord.objectArr[0].isGuessed(userGuess))
            console.log(gameWord.createString());


            counter--;

            if (counter >= 0) {
                console.log(chalk.inverse("You have " + counter + " guesses left"));
                guessLetter();
            } else {
                console.log("Game Over")
            }
        })



}


guessLetter();


