//handle when the number is pressed. It renders the number into #input element
function number(number) {
    var input = document.getElementById('input');
    input.value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    var input = document.getElementById('input');

    if (operator === 'AC') {
        input.value = '';
    } else if (operator === 'Del') {
        input.value = input.value.slice(0, -1);
    } else {
        input.value += operator;
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    var input = document.getElementById('input');
    input.value = eval(input.value);
}