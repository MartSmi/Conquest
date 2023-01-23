function toggleHiddenDiv(){
    var hiddenDiv = document.getElementById("trackingInfo"); 
    hiddenDiv.classList.remove("hideTrackingInfo");
}

var clicks = 0;
document.addEventListener('click', () =>{
    clicks++;
    document.getElementById("info").innerHTML = "Number of mouse clicks: " + clicks;
})

var timeSpent = 0;
/*document.addEventListener('onload',()=>{
    var startTime = 
})
*/
