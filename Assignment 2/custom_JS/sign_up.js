let didSubmit = false;

let totalKeyPresses = 0;

function isSubmitted() {
  totalKeyPresses++;
  console.log(totalKeyPresses);
  return didSubmit;
}

function onSubmit() {
  didSubmit = true;
  clearAlert();
  usernameCheck();
  passwordCheck();
  nameCheck();
  countryCheck();
  languageCheck();
  emailCheck();
  zipCheck();
  sexCheck();
  displayAlertMessage();
}

var alertStatus = [false, false, false, false, false, false, false, false];

let form = {
  name: "",
  username: "",
  password: "",
  email: "",
  language: "",
  country: "",
  address: "",
  zip: "",
  sex: "",
  desc: "",
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

function usernameCheck() {
  let usernameInputElement = document.getElementById("username");
  form.username = usernameInputElement.value;
  if (form.username.length === 0) {
    updateFieldStatus(usernameInputElement, false, "Provide a username");
    alertStatus[0] = false;
  } else if (form.username.length < 5 || form.username.length > 12) {
    updateFieldStatus(
      usernameInputElement,
      false,
      "Must be 5-12 characters long!"
    );
    alertStatus[0] = false;
  } else if (
    !isCharUpperCase(form.username[0]) ||
    !(
      isCharSpecial(form.username[form.username.length - 1]) ||
      isCharNumber(form.username[form.username.length - 1])
    )
  ) {
    updateFieldStatus(usernameInputElement, false, "Incorrect format!");
    alertStatus[0] = false;
  } else {
    updateFieldStatus(usernameInputElement, true);
    alertStatus[0] = true;
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
    !(
      stringContainsLowerCaseChar(form.password) &&
      stringContainsUpperCaseChar(form.password) &&
      stringContainsNumberChar(form.password) &&
      stringContainsSpecialChar(form.password)
    )
  ) {
    updateFieldStatus(
      passwordInputElement,
      false,
      "Should contain these types of characters: (a, A, 0, #)"
    );
    alertStatus[1] = false;
  } else if (form.password.length < 14) {
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
  form.name = nameInputElement.value;
  if (form.name.length === 0) {
    updateFieldStatus(nameInputElement, false, "Provide your name");
    alertStatus[2] = false;
  } else if (!stringContainsLettersOnly(form.name)) {
    updateFieldStatus(nameInputElement, false, "Can only contain letters");
    alertStatus[2] = false;
  } else {
    updateFieldStatus(nameInputElement, true);
    alertStatus[2] = true;
  }
}

function languageCheck() {
  let languageInputElement = document.getElementById("language");
  form.language = languageInputElement.value;
  if (form.language.length < 1) {
    updateFieldStatus(languageInputElement, false, "Provide your language");
    alertStatus[3] = false;
  } else {
    updateFieldStatus(languageInputElement, true);
    alertStatus[3] = true;
  }
}

function countryCheck() {
  let countryInputElement = document.getElementById("country");
  form.country = countryInputElement.value;
  if (form.country.length < 1) {
    updateFieldStatus(countryInputElement, false, "Provide a country");
    alertStatus[4] = false;
  } else {
    updateFieldStatus(countryInputElement, true);
    alertStatus[4] = true;
  }
}

function emailCheck() {
  let emailInputElement = document.getElementById("email");
  form.email = emailInputElement.value;
  if (form.email.length === 0) {
    updateFieldStatus(emailInputElement, false, "Provide your email");
  } else if (!stringIsEmailAddress(form.email)) {
    updateFieldStatus(emailInputElement, false, "Incorrect email");
    alertStatus[5] = false;
  } else {
    updateFieldStatus(emailInputElement, true);
    alertStatus[5] = true;
  }
}

function zipCheck() {
  let zipInputElement = document.getElementById("zip");
  form.zip = zipInputElement.value;
  if (form.zip.length == 0) {
    updateFieldStatus(zipInputElement, false, "Provide a zip code");
    alertStatus[6] = false;
  } else if (!(form.zip.length == 6)) {
    updateFieldStatus(zipInputElement, false, "Must be 6 digits");
    alertStatus[6] = false;
  } else if (
    !(
      isCharNumber(form.zip[0]) &&
      isCharNumber(form.zip[1]) &&
      isCharNumber(form.zip[2]) &&
      isCharNumber(form.zip[3]) &&
      isCharLetter(form.zip[4]) &&
      isCharLetter(form.zip[5])
    )
  ) {
    updateFieldStatus(zipInputElement, false, "Incorect zip code ");
    alertStatus[6] = false;
  } else {
    updateFieldStatus(zipInputElement, true);
    alertStatus[6] = true;
  }
}

function sexCheck() {
  let sexSelectElement = document.getElementById("sex");
  form.sex = sexSelectElement.value;
  if (form.sex === "") {
    updateFieldStatus(sexSelectElement, false, "Select sex");
    alertStatus[7] = true;
  } else {
    updateFieldStatus(sexSelectElement, true);
    alertStatus[7] = true;
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
    alert(
      "Name: " +
        form.name +
        "\n" +
        "Email: " +
        form.email +
        "\n" +
        "Username: " +
        form.username +
        "\n" +
        "Password: " +
        form.password +
        "\n" +
        "Language: " +
        form.language +
        "\n" +
        "Country: " +
        form.country +
        "\n" +
        "Address: " +
        form.address +
        "\n" +
        "Zip Code: " +
        form.zip +
        "\n" +
        "Sex: " +
        form.sex +
        "\n" +
        "Description: " +
        form.desc
    );
    showBehavioralInfo();
  }
}

function isCharSpecial(char) {
  return "!@#$%^&*()_+-={}[]|\\;\"',.?".includes(char);
}

function isCharUpperCase(char) {
  return isCharLetter(char) && char == char.toUpperCase();
}

function isCharLowerCase(char) {
  return isCharLetter(char) && char == char.toLowerCase();
}

function isCharNumber(char) {
  return !isNaN(parseInt(char));
}

function isCharLetter(char) {
  return char.toLowerCase() != char.toUpperCase();
}

function stringContainsLettersOnly(string){
  for(const i of string){
    if(!isCharLetter(i)){
      return false;
    }
  }
  return true;
}

function stringContainsSpecialChar(string) {
  let foundSpecialChar = false;
  for (const char of string) {
    if (isCharSpecial(char)) {
      foundSpecialChar = true;
      break;
    }
  }
  return foundSpecialChar;
}

function stringContainsUpperCaseChar(string) {
  let foundUpperCaseChar = false;
  for (const char of string) {
    if (isCharUpperCase(char)) {
      foundUpperCaseChar = true;
      break;
    }
  }
  return foundUpperCaseChar;
}

function stringContainsLowerCaseChar(string) {
  let foundLowerCaseChar = false;
  for (const char of string) {
    if (isCharLowerCase(char)) {
      foundLowerCaseChar = true;
      break;
    }
  }
  return foundLowerCaseChar;
}

function stringContainsNumberChar(string) {
  let foundNumberChar = false;
  for (const char of string) {
    if (isCharNumber(char)) {
      foundNumberChar = true;
      break;
    }
  }
  return foundNumberChar;
}

function stringIsEmailAddress(string) {
  let atLocation = string.indexOf("@");

  // If string does not contain At sign ("@")
  // or it is the first character
  if (atLocation <= 0) return false;

  let stringAfterAt = string.substring(atLocation + 1);
  let dotLocation = stringAfterAt.indexOf(".");

  // If substring does not contain a dot (".")
  // or it is the first character
  if (dotLocation <= 0 || dotLocation === stringAfterAt.length - 1)
    return false;

  return true;
}
