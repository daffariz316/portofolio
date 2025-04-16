    // Intersection Observer for scroll animations
    document.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.1 });
      
      // Add animations to these elements when they come into view
      document.querySelectorAll('.bg-white.shadow-xl, .group').forEach(el => {
        observer.observe(el);
      });
    });
