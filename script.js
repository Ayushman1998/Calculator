let operand1 = '';
let operand2 = '';
let operator = '';
let operatorType = '';


function currentDisplay(type){
    if(type)
    {
        document.getElementById("display").innerText = type + operand1;
        return;
    }
    document.getElementById("display").innerText = operand1 + operator + operand2;
}


function digitFunction(num){
    console.log("typed",num);

    if(operand1 === '' || operator === '')
    {
        operand1 = operand1 + num;

        console.log("operand1",operand1)
        currentDisplay();
        return;
    }

    operand2 = operand2 + num;

    console.log("operand2",operand2)
    currentDisplay();
}

function controlsFunction(operatorInput){
    operator = operatorInput;
    currentDisplay();
    operatorType = '';
}

function controlsFunction2(operatorInput){

    if(operatorInput === 'fraction')
    {
        currentDisplay("1/");
        operator = operatorInput;
        operatorType = 'unary';
        return;
    }

    if(operatorInput === 'sqre')
    {
        currentDisplay("^2");
        operator = operatorInput;
        operatorType = 'unary';
        return;
    }

    if(operatorInput === 'sqrt')
    {
        currentDisplay("sqrt");
        operator = operatorInput;
        operatorType = 'unary';
        return;
    }
}

function evaluateFunction(){

    if(operatorType === 'unary' && operand1!=='' && operator != '')
    {
        let parseOperand1 = parseInt(operand1);

        if(operator === 'fraction')
        {
            finalAnswer = 1/parseOperand1;
        }

        if(operator === 'sqre')
        {
            finalAnswer = parseOperand1**2;
        }

        if(operator === 'sqrt')
        {
            finalAnswer = Math.sqrt(parseOperand1);
        }

        document.getElementById("display").innerText = finalAnswer;
        
        operand1 = '';
        operand2 = '';
        operator = '';
        console.log("answer",finalAnswer);

        return;
    }

    if(operand1 !== '' && operand2 !== '' && operator !== ''){
        let parseOperand1 = parseInt(operand1);
        let parseOperand2 = parseInt(operand2);
        let finalAnswer = eval(parseOperand1 + operator + parseOperand2)
        finalAnswer = finalAnswer.toFixed(4);
        finalAnswer = 1*finalAnswer;
        document.getElementById("display").innerText = finalAnswer;
        
        operand1 = '';
        operand2 = '';
        operator = '';
        console.log("answer",finalAnswer);
    }
}

function reset(){
    operand1 = '';
    operand2 = '';
    operator = '';
    operatorType = '';
    document.getElementById("display").innerText = 0;
}