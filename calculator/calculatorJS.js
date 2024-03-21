/* function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    var expression = document.getElementById("display").value;
    var result = eval(expression);
    document.getElementById("display").value = result;
} */

const display = document.querySelector('#display');
/* const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');

btn7.addEventListener('click', () => {
    display.value += btn7.value;
});
btn8.addEventListener('click', () => {
    display.value += btn8.value;
});
btn9.addEventListener('click', () => {
    display.value += btn9.value;
}); */

const numbers = document.querySelectorAll('#nbr');
for (let number of numbers) {
    number.addEventListener('click', () => {
        display.value += number.value;
    })
}