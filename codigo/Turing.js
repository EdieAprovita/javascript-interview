let bankAccount = {
	accountNumber: "1234567890",
	customerId: "A103049945",
	currentBalance: "5000",
	isSelected: true,
	addressLine1: "1234 Main St",
	addressLine2: "Apt 101",
	contactNumber: "1234567890",
};

function sendToApi() {
	fetch("https://api.turing.com")
		.then(response => response.json())
		.then(data => {
			console.log(data);
		});
}

sendToApi();

const customerRide = [
	{
		riderId: "XC1452",
		walletBalance: 58960,
		totalDistanceInKm: 5.658,
		dateOfTravel: new Date("02-02-2023"),
	},
];

customerRide[-1] = {
	riderId: "XC1451",
	walletBalance: 8569,
	totalDistanceInKm: 14785,
	dateOfTravel: new Date("03-02-2023"),
};

customerRide[1] = {
	riderId: "XC14518",
	walletBalance: 75812,
	totalDistanceInKm: 6931,
	dateOfTravel: new Date("04-02-2023"),
};

function printCustomerRides() {
	let distance = 0;
	for (const element of customerRide) {
		distance += element.totalDistanceInKm;
	}
	console.log(`The distance traveled by all customers is ${distance}.`);

	distance = 0;
	for (let value of customerRide) {
		distance += value.totalDistanceInKm;
	}
	console.log(`The distance traveled by all customers is ${distance}.`);
}

const bindedCustomerRides = printCustomerRides.bind(customerRide);
bindedCustomerRides();

class BankAccount {
	static changeAccountType(accountType) {
		this.newAccountType = accountType;
		return this.newAccountType;
	}

	constructor({ newAccountType = "Normal" } = {}) {
		this.newAccountType = newAccountType;
	}
}

const custumer = new BankAccount({ newAccountType: "Gold" });
console.log(BankAccount.changeAccountType("Preferred"));

const customerRide = {
	riderId: "XC1452",
	walletBalance: 58960,
	totalDistanceInKm: 5.658,
	dateOfTravel: new Date("02-02-2023"),
	lastTraveledOn: undefined,
	previousDues: Infinity,
	uniqueRegex: /.*$/,
};

function calculateFare() {
	const clone = JSON.parse(JSON.stringify(this));
	console.log(clone, "Clone");
	clone.walletBalance -= 5.5;
	console.log(
		`The rider traveled on date ${clone.dateOfTravel} and has wallet balance of ${clone.walletBalance} and has last traveled on ${clone.lastTraveledOn}`
	);
}

const bindedCalculateFare = calculateFare.bind(customerRide);
bindedCalculateFare();

function calculateInterest(currentBalance, customerAge) {
	try {
		if (customerAge > 150) {
			throw new Error();
		}
		if (currentBalance > 0) {
			let interest = (currentBalance * 2.5) / 100;
			if (customerAge > 60) {
				interest += 50;
			}
			return interest;
		}
		throw new Error();
	} catch {
		console.error(
			"Interest cannot be calculated on zero balance or the age cannot be greater than 150"
		);
	}
}

calculateInterest(0, 60);

const bank = {
	customer: {
		currentBalance: 1000,
		deductCharges(charges, customerType) {
			if (customerType === "Gold") {
				return this.currentBalance - (charges - (charges * 10) / 100);
			} else if (customerType === "Preferred") {
				return this.currentBalance - (charges - (charges * 5) / 100);
			} else {
				return this.currentBalance - charges;
			}
		},
		addQuaterlyInterest: customerType => {
			if (customerType === "Gold") {
				return this.currentBalance + (this.currentBalance * 3.5) / 100;
			} else if (customerType === "Preferred") {
				return this.currentBalance + (this.currentBalance * 2.5) / 100;
			} else {
				return this.currentBalance + (this.currentBalance * 1.5) / 100;
			}
		},
	},
};

console.log(bank.customer.deductCharges(25, "Preferred"));
console.log(bank.customer.addQuaterlyInterest("Gold"));

const bankAccount2 = [
	{
		customerId: "A10120123",
		accountNumber: "502362145",
		balance: 5000,
		addressLine1: "Parkway Avenue",
		addressLine2: "United States",
	},
	{
		customerId: "A101201231",
		accountNumber: "5023621451",
		balance: 10000,
		addressLine1: "CA Avenue",
		addressLine2: "United States",
	},
];

for (const element of bankAccount2) {
	Object.freeze(element);
}

bankAccount2[1].balance = 200;

console.log(bankAccount2[1].balance);

const billDetails = [
	{
		billId: "0998",
		billAmount: 58960,
		billDiscount: 5,
		date: new Date("02-02-2023"),
	},
	{
		billId: "09876",
		billAmount: 7813,
		billDiscount: 2.5,
		date: new Date("03-02-2023"),
	},
	{
		billId: "0998",
		billAmount: 0,
		billDiscount: 0,
		date: new Date("09-02-2023"),
	},
];

function server(index) {
	try {
		billDetails[index].billDiscount;
	} catch (error) {
		throw new Error("Method: Server", { customMessage: error });
	}
}

try {
	server(3);
} catch (exception) {
	console.log(`${exception.message} ${exception.customMessage}`);
}

function deleteCustomerById(customers, value) {
	let index = customers.findIndex(customer => customer.id === value);
	if (index > -1) {
		customers.splice(index, 1);
	}
	return customers;
}

const customers = [
	{ id: 1, name: "Jhon" },
	{ id: 2, name: "Jack" },
	{ id: 3, name: "Jin" },
	{ id: 3, name: "Jhonny" },
	{ id: "3", name: "Julia" },
];

console.log(deleteCustomerById(customers, "3"));
