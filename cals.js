let result = document.getElementById("result");

function getResult(value) {
    if (value === "=") {
        result.value = eval(result.value);
    } else {
        result.value += value;
    }
}

function clearResult() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function getFunction(func) {
    if (func === 'reciprocal') {
        result.value = 1 / parseFloat(result.value);
    } else {
        let currentValue = parseFloat(result.value);
        result.value = eval(func + '(' + currentValue + ')');
    }
}
