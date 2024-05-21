function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	nums1.splice(m, n, ...nums2);
	nums1.sort((a, b) => a - b);
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);

function findPair(L1: number[], L2: number[], target: number): [number, number] {
	for (let num1 of L1) {
		for (let num2 of L2) {
			if (num1 + num2 === target) {
				return [num1, num2];
			}
		}
	}
	return [0, 0];
}

const L1 = [1, 2, 3, 4, 5];
const L2 = [6, 7, 8, 9, 10];
const target = 10;

console.log(findPair(L1, L2, target));

function removeElement(nums: number[], val: number): number {
	nums.splice(0, nums.length, ...nums.filter(num => num !== val));
	return nums.length;
}

const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));

function makeAnagram(a: string, b: string): number {
	const aChars = a.split("");
	const bChars = b.split("");

	console.log(aChars, bChars);

	let count = 0;
	for (let char of aChars) {
		const index = bChars.indexOf(char);
		if (index !== -1) {
			bChars.splice(index, 1);
		} else {
			count++;
		}
	}
	console.log("Contador count:", count);
	console.log("Caracteres restantes en bChars:", bChars);

	return count + bChars.length;
}

const a = "cde";
const b = "abc";
console.log(makeAnagram(a, b));
