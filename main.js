/********************
 * SELECTOR QUERIES *
 ********************/

const dogButton = document.getElementById('dogButton')
const dogImage = document.getElementById('dogImage')


/********
 * APIS *
 ********/
const URL = 'https://dog.ceo/api/breeds/image/random'


/******************
 * EVENT LISTENER *
 ******************/
dogButton.addEventListener("click", buttonClick)


/*************
 * FUNCTIONS *
 *************/

function buttonClick() {
    console.log("Button Clicked")
    getDogImage()
}

function getDogImage() {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            console.log('success!');
            console.log(data.message);
            dogImage.src = data.message
    });
}