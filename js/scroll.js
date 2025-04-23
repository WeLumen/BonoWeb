document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.close-menu');  // Botão de fechar (X)
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // Abrir o menu ao clicar no ícone hamburguer
  toggle.addEventListener('click', () => {
    navLinks.classList.add('show');
    closeBtn.classList.add('show');  // Mostrar o botão de fechar
    toggle.classList.add('show');    // Esconder o hamburguer
  });

  // Fechar o menu ao clicar no ícone X
  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeBtn.classList.remove('show');  // Esconder o botão de fechar
    toggle.classList.remove('show');    // Mostrar o hamburguer novamente
  });

  // Fechar o menu ao clicar em qualquer link
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      closeBtn.classList.remove('show');  // Esconder o botão de fechar
      toggle.classList.remove('show');    // Mostrar o hamburguer novamente
    });
  });
});
