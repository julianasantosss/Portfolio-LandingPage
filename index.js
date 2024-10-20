 
// Type-Background function
var typedItems = document.querySelector('.typed').getAttribute('data-typed-items').split(',');
new Typed('.typed', {
  strings: typedItems,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});


// Skills loader
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.getAttribute('data-skill');
        bar.style.width = `${value}%`;
      }
    });
  }, {
    threshold: 0.5
  });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });
});

