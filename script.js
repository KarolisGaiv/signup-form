const nameField = document.getElementById('firstName');

const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('submit', (e) => {
  let errors = [];

  if (nameField === null || nameField === '') {
    e.preventDefault();

    errors.push(error);
  }

  if (errors.length > 0) {
    e.preventDefault();
    console.log(errors);
  }
});

function checkForm() {
  console.log(test);
}
