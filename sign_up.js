function updateFieldStatus(inputField, isCorrect, status = "Looks good!") {
    inputField.parentElement.classList.add(
      isCorrect ? "correctfield" : "incorrectfield"
    );
    inputField.nextElementSibling.innerHTML = status;
  }

function usernameCheck() {
  let usernameInput = document.getElementById("username");
  let username = usernameInput.value;
  if (username.length < 5 || username.length > 12) {
    updateFieldStatus(usernameInput, false, "Not Valid. Username must be 5-12 characters long!");
  } else {
    updateFieldStatus(usernameInput, true);
  }
}

function passwordCheck() {
  let passwordInput = document.getElementById("password");
  let password = passwordInput.value;
  if (password.length < 12) {
    updateFieldStatus(passwordInput, false, "Password must be at least 12 characters long!");
  } else if (password.length < 14) {
    updateFieldStatus(passwordInput, true, "Recommended to be more than 14 characters!");
  } else {
    updateFieldStatus(passwordInput, true);
  }
}

function nameCheck() {
  let nameInputElement = document.getElementById("name");
  let name = nameInputElement.value;
  if (name.length === 0) {
    updateFieldStatus(nameInputElement, false, "Provide your name");
  } else {
    updateFieldStatus(nameInputElement, true);
  }
  
}
