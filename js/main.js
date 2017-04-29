
// array for cards
var cards = [

{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"

},

{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}

];

// array for cards in play

var cardsInPlay = [];

var checkForMatch = function() {
	// do they match?

	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
}


var flipCard = function (cardID) {
	console.log("User flipped " + cards[cardID].rank);
	//console.log(cardImage);
	//console.log(cards[suit]);

	// add card to array of cardsInPlay

	cardsInPlay.push(cards[cardID].rank);

	// show the what image is up in console

	console.log(cards[cardID].cardImage);

	// display suit in console

	console.log(cards[cardID].suit);

	// see if two cards have been played

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

};

flipCard(0);
flipCard(2);
  

