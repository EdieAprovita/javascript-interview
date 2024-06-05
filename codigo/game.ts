type Move = "rock" | "paper" | "scissors" | "lizard" | "spock";

const moves: Move[] = ["rock", "paper", "scissors", "lizard", "spock"];

const winConditions: Record<Move, Move[]> = {
	rock: ["scissors", "lizard"],
	paper: ["rock", "spock"],
	scissors: ["paper", "lizard"],
	lizard: ["spock", "paper"],
	spock: ["scissors", "rock"],
};

function getRandomMove(): Move {
	const randomIndex = Math.floor(Math.random() * moves.length);
	return moves[randomIndex];
}

function getWinner(playerMove: Move, computerMove: Move): string {
	if (playerMove === computerMove) {
		return "It's a tie!";
	}
	if (winConditions[playerMove].includes(computerMove)) {
		return "Player wins!";
	}
	return "Computer wins!";
}

// Prueba el código

const playerMove = getRandomMove();
const computerMove = getRandomMove();
console.log(`Player move: ${playerMove}`);
console.log(`Computer move: ${computerMove}`);

console.log(getWinner(playerMove, computerMove));
