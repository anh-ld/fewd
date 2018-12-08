// INIT
let timeDisplay = document.querySelector("#time");
let startStopBtn = document.querySelector("#startstop");
let resetBtn = document.querySelector("#reset");
let recordBtn = document.querySelector("#record");
let recordsDisplay = document.querySelector("#records");
let time = 0, started = false, timer;

let displayTime = () => {
  timeDisplay.innerHTML = time / 100;
}

// MAIN FUNCTIONS
let startStop = () => {
  if (started === false) {
    started = true;
    timer = setInterval(() => {
      time += 1;
      displayTime();
    }, 10);
  } else {
    started = false;
    clearInterval(timer);
  }
}

let reset = () => {
  clearInterval(timer);
  time = 0;
  started = false;
  recordsDisplay.innerHTML = "";
  displayTime();
}

let record = () => {
  if (time > 0) {
    recordsDisplay.innerHTML += `<p>${time / 100}</p>`;
  }
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
recordBtn.addEventListener("click", record);

document.body.addEventListener("keydown", (e) => {
  if (e.key === "s" || e.key === "S") {
    startStop();
  } else if (e.key === "r" || e.key === "R") {
    reset();
  } else if (e.key === "t" || e.key === "T") {
    record();
  }
})