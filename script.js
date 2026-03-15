// script.js - Shift Detailing & Coating LLC website interactivity

document.addEventListener('DOMContentLoaded', () => {
  // ───────────────────────────────────────────────
  // Mobile hamburger menu toggle
  // ───────────────────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }

  // ───────────────────────────────────────────────
  // Smooth scrolling for internal anchor links
  // + close mobile menu after click
  // ───────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Close mobile menu if open
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (menuToggle) menuToggle.textContent = '☰';
      }
    });
  });

  // ───────────────────────────────────────────────
  // Reactive booking link & button text updater
  // Switches between standard and ceramic schedule
  // ───────────────────────────────────────────────
  const radios = document.querySelectorAll('input[name="service"]');
  const bookBtn = document.getElementById('dynamic-book-btn');
  const preview = document.getElementById('service-preview');

  if (radios.length > 0 && bookBtn && preview) {
    function updateBooking() {
      const selected = document.querySelector('input[name="service"]:checked');
      if (!selected) return;

      const labelText = selected.nextElementSibling.textContent.trim();
      const link = selected.dataset.link || 'https://calendar.app.google/cZjQW7vv5Jj6DMTW8';

      bookBtn.href = link;
      bookBtn.textContent = `Book ${labelText} Now`;
      preview.textContent = `Currently selected: ${labelText}`;
    }

    radios.forEach(radio => {
      radio.addEventListener('change', updateBooking);
    });

    // Run once on load
    updateBooking();
  }
});