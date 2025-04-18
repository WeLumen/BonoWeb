const slides = document.querySelectorAll('.slide');
let index = 0;

function mostrarSlide(i) {
  slides.forEach(slide => slide.classList.remove('ativo'));
  slides[i].classList.add('ativo');
}

function proximoSlide() {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}

function slideAnterior() {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
}

mostrarSlide(index);

// Avança automaticamente a cada 5 segundos
let intervalo = setInterval(proximoSlide, 5000);

// Avança ao clicar no texto
document.querySelector('.home-text').addEventListener('click', proximoSlide);
document.querySelector('.home-text').addEventListener('contextmenu', (e) => {
    e.preventDefault();
    slideAnterior();
  });
  