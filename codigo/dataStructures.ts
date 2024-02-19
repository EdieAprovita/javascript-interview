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
	console.log("New set", seen);

	for (const num of ints) {
		if (seen.has(s - num)) {
			console.log(s - num, num);
			return [s - num, num];
		}
		seen.add(num);
	}
};

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
