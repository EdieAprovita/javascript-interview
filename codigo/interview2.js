const largestString = arr => {
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length > max.length) {
			max = arr[i];
		}
	}
	return max;
};

console.log(largestString("ediehfeiuheiudhwiuhdiuehfuecniu"));

const reverseInteger = x => {
	let newArr = Number(x.toString().split("").reverse().join(""));

	if (newArr < 0) {
		return newArr * -1;
	}
	return newArr;
};

console.log(reverseInteger(123));

//Given a signed 32-bit integer x, return x with its digits reversed.
//If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

const reverseString = n =>
	(n < 0 ? -1 : 1) * +("" + Math.abs(n)).split("").reverse().join("");

const reverseInteger2 = x => {
	const str = "" + Math.abs(x);
	const reversed = str.split("").reverse().join("");
	const result = +reversed;
	return (x < 0 ? -1 : 1) * result;
};

console.log(reverseInteger2(123));
console.log(reverseInteger2(-123));

function reverse(x) {
	const reverseNumber = parseInt(Math.abs(x).toString().split("").reverse().join(""));

	if (reverseNumber > 2147483647) {
		return 0;
	}

	return x < 0 ? -Math.abs(reverseNumber) : reverseNumber;
}

const reverse = x => {
	let INT_MAX = 2147483647;
	let INT_MIN = -INT_MAX - 1;
	let res = 0;
	let num = x;
	while (num !== 0) {
		res = res * 10 + (num % 10);
		num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
		if (res > INT_MAX || res < INT_MIN) return 0;
	}
	return res;
};

const reverse2 = x => {
	const limit = Math.pow(2, 31);
	const k = Math.abs(x);
	const n = Number(String(Math.abs(x)).split("").reverse().join(""));

	return x > limit || x < -limit ? 0 : x > 0 ? n : -n;
};

function isPrime(num) {
	if (num <= 1) return false;
	if (num <= 3) return true;
	if (num % 2 === 0 || num % 3 === 0) return false;
	for (let i = 5; i * i <= num; i += 6) {
		if (num % i === 0 || num % (i + 2) === 0) return false;
	}
	return true;
} /**
 * 
 * You are given a string S consisting of the lowercase letters a-z.All the characters in the string that occur 2, 3, 5, 7, 11, etc (prime numbers) number of times are considered to be special.You have to remove all the special characters and form a new string P.If the new string formed is empty she assumes Pas MARY.
TaskDetermine the string P for the given string S.
Example
Assumption
• S = aabbbbec
Approach
You must determine the final string after removing the special characters:
• a, c occurs prime number of times, hence you have to remove these
Hence, the final string would be bbbb.
Function description
Complete the Remove function provided in the editor. This function takes the following parameter and returns the final string after removing the special character:
• S: Represents the given string
 */
