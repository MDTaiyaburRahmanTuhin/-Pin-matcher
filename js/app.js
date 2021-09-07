function getpin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        //console.log('got 3 digit', pin);
        return getpin();
    }
}
function generatePin() {
    const pin = getpin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        //console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    const failAgain = document.getElementById('try')
    const typedNumber = document.getElementById('typed-numbers').value;
    if (pin == typedNumber) {

        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failAgain.style.display = 'block'
        failError.style.display = 'block';
        successMessage.style.display = 'none';

    }
}
