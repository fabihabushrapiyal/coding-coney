const colorBtns = document.querySelectorAll('.colors > span');
const img = document.getElementById('shoeImage');
const rootClr = document.documentElement.style;

colorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    colorBtns.forEach((button) => button.classList.remove('active'));

    btn.classList.add('active');

    img.src = `./img/${btn.dataset.color}-shoe.png`;

    switch (btn.dataset.color) {
      case 'red':
        rootClr.setProperty('--shoe-clr', '#e90114');
        break;

      case 'blue':
        rootClr.setProperty('--shoe-clr', '#2514da');
        break;

      case 'yellow':
        rootClr.setProperty('--shoe-clr', '#ee9800');
        break;

      case 'violet':
        rootClr.setProperty('--shoe-clr', '#8300d6');
        break;
    }
  });
});
