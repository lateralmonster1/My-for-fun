let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}


function setTimeout() {
    time.innerHTML = secondsElapsed;
}

function timer() {
secondsElapsed++; 
setTimeout()
}

function startClock() {
  if (interval) resetClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}


function resetClock() {
secondsElapsed = 0
setTime()
}