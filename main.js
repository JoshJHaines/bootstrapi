/********************
 * SELECTOR QUERIES *
 ********************/

const dogButton = document.getElementById('dogButton')
const dogImage = document.getElementById('dogImage')
const weatherButton = document.getElementById('weatherButton')


/********
 * APIS *
 ********/
const URL = 'https://dog.ceo/api/breeds/image/random'


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
}

/********************
 * HELPER FUNCTIONS *
 ********************/

function getDogImage() {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            console.log('success!');
            console.log(data.message);
            dogImage.src = data.message
    });
}