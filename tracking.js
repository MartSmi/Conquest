var displayed = true;

function toggleHiddenDiv(){
    var hiddenDiv = document.getElementById("trackingInfo");
    if(displayed){
        hiddenDiv.classList.add("hideTrackingInfo");
        displayed = false;
    }
    else{
        hiddenDiv.classList.remove("hideTrackingInfo");
        displayed = true;
    }
}

var clicks = 0;
document.addEventListener('click', () =>{
    clicks++;
    document.getElementById("info").innerHTML = "Number of mouse clicks: " + clicks;
})