const password = document.getElementById('password');
const eye = document.getElementById('eye');

eye.addEventListener('click', () => {
  if (password.type === 'password') {
    eye.children[0].classList.remove('fa-eye');
    eye.children[0].classList.add('fa-eye-slash');
    password.type = 'text';
  } else {
    eye.children[0].classList.remove('fa-eye-slash');
    eye.children[0].classList.add('fa-eye');
    password.type = 'password';
  }
});
