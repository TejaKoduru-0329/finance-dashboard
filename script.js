// 🔹 DATA
const transactions = [
  { date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { date: "2026-04-02", amount: 200, category: "Food", type: "expense" }
];

// 🔹 STATE
// let currentRole = "admin";
// let currentPage = "dashboard";

// // 🔥 NAVIGATION
// document.querySelectorAll("#menu .nav-item").forEach(item => {
//   item.addEventListener("click", () => {
//     document.querySelectorAll("#menu .nav-item").forEach(i => i.classList.remove("active"));
//     item.classList.add("active");

//     currentPage = item.dataset.page;

//     document.getElementById("pageTitle").innerText =
//       currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
//   });
// });

const sections = {
  dashboard: document.getElementById("dashboardSection"),
  transactions: document.getElementById("transactionsSection"),
  insights: document.getElementById("insightsSection")
};

document.querySelectorAll("#menu .nav-item").forEach(item => {
  item.addEventListener("click", () => {

    // active style
    document.querySelectorAll("#menu .nav-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const page = item.dataset.page;

    // 🔥 ALL hide
    Object.values(sections).forEach(sec => sec.style.display = "none");

    // 🔥 SHOW selected
    sections[page].style.display = "block";

    // 🔥 TITLE change
    document.getElementById("pageTitle").innerText =
      page.charAt(0).toUpperCase() + page.slice(1);

  });
});

const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.querySelector(".sidebar");

// Open
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Close (X button)
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Click outside close
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});

// 🔥 ROLE TOGGLE
document.getElementById("adminBtn").onclick = () => {
  currentRole = "admin";
  updateRoleUI();
};

document.getElementById("viewerBtn").onclick = () => {
  currentRole = "viewer";
  updateRoleUI();
};

function updateRoleUI() {
  document.getElementById("roleBadge").innerText = currentRole.toUpperCase();

  document.getElementById("adminBtn").classList.toggle("active", currentRole === "admin");
  document.getElementById("viewerBtn").classList.toggle("active", currentRole === "viewer");
}

// 🔥 SUMMARY
function calculateSummary() {
  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  document.getElementById("income").innerText = "₹" + income;
  document.getElementById("expense").innerText = "₹" + expense;
  document.getElementById("balance").innerText = "₹" + (income - expense);

  let savings = ((income - expense) / income) * 100 || 0;
  document.getElementById("savings").innerText = savings.toFixed(1) + "%";
}

// 🔥 CHARTS

// Line Chart
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Balance",
      data: [0, 0, 60000, 150000, 200000, 300000],
      borderColor: "#D000F7",
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    }
});

// Pie Chart
new Chart(document.getElementById("pieChart"), {
  type: "doughnut",
  data: {
    labels: ["Utilities", "Food", "Transport", "Entertainment", "Shopping", "Healthcare", "Investment"],
    datasets: [{
      data: [5000, 3000, 1500, 1000, 4000, 1200, 6000],
      backgroundColor: ["#8B5CF6", "#D000F7", "#24BAE3", "#6C5CE7", "#FF4D6D", "#10B981",  "#FBBF24" ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    
    plugins: {
      legend: {
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          padding: 5,
          color: "#555"
        }
      },
    },
  }
});

// Bar Chart
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [0, 0, 100000, 90000, 70000, 110000],
        backgroundColor: "#24BAE3"
      },
      {
        label: "Expense",
        data: [0, 0, 30000, 5000, 20000, 10000],
        backgroundColor: "#D000F7"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
    }
});

function renderTransactions() {
  const table = document.getElementById("transactionTable");

  table.innerHTML = "";

  transactions.forEach(t => {
    table.innerHTML += `
      <tr>
        <td>${t.date}</td>
        <td>₹${t.amount}</td>
        <td>${t.category}</td>
        <td>${t.type}</td>
      </tr>
    `;
  });
}

renderTransactions();

// 🔥 INIT
updateRoleUI();
calculateSummary();