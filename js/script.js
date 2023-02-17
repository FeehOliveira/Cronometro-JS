const minutesE1 = document.querySelector("#minutes")
const secondsE1 = document.querySelector("#seconds")
const milisecondsE1 = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pausaBtn")
const resumetBtn = document.querySelector("#resumetBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;


startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resumetBtn.addEventListener("click", resumeTimer)

function startTimer() {
    interval = setInterval(() => {
        
        if (!isPaused) {
            miliseconds += 10;

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesE1.textContent = formatTime(minutes);
            secondsE1.textContent = formatTime(seconds);
            milisecondsE1.textContent = formatMiliseconds(miliseconds);
        }
    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none"
    resumetBtn.style.display = "block"
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "none"
    resumetBtn.style.displa = "block"
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}