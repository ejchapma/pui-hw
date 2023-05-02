const hoursVal = document.querySelector("#hours");
const minVal = document.querySelector("#minutes");
const secVal = document.querySelector("#seconds");

let countdownTime = 0;
let intervalId = null

function startTimer(minutes) {
    stopTimer()

    const MS_IN_MINUTE = 1000 * 60

    const now = new Date().getTime()
    if (countdownTime < now) {
        countdownTime = now + MS_IN_MINUTE * minutes
    } else {
        countdownTime = countdownTime + MS_IN_MINUTE * minutes
    }

    console.log({now, countdownTime})

    intervalId = setInterval(() => {
        countdown()
    }, 500)
    countdown()
}

function stopTimer() {
    clearInterval(intervalId);
}

function countdown() {
  const timeNow = new Date().getTime();
  let difference = countdownTime - timeNow;
  console.log({timeNow, difference});

  if (difference < 0) difference = 0;

  //hours
  const hoursValNum = Math.floor(difference/(1000*60*60));

  //minutes
  const minValNum = Math.floor(difference/(1000*60)%60);

  //seconds
  const secValNum = Math.floor(difference/(1000)%60);

  hoursVal.innerHTML = hoursValNum.toString().padStart(2, '0');
  minVal.innerHTML = minValNum.toString().padStart(2, '0'); 
  secVal.innerHTML = secValNum.toString().padStart(2, '0');

  if (difference == 0) {
    stopTimer();
  }
}