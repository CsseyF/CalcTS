import { question } from 'readline-sync';
export {}

function main() : void 
{
    const Strnum1: string = question('Digite o primeiro numero\n')
    const op: string = question('Digite a operacao\n')
    const Strnum2: string = question('Digite o segundo numero\n')
    
    const validInput: boolean = isNumber(Strnum1) && isOperator(op) && isNumber(Strnum2);

    if (validInput)
    {
        const firstNum : number = parseInt(Strnum1);
        const secondNum : number = parseInt(Strnum2);
        const result = calculate(firstNum, op, secondNum);

        console.log(result);

    } else {
        console.log('\nEntrada invalida');
        main();
    }

}

function calculate(firstNum : number, op : string, secondNum : number)
{
    switch(op)
    {
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


function isOperator(op : string) : boolean
{
    switch(op)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}


function isNumber(str: string) : boolean
{
    const maybeNum = parseInt(str);
    const isNum : boolean = !isNaN(maybeNum);
    return isNum;
}
main();