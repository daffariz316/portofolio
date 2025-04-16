// File: /js/contact.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      // Tambahkan indikator loading atau nonaktifkan tombol
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }
      
      // Form akan dikirimkan secara normal ke Formspree
      
      // Opsional: jika Anda ingin menangani pengiriman form dengan AJAX (fetch)
      // dan tidak menggunakan redirect bawaan Formspree, Anda bisa menggunakan kode berikut:
      /*
      event.preventDefault();
      
      const formData = new FormData(form);
      
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Sukses
          form.reset();
          alert('Terima kasih! Pesan Anda telah terkirim.');
        } else {
          // Error
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              alert(data["errors"].map(error => error["message"]).join(", "));
            } else {
              alert("Oops! Terjadi kesalahan saat mengirim form.");
            }
          })
        }
      })
      .catch(error => {
        // Error jaringan
        alert("Oops! Terjadi kesalahan jaringan saat mengirim form.");
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Send Message';
        }
      });
      */
    });
  }
});