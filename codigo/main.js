const URL = 'https://api.thedogapi.com/v1/images/search';

const fetchDog = async () => {
	const res = await fetch(URL);
	const data = await res.json();
	const img = document.querySelector('img');
  img.src = data[0].url;
};

const fetchButton = document.querySelector('button');
fetchButton.onclick = fetchDog;

fetchButton.onclick();

const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((resolve, reject) => reject("rejected"));
const promise2 = new Promise((resolve, reject) => resolve("resolved"));
const promise3 = new Promise((resolve, reject) => resolve("resolved 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response))

console.log(window)
console.log(globalThis)

const foo = 'asd' ??  "default value";
console.log(foo);

const user = {}

if(user?.profile?.email) {
	console.log(user.profile.email);
} else {
	console.log('fail');
}
console.log(user?.profile?.email)

const string = "Hello World";

const replaceString = string.replace(/Hello/, "Hi");
console.log(replaceString);

const fibonacciChecker = num => {
	let arr = []

	let result

	for(let k = 0; k++) {
		arr.push(k < 2 ? 1 : arr[k - 2] + arr[k - 1])
			if(arr[k] === num) {
				result = 'yes'
				break
			}

			if(arr[k] > num) {
				result = 'no'
				break
			}
	}

	return result
}

//FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

// function FibonacciChecker(num) {
//  //code goes here
// 	if( num === 0 || num === 1) {
// 		return 'yes'
// 	}

// 	let firPrev =  num - 1
// 	let secPrev = num - 2

// 	return FibonacciChecker(firPrev) === 'yes' && FibonacciChecker(secPrev) === 'yes' ? 'yes' : 'no'
 	
// }

const fibonacciChecker = num => {
	if(num === 0 || num === 1) {
		return 'yes'
	}

	let prev = 1
	let count = 2
	let temp = 0

	while(count <= num) {
	if(prev + temp === num) {
		return 'yes'
	}
	temp = prev
	prev = count
	count += temp
}
return 'no'
}

console.log(FibonacciChecker(34));