let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

class Player {
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.position = 0;
		this.cash = 1000;
	}

	move() {
		let dice = 1 + Math.floor(6 * Math.random());
		this.position = (this.position + dice) % squares.length;
		this.cash += squares[this.position];
		if (this.cash < 0) {
			console.log(`Game over,you ${this.name} lost!`);
		}
	}

	displayInfo() {
		console.log(`${this.name} is at ${this.position} with ${this.cash} dollars`);
	}
}

let player1 = new Player("Player 1", "red");
let player2 = new Player("Player 2", "blue");
let player3 = new Player("Player 3", "green");

//Turn 1
player1.move();
player2.move();
player3.move();

//Turn 2

player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	calculatePerimeter() {
		return this.width * 2 + this.height * 2;
	}

	calculateArea() {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side) {
		super(side, side);
	}

	calculatePerimeter() {
		return super.calculatePerimeter();
	}

	calculateArea() {
		return super.calculateArea();
	}
}

let r1 = new Rectangle(6, 7);
console.log("Perimeter of r1:", r1.calculatePerimeter());
console.log("Area of r1:", r1.calculateArea());

let s1 = new Square(5);
console.log("Perimeter of s1:", s1.calculatePerimeter());
console.log("Area of s1:", s1.calculateArea());

const user = {
	name: "Alice",
	age: 30,
};

const id = Symbol("id");
user[id] = 123456;

console.log(user[id]); // 123456
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object(user));

console.log("Inicio");

setTimeout(() => {
	console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
	console.log("Promise");
});

console.log("Final");
