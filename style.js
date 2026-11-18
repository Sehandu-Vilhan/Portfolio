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

// Default built-in Java project card (Water Level Observer)
const defaultProjects = [
  {
    id: "water-level-observer-java",
    title: "Water Level Observer (Java Swing)",
    image: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="140" viewBox="0 0 300 140">
        <rect width="300" height="140" fill="#080D16"/>
        <rect x="14" y="16" width="16" height="108" rx="4" fill="#10233F" stroke="#1B3B60" stroke-width="2"/>
        <rect x="17" y="45" width="10" height="76" rx="2" fill="#60CFFF"/>
        <rect x="44" y="16" width="115" height="50" rx="6" fill="#10233F" stroke="#1B3B60" stroke-width="2"/>
        <text x="101" y="45" fill="#D9F2FF" font-family="Segoe UI, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Water Level: 75%</text>
        <rect x="169" y="16" width="117" height="50" rx="6" fill="#10233F" stroke="#1B3B60" stroke-width="2"/>
        <text x="227" y="45" fill="#60CFFF" font-family="Segoe UI, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Alarm: ON</text>
        <rect x="44" y="74" width="115" height="50" rx="6" fill="#10233F" stroke="#1B3B60" stroke-width="2"/>
        <text x="101" y="103" fill="#D9F2FF" font-family="Segoe UI, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Dam: Open</text>
        <rect x="169" y="74" width="117" height="50" rx="6" fill="#10233F" stroke="#1B3B60" stroke-width="2"/>
        <text x="227" y="103" fill="#FF9F43" font-family="Segoe UI, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">SMS: Alert</text>
      </svg>
    `),
    description: "Multi-window Java Swing dashboard using the Observer design pattern to sync real-time water level sliders with Display, Alarm, Dam Splitter, and SMS alerts.",
    code: `import javax.swing.*;
import java.util.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.border.*;

class Demo {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Water Level Observer");
        frame.getContentPane().setBackground(Color.decode("#080D16"));

        JSlider slider = new JSlider(JSlider.VERTICAL, 0, 100, 0);
        slider.setBorder(new EmptyBorder(10, 50, 10, 10));
        slider.setBackground(Color.decode("#080D16"));
        slider.setForeground(Color.decode("#60CFFF"));
        frame.add(BorderLayout.WEST, slider);

        JPanel panel = new JPanel(new GridLayout(2, 2, 10, 10));
        panel.setBackground(Color.decode("#080D16"));

        JPanel waterCard = new JPanel();
        waterCard.setBackground(Color.decode("#10233F"));
        waterCard.setBorder(BorderFactory.createLineBorder(Color.decode("#1B3B60"), 2));
        JLabel display1 = new JLabel("Water Level: 0%");
        display1.setForeground(Color.decode("#D9F2FF"));
        display1.setHorizontalAlignment(SwingConstants.CENTER);
        JButton button1 = new JButton("Veiw Detail");
        button1.setBackground(Color.decode("#1B3B60"));
        button1.setForeground(Color.decode("#D9F2FF"));

        JPanel alamCard = new JPanel();
        alamCard.setBackground(Color.decode("#10233F"));
        alamCard.setBorder(BorderFactory.createLineBorder(Color.decode("#1B3B60"), 2));
        JLabel display2 = new JLabel("Alarm: OFF");
        display2.setForeground(Color.decode("#D9F2FF"));
        display2.setHorizontalAlignment(SwingConstants.CENTER);
        JButton button2 = new JButton("Veiw Detail");
        button2.setBackground(Color.decode("#1B3B60"));
        button2.setForeground(Color.decode("#D9F2FF"));

        JPanel damCard = new JPanel();
        damCard.setBackground(Color.decode("#10233F"));
        damCard.setBorder(BorderFactory.createLineBorder(Color.decode("#1B3B60"), 2));
        JLabel display3 = new JLabel("Damm: Close");
        display3.setForeground(Color.decode("#D9F2FF"));
        display3.setHorizontalAlignment(SwingConstants.CENTER);
        JButton button3 = new JButton("Veiw Detail");
        button3.setBackground(Color.decode("#1B3B60"));
        button3.setForeground(Color.decode("#D9F2FF"));

        JPanel smsCard = new JPanel();
        smsCard.setBackground(Color.decode("#10233F"));
        smsCard.setBorder(BorderFactory.createLineBorder(Color.decode("#1B3B60"), 2));
        JLabel display4 = new JLabel("SMS: Normal");
        display4.setForeground(Color.decode("#D9F2FF"));
        display4.setHorizontalAlignment(SwingConstants.CENTER);
        JButton button4 = new JButton("Veiw Detail");
        button4.setBackground(Color.decode("#1B3B60"));
        button4.setForeground(Color.decode("#D9F2FF"));

        ControlRoom controlRoom = new ControlRoom();

        Display waterDisplay = new Display();
        Alarm alarm = new Alarm();
        Splitter splitter = new Splitter();
        SMSSender sms = new SMSSender();

        controlRoom.addWaterLevelObserver(waterDisplay);
        controlRoom.addWaterLevelObserver(alarm);
        controlRoom.addWaterLevelObserver(splitter);
        controlRoom.addWaterLevelObserver(sms);

        controlRoom.addWaterLevelObserver(new WaterDashboard(
            display1, display2, display3, display4
        ));

        waterCard.setLayout(new BorderLayout(10, 10));
        waterCard.add(display1, BorderLayout.CENTER);
        waterCard.add(button1, BorderLayout.SOUTH);

        alamCard.setLayout(new BorderLayout(10, 10));
        alamCard.add(display2, BorderLayout.CENTER);
        alamCard.add(button2, BorderLayout.SOUTH);

        damCard.setLayout(new BorderLayout(10, 10));
        damCard.add(display3, BorderLayout.CENTER);
        damCard.add(button3, BorderLayout.SOUTH);

        smsCard.setLayout(new BorderLayout(10, 10));
        smsCard.add(display4, BorderLayout.CENTER);
        smsCard.add(button4, BorderLayout.SOUTH);

        panel.add(waterCard);
        panel.add(alamCard);
        panel.add(damCard);
        panel.add(smsCard);

        frame.add(panel);

        button1.addActionListener(e -> waterDisplay.showWindow(controlRoom.getWaterLevel()));
        button2.addActionListener(e -> alarm.showWindow(controlRoom.getWaterLevel()));
        button3.addActionListener(e -> splitter.showWindow(controlRoom.getWaterLevel()));
        button4.addActionListener(e -> sms.showWindow(controlRoom.getWaterLevel()));

        int[] x = {0};
        slider.addChangeListener(e -> {
            int level = slider.getValue();
            controlRoom.setWaterLevel(level);
            if (level > 75 && x[0] <= 75) {
                sms.showWindow(level);
            }
            x[0] = level;
        });

        frame.setSize(600, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}

class WaterLevelObserver {
    public void update(int waterLevel) {}
}

class ControlRoom {
    private WaterLevelObserver[] observers = new WaterLevelObserver[0];
    private int waterLevel = 0;

    public void addWaterLevelObserver(WaterLevelObserver observer) {
        WaterLevelObserver[] temp = new WaterLevelObserver[observers.length + 1];
        for (int i = 0; i < observers.length; i++) {
            temp[i] = observers[i];
        }
        temp[observers.length] = observer;
        observers = temp;
    }

    public int getWaterLevel() {
        return waterLevel;
    }

    public void setWaterLevel(int waterLevel) {
        this.waterLevel = waterLevel;
        for (WaterLevelObserver observer : observers) {
            observer.update(waterLevel);
        }
    }
}

class Display extends WaterLevelObserver {
    private JFrame frame;
    private JLabel label;
    private JProgressBar bar;

    public void showWindow(int waterLevel) {
        if (frame == null) {
            frame = new JFrame("Water Level Details");
            frame.getContentPane().setBackground(Color.decode("#080D16"));

            JPanel waterPanel = new JPanel(new BorderLayout(15, 25));
            waterPanel.setBackground(Color.decode("#080D16"));
            waterPanel.setBorder(BorderFactory.createEmptyBorder(25, 25, 25, 25));

            label = new JLabel();
            label.setHorizontalAlignment(SwingConstants.CENTER);
            label.setForeground(Color.decode("#D9F2FF"));

            bar = new JProgressBar(0, 100);
            bar.setValue(65);
            bar.setStringPainted(true);
            bar.setForeground(Color.decode("#60CFFF"));
            bar.setBackground(Color.decode("#1B3B60"));
            bar.setBorderPainted(false);

            waterPanel.add(label, BorderLayout.NORTH);
            waterPanel.add(bar, BorderLayout.CENTER);

            frame.add(waterPanel);
            frame.setSize(350, 200);
            frame.setLocationRelativeTo(null);
            frame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
        }
        update(waterLevel);
        frame.setVisible(true);
    }

    public void update(int waterLevel) {
        if (label != null) {
            label.setText("Water Level: " + waterLevel + "%");
            bar.setValue(waterLevel);
        }
    }
}

class Alarm extends WaterLevelObserver {
    private JFrame frame;
    private JLabel label;

    public void showWindow(int waterLevel) {
        if (frame == null) {
            frame = new JFrame("Alarm Details");
            frame.getContentPane().setBackground(Color.decode("#080D16"));
            label = new JLabel();
            label.setHorizontalAlignment(SwingConstants.CENTER);
            label.setForeground(Color.decode("#D9F2FF"));
            label.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
            frame.add(label);
            frame.setSize(350, 200);
            frame.setLocationRelativeTo(null);
            frame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
        }
        update(waterLevel);
        frame.setVisible(true);
    }

    public void update(int waterLevel) {
        if (label != null) {
            if (waterLevel > 60) {
                label.setText("Alarm: ON");
                label.setForeground(Color.decode("#60CFFF"));
            } else {
                label.setText("Alarm: OFF");
                label.setForeground(Color.decode("#D9F2FF"));
            }
        }
    }
}

class Splitter extends WaterLevelObserver {
    private JFrame frame;
    private JLabel label;

    public void showWindow(int waterLevel) {
        if (frame == null) {
            frame = new JFrame("Splitter Details");
            frame.getContentPane().setBackground(Color.decode("#080D16"));
            label = new JLabel();
            label.setHorizontalAlignment(SwingConstants.CENTER);
            label.setForeground(Color.decode("#D9F2FF"));
            label.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
            frame.add(label);
            frame.setSize(350, 200);
            frame.setLocationRelativeTo(null);
            frame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
        }
        update(waterLevel);
        frame.setVisible(true);
    }

    public void update(int waterLevel) {
        if (label != null) {
            if (waterLevel > 75) {
                label.setText("Damm: Open");
                label.setForeground(Color.decode("#60CFFF"));
            } else {
                label.setText("Damm: Close");
                label.setForeground(Color.decode("#D9F2FF"));
            }
        }
    }
}

class SMSSender extends WaterLevelObserver {
    private JFrame frame;
    private JLabel label;

    public void showWindow(int waterLevel) {
        if (frame == null) {
            frame = new JFrame("SMS Details");
            frame.getContentPane().setBackground(Color.decode("#080D16"));
            label = new JLabel();
            label.setHorizontalAlignment(SwingConstants.CENTER);
            label.setForeground(Color.decode("#D9F2FF"));
            label.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
            frame.add(label);
            frame.setSize(350, 200);
            frame.setLocationRelativeTo(null);
            frame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
        }
        update(waterLevel);
        frame.setVisible(true);
    }

    public void update(int waterLevel) {
        if (label != null) {
            label.setText(getMessage(waterLevel));
            label.setForeground(waterLevel > 60 ? Color.decode("#60CFFF") : Color.decode("#D9F2FF"));
        }
    }

    public String getMessage(int waterLevel) {
        if (waterLevel > 75) {
            return "<html><center><font color='#FF9F43'>IMMEDIATE ACTIONS REQUIRED:</font><br><font color='white'>Evacuate Low-Lying Areas:</font></center></html>";
        } else if (waterLevel > 60) {
            return "Water level are Rising";
        } else {
            return "Normal";
        }
    }
}

class WaterDashboard extends WaterLevelObserver {
    private JLabel display1;
    private JLabel display2;
    private JLabel display3;
    private JLabel display4;

    public WaterDashboard(JLabel display1, JLabel display2, JLabel display3, JLabel display4) {
        this.display1 = display1;
        this.display2 = display2;
        this.display3 = display3;
        this.display4 = display4;
    }

    public void update(int waterLevel) {
        display1.setText("Water Level: " + waterLevel + "%");

        if (waterLevel > 60) {
            display2.setText("Alarm: ON");
            display2.setForeground(Color.decode("#60CFFF"));
        } else {
            display2.setText("Alarm: OFF");
            display2.setForeground(Color.decode("#D9F2FF"));
        }

        if (waterLevel > 75) {
            display3.setText("Damm: Open");
            display3.setForeground(Color.decode("#60CFFF"));
        } else {
            display3.setText("Damm: Close");
            display3.setForeground(Color.decode("#D9F2FF"));
        }

        SMSSender sms = new SMSSender();
        display4.setText(sms.getMessage(waterLevel));
        display4.setForeground(waterLevel > 60 ? Color.decode("#60CFFF") : Color.decode("#D9F2FF"));
    }
}
`
  }
];

let storedProjects = JSON.parse(localStorage.getItem("portfolio_projects")) || [];
defaultProjects.forEach((defProj) => {
  const exists = storedProjects.some((p) => p.id === defProj.id || p.title === defProj.title);
  if (!exists) {
    storedProjects.unshift(defProj);
  }
});
let myProjects = storedProjects;
localStorage.setItem("portfolio_projects", JSON.stringify(myProjects));

let uploadedImageBase64 = "";

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});

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
    code
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

function viewProjectCode(index) {
  const proj = myProjects[index];
  document.getElementById("viewerTitle").textContent = proj.title;
  document.getElementById("viewerCodeContent").textContent = proj.code || "No source code provided.";
  document.getElementById("codeViewerModal").classList.add("active");
}

function closeCodeViewer() {
  document.getElementById("codeViewerModal").classList.remove("active");
}