const header = document.querySelector('.header-container');
const navBar = document.querySelector('.nav-bar');
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const navLinks = document.querySelectorAll('.nav-links a');

// Header scroll event
window.addEventListener('scroll', () => {
  window.scrollY > 0
    ? (header.style.top = '10px')
    : (header.style.top = '32px');
});

// Mobile menu icon toggle
menuToggleBtn.addEventListener('click', () => {
  navBar.classList.toggle('active');

  // Change icon
  navBar.classList.contains('active')
    ? (menuToggleBtn.innerHTML = '<i class="fas fa-xmark"></i>')
    : (menuToggleBtn.innerHTML = '<i class="fas fa-bars"></i>');
});

// Activate nav link
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const activeNavLink = document.querySelector('#navLinks a.active-link');
    const activeMobNavLink = document.querySelector(
      '#mobNavLinks a.active-link'
    );

    // Remove 'active-link' class
    activeNavLink && activeNavLink.classList.remove('active-link');
    activeMobNavLink && activeMobNavLink.classList.remove('active-link');

    // Add 'active-link' class
    link.classList.add('active-link');
  });
});

// Swiper carousel
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Touch and mouse events
  touchAngle: 45,
  grabCursor: true,

  // Transitions
  speed: 400,

  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.5,
    },
  },
});

// Footer current year
document.getElementById('currentYear').innerText = new Date().getFullYear();
