document.addEventListener('DOMContentLoaded', () => {
  // Toggle Menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNavLinks = document.getElementById('mobile-nav-links'); // Updated ID
  const menuIcon = document.getElementById('menu-icon');
  
  if (menuToggle && mobileNavLinks && menuIcon) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNavLinks.classList.contains('hidden');
      mobileNavLinks.classList.toggle('hidden', !isOpen);
      menuIcon.classList.toggle('fa-bars', !isOpen);
      menuIcon.classList.toggle('fa-times', isOpen);
    });
  }

  // Toggle Dark Mode
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const root = document.documentElement;
  let isDarkMode = root.classList.contains('dark') || localStorage.getItem('theme') === 'dark';

  // Tambahkan elemen audio
  const audio = new Audio('/audio/sound.mp3'); // Ganti path sesuai lokasi file suara Anda

  // Atur volume dan pastikan audio dimuat
  audio.volume = 1.0; // Volume maksimal
  audio.addEventListener('canplaythrough', () => {
    console.log('Audio is ready to play.');
  });

  // Set initial theme
  if (isDarkMode) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  // Initialize Icon (dibetulin logikanya)
  if (darkModeToggle) {
    darkModeToggle.querySelector('i').classList.add(isDarkMode ? 'fa-moon' : 'fa-sun');
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

      // Reset dan Putar Suara
      audio.pause(); // Hentikan audio jika sedang diputar
      audio.currentTime = 0; // Reset waktu pemutaran ke awal
      audio.play().catch((err) => {
        console.error('Audio playback failed:', err);
      });
    });
  }
});
