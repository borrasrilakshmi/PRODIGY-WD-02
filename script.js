let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStopButton').innerText = 'Start';
    } else {
        timer = setInterval(runStopwatch, 1000);
        document.getElementById('startStopButton').innerText = 'Stop';
    }
    isRunning = !isRunning;
}

function runStopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById('display').innerText = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('startStopButton').innerText = 'Start';
}

function pad(val) {
    return val > 9 ? val : '0' + val;
}
