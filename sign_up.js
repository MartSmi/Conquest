function usernameCheck(){
    let usernameInput = document.getElementById("username").value;
    let returnText;
    if(usernameInput.length < 5 || usernameInput.length > 12){
        returnText = "Not Valid. Username must be 5-12 characters long!";
    }
    else{
        returnText =  "";
    }
    document.getElementById("usernameValidation").innerHTML = returnText;
}