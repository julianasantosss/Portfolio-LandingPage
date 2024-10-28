 
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



// Form Section

$(function() {
  'use strict';

  var contactForm = function() {
      if ($('#contactForm').length > 0) {
          $("#contactForm").validate({
              onfocusout: false,
              onkeyup: false,
              rules: {
                  name: "required",
                  email: {
                      required: true,
                      email: true
                  },
                  subject: "required",
                  message: {
                      required: true,
                      minlength: 5
                  }
              },
              messages: {
                  name: "Please enter your name",
                  email: "Please enter a valid email address",
                  subject: "Please enter a subject",
                  message: "Please enter a message"
              },
              submitHandler: function(form) {
                  $.ajax({
                      type: "POST",
                      url: "https://formspree.io/f/mvgozqbo",
                      data: $(form).serialize(),
                      dataType: "json",
                      success: function(response) {
                          Swal.fire({
                              title: "Thank You!",
                              text: "Your message was sent!",
                              icon: "success"
                          });
                          form.reset();
                      },
                      error: function() {
                          Swal.fire({
                              title: "Error",
                              text: "Something went wrong. Please try again.",
                              icon: "error"
                          });
                      }
                  });
              }
          });
      }
  };
  contactForm();
});

// Navbar Scroll Function

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navmenu a");

  window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(current)) {
              link.classList.add("active");
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".navmenu ul");

  mobileNavToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active"); // Alternar la clase activa
  });
});