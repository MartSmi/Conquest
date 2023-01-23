function onSubmit() {
  usernameCheck();
  passwordCheck();
  nameCheck();
  countryCheck();
  languageCheck();
}

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
  let username = usernameInputElement.value;
  if (username.length < 5 || username.length > 12) {
    updateFieldStatus(
      usernameInputElement,
      false,
      "Must be 5-12 characters long!"
    );
  } else {
    updateFieldStatus(usernameInputElement, true);
  }
}

function passwordCheck() {
  let passwordInputElement = document.getElementById("password");
  let password = passwordInputElement.value;
  if (password.length < 12) {
    updateFieldStatus(
      passwordInputElement,
      false,
      "Must have at least 12 characters!"
    );
  } else if (password.length < 14) {
    updateFieldStatus(
      passwordInputElement,
      true,
      "Recommended to be more than 14 characters!"
    );
  } else {
    updateFieldStatus(passwordInputElement, true);
  }
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

function languageCheck() {
  let languageInputElement = document.getElementById("language");
  let language = languageInputElement.value;
  if (language.length < 1) {
    updateFieldStatus(languageInputElement, false, "Provide your language");
  } else {
    updateFieldStatus(languageInputElement, true);
  }
}

function countryCheck() {
  let countryInputElement = document.getElementById("country");
  let country = countryInputElement.value;
  if (country.length < 1) {
    updateFieldStatus(countryInputElement, false, "Provide your country");
  } else {
    updateFieldStatus(countryInputElement, true);
  }
}
