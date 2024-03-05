const axios = require("axios");

const { BASE_URL } = require("./baseUrl");

async function cityWeather(city) {
	if (typeof city !== "string") throw new Error("not a string");
	if (city.trim() === "") throw new Error("string is empty");

	const url = `${BASE_URL}&q=${encodeURIComponent(city.toLowerCase())}`;

	try {
		const response = await axios.get(url);
		const { main } = response.data;
		if (!response.ok || data.cod == "404") {
			throw new Error("city not found");
		}

		return main;
	} catch (error) {
		throw new Error(error.message);
	}
}

module.exports = {
	cityWeather,
};
