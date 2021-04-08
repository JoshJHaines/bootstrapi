/********************
 * SELECTOR QUERIES *
 ********************/

const dogButton = document.getElementById("dogButton");
const dogImage = document.getElementById("dogImage");
const weatherButton = document.getElementById("weatherButton");
const weatherInput = document.getElementById("weatherInput");



/********
 * APIS *
 ********/
const dogURL = "https://dog.ceo/api/breeds/image/random";
let weatherURL = ""


/******************
 * EVENT LISTENER *
 ******************/
dogButton.addEventListener("click", dogButtonClick);
weatherButton.addEventListener("click", weatherButtonClick);

/*******************
 * EVENT FUNCTIONS *
 *******************/

function dogButtonClick() {
	console.log("Button Clicked");
	getDogImage();
}

function weatherButtonClick() {
    const fullCity = weatherInput.value
    const city = fullCity.split(" ").join("");
    weatherURL = `https://goweather.herokuapp.com/weather/${city}`;
	console.log("Button Clicked");
	console.log("City Input:", fullCity);
    console.log("API City Input:", city);
	console.log("URL for City:", weatherURL);
	getWeather();
}

/********************
 * HELPER FUNCTIONS *
 ********************/

function getDogImage() {
	fetch(dogURL)
		.then((res) => res.json())
		.then((data) => {
			console.log("success!");
			console.log(data.message);
			dogImage.src = data.message;
		});
}

function getWeather() {
	fetch(weatherURL)
		.then((res) => res.json())
		.then((data) => {
			console.log("success!");
			console.log(data);
		});
}
