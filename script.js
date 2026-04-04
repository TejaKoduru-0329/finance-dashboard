
// Dummy Data
let currentRole = "admin";
let editingIndex = null;

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

// Filtering
let filters = {
  search: "",
  type: "",
  category: "",
  sort: ""
};

// Navigation
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

    sidebar.classList.remove("active");

    if (item.dataset.page === "dashboard") {
    setTimeout(() => applyFilters(), 50);
    }

    if(item.dataset.page === "insights"){
    setTimeout(() => showInsights(), 100);
    } 

    document.getElementById("pageTitle").innerText =
      item.dataset.page.charAt(0).toUpperCase() + item.dataset.page.slice(1);
  };
});

// Sidebar Setup
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


// Role Changing
document.getElementById("adminBtn").onclick = () => {
  currentRole = "admin";
  sidebar.classList.remove("active");
  updateRoleUI();

};

document.getElementById("viewerBtn").onclick = () => {
  currentRole = "viewer";
  sidebar.classList.remove("active");
  updateRoleUI();
};

function updateRoleUI() {
  document.getElementById("roleBadge").innerText = currentRole.toUpperCase();
  handleAccess()
  document.getElementById("adminBtn").classList.toggle("active", currentRole === "admin");
  document.getElementById("viewerBtn").classList.toggle("active", currentRole === "viewer");
}


// Summary
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

// Transaction Table
function renderTransactions(list = transactions) {
  const table = document.getElementById("transactionTable");

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

// Edit and Delete access
function handleAccess() {
  const isAdmin = currentRole === "admin";

  document.getElementById("add-txn-btn").disabled = !isAdmin;

  document.querySelectorAll(".edit-btn, .delete-btn").forEach(btn => {
    btn.disabled = !isAdmin;
    btn.style.opacity = isAdmin ? "1" : "0.4";
  });
}

// Overall Filters
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

  currentFilteredData = data
  renderTransactions(data);
  calculateSummary(data);
  renderCharts(data);
}

// Event Filters
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

// Dashboard Filtering
const dashboardFilter = document.querySelector(".neo-select");

dashboardFilter.onchange = () => {
  let val = dashboardFilter.value;

  let data = [...transactions];

  let monthMap = {
    Jan:"01", Feb:"02", Mar:"03", Apr:"04", May:"05", Jun:"06", Jul:"07", Aug:"08", Sep:"09", Oct:"10", Nov:"11", Dec:"12"
  };

  if (val !== "All Time") {
    let m = monthMap[val.split(" ")[0]];
    data = data.filter(t => t.date.includes("-" + m + "-"));
  }

  renderTransactions(data);

  if (document.getElementById("insightsSection").style.display !== "none") { 
    showInsights();
  }
};
// Charts Section
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

  // Lne Chart
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
  // PIE Chart
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

  // Bar Chart
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

// Event Deletion
document.addEventListener("click", e => {
    if (e.target.classList.contains("delete-btn")) {
        if (currentRole !== "admin") return;
        transactions.splice(Number(e.target.dataset.id), 1);
        applyFilters();
    }
});

// Add or Edit Event
const txnCard = document.getElementById("txn-card");

function openCard(mode, index = null) {
    editingIndex = index;

    document.getElementById("box-heading").innerText =
        mode === "edit" ? "Edit Transaction" : "Add Transaction";

    if (mode === "edit") {
        let t = transactions[index];
        document.getElementById("input-date").value     = t.date;
        document.getElementById("input-desc").value     = t.description;
        document.getElementById("input-amount").value   = t.amount;
        document.getElementById("input-category").value = t.category;
        document.getElementById("input-type").value     = t.type;
    } else {
        document.getElementById("input-date").value     = "";
        document.getElementById("input-desc").value     = "";
        document.getElementById("input-amount").value   = "";
        document.getElementById("input-category").value = "";
        document.getElementById("input-type").value     = "";
    }

    txnCard.style.display = "flex";
}

function closeCard() {
    txnCard.style.display = "none";
    editingIndex = null;
}

// add btn
document.getElementById("add-txn-btn").onclick = () => {
    if (currentRole !== "admin") return;
    openCard("add");
};

// edit btn
document.addEventListener("click", e => {
    if (e.target.classList.contains("edit-btn")) {
        if (currentRole !== "admin") return;
        openCard("edit", Number(e.target.dataset.id));
    }
});

// cancel btn
document.getElementById("cancel-btn").onclick = closeCard;

txnCard.addEventListener("click", e => {
    if (e.target === txnCard) closeCard();
});

// save btn
document.getElementById("save-btn").onclick = () => {
    let date     = document.getElementById("input-date");
    let desc     = document.getElementById("input-desc");
    let amount   = document.getElementById("input-amount");
    let category = document.getElementById("input-category");
    let type     = document.getElementById("input-type");

    ["input-date","input-desc","input-amount","input-category","input-type"].forEach(id => {
        document.getElementById(id).classList.remove("error");
    });
    ["err-date","err-desc","err-amount","err-category","err-type"].forEach(id => {
        document.getElementById(id).classList.remove("show");
    });

    let valid = true;

    if (!date.value) {
        date.classList.add("error");
        document.getElementById("err-date").classList.add("show");
        valid = false;
    }
    if (!desc.value.trim()) {
        desc.classList.add("error");
        document.getElementById("err-desc").classList.add("show");
        valid = false;
    }
    if (!amount.value || Number(amount.value) <= 0) {
        amount.classList.add("error");
        document.getElementById("err-amount").classList.add("show");
        valid = false;
    }
    if (!category.value) {
        category.classList.add("error");
        document.getElementById("err-category").classList.add("show");
        valid = false;
    }
    if (!type.value) {
        type.classList.add("error");
        document.getElementById("err-type").classList.add("show");
        valid = false;
    }

    if (!valid) return;

    if (editingIndex !== null) {
        transactions[editingIndex] = {
            ...transactions[editingIndex],
            date: date.value,
            description: desc.value.trim(),
            amount: Number(amount.value),
            category: category.value,
            type: type.value
        };
    } else {
        transactions.push({
            date: date.value,
            description: desc.value.trim(),
            amount: Number(amount.value),
            category: category.value,
            type: type.value
        });
    }

    closeCard();
    applyFilters();
};

// Insights section
function showInsights() {
    let data = [...transactions];

    let select = document.querySelector(".neo-select");
    let val = select.value

    if (val && val !== "All Time"){

    
        let month = val.split(" ")[0]; 
        let monthNums = {
            Jan:"01", Feb:"02", Mar:"03", Apr:"04",
            May:"05", Jun:"06", Jul:"07", Aug:"08",
            Sep:"09", Oct:"10", Nov:"11", Dec:"12"
        };
        let m = monthNums[month];
        if (m) data = data.filter(t => t.date.split("-")[1] === m);
    }


    let totalIncome  = 0;
    let totalExpense = 0;
    data.forEach(t => {
        if (t.type === "income") totalIncome  += t.amount;
        else                     totalExpense += t.amount;
    });
    let saved      = totalIncome - totalExpense;
    let savingsPct = totalIncome ? ((saved / totalIncome) * 100).toFixed(1) : 0;

    let catMap = {};
    data.filter(t => t.type === "expense").forEach(t => {
        catMap[t.category] = (catMap[t.category] || 0) + t.amount;
    });
    let sortedCats = Object.entries(catMap).sort((a, b) => b[1] - a[1]);
    let topCat     = sortedCats[0] || ["None", 0];
    let topPct     = totalExpense ? ((topCat[1] / totalExpense) * 100).toFixed(1) : 0;

    let catColors = {
        Salary:"#10B981", Freelance:"#24BAE3", Food:"#FF4D6D",
        Transport:"#FBBF24", Entertainment:"#8B5CF6",
        Shopping:"#D000F7", Healthcare:"#FF6B6B",
        Utilities:"#6C5CE7", Investment:"#0984e3"
    };

    let monthlyMap = {};
    data.forEach(t => {
        let key = t.date.slice(0, 7);
        if (!monthlyMap[key]) monthlyMap[key] = { income: 0, expense: 0 };
        if (t.type === "income") monthlyMap[key].income  += t.amount;
        else                     monthlyMap[key].expense += t.amount;
    });

    let monthNames = {
        "01":"Jan","02":"Feb","03":"Mar","04":"Apr",
        "05":"May","06":"Jun","07":"Jul","08":"Aug",
        "09":"Sep","10":"Oct","11":"Nov","12":"Dec"
    };

    
    let topCatEl = document.getElementById("top-cat-name");
    topCatEl.innerText   = topCat[0];
    topCatEl.style.color = catColors[topCat[0]] || "#555";
    document.getElementById("top-cat-sub").innerText =
        `₹${topCat[1].toLocaleString("en-IN")} spent — ${topPct}% of total expenses`;

    document.getElementById("savings-pct").innerText = savingsPct + "%";
    document.getElementById("savings-sub").innerText =
        `You saved ₹${saved.toLocaleString("en-IN")} out of ₹${totalIncome.toLocaleString("en-IN")} earned`;

    // spending breakdown 
    document.getElementById("spend-list").innerHTML = sortedCats.map(([cat, amt]) => {
        let pct   = totalExpense ? ((amt / totalExpense) * 100).toFixed(1) : 0;
        let color = catColors[cat] || "#888";
        let width = sortedCats[0][1] ? ((amt / sortedCats[0][1]) * 100).toFixed(1) : 0;
        return `
            <div class="spend-row">
                <div class="spend-top">
                    <span class="spend-cat" style="color:${color}">${cat}</span>
                    <span class="spend-amt">₹${amt.toLocaleString("en-IN")} (${pct}%)</span>
                </div>
                <div class="spend-bar-bg">
                    <div class="spend-bar-fill" style="width:${width}%; background:${color};"></div>
                </div>
            </div>
        `;
    }).join("");

    document.getElementById("month-list").innerHTML = Object.entries(monthlyMap)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([key, val]) => {
            let [yr, mo] = key.split("-");
            let label    = monthNames[mo] + " " + yr;
            let net      = val.income - val.expense;
            let netColor = net >= 0 ? "#10B981" : "#e84040";
            return `
                <div class="month-row">
                    <span class="month-label">${label}</span>
                    <span class="month-income">+₹${val.income.toLocaleString("en-IN")}</span>
                    <span class="month-expense">-₹${val.expense.toLocaleString("en-IN")}</span>
                    <span class="month-net" style="color:${netColor}">₹${net.toLocaleString("en-IN")}</span>
                </div>
            `;
        }).join("");
}
// Dark & Light Mode
const themeBtn  = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
    themeLabel.innerText = "Light Mode";
}

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
    let isDark = document.body.classList.contains("dark");

    themeIcon.classList.replace(
        isDark ? "fa-moon" : "fa-sun",
        isDark ? "fa-sun"  : "fa-moon"
    );
    themeLabel.innerText = isDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("theme", isDark ? "dark" : "light");
};


setTimeout(() => {
  applyFilters();
}, 100);
updateRoleUI();