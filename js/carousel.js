const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const cardWidth = 320; // Ancho de cada tarjeta (300 + 20px margen)

nextBtn.addEventListener('click', () => {
  const totalCards = document.querySelectorAll('.project-card').length;
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});
