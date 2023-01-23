// Populates the div with behavioral tracking info
// and makes it visible
function showBehavioralInfo() {
  displayClicks();
  displayTimeSpent();
  displayKeyPresses();
  displayTotalCharacters();
  var hiddenDiv = document.getElementById("trackingInfo");
  hiddenDiv.classList.remove("hideTrackingInfo");
}

//Increments the variable 'clicks' everytime the user clicks
var clicks = 0;
document.addEventListener("click", () => {
  clicks++;
});

function displayClicks() {
  document.getElementById("info").innerHTML =
    "Number of mouse clicks: " + clicks;
}

var startTime;
//Clocks in the time the opens the page
window.addEventListener("load", () => {
  startTime = new Date().getTime();
  console.log(startTime);
});

function displayTimeSpent() {
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

function displayKeyPresses() {
  document.getElementById("info").innerHTML +=
    "Total key presses: " + totalKeyPresses + "<br/>";
}

function displayTotalCharacters() {
  let totalCharsTyped = 0;
  //The form object has all the inputs as attributes and we
  // traverse through each one to get the corresponding input length
  for (const [key, value] of Object.entries(form))
    if (key != "sex") totalCharsTyped += value.length;

  document.getElementById("info").innerHTML +=
    "Total number of characters typed: " + totalCharsTyped + "<br/>";
}
