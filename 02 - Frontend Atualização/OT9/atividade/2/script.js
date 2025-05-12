const btnToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

btnToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});
