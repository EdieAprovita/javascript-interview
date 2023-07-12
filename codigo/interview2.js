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

const reverseString = n => (n < 0 ? -1 : 1) * +("" + Math.abs(n)).split("").reverse().join("");

const reverseInteger2 = x => {
  const str = "" + Math.abs(x);
  const reversed = str.split("").reverse().join("");
  const result = +reversed;
  return (x < 0 ? -1 : 1) * result;
}

console.log(reverseInteger2(123));
console.log(reverseInteger2(-123));

function reverse(x) {
const reverseNumber = parseInt(Math.abs(x).toString().split("").reverse().join(""));

if(reverseNumber > 2147483647 ) {
  return 0;
}

return x < 0 ? -Math.abs(reverseNumber) : reverseNumber;
}

const reverse =  (x) => {
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

const reverse2 = (x) => {
  const limit = Math.pow(2, 31);
  const k = Math.abs(x);
  const n = Number(String(Math.abs(x)).split("").reverse().join(""));

  return x > limit || x < -limit ? 0 : x > 0 ? n : -n;
}