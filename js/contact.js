// Contact Form Logic

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      
      console.log('Contact form submitted:', data);
      
      // Show success message
      contactForm.style.display = 'none';
      document.getElementById('contactSuccess').style.display = 'block';
      
      // In production, this would send data to a server
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
    });
  }
});
