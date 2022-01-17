const fNameField = document.getElementById('firstName');
const fNameError = document.querySelector('.fNameErr');
const lNameField = document.getElementById('lastName');
const lNameError = document.querySelector('.lNameErr');
const emailField = document.getElementById('email');
const emailErr = document.querySelector('.emailErr');
const passField = document.getElementById('password');
const passErr = document.querySelector('.passErr');
const form = document.querySelector('.form');

let formHasError;

form.addEventListener('submit', (e) => {
  let arr = [fNameField, lNameField, emailField, passField];
  // Check if form has already error message
  if (formHasError) {
    removeErrWarnings();
    for (let i = 0; i < arr.length; i++) {
      removeErrStyling(arr[i]);
    }
  }

  if (fNameField.value === '' || fNameField.value == null) {
    e.preventDefault();
    fNameError.innerText = 'First Name cannot be empty';
    markErr(fNameField);
  }
  if (lNameField.value === '' || lNameField.value == null) {
    e.preventDefault();
    lNameError.innerText = 'Last Name cannot be empty';
    markErr(lNameField);
  }
  if (emailField.value === '' || emailField.value == null) {
    e.preventDefault();
    emailErr.innerText = 'Looks like this is not an email';
    markErr(emailField);
  }
  if (passField.value === '' || passField.value == null) {
    e.preventDefault();
    passErr.innerText = 'Password cannot be empty';
    markErr(passField);
  }
});

function markErr(field) {
  formHasError = true;
  field.classList.add('error');
}

function removeErrWarnings() {
  fNameError.innerText = '';
  lNameError.innerText = '';
  emailErr.innerText = '';
  passErr.innerText = '';
}

function removeErrStyling(element) {
  element.classList.remove('error');
}
