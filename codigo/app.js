var today = new Date();
today.getMonth();
var person = {
	name: "Max",
	age: 30,
};
var squareDigits = function (num) {
	return num
		.toString()
		.split("")
		.map(Number)
		.map(function (x) {
			return x * x;
		})
		.reduce(function (a, b) {
			return a + b;
		});
};
console.log(squareDigits(9119));

const emps = new Map([
	["Mark", 2003],
	["anita", 2001],
	["JOHN", 2010],
	["Mary", 2010],
	["BOB", 2009],
	["ben", 2007],
]);

emps.set("bob", 2008);
emps.set("BEN", 2009);

console.log(emps.get("Mary"));
console.log(emps.has("JOHN"));
console.log(emps.delete("anita"));
console.log(emps);

var demo = 10;
console.log(demo + ", " + demo2);
var demo2 = 20;

var example = 53;
var example2;
console.log(example + ", " + example2);
example2 = 70;

var declare = 36;
declare2 = 62;
console.log(declare + ", " + declare2);
var declare2;

var half = 49;
console.log(half + ", " + half2);
var half2;

half2 = 84;

function abc(object) {
	return typeof object[Symbol.iterator] === "function";
}

console.log(abc(new Map()));
console.log(abc(new Set()));

let x1 = new Date("1955-01-03");
let x2 = new Date("2019-08-22");
let x3 = new Date("1979-05-05");

console.log(x1);
console.log(x2);
console.log(x3);
