 

var typedItems = document.querySelector('.typed').getAttribute('data-typed-items').split(',');
new Typed('.typed', {
  strings: typedItems,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

 

window.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-skill');
    setTimeout(() => {
      bar.style.width = `${value}%`;
    }, 500); // Retardo de 0.5 segundos para empezar la animación
  });
});
