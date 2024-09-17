let timer;
let running = false;
let seconds = 0;
let minutes = 0;

function startClock() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
    }
}

function stopClock() {
    running = false;
    clearInterval(timer);
}

function resetClock() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    document.getElementById('time').textContent = '00:00';
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('time').textContent = `${formattedMinutes}:${formattedSeconds}`;
}
