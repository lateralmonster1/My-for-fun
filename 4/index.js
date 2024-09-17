let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function setTimeout() {
    time.innerHTML = secondsElapsed;
}

function timer() {
secondsElapsed++; 
setTimeout()
}

function startClock() {
    interval = setInterval(timer, 1000)
}

function stopClock() {}

function resetClock() {}