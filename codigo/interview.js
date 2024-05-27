function substrCount(n, s) {
	let count = n;
	let currentSequence = s[0];

	for (let i = 1; i < n; i++) {
		if (s[i] === s[i - 1]) {
			count += currentSequence.length;
			currentSequence = currentSequence + s[i];
		} else {
			for (let j = 0; j < currentSequence.length; j++) {
				if (s[i + 1 + j] === currentSequence[0]) {
					count++;
				} else {
					break;
				}
			}
			currentSequence = s[i];
		}
	}

	return count;
}

// Flatten Binary Tree to Linked List

const flatten = root => {
	if (!root) return;
	let current = root;
	while (current) {
		if (current.left) {
			let next = current.left;
			while (next.right) {
				next = next.right;
			}
			next.right = current.right;
			current.right = current.left;
			current.left = null;
		}
		current = current.right;
	}
};

const myAtoi = str => {
	let result = 0;
	let sign = 1;
	let i = 0;
	while (str[i] === " ") {
		i++;
	}
	if (str[i] === "+") {
		i++;
	} else if (str[i] === "-") {
		sign = -1;
		i++;
	}
	while (str[i] >= "0" && str[i] <= "9") {
		result = result * 10 + (str[i] - "0");
		i++;
	}
	return sign * result;
};

function contar() {
	for (let i = 0; i < 10; i++) {
		console.log(i);
	}
}

let begin = performance.now();
contar();
let end = performance.now();

let time = end - begin;

console.log(time);

function x() {
	let i = 0;
	setTimeout(() => {
		console.log(i);
	}, 1000);
}

console.log(x());

const input = [
	{ a: 1, b: 2 },
	{ a: 3, b: 4 },
];

// output = a:4,b:6

const output = input.reduce(
	(acc, curr) => {
		return {
			a: acc.a + curr.a,
			b: acc.b + curr.b,
		};
	},
	{ a: 0, b: 0 }
);

console.log(output);

const arr = [10, 9, 3, 7];

//output true 9 + 9 = 18

function isSum(arr, k) {
	let map = {};
	for (const element of arr) {
		let diff = k - element;
		if (map[diff]) {
			return true;
		}
		map[element] = true;
	}
	return false;
}

console.log(isSum(arr, 18));
console.log(isSum(arr, 19));

const value = ["First Name", "Last Name"];

value[0].join("_");
console.log(value);

const fizzBuzzCustom = (numOne, numTwo, stringOne = "Fizz", stringTwo = "Buzz") => {
	for (let i = 1; i <= 100; i++) {
		if (i % numOne === 0 && i % numTwo === 0) {
			console.log(stringOne + stringTwo);
		} else if (i % numOne === 0) {
			console.log(stringOne);
		} else if (i % numTwo === 0) {
			console.log(stringTwo);
		} else {
			console.log(i);
		}
	}
};

function Remove(S) {
	function isPrime(num) {
		if (num <= 1) return false;
		if (num <= 3) return true;
		if (num % 2 === 0 || num % 3 === 0) return false;
		for (let i = 5; i * i <= num; i += 6) {
			if (num % i === 0 || num % (i + 2) === 0) return false;
		}
		return true;
	}

	const charCount = {};
	for (const char of S) {
		charCount[char] = (charCount[char] || 0) + 1;
	}

	const specialCharacters = new Set();
	for (const char in charCount) {
		if (isPrime(charCount[char])) {
			specialCharacters.add(char);
		}
	}

	let P = "";
	for (const char of S) {
		if (!specialCharacters.has(char)) {
			P += char;
		}
	}

	return P === "" ? "MARY" : P;
}

// Probar la función con un ejemplo
const S = "aabbbbec";
const result = Remove(S);
console.log(result); // Debe imprimir "bbbb"
