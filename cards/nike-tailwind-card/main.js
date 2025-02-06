const colors = document.querySelectorAll('#colors > span');

colors.forEach((color) => {
  color.addEventListener('click', () => {
    colors.forEach((btn) => btn.classList.remove('bg-clip-content'));

    color.classList.add('bg-clip-content');
  });
});
