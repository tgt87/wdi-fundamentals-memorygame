console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardTwo === cardFour){
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}*/

var gameBoard = document.getElementById('game-board');
createCards = function() {
	for(var i = 0; i < 4; i++){
		var gameCards = document.createElement('div');
		gameCards.className = 'card';
		gameBoard.appendChild(gameCards);
	};
};

createCards();

