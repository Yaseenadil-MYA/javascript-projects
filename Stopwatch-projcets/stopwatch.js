let timeDisplay = document.querySelector(".time-display");
let stopbtn = document.getElementById("stopbtn");
let startbtn = document.getElementById("startbtn");
let resetbtn = document.getElementById("resetbtn");

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

startbtn.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function() {
    clearInterval(timerId);
    timerId = null;
});

resetbtn.addEventListener('click', function() {
    clearInterval(timerId);
    timerId = null;
    timeDisplay.textContent = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

function startTimer() {
    msec += 1;
    if (msec === 100) {
        msec = 0;
        secs += 1;
        if (secs === 60) {
            secs = 0;
            mins += 1;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timeDisplay.textContent = `${minsString} : ${secString} : ${msecString}`;
}