var typedItems = document.querySelector('.typed').getAttribute('data-typed-items').split(',');
new Typed('.typed', {
  strings: typedItems,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});