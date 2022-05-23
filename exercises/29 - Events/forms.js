const wes = document.querySelector('.wes');

wes.addEventListener('click', (e) => {
  const chg = confirm('yes or no?');
  console.log('you clicked it!');
  if (!chg) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('form[name="signup"]');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.currentTarget.name.value);
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('blur', logEvent);
