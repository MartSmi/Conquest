function toggleHiddenDiv() {
  var hiddenDiv = document.getElementById("trackingInfo");
  hiddenDiv.classList.remove("hideTrackingInfo");
  addClicks();
  timeSpentTracker();
}

var clicks = 0;
document.addEventListener("click", () => {
  clicks++;
});

function addClicks() {
  document.getElementById("info").innerHTML =
    "Number of mouse clicks: " + clicks;
}

var startTime;
window.addEventListener("load", () => {
  startTime = new Date().getTime();
  console.log(startTime);
});

function timeSpentTracker() {
  var currentTime = new Date().getTime();
  var timeSpent = currentTime - startTime;
  var minutes = timeSpent / 60000;
  var seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
  document.getElementById("info").innerHTML +=
    "<br/> Time spent: " +
    Math.floor(minutes) +
    " minutes " +
    Math.floor(seconds) +
    " seconds<br/>";
}
