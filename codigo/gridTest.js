console.log(number);

let number = 10;

function sing() {
	// declaration
	console.log("la la la");
}
let dance = function () {
	// expression
	console.log("cha cha cha");
};

sing();
dance();

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "a", "b");
console.log(arr);

const arr2 = [1, [2], [3, [4]], 5];
console.log(arr2.flat(2));
