const hoopCount = (n: number): string => {
	return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
};

export function countPositivesSumNegatives(input: number[] | null): number[] {
	if (!input || input.length === 0) {
		return [];
	}

	let positiveCount = 0;
	let negativeSum = 0;

	for (const num of input) {
		positiveCount += num > 0 ? 1 : 0;
		negativeSum += num < 0 ? num : 0;
	}

	return [positiveCount, negativeSum];
}

const check = (a: (number | string)[], x: number | string): boolean => {
	return a.includes(x);
};

const stringToArray = (string: string): string[] => {
	return string.split(" ");
};

console.log(stringToArray("Robin Singh"));

const switchItUp = (number: number): string => {
	switch (number) {
		case 0:
			return "Zero";
		case 1:
			return "One";
		case 2:
			return "Two";
		case 3:
			return "Three";
		case 4:
			return "Four";
		case 5:
			return "Five";
		case 6:
			return "Six";
		case 7:
			return "Seven";
		case 8:
			return "Eight";
		case 9:
			return "Nine";
		default:
			return "";
	}
};

const reverseWords = (str: string): string => {
	const words = str.split(" ");

	return words.map(word => word.split("").reverse().join("")).join(" ");
};

const paperWork = (n: number, m: number): number => {
	return n < 0 || m < 0 ? 0 : n * m;
};

const isUpperCase = (str: string) => {
	return str === str.toUpperCase();
};

const isPalindrome = (line: string): boolean => {
	return line === line.split("").reverse().join("");
};

const grow = (x: number[]): number => {
	return x.reduce((a, b) => a * b);
};

const comp = (array1: number[] | null, array2: number[] | null): boolean => {
	if (!array1 || !array2) {
		return false;
	}

	const sortedArray1 = array1.sort((a, b) => a - b);
	const sortedArray2 = array2.sort((a, b) => a - b);

	return sortedArray1.every((num, index) => num * num === sortedArray2[index]);
};

const digitize = (n: number): number[] => {
	const reverseArray = n.toString().split(" ").reverse();

	const reverseNum = reverseArray.map(char => parseInt(char));

	return reverseNum;
};

console.log(digitize(35231));

function modificarValor(x: number): number {
	return 10;
}

let numero = 5;
numero = modificarValor(numero);

interface Persona {
	nombre: string;
}

function modificarObjeto(obj: Persona) {
	obj.nombre = "Juan";
}

let persona: Persona = { nombre: "María" };
console.log(persona.nombre);
modificarObjeto(persona);

console.log(persona.nombre);

function divisors(n: number) {
	const divisors: number[] = [];

	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			divisors.push(i);
		}
	}
	return divisors;
}

console.log(divisors(12));

const testEven = (n: number): boolean => {
	return n % 2 === 0;
};

const square: (n: number) => number = (n: number) => {
	return n * n;
};

const arrayDiff = (a: number[], b: number[]): number[] => {
	return a.filter(num => !b.includes(num));
};

const between = (a: number, b: number): number[] => {
	const result: number[] = [];

	for (let i = a; i <= b; i++) {
		result.push(i);
	}

	return result;
};

const updateLight = (current: string): string => {
	switch (current) {
		case "green":
			return "yellow";
		case "yellow":
			return "red";
		case "red":
			return "green";
		default:
			return "";
	}
};

function mexicanWave(str: string): Array<string> {
	const result: string[] = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			continue;
		}

		const wave = str.split("");
		wave[i] = wave[i].toUpperCase();
		result.push(wave.join(""));
	}

	return result;
}

console.log(mexicanWave("hello"));

function wave(str: string): string[] {
	const result: string[] = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			continue;
		}

		const wave = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1);
		result.push(wave);
	}

	return result;
}

export function solution(nums: number[]): number[] {
	return nums ? nums.sort((a, b) => a - b) : [];
}
