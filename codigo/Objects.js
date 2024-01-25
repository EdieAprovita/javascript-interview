// Example of a VERY simple Monopoly game simulation

let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// Creation of the class
class Player {
	// The constructor is the method triggered with the `new` keyword
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.position = 0;
		this.cash = 1000;
	}

	// Method move
	move() {
		let dice = 1 + Math.floor(6 * Math.random());
		this.position = (this.position + dice) % squares.length;
		this.cash += squares[this.position];
		if (this.cash < 0) {
			console.log(`Game over for ${this.name}.`);
		}
	}

	// Method displayInfo
	displayInfo() {
		console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
	}
}

// --- Initialisation of players ---
let player1 = new Player("Joaquim", "red");
let player2 = new Player("Maxence", "blue");
let player3 = new Player("Mostafa", "black");

// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
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
		return 2 * (this.width + this.height);
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
		return 4 * this.width;
	}
}

let r1 = new Rectangle(2, 3);
console.log(`Perimeter of r1: ${r1.calculatePerimeter()}`);
console.log(`Area of r1: ${r1.calculateArea()}`);

let s1 = new Square(3);
console.log(`Perimeter of s1: ${s1.calculatePerimeter()}`);
console.log(`Area of s1: ${s1.calculateArea()}`);

let s2 = new Square(4);
console.log(`Perimeter of s2: ${s2.calculatePerimeter()}`);
console.log(`Area of s2: ${s2.calculateArea()}`);

//fetch DATA

const fetchData = async () => {
	const res = await fetch("https://api.github.com/users");
	const data = await res.json();
	console.log(data);
};

fetchData();

useEffect(() => {
	const fetchData2 = async () => {
		const res = await fetch("https://api.github.com/users");
		const data = await res.json();
		setData(data);
	};
	fetchData2();
}, []);

const disputeRequest = [
	{
		id: 1,
		name: "John Doe",
		email: "XXXXXXXXXXXX",
		phone: "XXXXXXXXXXXX",
		address: "XXXXXXXXXXXX",
	},
];

const getDisputeRequestJSON = disputeRequest => {
	const disputeChange = JSON.parse([disputeRequest]);
	return console.log(disputeChange, typeof disputeChange);
};

getDisputeRequestJSON(disputeRequest);

const dispArray = getDisputeRequestJSON(disputeRequest);
console.log(dispArray);

const array = [
	{
		id: 1,
		name: "John Doe",
		email: "XXXXXXXXXXXX",
		phone: "XXXXXXXXXXXX",
		address: "XXXXXXXXXXXX",
	},
];

const object = array[0];

console.log(object);
