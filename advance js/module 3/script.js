const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  resetErrors();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (nameValue === '') {
    showError(nameInput, nameError, 'Name is required');
  }

  if (emailValue === '') {
    showError(emailInput, emailError, 'Email is required');
  } else if (isValidEmail(emailValue)) {
    showError(emailInput, emailError, 'Email is invalid');
  }

  if (passwordValue === '') {
    showError(passwordInput, passwordError, 'Password is required');
  } else if (isValidPassword(passwordValue)) {
    showError(passwordInput, passwordError, 'Password must be at least 8 characters long');
  }

  if (nameValue !== '' && emailValue !== '' && isValidEmail(emailValue) && passwordValue !== '' && isValidPassword(passwordValue)) {
    // Form is valid, can proceed with submission
    alert('Form submitted successfully!');
    form.reset();
  }
});

function resetErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  nameInput.classList.remove('error');
  emailInput.classList.remove('error');
  passwordInput.classList.remove('error');
}

function showError(input, errorElement, errorMessage) {
  input.classList.add('error');
  errorElement.textContent = errorMessage;
}

function isValidEmail(email) {
  // Simple email validation using a regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}
