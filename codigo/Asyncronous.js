const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const words = [
	"mystery",
	"brother",
	"aviator",
	"crocodile",
	"pearl",
	"orchard",
	"crackpot",
];

function randomWord(words) {
	return words[Math.floor(Math.random() * words.length)];
}

function startGame() {
	const word = randomWord(words);
	let attempts = 3;

	console.log("Bienvenido a Adivina la Palabra...");
	console.log("Tienes 3 intentos para adivinar la palabra oculta.");

	const makeGuess = () => {
		rl.question(`Adivina la palabra. Intentos restantes: ${attempts}: `, guess => {
			if (guess === word) {
				console.log("¡Ganaste!");
				rl.close();
			} else {
				console.log("Incorrecto.");
				attempts--;
				if (attempts > 0) {
					makeGuess();
				} else {
					console.log(`Fin del juego. La palabra era: ${word}`);
					rl.close();
				}
			}
		});
	};

	makeGuess();
}

startGame();
