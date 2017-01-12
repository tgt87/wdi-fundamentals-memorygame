var cards = ['queen', 'queen','king','king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');
createCards = function() {
	for(i = 0; i < cards.length; i++){
		var gameCards = document.createElement('div');
		gameCards.className = 'card';
		gameBoard.appendChild(gameCards);
	}
}
createCards();

var cardElement = document.getElementsByClassName('card');
createBoard = function(){
	for(i=0; i < cards.length; i++){
		cardElement[i].setAttribute('data-card', cards[i]);
		cardElement[i].addEventListener('click', function(){isTwoCards(this);});
	}
}
createBoard();

var isTwoCards = function(chosenCard) {
	if (chosenCard.getAttribute('data-card') == 'king'){
		chosenCard.innerHTML = '<img src="king.jpg" alt="King of Spades">';
	} else {
		chosenCard.innerHTML = '<img src="queen.jpg" alt="Queen of Hearts">';
	}
	
	cardsInPlay.push(chosenCard.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function(playedCard){
	var message = '';
	if(playedCard[0] === playedCard[1]){
		message = 'You have found a match!';
	}else {
		message = 'Sorry, try again.';
	}
	document.getElementById('msg').innerHTML = message + '<br><button id="btn" name="btn">Restart</button>';
	document.getElementById('btn').addEventListener('click', restart);
}

var image = document.getElementsByTagName('img');
var restart = function(){
	for (i=(image.length -1); i >= 0; i--){
		image[i].parentNode.removeChild(image[i]);
	}	
	document.getElementById('msg').innerHTML = '';
}
