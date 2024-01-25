const api = `https://api.open-meteo.com/v1/forecast?latitude=33.75&longitude=-84.39&current_weather=true`;

class Weather {
	constructor() {
		this.baseUrl = api;
	}

	async getWeather() {
		try {
			const response = await fetch(this.baseUrl);
			const data = await response.json();
			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	}
}

const weather = new Weather();
weather.getWeather();
console.log(weather);

class Post {
	constructor(title, body, userId) {
		this.title = title;
		this.body = body;
		this.userId = userId;
	}

	display() {
		console.log(this.title, this.body, this.userId);
	}
}
