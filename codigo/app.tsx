function simpleArraySum(ar: number[]): number {
	let sum = 0;
	for (const element of ar) {
		sum += element;
	}
	return sum;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));

function aVeryBigSum(ar: number[]): number {
	return ar.reduce((a, b) => a + b, 0);
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

function plusMinus(arr: number[]): void {
	let positive = 0;
	let negative = 0;
	let zero = 0;
	for (const element of arr) {
		if (element > 0) {
			positive++;
		} else if (element < 0) {
			negative++;
		} else {
			zero++;
		}
	}
	console.log(positive / arr.length);
	console.log(negative / arr.length);
	console.log(zero / arr.length);
}
