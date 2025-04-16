document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("[data-project-index]");
  
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const index = card.getAttribute("data-project-index");
        const detail = document.getElementById(`project-details-${index}`);
  
        // Tutup semua detail
        document.querySelectorAll('[id^="project-details-"]').forEach((el) => {
          if (el !== detail) el.classList.add("hidden");
        });
  
        // Toggle yang diklik
        detail.classList.toggle("hidden");
      });
    });
  });
  