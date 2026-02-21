# XYZ Retail Analytics Portal

A unified Sales & Quality analytics solution for XYZ Retail Chain, operating 10 outlets across Bangalore.

## 🔗 Live Links
- **Sales Dashboard:** https://public.tableau.com/app/profile/rajatha.ch/viz/XYZRetailSalesDashboard/XYZRetailSalesDashboard
- **Quality Dashboard:** https://public.tableau.com/app/profile/rajatha.ch/viz/XYZRetailSalesDashboard/XYZRetailQualityDashboard

## 🛠️ Tech Stack
- React + Vite
- React Router DOM
- Tableau Public (dashboard embedding)

## Project Structure
```
src/
├── components/
│   ├── Sidebar.jsx
│   └── Sidebar.css
├── pages/
│   ├── Home.jsx / Home.css
│   ├── Sales.jsx
│   ├── Quality.jsx
│   ├── Dashboard.css
│   ├── About.jsx / About.css
├── App.jsx
└── App.css
```

##  How to Run
```bash
npm install
npm run dev
```
Open http://localhost:5173

##  Design Choices
- Brand colors from xyz_Colours: Teal #18837E, Pink #DB3069, Yale Blue #004975
- Same color palette applied across Tableau dashboards and React app
- Sidebar navigation with React Router for smooth page transitions
- Tableau dashboards embedded via iframe with public URLs

##  Assumptions
- Data covers January to December 2024
- Both datasets joined on Outlet ID + Month + Year
- Data was clean and required only light KPI derivations
- Filters applied across all worksheets in each dashboard