// src/scripts/contact.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Mencegah form submit secara default
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Membuat pesan WhatsApp
      const whatsappMessage = `Hello, I would like to get in touch with you!%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
      const phoneNumber = '62895372499072'; // Ganti dengan nomor WhatsApp Anda
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  
      // Mengarahkan pengguna ke WhatsApp dengan pesan
      window.open(whatsappURL, '_blank');
    });
  });
  