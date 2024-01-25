// interface GithubUser {
// 	login: string;
// 	id: number;
// 	node_id: string;
// 	avatar_url: string;
// 	gravatar_id: string;
// 	url: string;
// 	html_url: string;
// 	followers_url: string;
// 	following_url: string;
// 	gists_url: string;
// }

// const fetchGithubUser = async (username: string): Promise<GithubUser> => {
// 	const response = await fetch(`https://api.github.com/users/${username}`);
// 	const data = await response.json();
// 	return {
// 		login: data.login,
// 		id: data.id,
// 		node_id: data.node_id,
// 		avatar_url: data.avatar_url,
// 		gravatar_id: data.gravatar_id,
// 		url: data.url,
// 		html_url: data.html_url,
// 		followers_url: data.followers_url,
// 		following_url: data.following_url,
// 		gists_url: data.gists_url,
// 	};
// };

// console.log(fetchGithubUser("josepplloo"));

const numbers: number[] = [1, 2, 3, 4, 5];

function doubleNumber(number: number[]): number[] {
	return number.map(n => n * 2);
}

console.log(doubleNumber(numbers));

const studentsList: [string, number[]][] = [
	["Josep", [6, 8, 9, 10]],
	["Jordi", [8, 9, 10, 8]],
	["Pablo", [9, 10, 10, 10]],
	["Marc", [10, 10, 10, 10]],
];

function getAverage(students: [string, number[]][]): [string, number][] {
	return students.map(([name, grades]) => [
		name,
		grades.reduce((a, b) => a + b) / grades.length,
	]);
}

console.log(getAverage(studentsList));

class Circule {
	radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}

	getArea(): number {
		return Math.PI * this.radius ** 2;
	}

	getPerimeter(): number {
		return 2 * Math.PI * this.radius;
	}
}

class Rectangle {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	getArea(): number {
		return this.width * this.height;
	}

	getPerimeter(): number {
		return 2 * (this.width + this.height);
	}
}

class Triangle {
	base: number;
	height: number;

	constructor(base: number, height: number) {
		this.base = base;
		this.height = height;
	}

	getArea(): number {
		return (this.base * this.height) / 2;
	}

	getPerimeter(): number {
		return this.base * 3;
	}
}

class Diagram {
	shapes: (Circule | Rectangle | Triangle)[];

	constructor(shapes: (Circule | Rectangle | Triangle)[]) {
		this.shapes = shapes;
	}

	getTotalArea(): number {
		return this.shapes.reduce((a, b) => a + b.getArea(), 0);
	}
}

const diagram = new Diagram([new Circule(1), new Rectangle(1, 1), new Triangle(1, 1)]);

console.log(diagram.getTotalArea().toFixed(2));

interface Book {
	title: string;
	year: number;
}

const library: Book[] = [
	{ title: "El Gran Gatsby", year: 1925 },
	{ title: "Cien años de soledad", year: 1967 },
	{ title: "Origen", year: 2017 },
	{ title: "Dune", year: 2020 },
	{ title: "El código Da Vinci", year: 2003 },
	{ title: "El Quijote", year: 1996 },
	{ title: "El Hobbit", year: 1937 },
];

const actualYear = new Date().getFullYear();

const titlesYearOrdered = library
	.filter(book => actualYear - book.year <= 10)
	.sort((a, b) => a.year - b.year)
	.map(book => `${book.title} (${book.year})`);

const getAllBooks = (books: Book[]): string[] => {
	return books.map(book => `${book.title} (${book.year})`);
};

const orderBooks = (books: Book[]): Book[] => {
	return books.sort((a, b) => a.year - b.year);
};

console.log(getAllBooks(library));
console.log(orderBooks(library));
console.log(titlesYearOrdered);

class Employee {
	name: string;
	department: string;
	salary: number;

	constructor(name: string, department: string, salary: number) {
		this.name = name;
		this.department = department;
		this.salary = salary;
	}

	getName(): string {
		return this.name;
	}

	getDepartment(): string {
		return this.department;
	}

	getSalary(): number {
		return this.salary;
	}
}

class Manager extends Employee {
	projects: string[];
	people: Employee[];

	constructor(
		name: string,
		department: string,
		salary: number,
		projects: string[],
		people: Employee[]
	) {
		super(name, department, salary);
		this.projects = projects;
		this.people = [];
	}

	getProjects(): string[] {
		return this.projects;
	}

	getPeople(): Employee[] {
		return this.people;
	}

	addEmployee(employee: Employee): void {
		this.people.push(employee);
	}
}

class Developer extends Employee {
	stack: string[];
	client: string;

	constructor(
		name: string,
		department: string,
		salary: number,
		stack: string[],
		client: string
	) {
		super(name, department, salary);
		this.stack = stack;
		this.client = client;
	}

	getStack(): string[] {
		return this.stack;
	}

	getClient(): string {
		return this.client;
	}
}

//crea un array de empleados con managers y developers, agrega tambien sus atributos para cada uno

const jordi = new Developer("Jordi", "IT", 40000, ["React", "Node"], "Client1");
const pablo = new Developer("Pablo", "IT", 40000, ["React", "Node"], "Client2");
const marc = new Developer("Marc", "IT", 40000, ["React", "Node"], "Client3");

const josep = new Manager("Josep", "IT", 50000, ["Project1", "Project2"], []);
josep.addEmployee(jordi);
josep.addEmployee(pablo);

const employees: (Manager | Developer)[] = [josep, jordi, pablo, marc];

console.log(employees);

interface Tech {
	name: string;
	expo: number;
}

const pluck = <T, K extends keyof T>(objs: T[], key: K): T[K][] => {
	return objs.map(obj => obj[key]);
};

const tech: Tech[] = [
	{ name: "Javascript", expo: 4 },
	{ name: "Typescript", expo: 2 },
	{ name: "React", expo: 3 },
	{ name: "Node", expo: 3 },
];

console.log(pluck(tech, "name")); // ["Javascript", "Typescript", "React", "Node"]
console.log(pluck(tech, "expo")); // [4, 2, 3, 3]

function printNumber(num: number): void {
	console.log(num);
}

printNumber(123);

class Queue<T> {
	private data: T[] = [];

	enqueue(item: T): void {
		this.data.push(item);
	}
	dequeue(): T | undefined {
		return this.data.shift();
	}

	size(): number {
		return this.data.length;
	}
}

const myQueue = new Queue<number>();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.size());
console.log(myQueue.dequeue());
console.log(myQueue.size());

interface Student {
	name: string;
	grades: number[];
}

const students: Student[] = [
	{ name: "Alice", grades: [90, 80, 85] },
	{ name: "Bob", grades: [70, 40, 80] },
	{ name: "Charlie", grades: [80, 80, 90] },
];

const passingStudents: Student[] = [];

students.forEach(student => {
	const isPassing = student.grades.every(grade => grade >= 50);
	if (isPassing) {
		passingStudents.push(student);
	}
});

console.log(passingStudents);

function calculateFrecuency(numbers: number[]): Record<number, number> {
	const frecuency: Record<number, number> = {};

	for (const num of numbers) {
		frecuency[num] = frecuency[num] ? frecuency[num] + 1 : 1;
	}
	return frecuency;
}

console.log(calculateFrecuency([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));

const boolToWord = (bool: boolean): string => {
	return bool ? "Yes" : "No";
};

function greet(name: string): string {
	return `Hello ${name}`;
}

export class Challenge {
	static solution(num: number): number {
		let total: number = 0;
		for (let i: number = 0; i < num; i++) {
			total += i % 5 == 0 || i % 3 == 0 ? i : 0;
		}
		return total;
	}
}

const longest = (s1: string, s2: string): string => {
	return [...new Set(s1 + s2)].sort((a, b) => a.localeCompare(b)).join("");
};

const smash = (words: string[]): string => {
	return words.join(" ");
};

console.log(smash(["hello", "world"]));

const loveFunc = (flower1: number, flower2: number): boolean => {
	return (flower1 + flower2) % 2 !== 0;
};

const powersOfTwo = (n: number): number[] => {
	return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
};

const pigIt = (str: string): string => {
	return str
		.split(" ")
		.map(word => word.slice(1) + word[0] + "ay")
		.join(" ");
};

const narcisistic = (value: number): boolean => {
	return (
		value ===
		value
			.toString()
			.split("")
			.reduce((a, b) => a + parseInt(b) ** value.toString().length, 0)
	);
};

console.log(narcisistic(153));

const digitalRoot = (n: number): number => {
	return n < 10
		? n
		: digitalRoot(
				n
					.toString()
					.split("")
					.reduce((a, b) => a + parseInt(b), 0)
		  );
};

const perimeter = (n: number): number => {
	let fib: number[] = [1, 1];
	for (let i = 2; i <= n; i++) {
		fib.push(fib[i - 1] + fib[i - 2]);
	}
	return fib.reduce((a, b) => a + b) * 4;
};

const getSum = (a: number, b: number): number => {
	if (a === b) return a;
	return a + b;
};
