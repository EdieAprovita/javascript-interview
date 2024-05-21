/**
 * Requerimientos del reto Platzi:
 *
 * 1.- El usuario debe poder ingresar su usuario y contraseña.
 * 2.-El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos.
 * 3.-El usuario  y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar eñ timeline del usuario.
 * 4.-Si el usuario o contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.
 */

interface User {
	username: string;
	password: string;
}

interface Timeline {
	username: string;
	timeline: string;
}

const usersDatabase: User[] = [
	{
		username: "carlos",
		password: "1234",
	},
	{
		username: "juan",
		password: "1234",
	},
	{
		username: "pedro",
		password: "1234",
	},
];

const usersTimeline: Timeline[] = [
	{
		username: "carlos",
		timeline: "Este es el timeline de Carlos",
	},
	{
		username: "juan",
		timeline: "Este es el timeline de Juan",
	},
	{
		username: "pedro",
		timeline: "Este es el timeline de Pedro",
	},
];

const username = prompt("Ingresa tu nombre de usuario");
const password = prompt("Ingresa tu contraseña");

function isUserValid(username: string, password: string): boolean {
	for (let user of usersDatabase) {
		if (user.username === username && user.password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username: string, password: string): void {
	if (isUserValid(username, password)) {
		alert("Bienvenido al timeline");
		console.log(usersTimeline.find(user => user.username === username)?.timeline);
	} else {
		console.log("Usuario o contraseña incorrectos");
	}
}

signIn(username ?? "", password ?? "");

let fruta = { naranja: "🍊" };
let vegetal = fruta;
vegetal.naranja = "🥬";
console.log(fruta);
