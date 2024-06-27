// Select HTML elements by their IDs and assign them to variables
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");

// Select elements for flipping sheets and assign them to variables
const dayFlip = document.getElementById("flip-sheet-day");
const hourFlip = document.getElementById("flip-sheet-hour");
const minFlip = document.getElementById("flip-sheet-min");
const secFlip = document.getElementById("flip-sheet-sec");

// Initialize countdown values
let days = Math.floor(Math.random() * 34);
let hours = 24;
let minutes = 59;
let seconds = 59;

// Function to display the day value with leading zero if less than 10
const dayValue = () => {
	if (days < 10) {
		day.innerText = `0${days}`;
	} else {
		day.innerText = days;
	}
};

// Function to display the hour value with leading zero if less than 10
const hourValue = () => {
	if (hours < 10) {
		hour.innerText = `0${hours}`;
	} else {
		hour.innerText = hours;
	}
};

// Function to display the minute value with leading zero if less than 10
const minValue = () => {
	if (minutes < 10) {
		min.innerText = `0${minutes}`;
	} else {
		min.innerText = minutes;
	}
};

// Function to display the second value with leading zero if less than 10
const secValue = () => {
	if (seconds < 10) {
		sec.innerText = `0${seconds}`;
	} else {
		sec.innerText = seconds;
	}
};

// Function to update the countdown timer and perform transitions
const timer = () => {
	dayValue();
	hourValue();
	minValue();
	secValue();

	seconds--;

	if (seconds < 0 && minutes > 0) {
		seconds = 59;
		minutes--;
		flip_anime(minFlip);
	}

	if (minutes <= 0 && hours > 0) {
		minutes = 59;
		hours--;
		flip_anime(hourFlip);
	}

	if (hours <= 0 && days > 0) {
		hours = 24;
		days--;
		flip_anime(dayFlip);
	}

	if (seconds < 0 && hours == 0 && minutes == 0 && days == 0) {
		clearInterval(stopTimer);
		clearInterval(stopAnime);
	}
};

// Set an interval to run the timer function every 1000ms (1 second)
const stopTimer = setInterval(timer, 1000);

// Function to toggle the "flip" class for seconds flip animation
const flip_anime_sec = () => {
	secFlip.classList.toggle("flip");
};

// Function to toggle the "flip" class for the provided element
const flip_anime = (obj) => {
	obj.classList.add("flip");

	setTimeout(() => {
		obj.classList.remove("flip");
	}, 1000);
};

// Set an interval to run the flip_anime_sec function every 1000ms for seconds flip animation
const stopAnime = setInterval(flip_anime_sec, 1000);
