const startingMinutes = 30;
let newStartingMinutes = startingMinutes;
let time = startingMinutes * 60;
let laps = 1;

const countdownEl = document.getElementById("timer");
const lapsEl = document.getElementById("laps");

let refreshIntervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds; // adds a leading zero if the number of seconds is less than 10

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    lapsEl.innerHTML = `Lap number: ${laps}`;
    time--;

    if (time < 0) { //stop the setInterval when time = 0 for avoid negative time

        clearInterval(refreshIntervalId);
        newStartingMinutes = newStartingMinutes - 1;
        time = newStartingMinutes * 60;
        laps++;
        refreshIntervalId = setInterval(updateCountdown, 1000);
    }

    if (newStartingMinutes < 0){
        clearInterval(refreshIntervalId);
    }

}