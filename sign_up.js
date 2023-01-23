let isSubmitted = false;

function onSubmit() {
  isSubmitted = true;
  clearAlert();
  usernameCheck();
  passwordCheck();
  nameCheck();
  countryCheck();
  languageCheck();
  emailCheck();
  zipCheck();
  sexCheck();
  getAddress();
  getSex();
  getDescription();
  displayAlertMessage();
  id = "sex";
}

var alertStatus = [false, false, false, false, false, false, false, false];

var nameField = "";
var usernameField = "";
var passwordField = "";
var emailField = "";
var languageField = "";
var countryField = "";
var addressField = "";
var zipField = "";
var sexField = "";
var descriptionField = "";

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
  usernameField = usernameInputElement.value;
  if (usernameField.length === 0) {
    updateFieldStatus(usernameInputElement, false, "Provide a username");
    alertStatus[0] = false;
  } else if (usernameField.length < 5 || usernameField.length > 12) {
    updateFieldStatus(
      usernameInputElement,
      false,
      "Must be 5-12 characters long!"
    );
    alertStatus[0] = false;
  } else {
    updateFieldStatus(usernameInputElement, true);
    alertStatus[0] = true;
  }
}

function passwordCheck() {
  let passwordInputElement = document.getElementById("password");
  passwordField = passwordInputElement.value;
  if (passwordField.length === 0) {
    updateFieldStatus(passwordInputElement, false, "Provide a password");
    alertStatus[1] = false;
  } else if (passwordField.length < 12) {
    updateFieldStatus(
      passwordInputElement,
      false,
      "Must have at least 12 characters!"
    );
    alertStatus[1] = false;
  } else if (passwordField.length < 14) {
    updateFieldStatus(
      passwordInputElement,
      true,
      "Recommend more than 14 characters!"
    );
    alertStatus[1] = true;
  } else {
    updateFieldStatus(passwordInputElement, true);
    alertStatus[1] = true;
  }
}

function nameCheck() {
  let nameInputElement = document.getElementById("name");
  nameField = nameInputElement.value;
  if (nameField.length === 0) {
    updateFieldStatus(nameInputElement, false, "Provide your name");
    alertStatus[2] = false;
  } else if (!/^[A-z\s]+$/.test(nameField)) {
    updateFieldStatus(nameInputElement, false, "Can only contain letters");
    alertStatus[2] = false;
  } else {
    updateFieldStatus(nameInputElement, true);
    alertStatus[2] = true;
  }
}

function languageCheck() {
  let languageInputElement = document.getElementById("language");
  languageField = languageInputElement.value;
  if (languageField.length < 1) {
    updateFieldStatus(languageInputElement, false, "Provide your language");
    alertStatus[3] = false;
  } else {
    updateFieldStatus(languageInputElement, true);
    alertStatus[3] = true;
  }
}

function countryCheck() {
  let countryInputElement = document.getElementById("country");
  countryField = countryInputElement.value;
  if (countryField.length < 1) {
    updateFieldStatus(countryInputElement, false, "Provide a country");
    alertStatus[4] = false;
  } else {
    updateFieldStatus(countryInputElement, true);
    alertStatus[4] = true;
  }
}

function emailCheck() {
  let emailInputElement = document.getElementById("email");
  emailField = emailInputElement.value;
  if (emailField.length === 0) {
    updateFieldStatus(emailInputElement, false, "Provide your email");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField)) {
    updateFieldStatus(emailInputElement, false, "Incorrect email");
    alertStatus[5] = false;
  } else {
    updateFieldStatus(emailInputElement, true);
    alertStatus[5] = true;
  }
}

function zipCheck() {
  let zipInputElement = document.getElementById("zip");
  zipField = zipInputElement.value;
  if (zipField.length == 0) {
    updateFieldStatus(zipInputElement, false, "Provide a zip code");
    alertStatus[6] = false;
  } else if (!(zipField.length == 6)) {
    updateFieldStatus(zipInputElement, false, "Must be 6 digits");
    alertStatus[6] = false;
  } else if (!/^[1-9]{4}[A-z]{2}$/.test(zipField)) {
    updateFieldStatus(zipInputElement, false, "Incorect zip code ");
    alertStatus[6] = false;
  } else {
    updateFieldStatus(zipInputElement, true);
    alertStatus[6] = true;
  }
}

function sexCheck() {
  //TODO: alert status not set
  let sexSelectElement = document.getElementById("sex");
  sexField = sexSelectElement.value;
  if (sexField === "") {
    updateFieldStatus(sexSelectElement, false, "Select sex");
    alertStatus[7] = true;
  } else {
    updateFieldStatus(sexSelectElement, true);
    alertStatus[7] = true;
  }
}

function getAddress() {
  var address = document.getElementById("address").value;
}

function getDescription() {
  var description = document.getElementById("description").value;
}

function getSex() {
  var sex = document.getElementById("sex").value;
}

function clearAlert() {
  console.log(alertStatus);
  if (!alertStatus.includes(false)) {
    return true;
  } else {
    return false;
  }
}

function displayAlertMessage() {
  if (clearAlert() == true) {
    alert(
      "Name: " +
        nameField +
        "\n" +
        "Email: " +
        emailField +
        "\n" +
        "Username: " +
        usernameField +
        "\n" +
        "Password: " +
        passwordField +
        "\n" +
        "Language: " +
        languageField +
        "\n" +
        "Country: " +
        countryField +
        "\n" +
        "Address: " +
        addressField +
        "\n" +
        "Zip Code: " +
        zipField +
        "\n" +
        "Sex: " +
        sexField +
        "\n" +
        "Description: " +
        descriptionField
    );
    toggleHiddenDiv();
  }
}
