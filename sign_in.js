let isSubmitted = false;

function onSubmit() {
  isSubmitted = true;
  clearAlert();
  emailCheck();
  passwordCheck();
  displayAlertMessage();
}

var alertStatus = [false, false];

var emailField = "";
var passwordField = "";

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
  } else if (
    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\{}\[\]\|\\;',./?])[A-z0-9!@#$%^&*()_+\-=\{}\[\]\|\\;',./?]{12,}$/.test(
      passwordField
    )
  ) {
    updateFieldStatus(passwordInputElement, false, "Incorrect format");
    alertStatus[1] = false;
  } else {
    updateFieldStatus(passwordInputElement, true);
    alertStatus[1] = true;
  }
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
    alert("Email: " + emailField + "\n" + "Password: " + passwordField);
  }
}
