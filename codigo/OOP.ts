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

interface Product {
	name: string;
	price: number;
}

class ConcreteProduct implements Product {
	constructor(public name: string, public price: number) {}
}

abstract class Creator {
	abstract factoryMethod(): Product;

	createProduct(): Product {
		return this.factoryMethod();
	}
}

class ConcreteCreator extends Creator {
	factoryMethod(): Product {
		return new ConcreteProduct("Product", 100);
	}
}

const creator = new ConcreteCreator();
const product = creator.createProduct();

console.log(product);
