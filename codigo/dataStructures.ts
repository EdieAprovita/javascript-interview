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
