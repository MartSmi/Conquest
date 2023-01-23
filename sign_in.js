let isSubmitted = false;

function onSubmit() {
  isSubmitted = true;
  clearAlert();
  emailCheck();
  passwordCheck();
  displayAlertMessage();
}

var alertStatus = [false, false];

let form = {
  email: "",
  password: "",
};

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
  form.email = emailInputElement.value;
  if (form.email.length === 0) {
    updateFieldStatus(emailInputElement, false, "Provide your email");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    updateFieldStatus(emailInputElement, false, "Incorrect email");
    alertStatus[5] = false;
  } else {
    updateFieldStatus(emailInputElement, true);
    alertStatus[5] = true;
  }
}
function passwordCheck() {
  let passwordInputElement = document.getElementById("password");
  form.password = passwordInputElement.value;
  if (form.password.length === 0) {
    updateFieldStatus(passwordInputElement, false, "Provide a password");
    alertStatus[1] = false;
  } else if (form.password.length < 12) {
    updateFieldStatus(
      passwordInputElement,
      false,
      "Must have at least 12 characters!"
    );
    alertStatus[1] = false;
  } else if (
    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\{}\[\]\|\\;',./?])[A-z0-9!@#$%^&*()_+\-=\{}\[\]\|\\;',./?]{12,}$/.test(
      form.password
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
    alert("Email: " + form.email + "\n" + "Password: " + form.password);
  }
}
