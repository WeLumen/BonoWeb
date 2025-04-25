// JS
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.add('show');
  menuToggle.classList.add('hide'); // Alternar com uma classe nova para esconder
  closeMenu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('show');
  menuToggle.classList.remove('hide');
  closeMenu.classList.remove('show');
});
