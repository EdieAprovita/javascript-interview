interface Book {
	title: string;
	edition: number;
	year: number;
	author: string;
}

interface Library {
	[key: string]: Book;
}

const bookLibrary: Library = {
	book1: {
		title: "The Hobbit",
		edition: 1,
		year: 1937,
		author: "J. R. R. Tolkien",
	},
	book2: {
		title: "The Lord of the Rings",
		edition: 1,
		year: 1954,
		author: "J. R. R. Tolkien",
	},
};

for (const [key, value] of Object.entries(bookLibrary)) {
	console.log(key, value);
}

function maxArea(height: number[]): number {
	let maxArea = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			const area = Math.min(height[i], height[j]) * (j - i);
			maxArea = Math.max(maxArea, area);
		}
	}
	return maxArea;
}

function intToRoman(num: number): string {
	const roman: { [key: number]: string } = {
		1: "I",
		4: "IV",
		5: "V",
		9: "IX",
		10: "X",
		40: "XL",
		50: "L",
		90: "XC",
		100: "C",
		400: "CD",
		500: "D",
		900: "CM",
		1000: "M",
	};
	let romanNum = "";
	const keys = Object.keys(roman).reverse();
	for (const key of keys) {
		while (num >= +key) {
			romanNum += roman[key];
			num -= +key;
		}
	}
	return romanNum;
}

function romanToInts(s: string): number {
	const roman: { [key: string]: number } = {
		I: 1,
		IV: 4,
		V: 5,
		IX: 9,
		X: 10,
		XL: 40,
		L: 50,
		XC: 90,
		C: 100,
		CD: 400,
		D: 500,
		CM: 900,
		M: 1000,
	};
	let num = 0;
	let i = 0;
	while (i < s.length) {
		if (i + 1 < s.length && roman[s[i]] < roman[s[i + 1]]) {
			num += roman[s[i] + s[i + 1]];
			i += 2;
		} else {
			num += roman[s[i]];
			i++;
		}
	}
	return num;
}

function longestCommonPrefix(strs: string[]): string {
	let prefix = "";
	let i = 0;
	while (true) {
		const char = strs[0][i]; // Tomamos el i-ésimo caracter del primer string
		console.log(`Checking character ${char} at position ${i}`);
		if (!char) {
			// Si no hay un caracter, hemos llegado al final del primer string
			console.log("Reached the end of the first string, returning prefix");
			return prefix; // Devolvemos el prefijo
		}
		for (const str of strs) {
			// Comprobamos si el caracter i-ésimo es el mismo en todos los strings
			console.log(
				`Comparing character ${char} with character at position ${i} of string ${str}`
			);
			if (str[i] !== char) {
				// Si el caracter i-ésimo no es el mismo, devolvemos el prefijo
				console.log("Character does not match, returning prefix");
				return prefix;
			}
		}
		// Si todos los strings tienen el mismo caracter en la posición i, añadimos ese caracter al prefijo
		console.log("Character matches in all strings, adding to prefix");
		prefix += char;
		i++; // Pasamos al siguiente caracter
	}
}

console.log(longestCommonPrefix(["dog", "racecar", "car"]));

function threeSum(nums: number[]): number[][] {
	const triplets: number[][] = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (nums[i] + nums[j] + nums[k] === 0) {
					triplets.push([nums[i], nums[j], nums[k]]);
				}
			}
		}
	}
	return triplets;
}

function isValidSudoku(board: string[][]): boolean {
	const boxes: { [key: string]: Set<string> } = {};
	const rows: { [key: string]: Set<string> } = {};
	const cols: { [key: string]: Set<string> } = {};

	for (let i = 0; i < 9; i++) {
		rows[i] = new Set();
		cols[i] = new Set();
		boxes[i] = new Set();
	}

	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			let value = board[row][col];
			if (value === ".") continue; // Skip the validation for empty cells

			// Calculate the index of the box
			let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

			if (
				rows[row].has(value) ||
				cols[col].has(value) ||
				boxes[boxIndex].has(value)
			) {
				// If the value is already in the current row, column, or box, return false
				return false;
			}

			// Add the value to the row, column and box sets
			rows[row].add(value);
			cols[col].add(value);
			boxes[boxIndex].add(value);
		}
	}
	return true; // If no invalid entries, return true
}

const findDuplicate = (nums: number[]): number => {
	const numSet = new Set<number>();
	for (const num of nums) {
		if (numSet.has(num)) {
			return num;
		}
		numSet.add(num);
	}
	return -1;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));

type Direction = "N" | "E" | "S" | "W";
type Instruction = "L" | "R" | "M";

interface Position {
	x: number;
	y: number;
	direction: Direction;
}

interface Movement {
	x: (pos: number) => number;
	y: (pos: number) => number;
}

class Rover {
	position: Position;
	gridSize: number;
	static readonly directions: Direction[] = ["N", "E", "S", "W"];
	static readonly movements: Record<Direction, Movement> = {
		N: { x: pos => pos, y: pos => Math.min(pos + 1, 9) },
		E: { x: pos => Math.min(pos + 1, 9), y: pos => pos },
		S: { x: pos => pos, y: pos => Math.max(pos - 1, 0) },
		W: { x: pos => Math.max(pos - 1, 0), y: pos => pos },
	};

	constructor(position: Position, gridSize: number) {
		this.position = position;
		this.gridSize = gridSize;
	}

	move(commands: Instruction[]): void {
		commands.forEach(command => {
			switch (command) {
				case "R":
					this.turnRight();
					break;
				case "L":
					this.turnLeft();
					break;
				case "M":
					this.advance();
					break;
				default:
					throw new Error(`Invalid command: ${command}`);
			}
			console.log(this.position);
		});
	}

	turnRight(): void {
		let newDirectionIndex =
			(Rover.directions.indexOf(this.position.direction) + 1) %
			Rover.directions.length;
		this.position.direction = Rover.directions[newDirectionIndex];
	}

	turnLeft(): void {
		let newDirectionIndex =
			(Rover.directions.indexOf(this.position.direction) + 3) %
			Rover.directions.length;
		this.position.direction = Rover.directions[newDirectionIndex];
	}

	advance(): void {
		const movement = Rover.movements[this.position.direction];
		this.position.x = movement.x(this.position.x);
		this.position.y = movement.y(this.position.y);
	}
}

// Test
let rover = new Rover({ x: 0, y: 0, direction: "N" }, 10);
rover.move([
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"R",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
	"M",
]);
console.log(rover.position); // {x: 9, y: 9, direction: 'E'}

function reverseString(s: string[]): void {
	let i = 0;
	let j = s.length - 1;
	while (i < j) {
		[s[i], s[j]] = [s[j], s[i]];
		i++;
		j--;
	}
}

function reverseString2(s: string[]): void {
	let start = 0;
	let end = s.length - 1;
	while (start < end) {
		// Log the status before swapping
		console.log(`Before swap: ${s}`);
		console.log(`Swapping ${s[start]} and ${s[end]}`);

		// Swap characters
		let temp = s[start];
		console.log(`Temp is now ${temp}`);
		s[start] = s[end];
		console.log(`s[start] is now ${s[start]}`);
		s[end] = temp;
		console.log(`s[end] is now ${s[end]}`);

		// Log the status after swapping
		console.log(`After swap: ${s}`);

		// Move towards the middle
		start++;
		console.log(`Start is now at index ${start}`);
		end--;
		console.log(`End is now at index ${end}`);

		// Log the update of start and end pointers
		console.log(`Start is now at index ${start}, End is now at index ${end}`);
		console.log("---------------------------");
	}
}

// Test the function
let arr: string[] = ["h", "e", "l", "l", "o"];
reverseString2(arr);

const arr2: number[] = [1, 2, 3, 4, 5];
const index = arr2.indexOf(3);
console.log(index);

interface User {
	name: string;
	age: number;
	email: string;
}

const user: User[] = [{ name: "John", age: 30, email: "test@mail.com" }];

function sum(a: number, b: number): number {
	return a + b;
}

const num = sum(1, 2);
console.log(num);

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(matrix[0][2]);

for (const element of matrix) {
	for (const value of element) {
		console.log(value);
	}
}

const competitions = [
	["Javascript", "C#"],
	["C#", "Python"],
	["Python", "Javascript"],
];

const results = [0, 1, 1];

function tournamentWinner(competitions: string[][], results: number[]): string {
	const scores: { [key: string]: number } = {};
	let maxScore = 0;
	let winner = "";
	for (let i = 0; i < competitions.length; i++) {
		const [homeTeam, awayTeam] = competitions[i];
		const winningTeam = results[i] === 0 ? awayTeam : homeTeam;
		scores[winningTeam] = (scores[winningTeam] || 0) + 3;
		if (scores[winningTeam] > maxScore) {
			maxScore = scores[winningTeam];
			winner = winningTeam;
		}
	}
	return winner;
}
