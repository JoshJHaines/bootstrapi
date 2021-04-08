/********************
 * SELECTOR QUERIES *
 ********************/

const dogButton = document.getElementById('dogButton')
const dogImage = document.getElementById('dogImage')
const weatherButton = document.getElementById('weatherButton')
const weatherInput = document.getElementById('weatherInput')

let city = weatherInput.input

/********
 * APIS *
 ********/
const dogURL = 'https://dog.ceo/api/breeds/image/random'
const weatherURL = `https://goweather.herokuapp.com/weather/{city}`


/******************
 * EVENT LISTENER *
 ******************/
dogButton.addEventListener("click", dogButtonClick)
weatherButton.addEventListener("click", weatherButtonClick)


/*******************
 * EVENT FUNCTIONS *
 *******************/

function dogButtonClick() {
    console.log("Button Clicked")
    getDogImage()
}

function weatherButtonClick() {
    console.log("Button Clicked")
    console.log("Weather Input:", weatherInput.value)
}

/********************
 * HELPER FUNCTIONS *
 ********************/

function getDogImage() {
    fetch(dogURL)
        .then((res) => res.json())
        .then((data) => {
            console.log('success!');
            console.log(data.message);
            dogImage.src = data.message
    });
}