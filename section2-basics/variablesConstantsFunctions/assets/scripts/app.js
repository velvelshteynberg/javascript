const defaultResult = 15;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', add())



