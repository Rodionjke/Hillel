'use strict'
const timerParagraph = document.querySelector('p');
let totalSeconds = 85;

const timer = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let timerMinutes = minutes.toString().padStart(2, '0');
    let timerSeconds = seconds.toString().padStart(2, '0');

    timerParagraph.textContent = `${timerMinutes}:${timerSeconds}`;

    totalSeconds -= 1;

    if (totalSeconds < 0) {
        clearInterval(timer);
        timerParagraph.textContent = "00:00";
    }
}, 1000);