function validatePassword(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChars
  );
}

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

function validateForm() {
  const passwordInput = document.getElementById("password");
  const phoneNumberInput = document.getElementById("phoneNumber");
  const passwordError = document.getElementById("passwordError");
  const phoneNumberError = document.getElementById("phoneNumberError");

  passwordError.textContent = "";
  phoneNumberError.textContent = "";

  const password = passwordInput.value;
  const phoneNumber = phoneNumberInput.value;

  if (!validatePassword(password)) {
    passwordError.textContent =
      "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.";
  }

  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumberError.textContent =
      "Invalid phone number. Please enter 10 Digit phone number";
  }

  if (validatePassword(password) && validatePhoneNumber(phoneNumber)) {
    alert("Registration successful!");
  }
}
