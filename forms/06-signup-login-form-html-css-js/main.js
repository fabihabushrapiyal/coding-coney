const initialBtns = document.getElementById('initialBtns');
const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const signupContainer = document.getElementById('signupContainer');
const loginContainer = document.getElementById('loginContainer');
const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');
const backBtns = document.querySelectorAll('.back-btn');

// Form Animation Function
const animateForm = (container, imageSection, formSection) => {
  setTimeout(() => {
    container.classList.add('active');

    if (container.classList.contains('active')) {
      imageSection.classList.add('slide-from-top');
      formSection.classList.add('slide-from-bottom');
    }
  }, 500);
};

// Show Signup Form Function
const showSignup = () => {
  const imageSection = signupContainer.querySelector('.image-section');
  const formSection = signupContainer.querySelector('.form-section');

  // Hide Initial Buttons
  initialBtns.classList.add('hidden');

  // Show Signup Container
  animateForm(signupContainer, imageSection, formSection);
};

// Show Login Form Function
const showLogin = () => {
  const imageSection = loginContainer.querySelector('.image-section');
  const formSection = loginContainer.querySelector('.form-section');

  // Hide Initial Buttons
  initialBtns.classList.add('hidden');

  // Show Login Container
  animateForm(loginContainer, imageSection, formSection);
};

// Go Back Function
const goBack = () => {
  // Hide Forms
  signupContainer.classList.remove('active');
  loginContainer.classList.remove('active');

  // Show Initial Buttons
  setTimeout(() => {
    initialBtns.classList.remove('hidden');
  }, 500);
};

// Click Events
signupBtn.addEventListener('click', showSignup);
loginBtn.addEventListener('click', showLogin);

signupLink.addEventListener('click', () => {
  loginContainer.classList.remove('active');
  showSignup();
});
loginLink.addEventListener('click', () => {
  signupContainer.classList.remove('active');
  showLogin();
});

backBtns.forEach((btn) => btn.addEventListener('click', goBack));
