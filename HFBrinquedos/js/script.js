let index = 0;

function move(direction) {
  const slides = document.getElementById("slides");
  const total = slides.children.length;

  // Pega a largura atual do container (100% da tela no mobile)
  const slideWidth = slides.children[0].clientWidth;

  index = (index + direction + total) % total;

  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Ajusta automaticamente ao redimensionar a tela
window.addEventListener("resize", () => {
  const slides = document.getElementById("slides");
  const slideWidth = slides.children[0].clientWidth;

  slides.style.transform = `translateX(-${index * slideWidth}px)`;
});
