interface StudentList {
	n: number;
	m: number;
	ids: number[];
}

interface Student {
	id: number;
	name: string;
	surname: string;
	pga: number;
	scholarship: boolean;
}

interface Error {
	message: string;
}

const plural = (n: number): boolean => {
	return n !== 1;
};

export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
	const result: number[] = [a, b, c];

	for (let i = 3; i < n; i++) {
		result.push(result[i - 1] + result[i - 2] + result[i - 3]);
	}

	return result;
}

export function number(busStops: [number, number][]): number {
	return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
}

console.log(
	number([
		[10, 0],
		[3, 5],
		[5, 8],
	])
);

export function twoSum(numbers: number[], target: number): number[] {
	const numMap: Map<number, number> = new Map();

	let index = 0;
	for (const num of numbers) {
		const complement = target - num;

		if (numMap.has(complement)) {
			return [numMap.get(complement)!, index];
		}
		numMap.set(num, index);
		index++;
	}
	return [];
}

console.log(twoSum([1, 2, 3], 4));

export const addLength = (str: string): string[] => {
	return str.split(" ").map(word => `${word} ${word.length}`);
};

export const cockroachSpeed = (s: number): number => {
	return Math.floor(s * 27.7778);
};

export const nvYear = (p0: number, percent: number, aug: number): number => {
	let year = 0;

	while (p0 < 1000000) {
		p0 += p0 * (percent / 100) + aug;
		year++;
	}
	return year;
};

export const sumMix = (x: any[]): number => {
	return x.reduce((acc, val) => acc + Number(val), 0);
};

export const position = (alphabet: string): string => {
	return `Position of alphabet: ${alphabet.charCodeAt(0) - 96}`;
};

export const howManyLightsabersDoYouOwn = (name: string = ""): number => {
	return name === "Zach" ? 18 : 0;
};

export const evenOrOdd = (n: number): string => {
	return n % 2 === 0 ? "Even" : "Odd";
};

export const sumPairs = (ints: number[], s: number): [number, number] | void => {
	const seen = new Set();

	for (const num of ints) {
		if (seen.has(s - num)) {
			console.log(s - num, num);
			return [s - num, num];
		}
		seen.add(num);
	}
};

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));

export const twoSums = (numbers: number[], target: number): number[] => {
	let map = new Map<number, number>();

	for (let i = 0; i < numbers.length; i++) {
		if (map.has(target - numbers[i])) {
			return [map.get(target - numbers[i])!, i];
		}

		map.set(numbers[i], i);
	}
	throw new Error("No two sum solution");
};

export const lengthOfLongestSubstring = (s: string): number => {
	let map = new Map<string, number>();
	let left = 0;
	let max = 0;

	for (let right = 0; right < s.length; right++) {
		if (map.has(s[right])) {
			left = Math.max(map.get(s[right])! + 1, left);
		}
		map.set(s[right], right);
		max = Math.max(max, right - left + 1);
	}
	return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));

export const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
	const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
	const length = mergedArray.length;

	if (length % 2 === 0) {
		return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
	} else {
		return mergedArray[Math.floor(length / 2)];
	}
};

export const longestPalindrome = function (string) {
	let longestPal = "";

	const getLongestPalindrome = (leftPosition, rightPosition) => {
		while (
			leftPosition >= 0 &&
			rightPosition < string.length &&
			string[leftPosition] === string[rightPosition]
		) {
			leftPosition--;
			rightPosition++;
		}

		if (rightPosition - leftPosition > longestPal.length) {
			longestPal = string.slice(leftPosition + 1, rightPosition);
		}
	};

	for (let i = 0; i < string.length; i++) {
		getLongestPalindrome(i, i + 1);

		getLongestPalindrome(i, i);

		if ((string.length - i) * 2 < longestPal.length) {
			break;
		}
	}

	return longestPal;
};

const mergedSortedArray = (
	nums1: number[],
	m: number,
	nums2: number[],
	n: number
): void => {
	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;

	const log: Array<{ i: number; j: number; k: number; nums1: string; nums2: string }> =
		[];

	while (j >= 0) {
		if (i >= 0 && nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			i--;
		} else {
			nums1[k] = nums2[j];
			j--;
		}
		log.push({
			i: i,
			j: j,
			k: k,
			nums1: nums1.toString(),
			nums2: nums2.toString(),
		});
		k--;
	}

	console.table(log);
};

mergedSortedArray([1, 2, 3, 0, 0, 0, 0], 3, [2, 5, 6], 3);

export const removeElement = (nums: number[], val: number): number => {
	let k = 0;

	for (const element of nums) {
		if (element !== val) {
			nums[k] = element;
			k++;
		}
	}
	return k;
};

export const removeDuplicates = (nums: number[]): number => {
	let k: number = 1;

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums[k] = nums[i];
			k++;
		}
	}
	return k;
};

console.log(removeDuplicates([1, 1, 2, 6, 54, 6, 8, 3, 5, 2]));

export const majorityElement = (nums: number[]): number => {
	let count = 0;
	let candidate = 0;

	for (const num of nums) {
		if (count === 0) {
			candidate = num;
		}
		count += candidate === num ? 1 : -1;
	}
	return candidate;
};

export const longetsVowelSubsequence = (s: string): number => {
	const vowels = "aeiou";
	let max = 0;
	let count = 0;

	for (const char of s) {
		if (vowels.includes(char)) {
			count++;
			max = Math.max(max, count);
		} else {
			count = 0;
		}
	}
	return max;
};

export const removeDuplicates2 = (nums: number[]): number => {
	if (nums.length === 0) return nums.length;

	let insertPosition = 2;

	for (let i = 2; i < nums.length; i++) {
		if (nums[i] !== nums[insertPosition - 2]) {
			nums[insertPosition] = nums[i];
			insertPosition++;
		}
	}
	return insertPosition;
};

export const maxProfit = (prices: number[]): number => {
	let minPrice = Infinity;
	let maxProfit = 0;

	for (const price of prices) {
		minPrice = Math.min(minPrice, price);
		maxProfit = Math.max(maxProfit, price - minPrice);
	}
	return maxProfit;
};

const map = new Map<string, number>([
	["a", 1],
	["b", 2],
	["c", 3],
]);

console.log(map.get("a"));

function solution(A: number[]) {
	let smallInteger = 1;

	A.sort((a, b) => a - b);
	console.table(A);

	for (const num of A) {
		if (num === smallInteger) {
			smallInteger++;
			console.table(smallInteger);
		}
	}
	console.log("SmallInteger After Loop:", smallInteger);
	return smallInteger;
}

console.log("Solution:", solution([1, 3, 6, 4, 1, 2]));

export const canJump = (nums: number[]): boolean => {
	let max = 0;

	for (let i = 0; i < nums.length; i++) {
		if (i > max) return false;
		console.log("Max1:", max);
		max = Math.max(max, i + nums[i]);
		console.log("Max2:", max);
	}
	console.log("Max3:", max);
	return true;
};

canJump([2, 3, 1, 1, 4]);

function reverse(nums: number[], start: number, end: number) {
	while (start < end) {
		[nums[start], nums[end]] = [nums[end], nums[start]];
		start++;
		end--;
	}
}

export const rotate = (nums: number[], k: number): void => {
	k %= nums.length;
	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);
};

export const grades: number[] = [85, 90, 95, 100, 44, 87, 56, 98, 100];

const approvedGrades = grades.filter(grade => grade >= 70);

const averagePassingGrade = (
	approvedGrades.reduce((acc, grade) => acc + grade, 0) / approvedGrades.length
).toFixed(2);

console.log("Approved Grade:", approvedGrades, "Average Grades:", averagePassingGrade);

interface Participant {
	id: number;
	name: string;
	ticketNumber: number;
}

export const winningParticipants: Participant[] = [
	{ id: 1, name: "John", ticketNumber: 12345 },
	{ id: 2, name: "Martin", ticketNumber: 23456 },
	{ id: 3, name: "Chris", ticketNumber: 34567 },
	{ id: 4, name: "David", ticketNumber: 45678 },
	{ id: 5, name: "Sophie", ticketNumber: 56789 },
];

export function findWinnerByName(name: string): Participant | undefined {
	return winningParticipants.find(participant => participant.name === name);
}

export function findIndexByTicketNumber(ticketNumber: number): number {
	return (
		winningParticipants.findIndex(
			participant => participant.ticketNumber === ticketNumber
		) || -1
	);
}

export function showWinnerInfo(name: string): string {
	const winner = findWinnerByName(name);

	if (winner) {
		return `The winner is ${winner.name} with ticket number ${winner.ticketNumber}`;
	} else {
		return "No winner found";
	}
}

console.log(showWinnerInfo("Martin"));

interface Transactions {
	id: number;
	description: string;
	amount: number;
}

const transactions: Transactions[] = [
	{ id: 1, description: "Salary", amount: 1000 },
	{ id: 2, description: "Rent", amount: -500 },
	{ id: 3, description: "Food", amount: -200 },
	{ id: 4, description: "Car", amount: -100 },
	{ id: 5, description: "Bonus", amount: 500 },
];

export const totalBalance = transactions.reduce(
	(acc, transaction) => acc + transaction.amount,
	0
);
console.log("Total Balance:", totalBalance);

export const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
	return maxTransaction.amount > transaction.amount ? maxTransaction : transaction;
}, transactions[0]);
console.log("Largest Transaction:", largestTransaction);

export const purchaseTrasanctions = transactions.filter(
	transaction => transaction.amount > 0
);
console.log("Purchase Transactions:", purchaseTrasanctions);

export const fizzBuzz = () => {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
};

fizzBuzz();

export const anagram = (str1: string, str2: string): boolean => {
	if (str1.length !== str2.length) return false;

	const chartCount = {};

	for (let char of str1) {
		chartCount[char] = (chartCount[char] || 0) + 1;
	}

	for (let char of str2) {
		if (!chartCount[char]) {
			return false;
		}
		chartCount[char] -= 1;
	}
	return true;
};

export const poligonArea = (
	type: string,
	dimesion1: number,
	dimesion2: number
): number => {
	let area = 0;

	switch (type) {
		case "square":
			area = dimesion1 * dimesion1;
			break;
		case "rectangle":
			area = dimesion1 * dimesion2;
			break;
		case "triangle":
			area = (dimesion1 * dimesion2) / 2;
			break;
		case "circle":
			area = Math.PI * dimesion1 * dimesion1;
			break;
		default:
			break;
	}
	return parseFloat(area.toFixed(2));
};

console.log(poligonArea("circle", 5, 5));
console.log(poligonArea("square", 5, 5));
console.log(poligonArea("rectangle", 5, 5));

function jump(nums: number[]): number {
	let steps = 0;
	let max = 0;
	let end = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		max = Math.max(max, i + nums[i]);

		if (i === end) {
			steps++;
			end = max;
		}
	}
	return steps;
}

console.log(jump([2, 3, 1, 1, 4]));

const print = (output: string) => {
	console.log(output);
};

const isPerfectNumber = (n: number): string => {
	let sum = 0;

	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			sum += i;
			if (i !== 1 && i !== n / i) {
				sum += n / i;
			}
		}
	}

	return sum === n ? "YES" : "NO";
};

const checkPerfectNumbers = (numbers: number[]): void => {
	for (const n of numbers) {
		print(isPerfectNumber(n));
	}
};

const T = 3;
const numbers = [6, 28, 496];
checkPerfectNumbers(numbers);

function maxMin(k: number, arr: number[]): number {
	arr.sort((a, b) => a - b);
	console.log(arr);

	let min = Infinity;

	for (let i = 0; i <= arr.length - k; i++) {
		min = Math.min(min, arr[i + k - 1] - arr[i]);
		console.table(min);
	}

	return min;
}

const k = 3;
const arr = [100, 200, 300, 350, 400, 401, 402];
console.log(maxMin(k, arr));

export function gooseFilter(birds: string[]): string[] {
	const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

	return birds.filter(bird => !geese.includes(bird));
}

export function invert(array: number[]): number[] {
	return array.map(num => -num);
}

export const groupAnagrams = (words: string[]): string[][] => {
	const map = new Map<string, string[]>();
	console.log(map);

	for (const word of words) {
		const sorted = word
			.split("")
			.sort((a, b) => a.localeCompare(b))
			.join("");
		console.log(sorted);
		if (!map.has(sorted)) {
			map.set(sorted, []);
		}
		map.get(sorted)?.push(word);
		console.log(map);
	}
	return Array.from(map.values());
};

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));

export function angle(n: number): number {
	return (n - 2) * 180;
}

export function multipleOfIndex(array: number[]): number[] {
	return array.filter((num, index) => num % index === 0 && index !== 0);
}
