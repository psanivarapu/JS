const display = document.querySelector('#display');

let operand1 = 0;
let operand2 = 0;
let operator = "";

const allButtons = document.querySelectorAll('input[type="button"]');
for (let btn of allButtons) {
    btn.addEventListener('click', function () {
        const btnValue = btn.value;
        if (!isNaN(parseInt(btnValue))) {
            display.value += btnValue;
        }
        else if (btnValue === "=") {
            calculate();
        } else {
            operand1 = parseInt(display.value);
            operator = btnValue;
            display.value = "";
        }
    });
}

function calculate() {
    switch (operator) {
        case '+':
            operand2 = parseInt(display.value);
            display.value = operand1 + operand2;
            break;
        case '-':
            operand2 = parseInt(display.value);
            display.value = operand1 - operand2;
            break;
        case '*':
            operand2 = parseInt(display.value);
            display.value = operand1 * operand2;
            break;
        case '/':
            operand2 = parseInt(display.value);
            if (operand2 === 0) {
                display.value = "cannot divide by zero"
            } else {
                display.value = operand1 / operand2;
            }
            break;
        case 'C':
            display.value = "";
            break;
    }
}
