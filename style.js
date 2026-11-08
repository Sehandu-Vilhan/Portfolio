document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('statusModal');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const secondaryCloseBtn = document.getElementById('secondaryCloseBtn');

  // Open modal
  const openModal = () => modal.classList.add('active');

  // Close modal
  const closeModal = () => modal.classList.remove('active');

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  secondaryCloseBtn.addEventListener('click', closeModal);

  // Close when clicking outside the modal box
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});