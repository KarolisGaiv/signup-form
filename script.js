const fNameField = document.getElementById('firstName');
const fNameError = document.querySelector('.fNameErr');
const lNameField = document.getElementById('lastName');
const lNameError = document.querySelector('.lNameErr');
const emailField = document.getElementById('email');
const emailErr = document.querySelector('.emailErr');
const passField = document.getElementById('password');
const passErr = document.querySelector('.passErr');
const form = document.querySelector('.form');

let isError;

form.addEventListener('submit', (e) => {
  // Check if form has already error message
  if (isError) {
    fNameError.innerText = '';
    lNameError.innerText = '';
    emailErr.innerText = '';
    passErr.innerText = '';
  }

  if (fNameField.value === '' || fNameField.value == null) {
    e.preventDefault();
    fNameError.innerText = 'First Name cannot be empty';
    isError = true;
  }
  if (lNameField.value === '' || lNameField.value == null) {
    e.preventDefault();
    lNameError.innerText = 'Last Name cannot be empty';
    isError = true;
  }
  if (emailField.value === '' || emailField.value == null) {
    e.preventDefault();
    emailErr.innerText = 'Looks like this is not an email';
    isError = true;
  }
  if (passField.value === '' || passField.value == null) {
    e.preventDefault();
    passErr.innerText = 'Password cannot be empty';
    isError = true;
  }
});
