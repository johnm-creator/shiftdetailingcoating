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

  // Fallback for failed image loads - random choice between two placeholders
document.addEventListener('DOMContentLoaded', function() {
  const placeholders = [
    'assets/Imageloading.png',
    'assets/Imageloading2.png'
  ];

  document.querySelectorAll('img[data-fallback="true"]').forEach(img => {
    // Optional: set a temporary low-res placeholder or blur while loading
    // img.style.filter = 'blur(8px)'; // Uncomment if you want a blur effect during load

    img.onerror = function() {
      // Pick random placeholder when image fails
      const randomIndex = Math.floor(Math.random() * placeholders.length);
      this.src = placeholders[randomIndex];
      this.alt = "Image loading or unavailable - placeholder";
      // Prevent infinite error loop if placeholder itself fails
      this.onerror = null;
    };

    // Optional: remove blur once loaded successfully
    img.onload = function() {
      // this.style.filter = 'none'; // Uncomment if using blur
    };
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

// ==================== FOOTER SOCIAL ICONS (24x24) ====================
function createFooterSocialIcons() {
    const footerSocial = document.createElement('div');
    footerSocial.className = 'footer-social-icons';
    
    footerSocial.innerHTML = `
        <a href="https://www.facebook.com/shiftdetailingcoatingllc" 
           target="_blank" rel="noopener" aria-label="Follow us on Facebook">
            <img src="assets/Facebook_Logo_Primary.png" 
                 alt="Facebook" width="24" height="24">
        </a>
        
        <a href="https://www.instagram.com/shiftdetailingcoatingllc/" 
           target="_blank" rel="noopener" aria-label="Follow us on Instagram">
            <img src="assets/Instagram_Glyph_Gradient.svg" 
                 alt="Instagram" width="24" height="24">
        </a>

        <a href="https://x.com/CoatingShi81471?s=20"
            target="_blank" rel="noopener" aria-label="Follow us on X">
              <img src="assets/logo-white.png"
                  alt="X/Twitter" width="24" height="24">
        </a>
    `;

    // Find footer and append (adjust selector if your footer has a different class/ID)
    const footer = document.querySelector('footer') || 
                   document.querySelector('.footer') || 
                   document.querySelector('#footer');
    
    if (footer) {
        footer.appendChild(footerSocial);
    }
}

// ==================== CONTACT PAGE SOCIAL ICONS (32x32) ====================
function createContactSocialIcons() {
    const contactSocial = document.createElement('div');
    contactSocial.className = 'contact-social-icons';
    
    contactSocial.innerHTML = `
        <a href="https://www.facebook.com/shiftdetailingcoatingllc" 
           target="_blank" rel="noopener" aria-label="Follow us on Facebook">
            <img src="assets/Facebook_Logo_Primary.png" 
                 alt="Facebook" width="32" height="32">
        </a>
        
        <a href="https://www.instagram.com/shiftdetailingcoatingllc/" 
           target="_blank" rel="noopener" aria-label="Follow us on Instagram">
            <img src="assets/Instagram_Glyph_Gradient.svg" 
                 alt="Instagram" width="32" height="32">
        </a>

        <a href="https://x.com/CoatingShi81471?s=20"
            target="_blank" rel="noopener" aria-label="Follow us on X">
              <img src="assets/logo-white.png"
                  alt="X/Twitter" width="24" height="24">
        </a>
    `;

    // Find contact section (adjust selector to match your contact.html structure)
    const contactSection = document.querySelector('#contact') || 
                           document.querySelector('.contact-us') || 
                           document.querySelector('.contact-section') ||
                           document.querySelector('.contact');
    
    if (contactSection) {
        contactSection.appendChild(contactSocial);
    }
}

// Initialize both when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createFooterSocialIcons();
    createContactSocialIcons();
});


/***************
*
*  Lightbox functions
*
***************/
// Simple Lightbox for Gallery Images
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `<img src="" alt="">`;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');

  // Click on any gallery image to open lightbox
  document.querySelectorAll('.gallery-img, .camry-gallery img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox when clicking outside the image or pressing ESC
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'visible';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'visible';
    }
  });
});


/***************
*
*  Before / After Comparison Sliders
*
***************/
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const handle = slider.querySelector('.ba-handle');
    const afterImg = slider.querySelector('.ba-after');
    let isDragging = false;

    function updatePosition(x) {
      const rect = slider.getBoundingClientRect();
      let pos = (x - rect.left) / rect.width;
      pos = Math.max(0.02, Math.min(0.98, pos));
      const percent = pos * 100;

      handle.style.left = percent + '%';
      afterImg.style.clipPath = 'inset(0 ' + (100 - percent) + '% 0 0)';
    }

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      updatePosition(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientX);
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch events
    slider.addEventListener('touchstart', (e) => {
      isDragging = true;
      updatePosition(e.touches[0].clientX);
    });

    slider.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    });

    slider.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
});
