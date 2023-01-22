var alertStatus = [false, false, false, false, false, false, false];
/*
var nameOfUser;
var username;
var password;
var email;
var language;
var country;
var address;
var zip;
var sex;
var description;
*/
function updateFieldStatus(inputField, isCorrect, status = "Looks good!") {
  if (isCorrect) {
    inputField.parentElement.classList.remove("incorrectfield");
    inputField.parentElement.classList.add("correctfield");
  } else {
    inputField.parentElement.classList.remove("correctfield");
    inputField.parentElement.classList.add("incorrectfield");
  }
  inputField.nextElementSibling.innerHTML = status;
}

function usernameCheck() {
  let usernameInputElement = document.getElementById("username");
  var username = usernameInputElement.value;
  if (username.length < 5 || username.length > 12) {
    updateFieldStatus(usernameInputElement, false, "Must be 5-12 characters long!");
    alertStatus[0] = false;
  } else {
    updateFieldStatus(usernameInputElement, true);
    alertStatus[0] = true;
  }
}

function passwordCheck() {
  let passwordInputElement = document.getElementById("password");
  var password = passwordInputElement.value;
  if (password.length < 12) {
    updateFieldStatus(passwordInputElement, false, "Must have at least 12 characters!");
    alertStatus[1] = false;
  } else if (password.length < 14) {
    updateFieldStatus(passwordInputElement, true, "Recommended to be more than 14 characters!");
    alertStatus[1] = true;
  } else {
    updateFieldStatus(passwordInputElement, true);
    alertStatus[1] = true;
  }
}

function nameCheck() {
  let nameInputElement = document.getElementById("name");
  var name = nameInputElement.value;
  if (name.length === 0) {
    updateFieldStatus(nameInputElement, false, "Provide your name");
    alertStatus[2] = false;
  } else if (!/^[a-z\s]+$/i.test(name)) {
    updateFieldStatus(nameInputElement, false, "Can only contain letters");
    alertStatus[2] = false;
  } else {
    updateFieldStatus(nameInputElement, true);
    alertStatus[2] = true;
  }
  
}

function languageCheck() {
    let languageInputElement = document.getElementById("language");
    var language = languageInputElement.value;
    if(language.length < 1){
        updateFieldStatus(languageInputElement, false, "Provide your language");
        alertStatus[3] = false;
    }
    else{
        updateFieldStatus(languageInputElement, true);
        alertStatus[3] = true;
    }
}

function countryCheck() {
    let countryInputElement = document.getElementById("country");
    var country = countryInputElement.value;
    if(country.length < 1){
        updateFieldStatus(countryInputElement, false, "Provide your country");
        alertStatus[4] = false;
    }
    else{
        updateFieldStatus(countryInputElement, true);
       alertStatus[4] = true;
    }
}

function emailCheck(){
    let emailInputElement = document.getElementById("email");
    var email = emailInputElement.value;
    if(!email.includes("@")){
        updateFieldStatus(emailInputElement, false, "Must contain @");
        alertStatus[5] = false;
    }
    else{
        updateFieldStatus(emailInputElement, true);
        alertStatus[5] = true;
    }
}

function zipCheck(){
    let zipInputElement = document.getElementById("zip");
    var zip = zipInputElement.value;
    if(!(zip.length == 6)){
        updateFieldStatus(zipInputElement, false, "Must be 6 digits");
        alertStatus[6] = false;
    }
    else{
        updateFieldStatus(zipInputElement, true);
        alertStatus[6] = true;
    }
}

function getAddress(){
    var address = document.getElementById("address").value; 
}

function getDescription(){
    var description = document.getElementById("description").value; 
}

function getSex(){
    var sex = document.getElementById("sex").value; 
}

function clearAlert(){
    console.log(alertStatus);
    if(!alertStatus.includes(false)){
        return true;
    }
    else{
        return false;
    }
}

function displayAlertMessage(){
    if(clearAlert() == true){
        alert("Name: " + name.value +"\n"+
        "Email: " + email.value + "\n"+
        "Username: " + username.value + "\n"+
        "Password: " + password.value + "\n"+
        "Language: " + language.value + "\n"+
        "Country: " + country.value + "\n"+
        "Address: " + address.value + "\n"+
        "Zip Code: " + zip.value + "\n"+
        "Sex: " + sex.value + "\n"+
        "Description: " + description.value);
    }
}
