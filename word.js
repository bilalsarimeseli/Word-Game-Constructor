var Letter = require("./letter.js");

function Word(answer) {
    this.objArray = [];

    for(var i = 0; i < objArray.length; i++) {
        var letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }


    this.log = function() {
        var answerLog = "";
            for(var i = 0; i < objArray.length; i++) {
                answerLog += this.objArray[i] + " ";
            }
        console.log(answerLog + "\n========================\n");   
    }

    this.userGuess = function(input) {
        for(var i = 0; i < this.objArray.length; i++) {
            this.objArray[i].guess(input);
        }
    }
}

module.exports = Word;