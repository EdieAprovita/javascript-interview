const array: number[] = [1, 2, 3];

function sum([a, b, c]: number[]): number {
	return a + b + c;
}

console.log(sum(array)); // 6

const contacts: { [key: string]: string | string[] }[] = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0543236543",
		likes: ["Pizza", "Coding", "Brownie Points"],
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "0994372684",
		likes: ["Hogwarts", "Magic", "Hagrid"],
	},
	{
		firstName: "Sherlock",
		lastName: "Holmes",
		number: "0487345643",
		likes: ["Intriguing Cases", "Violin"],
	},
	{
		firstName: "Kristian",
		lastName: "Vos",
		number: "unknown",
		likes: ["JavaScript", "Gaming", "Foxes"],
	},
];

function lookUpProfile(name: string, prop: string): string | string[] {
	for (const contact of contacts) {
		if (contact.firstName === name) {
			// Contact found, check if property exists
			if (contact.hasOwnProperty(prop)) {
				return contact[prop];
			} else {
				return "No such property";
			}
		}
	}
	// Contact not found
	return "No such contact";
}

console.log(lookUpProfile("Akira", "likes")); // Output: ["Pizza", "Coding", "Brownie Points"]
console.log(lookUpProfile("Harry", "number")); // Output: "0994372684"
console.log(lookUpProfile("Sherlock", "likes")); // Output: ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Kristian", "lastName")); // Output: "Vos"
console.log(lookUpProfile("John", "likes")); // Output: "No such contact"
console.log(lookUpProfile("Akira", "age")); // Output: "No such property"

function randomWholeNum(): number {
	return Math.floor(Math.random() * 10);
}

function randomRange(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function convertToInteger(str: string): number {
	return parseInt(str);
}

function convertBinaryToInteger(str: string): number {
	return parseInt(str, 2);
}

function checkSign(num: number): string {
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

function rangeOfNumbers(startNum: number, endNum: number): number[] {
	if (startNum === endNum) {
		return [startNum];
	} else {
		const arr = rangeOfNumbers(startNum, endNum - 1);
		arr.push(endNum);
		return arr;
	}
}

const letters: string[] = ["a", "b", "c", "d", "e"];
letters.forEach(letter => console.log(letter));

function multiplyElementsBy2(array: number[]): number[] {
	return array.map(element => element * 2);
}

function calcSum(array: number[]): number {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(calcSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function closestNumbers(numbers: number[]): number[] {
	let minDiff = Number.MAX_VALUE;
	let result: number[] = [];
	numbers.sort((a, b) => a - b);
	for (let i = 0; i < numbers.length - 1; i++) {
		const diff = numbers[i + 1] - numbers[i];
		if (diff < minDiff) {
			minDiff = diff;
			result = [numbers[i], numbers[i + 1]];
		} else if (diff === minDiff) {
			result.push(numbers[i], numbers[i + 1]);
		}
	}
	return result;
}

console.log(closestNumbers([5, 4, 3, 2]));

function getMinimumCost(k: number, c: number[]): number {
	c.sort((a, b) => b - a);

	let totalCost = 0;

	for (let i = 0; i < c.length; i++) {
		totalCost += (Math.floor(i / k) + 1) * c[i];
	}
	return totalCost;
}

console.log(getMinimumCost(3, [1, 3, 5, 7, 9]));

function countWords(array: string[]): number {
	return array.flatMap(item => item.split("")).length;
}

console.log(countWords(["Hello World", "Bye World"]));

function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b);
	let result: number[][] = [];

	for (let i = 0; i < nums.length - 2; i++) {
		if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
			const pairs = twoSumII(nums, i);
			result = result.concat(pairs);
		}
	}
	return result;
}

function twoSumII(nums: number[], i: number): number[][] {
	let result: number[][] = [];
	let lo = i + 1,
		hi = nums.length - 1,
		sum = 0 - nums[i];
	while (lo < hi) {
		if (nums[lo] + nums[hi] === sum) {
			result.push([nums[i], nums[lo], nums[hi]]);
			while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
			while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
			lo++;
			hi--;
		} else if (nums[lo] + nums[hi] < sum) {
			lo++;
		} else {
			hi--;
		}
	}
	return result;
}

const array2 = ["🐸", "🐱", "🐹"];
const rta = array2.some(item => item === "🐱");
const rta2 = array2.every(item => item === "🐱");
const rta3 = array2.find(item => item === "🐱");

console.log(rta);
console.log(rta2);
console.log(rta3);

const words: string[] = [
	"spray",
	"limit",
	"elite",
	"exuberant",
	"destruction",
	"present",
];

function findLongestWord(words: string[] | null): string {
	return (
		words?.reduce(
			(longest, current) =>
				current.length > (longest?.length ?? 0) ? current : longest,
			""
		) ?? ""
	);
}

console.log(findLongestWord(words));
