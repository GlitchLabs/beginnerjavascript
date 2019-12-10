console.log('working?');

const wesLink = document.querySelector('.wes');

wesLink.addEventListener('click', function(event) {
  console.log(event.currentTarget);
  console.log(event);
  const shouldChangePage = confirm('they might be ready !');
  console.log(shouldChangePage);

  if (!shouldChangePage) {
    event.preventDefault();
    console.log(event.currentTarget);
    // window.location = event.currentTarget.href;
  }
});

const signupForm = document.querySelector(`[name="signup"]`);
const emailInput = document.querySelector(`[name="email"]`);
// console.log(signupForm, emailInput);

signupForm.addEventListener(`submit`, function(event) {
  event.preventDefault();
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  console.dir(event.currentTarget.agree.checked);

  const email = event.currentTarget.email.value;
  if (email.includes('@gmail.com')) {
    alert(`sucks to suck dont it`);
    event.preventDefault();
  }
});
function logEvent(event) {
  console.log(event.type);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown',logEvent);
signupForm.name.addEventListener('focus',logEvent);
signupForm.name.addEventListener('blur',logEvent);
