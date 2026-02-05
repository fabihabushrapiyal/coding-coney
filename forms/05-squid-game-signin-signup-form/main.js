const signin = document.getElementById('signin');
const signup = document.getElementById('signup');
const signinImg = document.getElementById('signinImg');
const signinForm = document.getElementById('signinForm');
const wrapper = document.getElementById('wrapper');

signin.addEventListener('click', () => {
  wrapper.classList.remove('active-signup');
  wrapper.classList.add('active-signin');
  signinImg.classList.remove('md:-bottom-full', 'left-full');
  signinForm.classList.remove('md:bottom-full', '-left-full');
});

signup.addEventListener('click', () => {
  wrapper.classList.add('active-signup');
  wrapper.classList.remove('active-signin');
});
