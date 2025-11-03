const form = document.getElementById("myForm");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Reset messages
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  //                       /^[^ ]+@[^ ]+\.[a-z]{2,}$/i
  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

//                    /^[0-9]{10}$/
  // Phone validation (digits only)
  const phonePattern = /^[0-9]{10}$/;
  if (!phone.value.match(phonePattern)) {
    phoneError.textContent = "Enter a valid phone number (10 digits).";
    valid = false;
  }

  // Password validation
  if (password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
  }
});