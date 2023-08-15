const header = document.getElementById('timer');

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `Time: ${hours}:${minutes}:${seconds}`;
  header.innerText = timeString;
}

let startTime;
let intervalId;
let isRunning = false;
let elapsedTime = 0;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date();
    startTime = startTime - elapsedTime;
    intervalId = setInterval(updateTime, 100);
  } else {
    isRunning = false;
    clearInterval(intervalId);
  }
}

function updateTime() {
  const currentTime = new Date();
  elapsedTime = currentTime - startTime;
  const seconds = (elapsedTime / 1000).toFixed(1);
  document.getElementById('time').textContent = seconds;
}

document.getElementById('startStopButton').addEventListener('click', startStopwatch);