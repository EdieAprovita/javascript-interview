/**
 * You are given two arrays 
 and 
, of length 
. You can select any subarray and then sort the elements in ascending order of that subarray for arrays 
 and 
.

Find the minimum length of the subarray you can choose to make 
 and 
 same after performing the operation. 
 and 
 are permutations of each other.


 */

function findMinLengthOfSubarray(arr1, arr2) {
	const n = arr1.length;
	let diff = 0;
	let min = n;
	let count = new Array(n + 1).fill(0);
	for (let i = 0; i < n; i++) {
		if (arr1[i] != arr2[i]) {
			diff++;
		}
	}
	if (diff == 0) {
		return 0;
	}
	let l = 0;
	for (let r = 0; r < n; r++) {
		count[arr1[r]]++;
		if (count[arr1[r]] <= count[arr2[r]]) {
			diff--;
		}
		while (diff == 0) {
			min = Math.min(min, r - l + 1);
			count[arr1[l]]--;
			if (count[arr1[l]] < count[arr2[l]]) {
				diff++;
			}
			l++;
		}
	}
	return min;
}
