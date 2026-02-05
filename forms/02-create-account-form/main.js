const showBtn = document.getElementById('showBtn');
const backBtn = document.getElementById('backBtn');
const form = document.getElementById('form');

showBtn.addEventListener('click', () => {
  form.style.transform = 'scale(1)';
});

backBtn.addEventListener('click', () => {
  form.style.transform = 'scale(0)';
});

window.addEventListener('click', (e) => {
  e.target === form && (form.style.transform = 'scale(0)');
});
