class Point {
  x: number;
  y: number;
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

let pt = new Point();
pt.x = 10;
pt.y = 20;
console.log(`x: ${pt.x}, y: ${pt.y}`);

const message = (msg : string,num: number)  => {
	return `Hello ${msg} number ${num}`;
	
}

console.log(message('World',10));
 
const add = (a: number, b: number) => {
	return a + b;
}

console.log(add(10,2))


//height of a binary tree

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val: number) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	root: TreeNode | null;
	constructor() {
		this.root = null;
	}

	height(node: TreeNode | null): number {
		if (node === null) {
			return 0;
		}
		let leftHeight = this.height(node.left);
		let rightHeight = this.height(node.right);
		return Math.max(leftHeight, rightHeight) + 1;
	}
}

function height(node: TreeNode | null): number {
	if (node === null) {
		return 0;
	}
	let leftHeight = height(node.left);
	let rightHeight = height(node.right);
	return Math.max(leftHeight, rightHeight) + 1;
}

const substrCount2 = (n: number, s: string): number => {
  let count = 0;
  let prev = '';
  let curr = '';
  for (let i = 0; i < n; i++) {
    curr += s[i];
    if (curr === prev) {
      count += 2;
    }
    prev = curr;
  }
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    }
  }
  return count;
}

let prices = [1, 2, 3, 4, 5];
prices.push(6);

let mixed : (number | string)[] = [1, 'a', 3, 'b', 5];

class Human {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

class Employee extends Human {
	deparment: string;
	batch: string;
	role: string;
	constructor(
		name: string,
		age: number,
		deparment: string,
		batch: string,
		role: string
	) {
		super(name, age);
		this.deparment = deparment;
		this.batch = batch;
		this.role = role;
	}

	getInfo() {
		console.log('Name: ' + this.name);
		console.log('Age: ' + this.age);
		console.log('Deparment: ' + this.deparment);
		console.log('Batch: ' + this.batch);
		console.log('Role: ' + this.role);
	}
}

let employee = new Employee('John', 20, 'IT', 'Batch 1', 'Software Engineer');

const numbers : number []= [1, 2, 3, 4, 5];
numbers.push(6);
numbers.pop();
numbers.unshift(0);

console.log(numbers);

let userName : string
userName = 'John';

function fizzBuzzCustom(stringOne: string, stringTwo: string, numOne: number, numTwo: number, range: number) {
    let result = [];
    for (let i = 1; i <= range; i++) {
        if (i % numOne === 0 && i % numTwo === 0) {
            result.push(stringOne + stringTwo);
        } else if (i % numOne === 0) {
            result.push(stringOne);
        } else if (i % numTwo === 0) {
            result.push(stringTwo);
        } else {
            result.push(i);
        }
    }
    return result;
}

fizzBuzzCustom('Fizz', 'Buzz', 3, 5);

let employees = [{ empId: 1, name: "Sachin" }, { empId: 2, name: "Rahul" }, { empId: 3, name: "Saurav" }];
let [e1, ...others] = employees e1.name = "Virat";
console.log(e1);

let arr: number[] = [11, 22, 33, 44];
for (var val of arr) {
	console.log('\n') for (var val of arr) {
		console.log(val);
	}
}

var [a, b, ...remaing] = [11, 22, 33, 44]
console.log(a, b, remaing);

interface SearchFunc {
	(source: string, subString: string): boolean;
}

