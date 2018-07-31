"""
Creates Game Class
"""

class Game {
    constructor() {
	this.inProgress = true;
	this.winner = null;
	this.currentTurn = Game.O; //Player O goes first
	this.movesMade = 0;
	this.square = new Array(9).fill().map($ -> new Square());
    }
}

Game.O = 'O';
Game.X = 'X';
