const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-sidebar");
const overlay = document.getElementById("overlay");
const userMenuBtn = document.getElementById("user-dropdown");
const userMenu = document.getElementById("user-menu-content");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  overlay.style.display = sidebar.classList.contains("collapsed") ? "none" : "block";
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("collapsed");
  overlay.style.display = "none";
});

userMenuBtn.addEventListener("click", () => {
  userMenu.parentElement.classList.toggle("open");
});

// Chart.js
window.addEventListener("DOMContentLoaded", () => {
  new Chart(document.getElementById("revenueChart"), {
    type: "bar",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [
        {
          label: "R$",
          data: [12000, 15000, 10000, 17000, 14000, 19000],
          backgroundColor: "#3b82f6"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });

  new Chart(document.getElementById("usersChart"), {
    type: "pie",
    data: {
      labels: ["Norte", "Sul", "Leste", "Oeste", "Centro"],
      datasets: [
        {
          data: [12, 19, 7, 15, 5],
          backgroundColor: [
            "#3b82f6",
            "#60a5fa",
            "#93c5fd",
            "#bfdbfe",
            "#dbeafe"
          ]
        }
      ]
    },
    options: { responsive: true }
  });
});
