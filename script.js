function insert(num) {
    let result = document.getElementById('result');
    result.value = result.value + num;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculate() {
    let result = document.getElementById('result');
    if (result.value) {
        result.value = eval(result.value);
    }
}