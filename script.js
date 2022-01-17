const fNameField = document.getElementById('firstName');
const fNameError = document.querySelector('.fNameErr');
const lNameField = document.getElementById('lastName');
const lNameError = document.querySelector('.lNameErr');
const emailField = document.getElementById('email');
const emailErr = document.querySelector('.emailErr');
const passField = document.getElementById('password');
const passErr = document.querySelector('.passErr');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  if (
    fNameError.innerText ||
    lNameError.innerText ||
    emailErr.innerText ||
    passErr.innerText
  ) {
    fNameError.innerText = '';
    lNameError.innerText = '';
    emailErr.innerText = '';
    passErr.innerText = '';
  }

  if (fNameField.value === '' || fNameField.value == null) {
    e.preventDefault();
    fNameError.innerText = 'First Name cannot be empty';
  }
  if (lNameField.value === '' || lNameField.value == null) {
    e.preventDefault();
    lNameError.innerText = 'Last Name cannot be empty';
  }
  if (emailField.value === '' || emailField.value == null) {
    e.preventDefault();
    emailErr.innerText = 'Looks like this is not an email';
  }
  if (passField.value === '' || passField.value == null) {
    e.preventDefault();
    passErr.innerText = 'Password cannot be empty';
  }
});
