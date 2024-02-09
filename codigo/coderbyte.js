const https = require("https");
const challengeToken = "rwt4ube09";

function escapeRegExp(char) {
	return char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

https
	.get("https://coderbyte.com/api/challenges/json/rest-get-simple", resp => {
		let data = "";

		resp.on("data", chunk => {
			data += chunk;
		});

		resp.on("end", () => {
			try {
				const parsedData = JSON.parse(data);
				const hobbies = parsedData.hobbies.join(", ");
				console.log("Hobbies:", hobbies);

				const formattedHobbies = challengeToken.split("").reduce((acc, char) => {
					return acc.replace(
						new RegExp(escapeRegExp(char), "g"),
						`- [${char}]-`
					);
				}, hobbies);

				console.log("Formatted Hobbies:", formattedHobbies);
			} catch (error) {
				console.error("Error parsing JSON:", error);
			}
		});
	})
	.on("error", err => {
		console.error("Error:", err.message);
	});
