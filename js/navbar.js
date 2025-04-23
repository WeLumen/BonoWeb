// Seleciona os elementos
const menu = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // alterna entre mostrar/ocultar o menu
});
