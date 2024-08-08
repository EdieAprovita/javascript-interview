nameOfDog("Elmo");

function nameOfDog(name) {
	console.log(name);
}

const input = [
	{ a: 1, b: 2 },
	{ a: 3, b: 4 },
];

//output: {a:4,b:2  }

const output = input.reduce(
	(acc, curr) => {
		return { a: acc.a + curr.a, b: acc.b + curr.b };
	},
	{ a: 0, b: 0 }
);

console.log(output);

const rotate = (nums, k) => {
	k = k % nums.length;
	return nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

function rotate(nums, k) {
	let i = 0;
	while (i < k) {
		let end = nums.pop();
		nums.unshift(end);
		i++;
	}
}

const rotate2 = (nums, k) => {
	let final = nums.splice(nums.length - k);
	for (let i = 0; i < final.length; i++) {
		nums.splice(i, 0, final[i]);
	}
	return nums;
};

const containsDuplicate = nums => {
	let set = new Set(nums);
	return set.size !== nums.length;
};

const singleNumber = nums => {
	let set = new Set(nums);
	return [...set].filter(num => nums.filter(n => n === num).length === 1)[0];
};

//Intersection of Two Arrays II

const intersect = (nums1, nums2) => {
	let set = new Set(nums1);
	return [...set].filter(num => nums2.includes(num));
};

const intersect2 = (nums1, nums2) => {
	let obj = {};
	let res = new Set();

	for (let i = 0; i < nums1.length; i++) {
		if (!obj[nums1[i]]) {
			obj[nums1[i]] = 1;
		} else {
			obj[nums1[i]]++;
		}
	}
	for (let i = 0; i < nums2.length; i++) {
		if (obj[nums2[i]]) {
			res.add(nums2[i]);
		}
	}
	return Array.from(res);
};

//regex white space
const formName = "QA_TestForm";

const auxstr = formName.replace(/\s+/g, "");

console.log(auxstr);

let persona = {
	firstName: "John",
	lastName: "Doe",
};

let { firstName, lastName } = persona;
console.log(firstName);

function Employee(r) {
	this.role = "analyst";
	this.name = r;
}

var e1 = new Employee("John");
console.log(e1.role);

class User {
	getUserId() {
		console.log("User ID is 123");
	}

	#getSalary() {
		console.log("Salary is 1000");
	}
}

let user = new User();
console.log(user);

function display() {
	var i = 1;
	return function () {
		i++;
		console.log(i);
	};
}

var getVal = display();
getVal();

var array = [0, 1];
array[1] = 2;

console.log(array.length);

function show(...args) {
	let sum = 0;

	for (let i of args) {
		sum += i;
	}
	console.log(sum);
}

console.log(show(10, 20, 30));

class Person {
	constructor(name) {
		this.name = name;
	}

	print() {
		console.log("Print from Person class");
	}
}

class Manager extends Person() {
	constructor(name, dept) {
		super(name);
		this.dept = dept;
	}

	print() {
		console.log("Print from Manager class");
	}
}

let m1 = new Manager("John", "IT");
m1.print();

console.log(false == ((0 === "0") == 0));

function display() {
	var i = 1;

	return function () {
		console.log(i);
		i++;
	};
}

display();
console.log(i);

(function (a) {
	console.log(a);
});

function Employee() {
	this.role = r;
	this.getRole = function () {
		console.log(this.role);
	};
	return 0;
}

var e1 = new Employee("Analyst");
e1.getRole();

function message() {
	console.log("Hello World");
}

message(1, 2);

function message(a, b) {
	console.log("message2");
}

function message(a, b, c) {
	console.log("message3");
}

function display() {
	console.log(arguments[2]);
}

display(1, 2, 3);

document.getElementsByTagName("button")[0].firstChild.nodeValue = "Click Me";

function display() {
	console.log("Hello World");
}

display(1);

function findScope(a) {
	b = a;
}

findScope();
alert(b);

let fName = "Sachin";
let lName = "Tendulkar";

console.log(`Hi highflyer ${fName} ${lName}`);

import * as imported from "./export.js";

class User {
	getUserId() {
		console.log("User ID is 123");
	}

	#getSalary() {
		console.log("Salary is 1000");
	}
}

function justResolve(result) {
	console.log("Promise result");
}

function justReject(result) {
	console.log(result);
}

Promise.resolve(new Error("Exception")).then(justResolve, justReject);

const obj = { foo: 1 };

obj.bar = 2;

console.log(obj.bar);

function add(a = 10, b = 5) {
	return a + b;
}

console.log(add(3));

(function (a) {
	console.log(a);
})();

let x = 5;

if (true) {
	console.log(x);

	let x = 7;
}

console.log(x);

var json1 = {
	members: { role: "admin" },
};

console.log(json1.members.role);

var a = null;
var a = "";
var a = 1;
console.log(a);

console.log(false == ((0 === "0") == 0));

function message(a) {
	console.log("message");
}

message(1, 2);

function message(a, b) {
	console.log("message2");
}

function message(a, b, c) {
	console.log("message3");
}

console.log(message());

for (let i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i);
	}, 1000);
}

console.log(aa, xx, zz);

let xx = 5;
const zz = 10;

const name = "John";
console.log(Boolean(name));

const price = 10;
console.log(Boolean(price));

let isTrue = true;
console.log(Boolean(isTrue));

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));

function merge(nums1, m, nums2, n) {
	nums1.splice(m, n, ...nums2);
	console.log(nums1);
	nums1.sort((a, b) => a - b);
	return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

var name = "John";

var result = (function () {
	name = "Jane";
	console.log(name);
})();

console.log(name);
console.log(result);

let x2;

let obj2 = { a: "b", b: "a", c: "b" };

for (let key in obj2) {
	x = obj2[obj2[key]];
}

console.log(x);
