const numberToString = number => {
	return number.toString();
};

console.log(numberToString(123));

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.//

function XO(str) {
	let arr = str.toLowerCase().split('');
	return (
		arr.filter(char => char === 'x').length ===
		arr.filter(char => char === 'o').length
	);
}

console.log(XO('xo'));

function printerError(s) {
	return `${s.match(/[^a-m]/g) ? s.match(/[^a-m]/g).length : 0}/${s.length}`;
}

function maps(x) {
	return x.map(y => {
		return y * 2;
	});
}

console.log(maps([1, 2, 3, 4, 5]));

function findUniq(arr) {
	const sorted = arr.sort();
	return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));

function duplicateEncode(word) {
	return word
		.toLowerCase()
		.split('')
		.map(function (char, index, array) {
			return array.indexOf(char) === array.lastIndexOf(char) ? '(' : ')';
		})
		.join('');
}

console.log(duplicateEncode('recede'));

const uniqueInOrder = iterable => {
	return [...iterable].filter((char, index, array) => {
		return char !== array[index - 1];
	});
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

class SmallestIntegerFinder {
	findSmallestInt(args) {
		return args.sort((a, b) => a - b)[0];
	}
}

function longest(s1, s2) {
	return [...new Set(s1 + s2)].sort().join('');
}

function squareDigits(num) {
	return +num
		.toString()
		.split('')
		.map(x => x * x)
		.join('');
}

console.log(squareDigits(9119));

function isIsogram(str) {
	return [...new Set(str.toLowerCase())].length === str.length;
}

console.log(isIsogram('Dermatoglyphics'));

function towerBuilder(nFloors) {
	let tower = [];
	for (let i = 0; i < nFloors; i++) {
		tower.push(
			' '.repeat(nFloors - i - 1) +
				'*'.repeat(i * 2 + 1) +
				' '.repeat(nFloors - i - 1)
		);
	}
	return tower;
}

function litres(time) {
	return Math.floor(time * 0.5);
}

//Write a function that given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A./

function solution(A) {
	let result = 1;
	let set = new Set(A);
	while (set.has(result)) {
		result++;
	}
	return result;
}

console.log(solution([1, 3, 6, 4, 1, 2]));

const axios = require('axios');

require('./callMock');

const cityWeather = city => async () => {
	if (!city) return console.error('string is empty');
	const response = await axios.get(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
	);

	return response.data;
};

// function cityWeather(city) {
//   return async () => {
//     if (!city) return console.error('string is empty');
//     const response = await axios.get(
//       `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
//     );

//     return response.data;
//   };
// }

function cityWeather(city) {
	// Implement the function
	// You can use console.log for debugging

	// API url = `https://example.com/data/2.5/weather?...`
	// Use q parameter (city) at the end of the url in order to mock data correctly
	return new Promise((resolve, reject) => {
		// Implement the function - call http request
		resolve(object_to_be_returned);
		// Implement the function
	});
}

//Sum without highest and lowest number

function sumArray(array) {
	return !array || array.length == 0
		? 0
		: array
				.sort((a, b) => a - b)
				.slice(1, -1)
				.reduce((res, n) => res + n, 0);
}

console.log(sumArray([1, 2, 3, 4, 10]));

const binaryArrayToNumber = arr => {
	return arr.reduce((res, n) => res * 2 + n, 0);
};

console.log(binaryArrayToNumber([0, 0, 1, 1]));

function abbrevName(name) {
	return name
		.split(' ')
		.map(x => x[0])
		.join('.')
		.toUpperCase();
}

console.log(abbrevName('Sam Harris'));

const reverseSeq = n => {
	let newArr = [];
	for (let i = n; i > 0; i--) {
		newArr.push(i);
	}
	return newArr;
};

console.log(reverseSeq(5));

function boolToWord(bool) {
	return bool ? 'Yes' : 'No';
}

function highAndLow(numbers) {
	let max = Math.max(...numbers.split(' ').map(x => parseInt(x)));
	let min = Math.min(...numbers.split(' ').map(x => parseInt(x)));

	return `${max} ${min}`;
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));

function SeriesSum(n) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += 1 / (1 + 3 * i);
	}
	return sum.toFixed(2);
}

console.log(SeriesSum(2));

const summation = number => {
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		sum += i;
	}
	return sum;
};

console.log(summation(8));

function findNeedle(haystack) {
	return `found the needle at position ${haystack.indexOf('needle')}`;
}

console.log(
	findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false])
);

function disemvowel(str) {
	return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'));

const snail = arr => {
	let finalArray = [];
	while (arr.length) {
		finalArray.push(...arr.shift());
		arr.map(row => finalArray.push(row.pop()));
		arr.reverse().map(row => row.reverse());
	}
	return finalArray;
};

console.log(
	snail([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);

function validBraces(braces) {
	while (braces != '') {
		let next = braces.split('()').join('').split('[]').join('').split('{}').join('');
		if (next == braces) {
			return false;
		}
		braces = next;
	}
	return true;
}

console.log(validBraces('(){}[]'));
console.log(validBraces('([{}])'));
console.log(validBraces('(}'));

function doubleInteger(i) {
	return i * 2;
}

console.log(doubleInteger(2));

function isPangram(string) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let set = new Set(string.toLowerCase().split(''));
	for (let i = 0; i < alphabet.length; i++) {
		if (!set.has(alphabet[i])) {
			return false;
		}
	}
	return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));

function findNextSquare(sq) {
	let root = Math.sqrt(sq);
	if (root % 1 != 0) {
		return -1;
	}
	return Math.pow(root + 1, 2);
}

console.log(findNextSquare(121));

function accum(s) {
	let arr = s.split('');
	let final = '';
	for (let i = 0; i < arr.length; i++) {
		final += arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i) + '-';
	}
	return final.slice(0, -1);
}

console.log(accum('abcd'));

function bmi(weight, height) {
	return weight / (height * height);
}

console.log(bmi(80, 1.8));

function filter_list(l) {
	return l.filter(x => typeof x === 'number');
}

function countSheeps(arrayOfSheep) {
	return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps([true, true, true, false]));

function deleteNth(arr, n) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (newArr.filter(x => x === arr[i]).length < n) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function DNAStrand(dna) {
	let newArr = [];
	for (let i = 0; i < dna.length; i++) {
		if (dna[i] === 'A') {
			newArr.push('T');
		} else if (dna[i] === 'T') {
			newArr.push('A');
		} else if (dna[i] === 'C') {
			newArr.push('G');
		} else if (dna[i] === 'G') {
			newArr.push('C');
		}
	}
	return newArr.join('');
}

function betterThanAverage(classPoints, yourPoints) {
	let sum = 0;
	for (let i = 0; i < classPoints.length; i++) {
		sum += classPoints[i];
	}
	return sum / classPoints.length < yourPoints ? true : false;
}

function isTriangle(a, b, c) {
	return a + b > c && a + c > b && b + c > a;
}

function oddOrEven(array) {
	return array.reduce((a, b) => a + b, 0) % 2 == 0 ? 'even' : 'odd';
}

function zeroFuel(distanceToPump, mpg, fuelLeft) {
	return distanceToPump / mpg <= fuelLeft ? true : false;
}

function rot13(message) {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const newAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

	return message.replace(/[a-z]/gi, letter => newAlphabet[alphabet.indexOf(letter)]);
}

console.log(rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'));

function isSquare(n) {
	return Math.sqrt(n) % 1 === 0;
}

const reverseArray = arr => arr.reverse();

console.log(reverseArray);

const students = ['Peter', 'Ahmad', 'Yana', 'Kalle', 'Olle', 'Maria', 'Max', 'Miia'];

const ironhackers = [].concat(students);
students.push('Lina');

console.log(students);
console.log(ironhackers);

const cloneArray = arr => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr[i] = arr[i];
	}
	return newArr;
};

function sumPairs(ints, s) {
	return [0, 0] || undefined;

	
}