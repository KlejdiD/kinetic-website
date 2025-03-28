document.addEventListener("DOMContentLoaded", function () {
  const timeInput = document.getElementById("time-select");
  const continueButton = document.getElementById("continue-button");

  timeInput.addEventListener("change", function () {
    if (timeInput.value !== "choose") {
      continueButton.disabled = false;
      continueButton.style.backgroundColor = "#366DF4";
      continueButton.style.cursor = "pointer";
    } else {
      continueButton.disabled = true;
      continueButton.style.backgroundColor = "#799ef9";
      continueButton.style.cursor = "not-allowed";
    }
  });

  const timeForm = document.getElementById("time-form");
  timeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    localStorage.clear();
    localStorage.setItem("time-input", timeInput.value);

    window.location.href = "form.html";
  });
});

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const checkBox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit-button");

firstName.addEventListener("input", validateForm);
lastName.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
phoneNumber.addEventListener("input", validateForm);
checkBox.addEventListener("change", validateForm);

function validateForm() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email.value);

  if (!isEmailValid && email.value.trim() !== "") {
    email.style.border = "2px solid red";
  } else {
    email.style.border = "2px solid green";
  }

  if (
    firstName.value.trim() !== "" &&
    lastName.value.trim() !== "" &&
    isEmailValid &&
    phoneNumber.value.trim() !== "" &&
    checkBox.checked
  ) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#366DF4";
    submitButton.style.cursor = "pointer";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "#799ef9";
    submitButton.style.cursor = "not-allowed";
  }
}

const detailsForm = document.getElementById("details-form");
detailsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("first-name", firstName.value);
  localStorage.setItem("last-name", lastName.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("phone-number", phoneNumber.value);

  window.location.href = "results.html";
});
