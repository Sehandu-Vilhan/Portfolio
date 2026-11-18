// Admin Password: 123      Upload method / functions  in Upload Java Project & Code 90% built by AI

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
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

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

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

const bubbleMenu = document.getElementById('bubbleMenu');
let closeTimer;

bubbleMenu.addEventListener('mouseenter', () => {
  clearTimeout(closeTimer);
  bubbleMenu.classList.add('active');
});

bubbleMenu.addEventListener('mouseleave', () => {
  closeTimer = setTimeout(() => {
    bubbleMenu.classList.remove('active');
  }, 700);
});

// CHANGED: Default built-in Java project card (Water Level Observer)
// The Java programs now live in the "projects" folder, not in this file.
//   files     = .java files shown by "View Stored Code"
//   jar       = compiled program started by "Run Program"
//   mainClass = class that has the main method
const defaultProjects = [
  {
    id: "water-level-observer-java",
    title: "Water Level Observer (Java Swing & Console)",
    description: "Complete Observer Pattern project featuring both the Java Swing GUI Dashboard and the Console simulation version.",
      files: [
      "projects/waterLevelObserver/Demo.java",
      "projects/waterLevelObserver/waterlvl.java"
    ],
    jar: "projects/waterLevelObserver/WaterLevel.jar",
    mainClass: "Demo",
    code: ""
  }
,























  {
    id: "defense-system-java",
    title: "Defense System (Java Swing)",
    description: "Java Swing Defense System using the Observer pattern: a Main Controller commanding Helicopter, Tank and Submarine units.",
    jar: "projects/DefenseSystem/DefenseSystem.jar",
    mainClass: "PUT_MAIN_CLASS_HERE",
    code: "Source code coming soon."
  }




    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee
    //  addddddddddd   card  hereeeeeeeeeeeeeeeeeeeeee




    













];

// CHANGED: if the built-in card is already saved in localStorage, refresh it with the latest settings
let storedProjects = JSON.parse(localStorage.getItem("portfolio_projects")) || [];
defaultProjects.forEach((defProj) => {
  const i = storedProjects.findIndex((p) => p.id === defProj.id || p.title === defProj.title);
  if (i === -1) {
    storedProjects.unshift(defProj);
  } else {
    storedProjects[i] = defProj;
  }
});
let myProjects = storedProjects;
localStorage.setItem("portfolio_projects", JSON.stringify(myProjects));

let uploadedImageBase64 = "";

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});

// Helper to check if a project is one of the permanent defaults
function isDefaultProject(proj) {
  return proj.id === "water-level-observer-java" || 
         proj.id === "defense-system-java" || 
         proj.title === "Water Level Observer (Java Swing & Console)" || 
         proj.title === "Defense System (Java Swing)";
}

function renderProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = "";

  myProjects.forEach((proj, index) => {
    const cardImage = proj.image || 'https://via.placeholder.com/300x140/18181b/ffffff?text=Project';
    // NEW: Run button only for cards that have a jar
    const runButton = proj.jar
      ? `<button class="btn btn-sm btn-101 rounded-pill w-100 mb-2" onclick="runProject(${index})">▶ Run Program</button>`
      : "";
    const deleteButton = !isDefaultProject(proj)
      ? `<button class="btn btn-sm btn-outline-danger rounded-pill w-100 mt-2" onclick="deleteProject(${index})">🗑️ Delete Project</button>`
      : "";
    const cardHTML = `
      <div class="card bg-dark border-secondary text-white flex-shrink-0 d-flex flex-column justify-content-between" style="width: 350px; min-height: 420px;">
        <div>
          <img src="${cardImage}" class="card-img-top" alt="${proj.title}" style="height: 240px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title text-white fw-bold fs-6 mb-1">${proj.title}</h5>
            <p class="card-text text-muted small mb-0">${proj.description}</p>
          </div>
        </div>
        <div class="card-footer bg-transparent border-0 pb-3">
          ${runButton}
          <button class="btn btn-sm btn-outline-light rounded-pill w-100" onclick="viewProjectCode(${index})">📂 View Stored Code</button>
          ${deleteButton}
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedImageBase64 = e.target.result;
      document.getElementById("projImage").value = "[Local File Selected]";
    };
    reader.readAsDataURL(file);
  }
}

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

function saveNewProject() {
  const title = document.getElementById("projTitle").value.trim();
  const imageInput = document.getElementById("projImage").value.trim();
  const description = document.getElementById("projDesc").value.trim();
  const code = document.getElementById("projCode").value;

  if (!title) {
    alert("Please enter a project title!");
    return;
  }

  const finalImage = uploadedImageBase64 || imageInput || "https://via.placeholder.com/300x140/18181b/ffffff?text=" + encodeURIComponent(title);

  myProjects.push({
    title,
    image: finalImage,
    description,
    code,
    isCustom: true
  });

  localStorage.setItem("portfolio_projects", JSON.stringify(myProjects));
  renderProjects();

  document.getElementById("projTitle").value = "";
  document.getElementById("projImage").value = "";
  document.getElementById("projImageFile").value = "";
  document.getElementById("projDesc").value = "";
  document.getElementById("projCode").value = "";
  uploadedImageBase64 = "";
  closeAdminModal();
}

function deleteProject(index) {
  const pwd = prompt("Enter Admin Password to Delete:");
  if (pwd === "123") {
    if (!isDefaultProject(myProjects[index])) {
      myProjects.splice(index, 1);
      localStorage.setItem("portfolio_projects", JSON.stringify(myProjects));
      renderProjects();
    } else {
      alert("Default projects cannot be deleted!");
    }
  } else if (pwd !== null) {
    alert("Incorrect Password!");
  }
}

function deleteAllCustomProjects() {
  const pwd = prompt("Enter Admin Password to delete added projects:");
  if (pwd === "123") {
    myProjects = myProjects.filter(p => isDefaultProject(p));
    localStorage.setItem("portfolio_projects", JSON.stringify(myProjects));
    renderProjects();
  } else if (pwd !== null) {
    alert("Incorrect Password!");
  }
}

// CHANGED: loads the .java files from the "projects" folder, or shows saved code for uploaded cards
async function viewProjectCode(index) {
  const proj = myProjects[index];
  document.getElementById("viewerTitle").textContent = proj.title;
  const viewer = document.getElementById("viewerCodeContent");
  document.getElementById("codeViewerModal").classList.add("active");

  if (proj.files && proj.files.length) {
    viewer.textContent = "Loading code...";
    try {
      let text = "";
      for (const path of proj.files) {
        const res = await fetch(path);
        if (!res.ok) throw new Error(path + " (" + res.status + ")");
        const name = path.split("/").pop();
        text += "// ==========================================\n";
        text += "// FILE: " + name + "\n";
        text += "// ==========================================\n";
        text += (await res.text()) + "\n\n";
      }
      viewer.textContent = text;
    } catch (e) {
      viewer.textContent = "Could not load code files: " + e.message +
        "\n\nMake sure the files exist in the projects folder and the site is opened through a web server (not by double-clicking index.html).";
    }
  } else {
    viewer.textContent = proj.code || "No source code provided.";
  }
}

function closeCodeViewer() {
  document.getElementById("codeViewerModal").classList.remove("active");
}

// NEW: add a card from code (also callable from the browser console)
// Example: addProjectCard({ title: "Tank Game", description: "Observer demo", files: ["projects/tank/Tank.java"], jar: "projects/tank/Tank.jar", mainClass: "Tank" });
function addProjectCard({ title, image = "", description = "", code = "", files = null, jar = "", mainClass = "" }) {
  myProjects.push({
    title,
    image: image || "https://via.placeholder.com/300x140/18181b/ffffff?text=" + encodeURIComponent(title),
    description,
    code,
    files,
    jar,
    mainClass,
    isCustom: true
  });
  localStorage.setItem("portfolio_projects", JSON.stringify(myProjects));
  renderProjects();
}

// NEW: run Java in the browser (CheerpJ)
let cheerpjReady = false;

function runProject(index) {
  const proj = myProjects[index];
  runJavaProject(proj.jar, proj.mainClass, proj.title);
}

async function runJavaProject(jarPath, mainClass, title) {
  document.getElementById("javaRunTitle").textContent = title || "Run Java";
  document.getElementById("javaRunModal").classList.add("active");
  const box = document.getElementById("javaDisplay");
  box.textContent = "Loading Java...";
  try {
    if (!cheerpjReady) {
      await cheerpjInit();
      cheerpjReady = true;
    }
    box.textContent = "";
    cheerpjCreateDisplay(800, 500, box);
    await cheerpjRunMain(mainClass, "/app/" + jarPath);
  } catch (e) {
    box.textContent = "Could not run: " + e;
  }
}

function closeJavaRunner() {
  document.getElementById("javaRunModal").classList.remove("active");
}


function deleteAllCustomProjects() {
  const pwd = prompt("Enter Admin Password to delete added projects:");
  if (pwd === "123") {
    // Keeps only default built-in projects, clears user-added ones

    myProjects = myProjects.filter(p => 
      p.id === "water-level-observer-java" || 
      p.id === "defense-system-java" || 
      p.title === "Water Level Observer (Java Swing & Console)" || 
      p.title === "Defense System (Java Swing)"
    );
    localStorage.setItem("portfolio_projects", JSON.stringify(myProjects));
    renderProjects();
    alert("User-added projects deleted successfully!");
  } else if (pwd !== null) {
    alert("Incorrect Password!");
  }
}