let didSubmit = false;

let totalKeyPresses = 0;

function isSubmitted() {
  totalKeyPresses++;
  console.log(totalKeyPresses);
  return didSubmit;
}

function onSubmit() {
  didSubmit = true;
  clearAlert();1
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
    !/^[A-Z]{1}.{3,10}[0-9!@#$%^&*()_+\-=\{}\[\]\|\\;',./?]{1}$/.test(
      form.username
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
    !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\{}\[\]\|\\;',./?])[A-z0-9!@#$%^&*()_+\-=\{}\[\]\|\\;',./?]{12,}$/.test(
      form.password
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
  } else if (!/^[A-z\s]+$/.test(form.name)) {
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
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
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
  } else if (!/^[1-9]{4}[A-z]{2}$/.test(form.zip)) {
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
