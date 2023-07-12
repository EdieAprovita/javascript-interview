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

const lengthOfLongestSubstring = s => {
	let letters = s.split("");
	let max = 0;
	let result = new Map();
	let start = 0;

	for (let i = 0; i < letters.length; i++) {
		if (!result.has(letters[i])) {
			result.set(letters[i], i);
		} else {
			i = result.get(letters[i]);
			result.clear();
		}

		if (max < result.size) {
			max = result.size;
		}
	}
	return max;
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
