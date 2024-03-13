// const array = ['Diego', 'Gabriel', 'Lucas'];

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(index) {
		return this.data[index];
	}
	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}
}

const myArray = new MyArray();

const fruits = ["apple", "banana", "orange"];
fruits.splice(0, 3);

console.log(fruits);

const stepCount = {};

const unique = name => {
	let currentCount = stepCount[name];
	stepCount[name] = currentCount === undefined ? 1 : ++currentCount;
	return name + ":" + stepCount[name];
};

const retriage = (reason, name, trapdoor) => {
	let currentCount = stepCount[name];
	stepCount[name] = currentCount === undefined ? 1 : ++currentCount;
	return name + ":" + stepCount[name] + ":" + reason + "|" + trapdoor;
};

// @ts-check

let daysOfWeek = new MyArray();

daysOfWeek = new MyArray(7);

daysOfWeek = new MyArray(
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
);

daysOfWeek = [];

daysOfWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

console.log("daysOfWeek", daysOfWeek.length);

function hourglassSum(arr) {
	let max = -Infinity;
	for (let i = 0; i < arr.length - 2; i++) {
		for (let j = 0; j < arr[i].length - 2; j++) {
			let sum =
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];
			if (sum > max) {
				max = sum;
			}
		}
	}
	return max;
}

function dynamicArray(n, queries) {
	let seqList = [];
	let lastAnswer = 0;
	for (let i = 0; i < n; i++) {
		seqList.push([]);
	}
	let seqListLength = seqList.length;
	let seqListIndex = 0;
	for (let i = 0; i < queries.length; i++) {
		let [type, x, y] = queries[i];
		if (type === 1) {
			let seqListIndex = (x ^ lastAnswer) % seqListLength;
			seqList[seqListIndex].push(y);
		} else if (type === 2) {
			let seqListIndex = (x ^ lastAnswer) % seqListLength;
			let seqListIndex2 = seqList[seqListIndex].indexOf(y);
			if (seqListIndex2 !== -1) {
				seqList[seqListIndex].splice(seqListIndex2, 1);
			}
		} else if (type === 3) {
			let seqListIndex = (x ^ lastAnswer) % seqListLength;
			lastAnswer = seqList[seqListIndex][y % seqList[seqListIndex].length];
			console.log(lastAnswer);
		}
	}
}

let hacker1 = "Edward Snowden";
let hacker2 = "Mel Gibson";

// console.log(hacker1);
// console.log(hacker2);

const longestName = (hacker1, hacker2) => {
	let hacker1Length = hacker1.length;
	let hacker2Length = hacker2.length;
	if (hacker1Length > hacker2Length) {
		return `The driver ${hacker1} has the longest name, which is ${hacker1Length} characters`;
	} else if (hacker1Length < hacker2Length) {
		return `The driver ${hacker2} has the longest name, which is ${hacker1Length} characters`;
	} else {
		return `Wow, they have the same length, ${hacker1Length} characters!`;
	}
};

const printSeparateNames = (hacker1, hacker2) => {
	hacker1.toUpperCase();
	hacker2.toUpperCase();

	let hacker1Split = "";
	let hacker2Split = "";

	for (let i = 0; i < hacker1.length; i++) {
		hacker1Split += hacker1[i] + " ";
	}

	for (let i = 0; i < hacker2.length; i++) {
		hacker2Split += hacker2[i] + " ";
	}

	return `${hacker1Split} and  ${hacker2Split}`;
};

console.log(longestName(hacker1, hacker2));
console.log(printSeparateNames(hacker1, hacker2));

class Ride {
	constructor(rideObject) {
		this.rideObject = rideObject;
	}
}

const juan = {
	name: "Juan",
	age: 23,
	approvedCourses: ["HTML", "CSS", "JavaScript"],
	addCourse(newCourse) {
		this.approvedCourses.push(newCourse);
	},
};

console.log(Object.keys(juan));

const book = [
	{
		bookId: 1,
		authorName: "Juan",
	},
	{
		bookId: 2,
		authorName: "Pedro",
	},
];

function getBookById(book) {
	for (let i = 0; i < book.length; i++) {
		if (book[i].bookId === book.bookId) {
			return book[i];
		}
	}
}

function getBookByAuthor(book) {
	for (let i = 0; i < book.length; i++) {
		if (book[i].authorName === book.authorName) {
			return book[i];
		}
	}
}

console.log(getBookById(1), getBookByAuthor(2));

function makeAdder(x) {
	return function (y) {
		return x + y;
	};
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

function outerFunction(a) {
	console.log("outerFunction: " + a);

	return function innerFunction(b, c) {
		return a + b + c;
	};
}

const closure = outerFunction(4);
console.log(closure(1, 2));

const num = 0;
const valB = num ?? "default";

console.log(valB);

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

//Write a function which takes a list of strings and returns each line prepended by the correct number.

//The numbering starts at 1. The format is n: string. Notice the colon and space in between.

const number = function (array) {
	let newArray = [];

	if (array.length === 0) {
		return newArray;
	}
	for (let i = 0; i < array.length; i++) {
		newArray.push(`${i + 1}: ${array[i]}`);
	}
	return newArray;
};

const twoSum = function (nums, target) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
};

const addTwoNumbers = function (l1, l2) {
	let result = new ListNode(0);
	let current = result;
	let carry = 0;
	while (l1 || l2) {
		let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
		carry = Math.floor(sum / 10);
		current.next = new ListNode(sum % 10);
		current = current.next;
		l1 = l1 ? l1.next : l1;
		l2 = l2 ? l2.next : l2;
	}
	if (carry) {
		current.next = new ListNode(carry);
	}
	return result.next;
};

const lengthOfLongestSubstring = function (s) {
	let longest = 0;
	let current = 0;
	let map = {};
	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			current = Math.max(current, map[s[i]] + 1);
		}
		map[s[i]] = i;
		longest = Math.max(longest, i - current + 1);
	}
	return longest;
};

function find_max(nums) {
	let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
	for (let num of nums) {
		if (num > max_num) {
			max_num = num;
		}
	}
	return max_num;
}

const calPoints = function (ops) {
	const stack = [];
	for (const op of ops) {
		if (op === "+") {
			stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
		} else if (op === "D") {
			stack.push(stack[stack.length - 1] * 2);
		} else if (op === "C") {
			stack.pop();
		} else {
			stack.push(parseInt(op));
		}
	}
	return stack.reduce((a, b) => a + b, 0);
};

function multiplyAndAdd(x, y, z) {
	return (this.multiplier || 1) * (x * y + z);
}

const multiplier = {
	multiplier: 4,
};

console.log(multiplyAndAdd.call(multiplier, 0, 1, 3));

const foo = (a, b, c) => {
	console.log(a, b, c);
};

const bar = ["hi", "hey", "hello"];

console.log(foo(...bar));

const arr = [
	[1, 2],
	[3, 4],
	[5, 6],
];

for (const element of arr) {
	for (let j = 0; j < element.length; j++) {
		console.log(element[j]);
	}
}

function findJudge(N, trust) {
	const trustCount = new Array(N + 1).fill(0);
	for (const [i, j] of trust) {
		trustCount[i]--;
		trustCount[j]++;
	}
	for (let i = 1; i <= N; i++) {
		if (trustCount[i] === N - 1) return i;
	}
	return -1;
}

console.log(findJudge(2, [[1, 2]]));
console.log(
	findJudge(3, [
		[1, 3],
		[2, 3],
	])
);

const validSubstrings = k => {
	let count = 0;
	let vowels = ["a", "e", "i", "o", "u"];
	for (const element of k) {
		if (vowels.includes(element)) {
			count++;
		}
	}
	return count;
};

function average(a, b) {
	return (a + b) / 2;
}

console.log(average(2, 1));

module.exports = {
	average,
};

const crypto = require("crypto");

function hash(data, callback) {
	let counter = 0;
	let result = [];

	const next = () => {
		if (counter < data.length) {
			process.nextTick(() => {
				const md5 = crypto.createHash("md5");
				md5.update(data[counter]);
				result.push(md5.digest("hex"));
				counter += 1;
				next();
			});
		} else {
			callback(result);
		}
	};

	next();
}

hash(["test", "another test", ""], hashes => {
	console.log(hashes);
	console.log("This should be printed after the hashes");
});

/* should print
['098f6bcd4621d373cade4e832627b4f6', 
 '5e8862cd73694287ff341e75c95e3c6a',
 'd41d8cd98f00b204e9800998ecf8427e'] */

module.exports.hash = hash;

const user = {
	name: "Diego",
	id: 1,
};

const book1 = {
	title: "The Alchemist",
	author: "Paulo Coelho",
	isbn: "978-0062315007",
	category: "fiction",
};
const book2 = {
	title: "The Power of Habit",
	author: "Charles Duhigg",
	isbn: "978-0812981605",
	category: "non-fiction",
};

const book3 = {
	title: "Lord of the Rings",
	author: "J.R.R. Tolkien",
	isbn: "978-0618640157",
	category: "fiction",
};

user.books = [book1, book2];
console.log("User:", JSON.stringify(user));

const library = [];
library.push(user);
console.log("Library:", JSON.stringify(library));

library[0].books.push(book3);
console.log("Library:", JSON.stringify(library));

const classes = [
	[
		{ firstName: "Tomas", lastName: "Bechtelar", age: 22 },
		{ firstName: "Nico", lastName: "Schamberger", age: 26 },
		{ firstName: "Ashleigh", lastName: "Kutch", age: 29 },
		{ firstName: "Lulu", lastName: "Considine", age: 20 },
		{ firstName: "Garland", lastName: "Waelchi", age: 21 },
	],
	[
		{ firstName: "Charlie", lastName: "Rolfson", age: 23 },
		{ firstName: "Austin", lastName: "Schowalter", age: 26 },
		{ firstName: "Emie", lastName: "Franecki", age: 29 },
		{ firstName: "Okey", lastName: "Runte", age: 18 },
		{ firstName: "Jameson", lastName: "Jakubowski", age: 22 },
	],
	[
		{ firstName: "Antwan", lastName: "Marquardt", age: 22 },
		{ firstName: "Eugenia", lastName: "Nienow", age: 23 },
		{ firstName: "Keely", lastName: "Hagenes", age: 29 },
		{ firstName: "Jazmin", lastName: "Aufderhar", age: 29 },
		{ firstName: "Stanley", lastName: "Hand", age: 22 },
	],
	[
		{ firstName: "Vincent", lastName: "Langworth", age: 20 },
		{ firstName: "Mervin", lastName: "Blick", age: 28 },
		{ firstName: "Damien", lastName: "Rohan", age: 28 },
		{ firstName: "Fabian", lastName: "Kautzer", age: 22 },
		{ firstName: "Lilliana", lastName: "Lesch", age: 26 },
	],
	[
		{ firstName: "Antonette", lastName: "Stokes", age: 25 },
		{ firstName: "Alexandrine", lastName: "DuBuque", age: 22 },
		{ firstName: "Braeden", lastName: "Walker", age: 26 },
		{ firstName: "Derick", lastName: "Weber", age: 22 },
		{ firstName: "Robert", lastName: "Beatty", age: 30 },
	],
];

console.log("Second classroom", classes[1]);
console.log("Antonette", classes[4][0].firstName);
console.log("Age:", classes[1][3].age);
console.log("Beatty", classes[4][4].lastName);

const classRoom = {
	teacher: { firstName: "Marcelino", lastName: "Padberg", age: 25 },
	students: [
		{ firstName: "Aliyah", lastName: "Schulist", age: 18 },
		{ firstName: "Cleveland", lastName: "Towne", age: 28 },
		{ firstName: "Jan", lastName: "Quitzon", age: 18 },
		{ firstName: "Alaina", lastName: "Runolfsdottir", age: 18 },
		{ firstName: "Gerhard", lastName: "Bergstrom", age: 23 },
	],
};

console.log(classRoom.students[2].firstName);

console.log(classRoom.teacher.age);

const schoolSystem = {
	schools: [
		{
			name: "Fake School 1",
			classRooms: [
				{
					teacher: { firstName: "Marcelino", lastName: "Padberg", age: 25 },
					students: [
						{ firstName: "Aliyah", lastName: "Schulist", age: 18 },
						{ firstName: "Cleveland", lastName: "Towne", age: 28 },
						{ firstName: "Jan", lastName: "Quitzon", age: 18 },
						{ firstName: "Alaina", lastName: "Runolfsdottir", age: 18 },
						{ firstName: "Gerhard", lastName: "Bergstrom", age: 23 },
					],
				},
				{
					teacher: { firstName: "Edwardo", lastName: "Schowalter", age: 28 },
					students: [
						{ firstName: "Manley", lastName: "Doyle", age: 18 },
						{ firstName: "Maximilian", lastName: "Gleichner", age: 19 },
						{ firstName: "Sid", lastName: "Rohan", age: 30 },
						{ firstName: "Catalina", lastName: "Hilpert", age: 27 },
						{ firstName: "Gerald", lastName: "O'Keefe", age: 26 },
					],
				},
			],
		},
		{
			name: "Fake School 2",
			classRooms: [
				{
					teacher: { firstName: "Lucas", lastName: "Schroeder", age: 29 },
					students: [
						{ firstName: "Giuseppe", lastName: "Hegmann", age: 24 },
						{ firstName: "Jennyfer", lastName: "Hane", age: 19 },
						{ firstName: "Mikayla", lastName: "Braun", age: 23 },
						{ firstName: "Rickie", lastName: "White", age: 22 },
						{ firstName: "Rose", lastName: "Collins", age: 30 },
					],
				},
				{
					teacher: { firstName: "Green", lastName: "Sauer", age: 25 },
					students: [
						{ firstName: "Melany", lastName: "Welch", age: 25 },
						{ firstName: "Paxton", lastName: "Corkery", age: 22 },
						{ firstName: "Nellie", lastName: "Hauck", age: 26 },
						{ firstName: "Eunice", lastName: "Hirthe", age: 26 },
						{ firstName: "Aylin", lastName: "Barrows", age: 26 },
					],
				},
			],
		},
		{
			name: "Fake School 3",
			classRooms: [
				{
					teacher: { firstName: "Nikko", lastName: "Crist", age: 42 },
					students: [
						{ firstName: "Christop", lastName: "Hahn", age: 26 },
						{ firstName: "Newell", lastName: "Kemmer", age: 27 },
						{ firstName: "Katheryn", lastName: "Heller", age: 26 },
						{ firstName: "Saul", lastName: "Heathcote", age: 20 },
						{ firstName: "Maudie", lastName: "Haley", age: 30 },
					],
				},
				{
					teacher: { firstName: "Nathanael", lastName: "Hansson", age: 50 },
					students: [
						{ firstName: "Jensen", lastName: "Reichel", age: 21 },
						{ firstName: "Lois", lastName: "Kulas", age: 28 },
						{ firstName: "Caterina", lastName: "Wolff", age: 28 },
						{ firstName: "Dahlia", lastName: "Collier", age: 24 },
						{ firstName: "Linwood", lastName: "Langosh", age: 26 },
					],
				},
			],
		},
	],
};

console.log(
	schoolSystem.schools.classRooms[1].students[1].push({
		firstName: "Lucille D.",
		lastName: "Lozano",
		age: 31,
	})
);
