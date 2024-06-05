class ConstructionGame {
	private table: number[][];
	private width: number;
	private length: number;

	constructor(length: number, width: number) {
		this.length = length;
		this.width = width;
		this.table = Array.from({ length }, () => Array(width).fill(0));
	}

	addCubes(cubes: boolean[][]): void {
		for (let i = 0; i < cubes.length; i++) {
			for (let j = 0; j < cubes[i].length; j++) {
				if (cubes[i][j]) {
					this.table[i][j]++;
				}
			}
		}
	}

	getHeight(): number {
		let maxHeight = 0;
		for (let i = 0; i < this.length; i++) {
			for (let j = 0; j < this.width; j++) {
				if (this.table[i][j] > maxHeight) {
					maxHeight = this.table[i][j];
				}
			}
		}
		return maxHeight;
	}
}

// Prueba el código
const game = new ConstructionGame(2, 2);
game.addCubes([
	[true, true],
	[true, false],
]);
console.log(game.getHeight()); // debería imprimir 2

game.addCubes([
	[false, true],
	[true, true],
]);
console.log(game.getHeight()); // debería imprimir 2
