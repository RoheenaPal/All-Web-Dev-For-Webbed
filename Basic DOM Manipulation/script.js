let body = document.querySelector(".body");
let blueButton = document.querySelector(".change-blue");
let greenButton = document.querySelector(".change-green");

let changeColorBlue = () => {
    body.classList.add("color-blue");
    body.classList.remove("color-green");
}
let changeColorGreen = () => {
    body.classList.add('color-green');
    body.classList.remove('color-blue');
}

//Keypress Event
document.addEventListener('keypress', function(e) {
    if (e.key === 'b')
        changeColorBlue();

    if (e.key === 'g')
        changeColorGreen();
});

//Blue Button Functionality

blueButton.addEventListener('click', changeColorBlue);

//Green Button Functionality

greenButton.addEventListener('click', changeColorGreen);