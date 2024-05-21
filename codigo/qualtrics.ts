function budgetShopping(
	budget: number,
	bundleQuantities: number[],
	bundleCosts: number[]
): number {
	let maxNotebooks = 0;

	for (let i = 0; i < bundleQuantities.length; i++) {
		const notebooksPerBundle = bundleQuantities[i];
		const costPerBundle = bundleCosts[i];

		const maxBundlesAffordable = Math.floor(budget / costPerBundle);
		maxNotebooks += maxBundlesAffordable * notebooksPerBundle;
	}
	return maxNotebooks;
}

const budget = 500;
console.log(budgetShopping(budget, [20, 19], [24, 20]));

const findOdd = (xs: number[]): number => {
	const odd = xs.reduce((a, b) => a ^ b, 0);
	return odd;
};

console.log(findOdd([1, 2, 2, 3, 3, 4, 4]));

const DNAtoRNA = (dna: string): string => {
	return dna.replace(/T/g, "U");
};

const stringToNumber = (str: string): number => {
	return parseInt(str);
};

const setAlarm = (employed: boolean, vacation: boolean): boolean => {
	return employed && !vacation;
};

const xor = (a: boolean, b: boolean): boolean => {
	return a !== b;
};
