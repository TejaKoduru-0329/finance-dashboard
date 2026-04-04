# PaisaFlow — Finance Dashboard UI

A clean and interactive personal finance dashboard built with vanilla HTML, CSS, and JavaScript.

## 🚀 Live Demo
[PaisaFlow Live](https://paisa-flow.vercel.app)

## 📌 Overview
PaisaFlow helps users track and understand their financial activity through an intuitive dashboard interface. Built as a frontend assignment focusing on UI design, component structure, and interaction design.

## 🛠️ Tech Stack
- HTML5
- CSS3 (Neomorphic Design)
- Vanilla JavaScript
- Chart.js (for data visualization)
- Bootstrap 5 (grid layout)
- Font Awesome (icons)
- Google Fonts — Syne + DM Sans

## ✨ Features

### Dashboard
- Summary cards — Total Balance, Income, Expense, Savings Rate
- Balance Trend line chart (monthly or daily based on filter)
- Spending Breakdown doughnut chart
- Monthly Income vs Expenses bar chart
- Month filter to drill down data

### Transactions
- Full transaction table with Date, Description, Amount, Category, Type
- Search by description
- Filter by type (income/expense) and category
- Sort by date or amount

### Insights
- Top spending category with percentage
- Savings rate with amount breakdown
- Category-wise spending progress bars
- Monthly income vs expense comparison table

### Role Based UI
- Admin — can add, edit, delete transactions
- Viewer — read only access, action buttons disabled
- Role switcher in sidebar

### UI/UX
- Neomorphic light and dark theme
- Dark mode toggle with localStorage preference saved
- Fully responsive — mobile, tablet, desktop
- Smooth animations and hover effects
- Form validation with inline error messages
- Empty state handling for charts and table

## 📁 Project Structure
```
paisaflow/
├── index.html
├── style.css
└── script.js
```

## ⚙️ Setup
No installation needed. Just clone and open:
```bash
git clone https://github.com/TejaKoduru-0329/paisaflow.git
cd paisaflow
```

Open `index.html` in your browser — done.

## 💡 Approach

**UI Design** — Neomorphic design system with consistent shadow language, gradient accents, and smooth transitions throughout.

**State Management** — All application state (transactions, filters, role, theme) managed in plain JavaScript variables. Filter state object drives all data transformations.

**Component Logic** — Single `applyFilters()` function acts as the central state handler — all filter changes, add/edit/delete operations funnel through it to keep UI in sync.

**Role Based Access** — `handleAccess()` function checks current role and enables/disables action buttons accordingly. No backend — pure frontend simulation.

**Charts** — Chart.js instances destroyed and recreated on each data update to prevent canvas conflicts. Line chart switches between monthly and daily view based on filter selection.

## 📊 Data
Static mock data with 24 transactions across March–June 2025 covering categories like Salary, Freelance, Food, Transport, Entertainment, Shopping, Healthcare, Utilities, and Investment.