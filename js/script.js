const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
const cardWidth = 380; // 300px + 20px margen
const totalCards = document.querySelectorAll('.project-card').length;

// Crear dots dinámicamente
for (let i = 0; i < totalCards; i++) {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
}

// Seleccionar todos los dots
const dots = document.querySelectorAll('.carousel-dots span');

// Función para actualizar carrusel y dots
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Eventos botones
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Click en los dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});
