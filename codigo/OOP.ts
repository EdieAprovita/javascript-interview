const cardDeck: Array<string> = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
	"A",
];

const randomCard = (): string => {
	return cardDeck[Math.floor(Math.random() * cardDeck.length)];
};

console.log(randomCard());
