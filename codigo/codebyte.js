const solution = number => {
	let newArr = [];

	for (let i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			newArr += i;
		}
		return newArr;
	}
};

const findMedianSortedArrays = (nums1, nums2) => {
	let newArr = [...nums1, ...nums2];
	newArr.sort((a, b) => a - b);
	let median = newArr.length / 2;
	if (newArr.length % 2 === 0) {
		return (newArr[median - 1] + newArr[median]) / 2;
	} else {
		return newArr[Math.floor(median)];
	}
};
const longestPalindrome = function (string) {
	let longestPal = "";

	const getLongestPalindrome = (leftPosition, rightPosition) => {
		while (leftPosition >= 0 && rightPosition < string.length && string[leftPosition] === string[rightPosition]) {
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

const convert = (s, numRows) => {
	// let newArr = [];
	// let row = 0;
	// let direction = 1;

	// for (let i = 0; i < s.length; i++) {
	// 	if (row === numRows - 1) {
	// 		direction = -1;
	// 	} else if (row === 0) {
	// 		direction = 1;
	// 	}
	// 	newArr[row] = newArr[row] || "";
	// 	newArr[row] += s[i];
	// 	row += direction;
	// }

	// return newArr.join("");

	// const result = [];
	// const step = 1, index = 0;

	// for(let i = 0; i < s.length; i++) {
	// 	result[index] = result[index] || "";
	// 	result[index] += s[i];
	// 	if(index === 0) {
	// 		index += step;
	// 	} else if(index === numRows - 1) {
	// 		index -= step;
	// 	} else {
	// 		index += step;
	// 	}
	// }
	// return result.join("");

	if (numRows === 1) {
		return s;
	}

	const num = s.length;
	const arr = [...Array(numRows)].map(r => []);

	for (let i = 0; i < num; i++) {
		arr[i % numRows][i / numRows] = s[i];
	}
	return arr.map(r => r.join("")).join("");
};

const convert = (s, numRows) => {
	let result = [];
	let row = 0;
	let goingUp = false;
	for (let i = 0; i < s.length; i++) {
		result[row] = result[row] || "";
		result[row] += s[i];
		if (row === 0) {
			goingUp = true;
		} else if (row === numRows - 1) {
			goingUp = false;
		}
		if (goingUp) {
			row++;
		} else {
			row--;
		}
	}
	return result.join("");
};

const myAtoi = str => {
	let parse = parseInt(str, 10);

	if (isNaN(parse)) {
		return 0;
	} else if (parse >= Math.pow(2, 31)) {
		return Math.pow(2, 31) - 1;
	} else if (parse <= Math.pow(-2, 31)) {
		return Math.pow(-2, 31);
	} else {
		return parse;
	}
};

const runningSum = nums => {
	let ans = new Array(nums.length);
	console.log(ans);
	ans[0] = nums[0];

	console.log(ans);

	for (let i = 1; i < nums.length; i++) {
		ans[i] = ans[i - 1] + nums[i];
	}
	return ans;
	console.log(ans);
};

runningSum([1, 2, 3, 4]);
console.log(runningSum([1, 2, 3, 4]));

const reverseString = s => {
	return s.split("").reverse().join("");
};

console.log(reverseString("hello"));

const findAndReplacePattern = (words, pattern) => {
	let ans = [], codex = new Map();

	const translate = char => {
		if (codex.has(char)) {
			return codex.get(char);
		} else {
			let newChar = String.fromCharCode(97 + codex.size);
			codex.set(char, newChar);
			return newChar;
		}
	}
	const compare = word => {
		let ans = [], codex = new Map()
    const translate = char => {
        if (!codex.has(char))
            codex.set(char, String.fromCharCode(97 + codex.size))
        return codex.get(char)
    }
    const compare = word => {
        codex.clear()
        for (let i = 0; i < word.length; i++)
            if (translate(word[i]) !== cipher[i])
                return
        ans.push(word)
    }
    let cipher = new Array(pattern.length)
    for (let i = 0; i < pattern.length; i++)
        cipher[i] = translate(pattern.charAt(i))
    words.forEach(compare)
    return ans
};

console.log(findAndReplacePattern(["abc", "def", "ghi"], "abc"));

// const longestSubstring = s => {
// 	let longest = 0;
// 	let current = 0;
// 	let map = new Map();

// 	for (let i = 0; i < s.length; i++) {
// 		if (map.has(s[i])) {
// 			current = Math.max(current, map.get(s[i]) + 1);
// 		}
// 		map.set(s[i], i);
// 		longest = Math.max(longest, current);
// 	}

// 	return longest;
// }

const longestSubstring = s => {
	let longest = [];
			let current = [];
	let map = new Map();

	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			current = current.slice(map.get(s[i]) + 1);
		}
		current.push(s[i]);
		map.set(s[i], i);
		longest = Math.max(longest, current);
	}

	return parseInt(longest.join(""));
}
console.log(longestSubstring("abcabcbb"));

//write a function largetSubstring that takes a string and returns the length of the longest substring without repeating characters given an input string.

function longestSubstring(s) {
	let i
	let n = s.length

	let startString = 0
	let end;
	let max= 0
	let maxlength = 0
	let startIndex;

	let map = new Map()
	map.set(s[0], 0)

	for (i = 1; i < n; i++) {
		if (map.has(s[i])) {
			startString = map.get(s[i]) + 1
		}
		map.set(s[i], i)
		end = i
		if (end - startString > maxlength) {
			maxlength = end - startString
			startIndex = startString
		}
	}
	return s.substring(startIndex, startIndex + maxlength)
}

console.log(longestSubstring("abcabcbb"));

function getPerson(){
	return 
	{
		name: "Test"
		city: "Test"
	}
}

console.log(getPerson());

const palindromeNumber = n => {
	let str = n.toString();
	let reverse = str.split("").reverse().join("");
	if (str === reverse) {
		return true;
	} else {
		return false;
	}
}

const isMatch = (s, p) => {
	let i = 0;
	let j = 0;
	let star = -1;
	let match = 0;
	let starMatch = 0;
	let sLength = s.length;
	let pLength = p.length;
	while (i < sLength) {
		if (j < pLength && (s[i] === p[j] || p[j] === "?")) {
			i++;
			j++;
		} else if (j < pLength && p[j] === "*") {
			star = j;
			starMatch = i;
			j++;
		} else if (star !== -1) {
			j = star + 1;
			i = starMatch + 1;
			starMatch++;
		} else {
			return false;
		}
	}
	while (j < pLength && p[j] === "*") {
		j++;
	}
	return j === pLength;
}