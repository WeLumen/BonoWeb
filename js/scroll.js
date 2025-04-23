
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.etapas-container');
    const left = document.querySelector('.scroll-btn.left');
    const right = document.querySelector('.scroll-btn.right');

    left.addEventListener('click', () => {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });

    right.addEventListener('click', () => {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });

