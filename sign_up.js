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
  let usernameInput = document.getElementById("username").value;
  let returnText;
  if (usernameInput.length < 5 || usernameInput.length > 12) {
    returnText = "Not Valid. Username must be 5-12 characters long!";
  } else {
    returnText = "";
  }
  document.getElementById("usernameValidation").innerHTML = returnText;
}

function passwordCheck() {
  let passwordInput = document.getElementById("password").value;
  let returnText;
  if (passwordInput.length < 12) {
    returnText = "Password must be at least 12 characters long!";
  } else if (passwordInput.length < 14) {
    returnText = "Recommended to be more than 14 characters!";
  } else {
    returnText = "";
  }

  document.getElementById("passwordValidation").innerHTML = returnText;
}

function nameCheck() {
  let nameInputElement = document.getElementById("name");
  let name = nameInputElement.value;
  if (name.length === 0) {
    updateFieldStatus(nameInputElement, false, "Provide your name");
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    updateFieldStatus(nameInputElement, false, "Can only contain letters");
  } else {
    updateFieldStatus(nameInputElement, true);
  }
}

function requiredFieldCheck() {
  let requiredInputs = document.getElementsByClassName("requiredField");
  let returnText;
  for (let i = 0; i < requiredInputs.length; i++) {
    if (requiredInputs[i].length < 5) {
      returnText = "Required field!";
    } else {
      returnText = "";
    }
    console.log("hello");
    document.getElementsByClassName("requiredValidation")[i].innerHTML =
      returnText;
  }
}
