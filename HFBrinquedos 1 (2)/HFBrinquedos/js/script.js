let index = 0;

function move(direction) {
  const slides = document.getElementById("slides");
  if (!slides || slides.children.length === 0) return;

  const total = slides.children.length;
  const slideWidth = slides.children[0].getBoundingClientRect().width;

  index = (index + direction + total) % total;

  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Ajusta automaticamente ao redimensionar a tela
window.addEventListener("resize", () => {
  const slides = document.getElementById("slides");
  if (!slides || slides.children.length === 0) return;

  const slideWidth = slides.children[0].getBoundingClientRect().width;

  slides.style.transform = `translateX(-${index * slideWidth}px)`;
});


// menu responsivo
function menu() {

  let largura = window.innerWidth;
  const menu = document.querySelector('nav')
  const hamburguer = document.querySelector('.hamburguer')

  if (largura <= 768) {
    menu.classList.add('oculto')
    hamburguer.classList.remove('oculto')
  } else{
    menu.classList.remove('oculto')
    hamburguer.classList.add('oculto')
  }
}

menu()

window.addEventListener('resize', menu);

document.querySelector('.hamburguer').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('oculto')
  document.querySelector('.hamburguer').classList.toggle('ativo')

  
})

prev = document.querySelector('.prev')
next = document.querySelector('.next')

window.document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft'){
    prev.click()
  } else if (e.key === 'ArrowRight'){
    next.click()
  }
})