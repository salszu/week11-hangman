// constructor file
//contains all of the methods which will check the letter guessed versus the random word selected

var Letter = require('./letter.js');

var Word = function(wrd){
	this.word = wrd;
	this.lets = []; 
	this.found = false;

	this.getLets = function() {
		for(var i = 0; i < this.word.length; i++) {
			this.lets.push(new Letter(this.word[i]));
		}
	};
	
	this.didWeFindTheWord = function() {
		this.found = this.lets.every(function(curLet) {
			return curLet.appear;
		});

		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = 0;

		for(var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLetter){
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}

		return whatToReturn;
	};

	this.wordRender = function() {
		var str = '';

		for(var i=0; i < this.lets.length; i++){
			str += this.lets[i].letterRender();
		}

		return str;
	};
}

module.exports = Word;