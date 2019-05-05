
const h1Text = document.createElement('h1');
document.querySelector('body').appendChild(h1Text);
const clickElement = document.querySelector('body');
const textCenter = document.querySelector('h1');

const pText = document.createElement('p');
document.querySelector('body').appendChild(pText);

textCenter.textContent = 'Click';
clickElement.addEventListener('click', function (e) {
    const paragraphCenter = document.querySelector('p');
    let x = e.clientX;
    let y = e.clientY;

    textCenter.textContent = x + " | " + y;

    if ((x % 2) !== 1 && (y % 2) !== 1) {
        clickElement.style.backgroundColor = 'red';
        paragraphCenter.textContent = 'if both positions are even, body is red';
    } else if ((x % 2) !== 0 && (y % 2) !== 0) {
        clickElement.style.backgroundColor = 'blue';
        paragraphCenter.textContent = 'if both positions are odd body is blue';
    } else {
        clickElement.style.backgroundColor = 'green';
        paragraphCenter.textContent = 'if positions are odd and even body is green';
    }

});

