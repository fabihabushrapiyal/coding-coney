const navbar = document.querySelector('.navbar');
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const navLinks = document.querySelectorAll('.nav-list a');

// Mobile nav toggle
menuToggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('mob-nav-active');
  console.log('clicked');

  // Change icon
  navbar.classList.contains('mob-nav-active')
    ? (menuToggleBtn.innerHTML = '<i class="fas fa-xmark"></i>')
    : (menuToggleBtn.innerHTML = '<i class="fas fa-bars"></i>');
});

// Activate nav links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const activeNavLink = document.querySelector('.nav-list a.active-link');

    // Remove 'active-link' class
    activeNavLink && activeNavLink.classList.remove('active-link');

    // Add 'active-link' class
    link.classList.add('active-link');
  });
});
