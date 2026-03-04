const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

// Switch to Login
loginBtn.addEventListener('click', () => {
  signupBtn.classList.remove('active');
  loginBtn.classList.add('active');

  signupForm.classList.remove('active-form');
  loginForm.classList.add('active-form');
});

// Switch to Sign Up
signupBtn.addEventListener('click', () => {
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');

  signupForm.classList.add('active-form');
  loginForm.classList.remove('active-form');
});
