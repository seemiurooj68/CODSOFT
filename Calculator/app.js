let result = document.getElementById("result");
let expression = document.getElementById("expression");

let currentNum = '';
let currentExp = '';
let currentOperator = null;
let operators = {
    '+': '+','-': '-','*': '*','/': '÷','sqrt': '√','square': '^2','%': '%','1/x': '1/x'
};

function appendNumber(num) {
    currentNum += num;
    Showresult();
}

function appendOperator(operator) {
    if (currentNum === '') return;
    if (currentOperator !== null) calculate();
    currentExp = currentNum;
    currentOperator = operator;
    currentNum = '';
    Showresult();
}

function calculate() {
    let resultValue;
    let previousNum = parseFloat(currentExp);
    let currentNumberParsed = parseFloat(currentNum);

    switch(currentOperator) {
        case '+':
            resultValue = previousNum + currentNumberParsed;
            break;
        case '-':
            resultValue = previousNum - currentNumberParsed;
            break;
        case '*':
            resultValue = previousNum * currentNumberParsed;
            break;
        case '/':
            if (currentNumberParsed == 0) {
                alert("Not divisible by 0");
                return;
            }
            resultValue = previousNum / currentNumberParsed;
            break;
        case 'sqrt':
            resultValue = Math.sqrt(previousNum);
            break;
        case 'square':
            resultValue = previousNum * previousNum;
            break;
        case '%':
            resultValue = previousNum / 100;
            break;
        case '1/x':
            if (previousNum === 0) {
                alert("Not divisible by 0");
                return;
            }
            resultValue = 1 / previousNum;
            break;
        default:
            resultValue = currentNum;
            break;
    }

    currentNum = resultValue.toString();
    currentExp = '';
    currentOperator = null;

    Showresult();
}

function clearAll() {
    currentNum = '';
    currentExp = '';
    currentOperator = null;
    Showresult();
}

function Showresult(){
    result.value = currentNum;
    expression.value = currentExp + (currentOperator !== null ? ' ' + operators[currentOperator] : '');
}

document.addEventListener('keydown', function(event) {
    var key = event.key; 

    if (/[0-9.]/.test(key)) {
        appendNumber(key);
    }
    else {
        switch (key) {
            case '+':
            case '-':
            case '*':
            case '/':
                appendOperator(key);
                break;
            case '=': 
            case 'Enter':
                calculate();
                break;
            case 'Backspace':  
                clearAll();
                break;
            case '%':
                appendOperator('%');
                break;
            case '^':
                appendOperator('square');
                break;
            case 's':
                appendOperator('sqrt');
                break;
        }
    }
});



























































