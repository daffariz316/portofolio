document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');

      // Hide all tab contents
      contents.forEach((content) => content.classList.add('hidden'));

      // Show the clicked tab's content
      document.querySelector(`.${tab}`).classList.remove('hidden');

      // Update button styles
      buttons.forEach((btn) =>
        btn.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-blue-500')
      );
      button.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-blue-500');
       
    });
  });

  // Show Education by default
  document.querySelector('.education').classList.remove('hidden');
  document.querySelector('.tab-button[data-tab="education"]').classList.add(
    'bg-gray-700',
    'from-purple-600',
    'to-blue-500'
  );
});
