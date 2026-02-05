const cardWrapper = document.querySelector('.card-wrapper');
const showHideBtn = document.querySelector('.show-hide-btn');

showHideBtn.addEventListener('click', () => {
  cardWrapper.classList.toggle('show-details');

  if (!cardWrapper.classList.contains('show-details')) {
    cardWrapper.classList.add('hide-details');
    showHideBtn.innerHTML = '<i class="fa-solid fa-greater-than"></i>';
  } else {
    cardWrapper.classList.remove('hide-details');
    showHideBtn.innerHTML = '<i class="fa-solid fa-less-than"></i>';
  }
});
