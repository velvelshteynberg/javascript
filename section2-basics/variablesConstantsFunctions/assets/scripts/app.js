const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function  createAndWriteOutput (operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, previousResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier, 
        previousResult: previousResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}


function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
   createAndWriteOutput('+',initialResult, enteredNumber )
   writeToLog('+', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('-',initialResult, enteredNumber )
    writeToLog('-', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('*',initialResult, enteredNumber )
    writeToLog('*', initialResult, enteredNumber, currentResult);
}


function divide() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('/',initialResult, enteredNumber )
    writeToLog('/', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)



