const container = document.getElementById('container');
const heartText1 = document.getElementById('heartText1');
const heartText2 = document.getElementById('heartText2');
const openBtn = document.getElementById('openBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

openBtn.addEventListener('click', () => container.classList.toggle('active'));

yesBtn.addEventListener('click', () => {
  heartText1.innerText = `I knew
    you were the one for me`;
  heartText2.innerText = '😍';
  noBtn.disabled = true;
});

noBtn.addEventListener('click', () => {
  heartText1.innerText = `Ha,
    me neither`;
  heartText2.innerText = '😏';
  yesBtn.disabled = true;
});
