const axios = require('axios');

function cityWeather(city) {
	return new Promise((resolve, reject) => {
		if (!city) {
			reject('string is empty');
		}
		const response = axios.get(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`
		);
		resolve(response.data);
	});
}

//Tree Height of a Binary Tree

function height (root) {
	if (!root) {
		return 0;
	}
	return 1 + Math.max(height(root.left), height(root.right));
}

console.log(height({
	value: 1,
	left: {
		value: 2,
		left: {
			value: 4,
			left: null,
			right: null
		},
		right: {
			value: 5,
			left: null,
			right: null,
		}
	},
	right: {
		value: 3,
		left: {
			value: 6,
			left: null,
			right: null
		},
		right: {
			value: 7,
			left: null,
			right: null,
		}
	}
}));