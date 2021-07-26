"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var Strnum1 = readline_sync_1.question('Digite o primeiro numero\n');
    var op = readline_sync_1.question('Digite a operacao\n');
    var Strnum2 = readline_sync_1.question('Digite o segundo numero\n');
    var validInput = isNumber(Strnum1) && isOperator(op) && isNumber(Strnum2);
    if (validInput) {
        var firstNum = parseInt(Strnum1);
        var secondNum = parseInt(Strnum2);
        var result = calculate(firstNum, op, secondNum);
        console.log(result);
    }
    else {
        console.log('\nEntrada invalida');
        main();
    }
}
function calculate(firstNum, op, secondNum) {
    switch (op) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(op) {
    switch (op) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
