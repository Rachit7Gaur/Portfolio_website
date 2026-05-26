// ===== Mobile Menu Toggle =====
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// ===== Smooth Scrolling =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });

    // Only hide menu if screen is small (mobile)
    if (window.innerWidth <= 768) {
      navLinks.style.display = 'none';
    }
  });
});

// ===== Navbar Scroll Effect =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== Contact Form Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact form");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply animation when form comes into view
        contactForm.style.animation = "floatIn 1s ease-out forwards";
        observer.unobserve(contactForm); // run once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(contactForm);
});
