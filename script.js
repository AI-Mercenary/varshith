const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (e) {
  let isValid = true;

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  // Validate Name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate Message
  if (message.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault(); // Prevent form submission
  }
});
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (e) {
  let isValid = true;

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  // Validate Name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate Message
  if (message.value.trim() === "") {
    messageError.textContent = "Please enter your message.";
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault(); // Prevent form submission
  }
});
