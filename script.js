// // // 🔹 DATA
// // const transactions = [
// //   { date: "2026-04-01", description: "Netflix", amount: 5000, category: "Salary", type: "income" },
// //   { date: "2026-04-02", description: "Food",  amount: 200, category: "Food", type: "expense" }
// // ];

// // const sections = {
// //   dashboard: document.getElementById("dashboardSection"),
// //   transactions: document.getElementById("transactionsSection"),
// //   insights: document.getElementById("insightsSection")
// // };

// // document.querySelectorAll("#menu .nav-item").forEach(item => {
// //   item.addEventListener("click", () => {

// //     // active style
// //     document.querySelectorAll("#menu .nav-item").forEach(i => i.classList.remove("active"));
// //     item.classList.add("active");

// //     const page = item.dataset.page;

// //     // 🔥 ALL hide
// //     Object.values(sections).forEach(sec => sec.style.display = "none");

// //     // 🔥 SHOW selected
// //     sections[page].style.display = "block";

// //     // 🔥 TITLE change
// //     document.getElementById("pageTitle").innerText =
// //       page.charAt(0).toUpperCase() + page.slice(1);

// //   });
// // });

// // const menuToggle = document.getElementById("menuToggle");
// // const closeSidebar = document.getElementById("closeSidebar");
// // const sidebar = document.querySelector(".sidebar");

// // // Open
// // menuToggle.addEventListener("click", () => {
// //   sidebar.classList.toggle("active");
// // });

// // // Close (X button)
// // closeSidebar.addEventListener("click", () => {
// //   sidebar.classList.remove("active");
// // });

// // // Click outside close
// // document.addEventListener("click", (e) => {
// //   if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
// //     sidebar.classList.remove("active");
// //   }
// // });

// // // 🔥 ROLE TOGGLE
// // document.getElementById("adminBtn").onclick = () => {
// //   currentRole = "admin";
// //   updateRoleUI();
// // };

// // document.getElementById("viewerBtn").onclick = () => {
// //   currentRole = "viewer";
// //   updateRoleUI();
// // };

// // function updateRoleUI() {
// //   document.getElementById("roleBadge").innerText = currentRole.toUpperCase();

// //   document.getElementById("adminBtn").classList.toggle("active", currentRole === "admin");
// //   document.getElementById("viewerBtn").classList.toggle("active", currentRole === "viewer");
// // }

// // // 🔥 SUMMARY
// // function calculateSummary() {
// //   let income = 0;
// //   let expense = 0;

// //   transactions.forEach(t => {
// //     if (t.type === "income") income += t.amount;
// //     else expense += t.amount;
// //   });

// //   document.getElementById("income").innerText = "₹" + income;
// //   document.getElementById("expense").innerText = "₹" + expense;
// //   document.getElementById("balance").innerText = "₹" + (income - expense);

// //   let savings = ((income - expense) / income) * 100 || 0;
// //   document.getElementById("savings").innerText = savings.toFixed(1) + "%";
// // }

// // // 🔥 CHARTS

// // // Line Chart
// // new Chart(document.getElementById("lineChart"), {
// //   type: "line",
// //   data: {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [{
// //       label: "Balance",
// //       data: [0, 0, 60000, 150000, 200000, 300000],
// //       borderColor: "#D000F7",
// //       tension: 0.4
// //     }]
// //   },
// //   options: {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     }
// // });

// // // Pie Chart
// // new Chart(document.getElementById("pieChart"), {
// //   type: "doughnut",
// //   data: {
// //     labels: ["Utilities", "Food", "Transport", "Entertainment", "Shopping", "Healthcare", "Investment"],
// //     datasets: [{
// //       data: [5000, 3000, 1500, 1000, 4000, 1200, 6000],
// //       backgroundColor: ["#8B5CF6", "#D000F7", "#24BAE3", "#6C5CE7", "#FF4D6D", "#10B981",  "#FBBF24" ],
// //       borderWidth: 0
// //     }]
// //   },
// //   options: {
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     cutout: "60%",
    
// //     plugins: {
// //       legend: {
// //         labels: {
// //           boxWidth: 10,
// //           boxHeight: 10,
// //           padding: 5,
// //           color: "#555"
// //         }
// //       },
// //     },
// //   }
// // });

// // // Bar Chart
// // new Chart(document.getElementById("barChart"), {
// //   type: "bar",
// //   data: {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         label: "Income",
// //         data: [0, 0, 100000, 90000, 70000, 110000],
// //         backgroundColor: "#24BAE3"
// //       },
// //       {
// //         label: "Expense",
// //         data: [0, 0, 30000, 5000, 20000, 10000],
// //         backgroundColor: "#D000F7"
// //       }
// //     ]
// //   },
// //   options: {
// //     responsive: true,
// //     maintainAspectRatio: false
// //     }
// // });

// // function renderTransactions() {
// //   const table = document.getElementById("transactionTable");

// //   table.innerHTML = "";

// //   transactions.forEach(t => {
// //     table.innerHTML += `
// //       <tr>
// //         <td>${t.date}</td>
// //         <td>${t.description}</td>
// //         <td>₹${t.amount}</td>
// //         <td>${t.category}</td>
// //         <td>${t.type}</td>
// //       </tr>
// //     `;
// //   });
// // }

// // renderTransactions();

// // // 🔥 INIT
// // updateRoleUI();
// // calculateSummary();


// // ================= DATA =================
// let currentRole = "admin";

// let transactions = [
//   { id:1,  description:'Salary - March',    amount:75000, date:'2025-03-01', category:'Salary',        type:'income'  },
//   { id:2,  description:'Rent',              amount:18000, date:'2025-03-02', category:'Utilities',      type:'expense' },
//   { id:3,  description:'Swiggy order',      amount:650,   date:'2025-03-03', category:'Food',           type:'expense' },
//   { id:4,  description:'Ola cab',           amount:380,   date:'2025-03-05', category:'Transport',      type:'expense' },
//   { id:5,  description:'Netflix',           amount:499,   date:'2025-03-06', category:'Entertainment',  type:'expense' },
//   { id:6,  description:'Freelance project', amount:22000, date:'2025-03-10', category:'Freelance',      type:'income'  },
//   { id:7,  description:'Myntra shopping',   amount:2400,  date:'2025-03-12', category:'Shopping',       type:'expense' },
//   { id:8,  description:'Pharmacy',          amount:850,   date:'2025-03-14', category:'Healthcare',     type:'expense' },
//   { id:9,  description:'Zomato',            amount:520,   date:'2025-03-15', category:'Food',           type:'expense' },
//   { id:10, description:'SIP Investment',    amount:10000, date:'2025-03-16', category:'Investment',     type:'expense' },
//   { id:11, description:'Salary - April',    amount:75000, date:'2025-04-01', category:'Salary',         type:'income'  },
//   { id:12, description:'Electricity bill',  amount:1200,  date:'2025-04-03', category:'Utilities',      type:'expense' },
//   { id:13, description:'Movie tickets',     amount:800,   date:'2025-04-06', category:'Entertainment',  type:'expense' },
//   { id:14, description:'Groceries',         amount:3200,  date:'2025-04-08', category:'Food',           type:'expense' },
//   { id:15, description:'Freelance - UI',    amount:18000, date:'2025-04-12', category:'Freelance',      type:'income'  },
//   { id:16, description:'Salary - May',      amount:75000, date:'2025-05-01', category:'Salary',         type:'income'  },
//   { id:17, description:'Rent - May',        amount:18000, date:'2025-05-02', category:'Utilities',      type:'expense' },
//   { id:18, description:'Train tickets',     amount:1400,  date:'2025-05-10', category:'Transport',      type:'expense' },
//   { id:19, description:'Amazon shopping',   amount:4500,  date:'2025-05-15', category:'Shopping',       type:'expense' },
//   { id:20, description:'Salary - June',     amount:78000, date:'2025-06-01', category:'Salary',         type:'income'  },
//   { id:21, description:'Doctor visit',      amount:600,   date:'2025-06-04', category:'Healthcare',     type:'expense' },
//   { id:22, description:'Freelance - App',   amount:30000, date:'2025-06-10', category:'Freelance',      type:'income'  },
//   { id:23, description:'Dinner out',        amount:1800,  date:'2025-06-14', category:'Food',           type:'expense' },
//   { id:24, description:'SIP',               amount:10000, date:'2025-06-16', category:'Investment',     type:'expense' },
// ];

// // ================= NAVIGATION =================
// const sections = {
//   dashboard: document.getElementById("dashboardSection"),
//   transactions: document.getElementById("transactionsSection"),
//   insights: document.getElementById("insightsSection")
// };

// document.querySelectorAll("#menu .nav-item").forEach(item => {
//   item.addEventListener("click", () => {
//     document.querySelectorAll("#menu .nav-item").forEach(i => i.classList.remove("active"));
//     item.classList.add("active");

//     const page = item.dataset.page;

//     Object.values(sections).forEach(sec => sec.style.display = "none");
//     sections[page].style.display = "block";

//     document.getElementById("pageTitle").innerText =
//       page.charAt(0).toUpperCase() + page.slice(1);
//   });
// });

// // ================= SIDEBAR =================
// const menuToggle = document.getElementById("menuToggle");
// const closeSidebar = document.getElementById("closeSidebar");
// const sidebar = document.querySelector(".sidebar");

// menuToggle.onclick = () => sidebar.classList.toggle("active");
// closeSidebar.onclick = () => sidebar.classList.remove("active");

// document.addEventListener("click", (e) => {
//   if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
//     sidebar.classList.remove("active");
//   }
// });

// // ================= ROLE =================
// document.getElementById("adminBtn").onclick = () => {
//   currentRole = "admin";
//   updateRoleUI();
// };

// document.getElementById("viewerBtn").onclick = () => {
//   currentRole = "viewer";
//   updateRoleUI();
// };

// function updateRoleUI() {
//   document.getElementById("roleBadge").innerText = currentRole.toUpperCase();

//   document.getElementById("adminBtn").classList.toggle("active", currentRole === "admin");
//   document.getElementById("viewerBtn").classList.toggle("active", currentRole === "viewer");

//   handleAccess();
// }

// // ================= SUMMARY =================
// function calculateSummary() {
//   let income = 0;
//   let expense = 0;

//   transactions.forEach(t => {
//     if (t.type === "income") income += t.amount;
//     else expense += t.amount;
//   });

//   document.getElementById("income").innerText = "₹" + income;
//   document.getElementById("expense").innerText = "₹" + expense;
//   document.getElementById("balance").innerText = "₹" + (income - expense);

//   let savings = income ? ((income - expense) / income) * 100 : 0;
//   document.getElementById("savings").innerText = savings.toFixed(1) + "%";
// }

// // ================= RENDER TABLE =================
// function renderTransactions(list = transactions) {
//   const table = document.getElementById("transactionTable");

//   if (list.length === 0) {
//     table.innerHTML = `
//       <tr>
//         <td colspan="6" style="text-align:center;padding:20px;">
//           No transactions found
//         </td>
//       </tr>
//     `;
//     return;
//   }

//   table.innerHTML = "";

//   list.forEach((t, i) => {
//     table.innerHTML += `
//       <tr>
//         <td>${t.date}</td>
//         <td>${t.description}</td>
//         <td style="color:${t.type === "income" ? "green" : "red"}">
//           ${t.type === "income" ? "+" : "-"}₹${t.amount}
//         </td>
//         <td>${t.category}</td>
//         <td>${t.type}</td>
//         <td>
//           <button class="edit-btn" data-id="${i}">Edit</button>
//           <button class="delete-btn" data-id="${i}">Del</button>
//         </td>
//       </tr>
//     `;
//   });

//   calculateSummary();
//   handleAccess();
// }

// // ================= ACCESS CONTROL =================
// function handleAccess() {
//   const isAdmin = currentRole === "admin";

//   document.getElementById("add-tnx-btn").disabled = !isAdmin;

//   document.querySelectorAll(".edit-btn, .delete-btn").forEach(btn => {
//     btn.disabled = !isAdmin;
//     btn.style.opacity = isAdmin ? "1" : "0.4";
//     btn.style.cursor = isAdmin ? "pointer" : "not-allowed";
//   });
// }

// // ================= ADD =================
// document.getElementById("add-tnx-btn").onclick = () => {
//   if (currentRole !== "admin") return;

//   let date = prompt("Date (YYYY-MM-DD):");
//   let description = prompt("Description:");
//   let amount = Number(prompt("Amount:"));
//   let category = prompt("Category:");
//   let type = prompt("income / expense:");

//   if (!date || !description || !amount || !category || !type) return;

//   transactions.push({ date, description, amount, category, type });

//   renderTransactions();
// };

// // ================= DELETE =================
// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete-btn")) {
//     if (currentRole !== "admin") return;

//     let id = e.target.dataset.id;
//     transactions.splice(id, 1);
//     renderTransactions();
//   }
// });

// // ================= EDIT =================
// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("edit-btn")) {
//     if (currentRole !== "admin") return;

//     let id = e.target.dataset.id;
//     let t = transactions[id];

//     t.description = prompt("Edit description:", t.description);
//     t.amount = Number(prompt("Edit amount:", t.amount));

//     renderTransactions();
//   }
// });

// // ================= SEARCH =================
// const searchInput = document.querySelector(".form-control");

// searchInput.addEventListener("input", () => {
//   let val = searchInput.value.toLowerCase();

//   let filtered = transactions.filter(t =>
//     t.description.toLowerCase().includes(val)
//   );

//   renderTransactions(filtered);
// });

// // ================= INIT =================
// renderTransactions();
// updateRoleUI();




// ========= DATA =========
let currentRole = "admin";

let transactions = [
  { id:1,  description:'Salary - March',    amount:75000, date:'2025-03-01', category:'Salary',        type:'income'  },
  { id:2,  description:'Rent',              amount:18000, date:'2025-03-02', category:'Utilities',      type:'expense' },
  { id:3,  description:'Swiggy order',      amount:650,   date:'2025-03-03', category:'Food',           type:'expense' },
  { id:4,  description:'Ola cab',           amount:380,   date:'2025-03-05', category:'Transport',      type:'expense' },
  { id:5,  description:'Netflix',           amount:499,   date:'2025-03-06', category:'Entertainment',  type:'expense' },
  { id:6,  description:'Freelance project', amount:22000, date:'2025-03-10', category:'Freelance',      type:'income'  },
  { id:7,  description:'Myntra shopping',   amount:2400,  date:'2025-03-12', category:'Shopping',       type:'expense' },
  { id:8,  description:'Pharmacy',          amount:850,   date:'2025-03-14', category:'Healthcare',     type:'expense' },
  { id:9,  description:'Zomato',            amount:520,   date:'2025-03-15', category:'Food',           type:'expense' },
  { id:10, description:'SIP Investment',    amount:10000, date:'2025-03-16', category:'Investment',     type:'expense' },
  { id:11, description:'Salary - April',    amount:75000, date:'2025-04-01', category:'Salary',         type:'income'  },
  { id:12, description:'Electricity bill',  amount:1200,  date:'2025-04-03', category:'Utilities',      type:'expense' },
  { id:13, description:'Movie tickets',     amount:800,   date:'2025-04-06', category:'Entertainment',  type:'expense' },
  { id:14, description:'Groceries',         amount:3200,  date:'2025-04-08', category:'Food',           type:'expense' },
  { id:15, description:'Freelance - UI',    amount:18000, date:'2025-04-12', category:'Freelance',      type:'income'  },
  { id:16, description:'Salary - May',      amount:75000, date:'2025-05-01', category:'Salary',         type:'income'  },
  { id:17, description:'Rent - May',        amount:18000, date:'2025-05-02', category:'Utilities',      type:'expense' },
  { id:18, description:'Train tickets',     amount:1400,  date:'2025-05-10', category:'Transport',      type:'expense' },
  { id:19, description:'Amazon shopping',   amount:4500,  date:'2025-05-15', category:'Shopping',       type:'expense' },
  { id:20, description:'Salary - June',     amount:78000, date:'2025-06-01', category:'Salary',         type:'income'  },
  { id:21, description:'Doctor visit',      amount:600,   date:'2025-06-04', category:'Healthcare',     type:'expense' },
  { id:22, description:'Freelance - App',   amount:30000, date:'2025-06-10', category:'Freelance',      type:'income'  },
  { id:23, description:'Dinner out',        amount:1800,  date:'2025-06-14', category:'Food',           type:'expense' },
  { id:24, description:'SIP',               amount:10000, date:'2025-06-16', category:'Investment',     type:'expense' },
];

// ========= FILTER STATE =========
let filters = {
  search: "",
  type: "",
  category: "",
  sort: ""
};

// ========= NAV =========
const sections = {
  dashboard: document.getElementById("dashboardSection"),
  transactions: document.getElementById("transactionsSection"),
  insights: document.getElementById("insightsSection")
};

document.querySelectorAll("#menu .nav-item").forEach(item => {
  item.onclick = () => {
    document.querySelectorAll("#menu .nav-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    Object.values(sections).forEach(s => s.style.display = "none");
    sections[item.dataset.page].style.display = "block";

    if(item.dataset.page === "dashboard"){
      setTimeout(() => {
        applyFilters();
      }, 50);
    }

    document.getElementById("pageTitle").innerText =
      item.dataset.page.charAt(0).toUpperCase() + item.dataset.page.slice(1);
  };
});

// ================= SIDEBAR =================
const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.querySelector(".sidebar");

menuToggle.onclick = () => sidebar.classList.toggle("active");
closeSidebar.onclick = () => sidebar.classList.remove("active");

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});


// ROLE TOGGLE
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
  handleAccess()
  document.getElementById("adminBtn").classList.toggle("active", currentRole === "admin");
  document.getElementById("viewerBtn").classList.toggle("active", currentRole === "viewer");
}


// ========= SUMMARY =========
function calculateSummary(data = transactions) {
  let income = 0, expense = 0;

  data.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  document.getElementById("income").innerText = "₹" + income.toLocaleString("en-IN");
  document.getElementById("expense").innerText = "₹" + expense.toLocaleString("en-IN");
  document.getElementById("balance").innerText = "₹" + (income - expense).toLocaleString("en-IN");
    

  let savings = income ? ((income - expense) / income) * 100 : 0;
  document.getElementById("savings").innerText = savings.toFixed(1) + "%";
}

// ========= RENDER TABLE =========
function renderTransactions(list = transactions) {
  const table = document.getElementById("transactionTable");
  const categoryColors = {
    Salary: "#10B981", Freelance: "#24BAE3", Food: "#FF4D6D",
    Transport: "#FBBF24", Entertainment: "#8B5CF6", Shopping: "#D000F7",
    Healthcare: "#FF6B6B", Utilities: "#6C5CE7", Investment: "#0984e3"
  };

  if (list.length === 0) {
    table.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding:20px; color:#888;">
          No transactions found for selected filters
        </td>
      </tr>
    `;

    calculateSummary([]);
    renderCharts([]);
    return;
  }

  table.innerHTML = "";

  list.forEach((t, i) => {
    table.innerHTML += `
      <tr>
        <td>${t.date}</td>
        <td>${t.description}</td>
        <td style="color:${t.type==="income"?"green":"red"}">
          ${t.type==="income"?"+":"-"}₹${t.amount.toLocaleString("en-IN")}
        </td>
        <td>${t.category}</td>
        <td style="color:${t.type === 'income' ? '#10B981' : '#FF4D6D'}; font-weight:600;">${t.type}</td>
        <td>
          <button class="edit-btn" data-id="${i}">Edit</button>
          <button class="delete-btn" data-id="${i}">Del</button>
        </td>
      </tr>
    `;
  });

  calculateSummary(list);
  renderCharts(list);
  handleAccess();
}

// ========= ACCESS =========
function handleAccess() {
  const isAdmin = currentRole === "admin";

  document.getElementById("add-tnx-btn").disabled = !isAdmin;

  document.querySelectorAll(".edit-btn, .delete-btn").forEach(btn => {
    btn.disabled = !isAdmin;
    btn.style.opacity = isAdmin ? "1" : "0.4";
  });
}

// ========= ADD =========
document.getElementById("add-tnx-btn").onclick = () => {
  if (currentRole !== "admin") return;

  let date = prompt("Date:");
  let description = prompt("Description:");
  let amount = Number(prompt("Amount:"));
  let category = prompt("Category:");
  let type = prompt("income / expense:");

  if (!date || !description || !amount || !category || !type) return;

  transactions.push({ date, description, amount, category, type });
  applyFilters();
};

// ========= DELETE =========
document.addEventListener("click", e => {
  if (e.target.classList.contains("delete-btn")) {
    if (currentRole !== "admin") return;

    transactions.splice(e.target.dataset.id, 1);
    applyFilters();
  }
});

// ========= EDIT =========
document.addEventListener("click", e => {
  if (e.target.classList.contains("edit-btn")) {
    if (currentRole !== "admin") return;

    let t = transactions[e.target.dataset.id];
    t.description = prompt("Edit desc:", t.description);
    t.amount = Number(prompt("Edit amount:", t.amount));

    applyFilters();
  }
});

// ========= FILTER =========
function applyFilters() {
  let data = [...transactions];

  if (filters.search) {
    data = data.filter(t =>
      t.description.toLowerCase().includes(filters.search)
    );
  }

  if (filters.type) {
    data = data.filter(t => t.type === filters.type);
  }

  if (filters.category) {
    data = data.filter(t => t.category === filters.category);
  }

  if (filters.sort === "dateAsc") data.sort((a,b)=>new Date(a.date)-new Date(b.date));
  if (filters.sort === "dateDesc") data.sort((a,b)=>new Date(b.date)-new Date(a.date));
  if (filters.sort === "amtAsc") data.sort((a,b)=>a.amount-b.amount);
  if (filters.sort === "amtDesc") data.sort((a,b)=>b.amount-a.amount);

  renderTransactions(data);
}

// ========= FILTER EVENTS =========
document.querySelector(".form-control").oninput = e => {
  filters.search = e.target.value.toLowerCase();
  applyFilters();
};

document.querySelectorAll(".txn-sort")[0].onchange = e => {
  filters.type = e.target.value;
  applyFilters();
};

document.querySelectorAll(".txn-sort")[1].onchange = e => {
  filters.category = e.target.value;
  applyFilters();
};

document.querySelectorAll(".txn-sort")[2].onchange = e => {
  filters.sort = e.target.value;
  applyFilters();
};

// ===== DASHBOARD FILTER =====
const dashboardFilter = document.querySelector(".neo-select");

dashboardFilter.onchange = () => {
  let val = dashboardFilter.value;

  let data = [...transactions];

  let monthMap = {
    Jan:"01", Feb:"02", Mar:"03", Apr:"04", May:"05", Jun:"06"
  };

  if (val !== "All Time") {
    let m = monthMap[val.split(" ")[0]];
    data = data.filter(t => t.date.includes("-" + m + "-"));
  }

  renderTransactions(data); // charts kuda update avutayi
};
// ========= CHARTS =========
function renderCharts(data = transactions) {

  const lineCanvas = document.getElementById("lineChart");
  const pieCanvas = document.getElementById("pieChart");
  const barCanvas = document.getElementById("barChart");

  const lineMsg = document.getElementById("lineNoData");
  const pieMsg = document.getElementById("pieNoData");
  const barMsg = document.getElementById("barNoData");

  if(data.length === 0){
    lineCanvas.style.display = "none";
    pieCanvas.style.display = "none";
    barCanvas.style.display = "none";

    lineMsg.innerText = "No Balance Trend Found.";
    pieMsg.innerText = "No Spending Breakdowns Found.";
    barMsg.innerText = "No Monthly Income vs Expenses Found.";

    return; 
  }
  else{
    lineCanvas.style.display = "block";
    pieCanvas.style.display = "block";
    barCanvas.style.display = "block";

    lineMsg.innerText = "";
    pieMsg.innerText = "";
    barMsg.innerText = "";
  }

  if (window.lineChart && typeof window.lineChart.destroy === "function") {
  window.lineChart.destroy();
  }
  if (window.pieChart && typeof window.pieChart.destroy === "function") {
    window.pieChart.destroy();
  }
  if (window.barChart && typeof window.barChart.destroy === "function") {
    window.barChart.destroy();
  }

  // LINE CHART
  let sorted = [...data].sort((a,b)=> new Date(a.date)-new Date(b.date));

  let monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  let dashVal = dashboardFilter.value;
  let isMonthSelected = dashVal !== "All Time";

  let labels = [];
  let values = [];

  if (isMonthSelected) {
    
    let runningBalance = 0;
    sorted.forEach(t => {
      runningBalance += t.type === "income" ? t.amount : -t.amount;
      labels.push(t.date);
      values.push(runningBalance);
    });

  } else {
    
    let monthBalanceMap = {};
    for(let i = 0; i < 12; i++) monthBalanceMap[i] = null;

    let runningBalance = 0;
    sorted.forEach(t => {
      runningBalance += t.type === "income" ? t.amount : -t.amount;
      let m = new Date(t.date).getMonth();
      monthBalanceMap[m] = runningBalance;
    });

    
    let last = 0;
    for(let i = 0; i < 12; i++){
      if(monthBalanceMap[i] !== null) last = monthBalanceMap[i];
      else monthBalanceMap[i] = last;
      labels.push(monthNames[i]);
      values.push(monthBalanceMap[i]);
    }
  }

  window.lineChart = new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Balance",
        data: values,
        borderColor: "#D000F7",
        backgroundColor: "rgba(208,0,247,0.1)",
        tension: 0.4,
        pointRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
  // PIE CHART
  let categoryMap = {};
  data.forEach(t=>{
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  window.pieChart = new Chart(document.getElementById("pieChart"), {
    type: "doughnut",
    data: {
      labels: Object.keys(categoryMap),
      datasets: [{
        data: Object.values(categoryMap),
        backgroundColor: ["#8B5CF6","#D000F7","#24BAE3","#6C5CE7","#FF4D6D","#10B981","#FBBF24"],
        borderWidth: 0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      
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

  // BAR CHART
let months = ["Jan","Feb","Mar","Apr","May","Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];

let incomeArr = [0,0,0,0,0,0,0,0,0,0,0,0];
let expenseArr = [0,0,0,0,0,0,0,0,0,0,0,0];

data.forEach(t => {
  let date = new Date(t.date);
  let m = date.getMonth(); 

  if(m <= 11){
    if(t.type === "income"){
      incomeArr[m] += t.amount;
    } else {
      expenseArr[m] += t.amount;
    }
  }
});

  let incomeData = incomeArr;
  let expenseData = expenseArr;

  window.barChart = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          label: "Income",
          data: incomeData,
          backgroundColor: "#24BAE3",
          borderRadius: 5,
          barPercentage: 0.8,
          categoryPercentage: 0.8
        },
        {
          label: "Expense",
          data: expenseData,
          backgroundColor: "#D000F7",
          borderRadius: 5,
          barPercentage: 0.8,
          categoryPercentage: 0.8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

}

// INIT
setTimeout(() => {
  applyFilters();
}, 100);
updateRoleUI();