import movies, { Movies } from "./moviesData";

function getAllDirectors(movies: Array<Movies>): Array<string> {
	return [...new Set(movies.map(movie => movie.director))].sort((a, b) =>
		a.localeCompare(b)
	);
}

console.log("All Directors:", getAllDirectors(movies));

function howManyMovies(movies: Array<Movies>): number {
	return movies.filter(
		movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
	).length;
}

console.log("Steven Spielberg:", howManyMovies(movies));

function scoresAverage(movies: Array<Movies>): number {
	if (movies.length === 0) return 0;

	let moviesWithScore = 0;
	const totalScore = movies.reduce((acc, movie) => {
		if (movie.score !== undefined && movie.score !== null) {
			moviesWithScore++;
			return acc + movie.score;
		}
		return acc;
	}, 0);

	return moviesWithScore > 0
		? parseFloat((totalScore / moviesWithScore).toFixed(2))
		: 0;
}

console.log("Average Movies:", scoresAverage(movies));

function dramaMoviesScore(movies: Array<Movies>): number {
	const dramaMovies = movies.filter(
		movie => movie.genre.includes("Drama") && movie.score
	);
	const scoreSum = dramaMovies.reduce((acc, movie) => acc + movie.score, 0);

	return Number((scoreSum / dramaMovies.length).toFixed(2)) || 0;
}

console.log("Drama movies:", dramaMoviesScore(movies));

function orderByYear(movies: Array<Movies>): Array<Movies> {
	return movies.sort((a, b) => {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		}
		return a.year - b.year;
	});
}

console.log(orderByYear(movies));

function turnsHoursToMinutes(movies: Array<Movies>): Array<Movies> {
	return movies.map(movie => {
		const newMovie = { ...movie };
		const timeParts = newMovie.duration.match(/\d+/g);
		let totalMinutes = 0;

		if (timeParts) {
			if (timeParts.length === 2) {
				totalMinutes += parseInt(timeParts[0]) * 60;
				totalMinutes += parseInt(timeParts[1]);
			} else if (newMovie.duration.includes("h") && timeParts.length === 1) {
				totalMinutes += parseInt(timeParts[0]) * 60;
			} else {
				totalMinutes += parseInt(timeParts[0]);
			}
		}

		newMovie.duration = totalMinutes.toString();
		return newMovie;
	});
}

const moviesWithMinutes = turnsHoursToMinutes(movies);
console.log("Duration H", moviesWithMinutes);

function bestYearAvg(movies: Array<Movies>): string {
	if (movies.length === 0) return "";

	const years = [...new Set(movies.map(movie => movie.year))].sort((a, b) => a - b);
	let bestYear = "";
	let bestScore = 0;

	years.forEach(year => {
		const yearMovies = movies.filter(movie => movie.year === year);
		const score = scoresAverage(yearMovies);

		if (score > bestScore) {
			bestYear = year.toString();
			bestScore = score;
		}
	});

	return `The best year was ${bestYear} with an average score of ${bestScore}`;
}

console.log("Best Year Average:", bestYearAvg(movies));
