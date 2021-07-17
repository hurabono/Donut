const toggleBtn = document.querySelector('.nav__toggleBtn');
const menu = document.querySelector('.navbar__memu ');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      icons.classList.toggle('active');
});

