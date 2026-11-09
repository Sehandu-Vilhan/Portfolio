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



// Array of roles to rotate through dynamically
const roles = [
  "Java Swing Architect",
  "Full-Stack Web Learner",
  "Trainee Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Speed of typing (ms)
const deletingSpeed = 50; // Speed of deleting (ms)
const pauseTime = 2000;   // Pause when fully typed (ms)

function typeEffect() {
  const targetElement = document.getElementById("dynamicRoleText");
  if (!targetElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    targetElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    targetElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let timeout = typingSpeed;

  if (!isDeleting && charIndex === currentRole.length) {
    timeout = pauseTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    timeout = 400;
  }

  setTimeout(typeEffect, timeout);
}

// Start effect on page load
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});