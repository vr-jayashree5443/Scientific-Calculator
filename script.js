function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearEntry() {
    let currentDisplay = document.getElementById('display').value;
    currentDisplay = currentDisplay.slice(0, -1);
    document.getElementById('display').value = currentDisplay;
}

function calculateResult() {
    let expression = document.getElementById('display').value;
    expression = expression.replace(/inv/g, '1/');
    
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

