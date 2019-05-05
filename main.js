// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

const h1Text = document.createElement('h1');
document.querySelector('body').appendChild(h1Text);
const clickElement = document.querySelector('body');
const textCenter = document.querySelector('h1');


clickElement.addEventListener('click', function (e) {
    console.log('dziala');
    textCenter.textContent = e.clientX + " | " + e.clientY;

});

