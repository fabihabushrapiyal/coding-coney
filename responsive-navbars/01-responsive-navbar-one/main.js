const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuIcon = document.querySelector('#mobileMenuBtn > i');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navLinks.classList.contains('active')
    ? (mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>')
    : (mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>');
});

document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('active') &&
    !e.target.isEqualNode(navLinks) &&
    !e.target.isEqualNode(mobileMenuBtn) &&
    !e.target.isEqualNode(mobileMenuIcon)
  ) {
    navLinks.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
