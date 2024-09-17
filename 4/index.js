let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")


function timer() {
secondsElapsed++; 
}

function startClock() {
    interval = setInterval(timer, 1000)
}

function stopClock() {}

function resetClock() {}