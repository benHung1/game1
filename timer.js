var t = 4;
var time = document.getElementById("timeBox");
var rps = document.getElementById("rpsWrapper");
var npsUserWins = document.getElementById("npsUserWins");

function timeDown() {
  let timer = 4;
  var timeMinus = setInterval(() => {
    timer--;
    time.innerText = timer;
    if (timer <= 0) {
      clearInterval(timeMinus);
      timer = 3;
      time.innerText = timer;
      time.style.display = "none";
      rps.style.display = "block";
    }
  }, 1000);
}
timeDown();
