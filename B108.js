const clock = document.getElementById("clock");
const dialLines = document.getElementsByClassName("diallines");
const clockEl = document.getElementsByClassName("clock")[0];

for (let i = 1; i < 60; i++) {
	clockEl.innerHTML += "<div class='diallines'></div>";
	dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function setClockHands() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const hourHand = document.querySelector(".hour-hand");
	const minuteHand = document.querySelector(".minute-hand");
	const secondHand = document.querySelector(".second-hand");
	const hourDegrees = hours * 30 + minutes * (360 / 720); // * 360 / 12
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	const minuteDegrees = minutes * 6 + seconds * (360 / 3600); // *360 / 60
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
	const secondDegrees = seconds * 6;
	if (secondDegrees === 90) {
		secondHand.style.transition = "none";
	} else {
		secondHand.style.transition = "";
	}
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	clock.style.display = "block";
}

setInterval(setClockHands, 1000);
