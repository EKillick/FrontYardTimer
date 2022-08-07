const startingMinutes = 2;
var newStartingMinutes = startingMinutes;
var timeRemaining = newStartingMinutes * 60;
var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;
var laps = 1;
var raceTimer;

const countdownEl = document.getElementById("timer");
const lapsEl = document.getElementById("laps");
const clockEl = document.getElementById("clock");

document.getElementById("startButton").addEventListener("click", startTimer)
document.getElementById("stopButton").addEventListener("click",stopTimer)

function roundTime(n){
   return n < 10 ? '0' + n : n;
}

function startTimer() {
    raceTimer = setInterval(updateCountdown, 1000);
    updateCountdown();
}

function stopTimer() {
    clearInterval(raceTimer);
}



function updateCountdown() {

    if (displaySeconds == 60){
        displayMinutes++;
        displaySeconds = 0;
    }

    if (displayMinutes == 60){
        displayHours++;
        displayMinutes = 0;
    }


    clockEl.innerHTML = `${roundTime(displayHours)} : ${roundTime(displayMinutes)} : ${roundTime(displaySeconds)}`


    const minutesRemaining = Math.floor(timeRemaining / 60);
    let secondsRemaining = timeRemaining % 60;

    countdownEl.innerHTML = `${roundTime(minutesRemaining)} : ${roundTime(secondsRemaining)}`;
    lapsEl.innerHTML = `Lap: ${laps}`;

        if (timeRemaining == 0) { //stop the setInterval when time = 0 for avoid negative time
        newStartingMinutes = newStartingMinutes - 1;

        if (secondsRemaining == 0 && newStartingMinutes == 0){
            stopTimer();
        }

        timeRemaining = newStartingMinutes * 60;
        laps++;
    }

    timeRemaining--;
    displaySeconds++;
}

// function showClock(){
//     let date = new Date();
//     let runningHours = roundTime(date.getHours());
//     let runningMinutes = roundTime(date.getMinutes());

//     clockEl.innerHTML = `${runningHours}: ${runningMinutes}`

// }