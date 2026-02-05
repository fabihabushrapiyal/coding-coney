const navList = document.getElementById('navList');
const navLinks = document.querySelectorAll('#navList a');
const menuToggleBtn = document.getElementById('menuToggleBtn');
const menuToggleBtnIcon = document.querySelector('#menuToggleBtn i');

// Mobile nav toggle
menuToggleBtn.addEventListener('click', () => {
  navList.classList.toggle('active-nav');

  !navList.classList.contains('active-nav')
    ? (menuToggleBtn.innerHTML = '<i class="fas fa-bars"></i>')
    : (menuToggleBtn.innerHTML = '<i class="fas fa-xmark"></i>');
});

// Activate nav links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const activeNavLink = document.querySelector('#navList a.active-link');

    // Remove 'active-link' class
    activeNavLink && activeNavLink.classList.remove('active-link');

    // Add 'active-link' class
    link.classList.add('active-link');
  });
});

// Close mobile nav on outside or link click
document.addEventListener('click', (e) => {
  if (
    navList.classList.contains('active-nav') &&
    !e.target.isEqualNode(navList) &&
    !e.target.isEqualNode(menuToggleBtn) &&
    !e.target.isEqualNode(menuToggleBtnIcon)
  ) {
    navList.classList.remove('active-nav');
    menuToggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Counter animation
const counterAnimation = (counter, target) => {
  let count = 0;
  const increment = Math.ceil(target / 100);

  // Initialize the interval
  const interval = setInterval(() => {
    count += increment;

    // Stop the interval
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }

    counter.innerText = count + '+';
  }, 50);
};

// Initializing each counter
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  // Initializing each counter
  counters.forEach((counter) => {
    const target = counter.dataset.target;

    counterAnimation(counter, target);
  });
});

// Popular Section's Swiper
const swiper = new Swiper('.popular-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Transition
  speed: 400,

  // Mouse cursor
  grabCursor: true,

  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Testimonial Section's Swiper
const testimonialSwiper = new Swiper('.testimonial-swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Transition
  speed: 400,

  // Mouse cursor
  grabCursor: true,

  // Autoplay
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },

  // Responsive breakpoints
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 1.8,
    },
  },
});

// Footer current year
document.getElementById('currentYear').innerText = new Date().getFullYear();
