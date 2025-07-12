const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = document.querySelector('#mobile-menu > i');
const navList = document.querySelector('.nav-list');
const yearNum = document.getElementById('yearNum');
const aboutSection = document.getElementById('about');
const projectsCount = document.getElementById('projects-count');
const clientsCount = document.getElementById('clients-count');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
  navList.classList.contains('active')
    ? (mobileMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>')
    : (mobileMenu.innerHTML = '<i class="fa-solid fa-bars"></i>');
});

document.addEventListener('click', (e) => {
  if (
    navList.classList.contains('active') &&
    !e.target.isEqualNode(navList) &&
    !e.target.isEqualNode(mobileMenu) &&
    !e.target.isEqualNode(mobileMenuIcon)
  ) {
    navList.classList.remove('active');
    mobileMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let hasHeroAnimated = false;
  let hasAboutAnimated = false;

  const animateCount = (element, target, sec) => {
    let count = 0;
    const increment = Math.ceil(target / 100);
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      element.textContent = `${count}+`;
    }, sec * 10);
  };

  const handelAnimation = () => {
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!hasHeroAnimated) {
      hasHeroAnimated = true;
      animateCount(yearNum, 9, 15);
    }

    if (aboutTop < windowHeight && !hasAboutAnimated) {
      hasAboutAnimated = true;
      animateCount(projectsCount, 340, 4);
      animateCount(clientsCount, 200, 2);
    }
  };

  window.addEventListener('load', handelAnimation);
  window.addEventListener('scroll', handelAnimation);
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
