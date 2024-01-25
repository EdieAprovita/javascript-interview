// const user = {
// 	name: 'Juan',
// 	id: 1,
// };

// const user2 = {
//   name: 'Pedro',
//   id: 2,
// };

// const book1 = {
// 	title: 'The Catcher in the Rye',
// 	author: 'J.D Salinger',
// 	isbn: '0316769487',
// 	category: 'Classic Literature',
// };
// const book2 = {
// 	title: 'To Kill a Mockingibrd',
// 	author: 'Harper Lee',
// 	isbn: '0446310786',
// 	category: 'Classic Literature',
// };

// const book3 = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   isbn: '0316769487',
//   category: 'Classic Literature',
// };

// user.books = [book1, book2];
// console.log(user);

// const library = [user];

// library[0].books.push(book3);
// console.log(Object.values(library[0].books));

// const book1 = {
// 	author: 'Charlotte Bronte',
// 	publishers: [
// 		(publisher1 = {
// 			companyName: 'AB',
// 		}),
// 		(publisher2 = {
// 			companyName: 'CD',
// 		}),
// 	],
// };

// const cloneObject = obj => {
// 	let clone = {};
// 	for (let prop in obj) {
// 		if (obj[prop] != null && typeof obj[prop] == 'object') {
// 			clone[prop] = cloneObject(obj[prop]);
// 		} else {
// 			clone[prop] = obj[prop];
// 		}
// 	}
// 	return clone;
// };

// const book1 = {
// 	author: 'Charlotte Bronte',
// 	publishers: [{ companyName: 'AB' }, { companyName: 'CD' }],
// };

// const book5 = JSON.parse(JSON.stringify(book1)); // => create the copy: book5

// book1.publishers[0] = {
// 	companyName: 'Super Cool Company', // => change the deep property of the book1
// };
// book1.author = 'William Shakespeare'; // change the property of the book1
// console.log(book1);
// console.log(book5);

const person = {
	name: "Juan",
	age: 23,
	profession: "Developer",
	education: "Master",
	address: {
		street: "Calle Luna",
		number: "123",
		city: "Ciudad de Mexico",
		country: "Mexico",
	},
};

console.log(Object.getOwnPropertyDescriptors(person));

const names = "Edgar Castro";

const alumno = {
	names: "Alfredo Edgar",
	lastNames: "Castro",
	edad: 23,
	father: {
		names: "Edgar",
		age: 60,
	},

	sayHello() {
		console.log(
			`Hello my name is ${alumno.names} ${alumno.lastNames} and I have ${alumno.edad}`
		);
	},
};

console.log(
	alumno.sayHello(
		`Hello my name is ${alumno.names} ${alumno.lastNames} and I have ${alumno.edad}`
	)
);

const disputeRequest = [
	{
		carrierRequestSeq: "440",
		requestType: "DISPUTE",
		resourceType: "SHIPMENT",
		resourceId: "22343",
		resourceCode: "V",
		Vendorbdip: "4545",
		Notes: "Notes",
		userType: "CARRIER",
	},
];

console.log(typeof disputeRequest);

const book = {
	title: "The Catcher in the Rye",
	author: "J.D Salinger",
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData);
