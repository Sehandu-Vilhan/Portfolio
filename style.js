              // Admin Password: 123      Upload method / functions 90% built by AI
              // Admin Password: 123      Upload method / functions 90% built by AI
              // Admin Password: 123      Upload method / functions 90% built by AI
              // Admin Password: 123      Upload method / functions 90% built by AI
              // Admin Password: 123      Upload method / functions 90% built by AI
              // Admin Password: 123      Upload method / functions 90% built by AI
              // Admin Password: 123      Upload method / functions 90% built by AI
              // Admin Password: 123      Upload method / functions 90% built by AI
              // Admin Password: 123      Upload method / functions 90% built by AI






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


const bubbleMenu = document.getElementById('bubbleMenu');
let closeTimer;

// When mouse enters the button area, open bubbles immediately
bubbleMenu.addEventListener('mouseenter', () => {
  clearTimeout(closeTimer);
  bubbleMenu.classList.add('active');
});

// When mouse leaves, give a 700ms grace period before closing so you can click safely
bubbleMenu.addEventListener('mouseleave', () => {
  closeTimer = setTimeout(() => {
    bubbleMenu.classList.remove('active');
  }, 700); // 700 milliseconds of time to click
});

// Function when you click a bubble option
function uploadCode(lang) {
  alert("Ready to upload " + lang + " code project!");
  // You can connect this to your password modal from earlier!
}


// Load saved projects from browser storage
let myProjects = JSON.parse(localStorage.getItem("portfolio_projects")) || [];
let uploadedImageBase64 = ""; // Holds local uploaded image data

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});

// Render cards horizontally going right (No extra fallback text or add buttons)
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = "";

  myProjects.forEach((proj, index) => {
    const cardImage = proj.image || 'https://via.placeholder.com/300x140/18181b/ffffff?text=Project';
    const cardHTML = `
      <div class="card bg-dark border-secondary text-white flex-shrink-0 d-flex flex-column justify-content-between" style="width: 280px; min-height: 320px;">
        <div>
          <img src="${cardImage}" class="card-img-top" alt="${proj.title}" style="height: 140px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title text-white fw-bold fs-6 mb-1">${proj.title}</h5>
            <p class="card-text text-muted small mb-0">${proj.description}</p>
          </div>
        </div>
        <div class="card-footer bg-transparent border-0 pb-3">
          <button class="btn btn-sm btn-outline-light rounded-pill w-100" onclick="viewProjectCode(${index})">📂 View Stored Code</button>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// Handle local image file upload conversion to keep it saved in localStorage
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedImageBase64 = e.target.result; // Convert image to Base64 string for storage
      document.getElementById("projImage").value = "[Local File Selected]";
    };
    reader.readAsDataURL(file);
  }
}

// Password check triggered from your Bubble Menu
function uploadCode(langCategory) {
  const pwd = prompt("Enter Admin Password:");
  if (pwd === "123") {
    document.getElementById("modalHeaderTitle").textContent = "Upload " + langCategory + " Project & Code";
    document.getElementById("adminModal").classList.add("active");
  } else if (pwd !== null) {
    alert("Incorrect Password!");
  }
}

function closeAdminModal() {
  document.getElementById("adminModal").classList.remove("active");
  uploadedImageBase64 = "";
}

// Save name, description, image (link or upload), and code to localStorage
function saveNewProject() {
  const title = document.getElementById("projTitle").value.trim();
  const imageInput = document.getElementById("projImage").value.trim();
  const description = document.getElementById("projDesc").value.trim();
  const code = document.getElementById("projCode").value;

  if (!title) {
    alert("Please enter a project title!");
    return;
  }

  // Use uploaded file if present, otherwise use image URL input link
  const finalImage = uploadedImageBase64 || imageInput || "https://via.placeholder.com/300x140/18181b/ffffff?text=" + encodeURIComponent(title);

  myProjects.push({
    title,
    image: finalImage,
    description,
    code
  });

  // Save persistently in browser storage
  localStorage.setItem("portfolio_projects", JSON.stringify(myProjects));

  renderProjects();

  // Reset inputs and close modal
  document.getElementById("projTitle").value = "";
  document.getElementById("projImage").value = "";
  document.getElementById("projImageFile").value = "";
  document.getElementById("projDesc").value = "";
  document.getElementById("projCode").value = "";
  uploadedImageBase64 = "";
  closeAdminModal();
}

// Open stored code viewer popup
function viewProjectCode(index) {
  const proj = myProjects[index];
  document.getElementById("viewerTitle").textContent = proj.title;
  document.getElementById("viewerCodeContent").textContent = proj.code || "No source code provided.";
  document.getElementById("codeViewerModal").classList.add("active");
}

function closeCodeViewer() {
  document.getElementById("codeViewerModal").classList.remove("active");
}