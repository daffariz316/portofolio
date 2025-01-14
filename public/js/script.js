document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    
    if (menuToggle && navLinks && menuIcon) {
      menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('hidden');
        navLinks.classList.toggle('hidden', !isOpen);
        menuIcon.classList.toggle('fa-bars', !isOpen);
        menuIcon.classList.toggle('fa-times', isOpen);
      });
    }
  
    // Toggle Dark Mode
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const root = document.documentElement;
    let isDarkMode = root.classList.contains('dark') || localStorage.getItem('theme') === 'dark';
  
    // Initialize Icon
    if (darkModeToggle) {
      darkModeToggle.querySelector('i').classList.add(isDarkMode ? 'fa-sun' : 'fa-moon');
    }
  
    // Set initial theme
    if (isDarkMode) {
      root.classList.add('dark');
    }
  
    // Handle Dark Mode Toggle
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
          root.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          root.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
  
        // Update Icon
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
      });
    }
  });
  