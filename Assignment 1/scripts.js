function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteChar() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function appendChar(char) {
    document.getElementById('display').innerText += char;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
