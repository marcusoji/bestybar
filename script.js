// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// WhatsApp Integration
function sendWhatsApp(message) {
  const phone = "+2348037117424";
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
}

// Form Submission Handler
document.getElementById('catering-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    name: this.querySelector('input[type="text"]').value,
    email: this.querySelector('input[type="email"]').value,
    phone: this.querySelector('input[type="tel"]').value,
    service: this.querySelector('select').value,
    message: this.querySelector('textarea').value
  };

  const whatsappMessage = 
    `*NEW CATERING INQUIRY - BESTY BAR*\n\n` +
    `*Name:* ${formData.name}\n` +
    `*Email:* ${formData.email}\n` +
    `*Phone:* ${formData.phone || 'Not provided'}\n` +
    `*Service:* ${formData.service}\n` +
    `*Message:* ${formData.message}\n\n` +
    `_Sent via Besty Bar website_`;

  sendWhatsApp(whatsappMessage);
  
  // Reset form and show confirmation
  this.reset();
  alert('Your inquiry has been sent to WhatsApp! We will contact you shortly.');
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});