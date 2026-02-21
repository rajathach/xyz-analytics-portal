import './About.css'

function About() {
  const outlets = [
    { name: 'MG Road Central', area: 'MG Road' },
    { name: 'Indiranagar Hub', area: 'Indiranagar' },
    { name: 'Whitefield Nexus', area: 'Whitefield' },
    { name: 'Marathahalli Point', area: 'Marathahalli' },
    { name: 'Electronic City Plaza', area: 'Electronic City' },
    { name: 'Jayanagar Market', area: 'Jayanagar' },
    { name: 'Hebbal North Star', area: 'Hebbal' },
    { name: 'Rajajinagar Central', area: 'Rajajinagar' },
    { name: 'Banashankari South', area: 'Banashankari' },
    { name: 'Yelahanka Square', area: 'Yelahanka' },
  ]

  const stack = [
    { label: 'Tableau Desktop', desc: 'Dashboard creation & data modeling', color: '#18837E' },
    { label: 'Tableau Public', desc: 'Cloud hosting & dashboard embedding', color: '#DB3069' },
    { label: 'React + Vite', desc: 'Fast, modern web application', color: '#004975' },
    { label: 'React Router', desc: 'Client-side navigation & routing', color: '#9882AC' },
  ]

  return (
    <div className="about-page">

      
      <div className="about-hero">
        <div className="hero-label">Case Study</div>
        <h1>XYZ Retail Chain<br /><span>Analytics Portal</span></h1>
        <p>A unified Sales & Quality analytics solution for 10 Bangalore outlets — built with Tableau and React.</p>
        <div className="hero-badges">
          <span className="badge">📍 Bangalore</span>
          <span className="badge">🏪 10 Outlets</span>
          <span className="badge">📅 2024 Data</span>
        </div>
      </div>

     
      <div className="about-two-col">
        <div className="about-block teal-block">
          <div className="block-number">01</div>
          <h3>Business Context</h3>
          <p>XYZ is a retail chain based in Bangalore, operating 10 outlets across the city. The leadership team wanted a unified analytics solution providing clear visibility into sales performance and quality metrics — visually aligned with the XYZ brand and accessible through a React web application.</p>
        </div>
        <div className="about-block pink-block">
          <div className="block-number">02</div>
          <h3>Project Objectives</h3>
          <p>Design interactive Tableau dashboards answering key business questions for sales and quality performance. Apply best practices in data modeling, KPI creation and dashboard layout. Build a React web app embedding the published Tableau dashboards with intuitive navigation and consistent branding.</p>
        </div>
      </div>

   
      <div className="data-section">
        <div className="section-header">
          <span className="section-tag">Data Sources</span>
          <h2>What Powers the Dashboards</h2>
        </div>
        <div className="data-grid">
          <div className="data-card">
            <div className="data-card-header" style={{ background: '#18837E' }}>
              <span>📈</span>
              <h4>Sales Dataset</h4>
              <p>xyz_Sales.xlsx · 120 rows</p>
            </div>
            <ul className="data-list">
              <li>Monthly Revenue (INR)</li>
              <li>Transactions & Avg Bill Value</li>
              <li>Footfall & Conversion Rate</li>
              <li>Gross Margin & Operating Cost</li>
              <li>Net Profit & Inventory Turnover</li>
              <li>Customer Satisfaction Score</li>
            </ul>
          </div>
          <div className="data-card">
            <div className="data-card-header" style={{ background: '#DB3069' }}>
              <span>✅</span>
              <h4>Quality Dataset</h4>
              <p>xyz_Quality.xlsx · 120 rows</p>
            </div>
            <ul className="data-list">
              <li>Return Rate & Defect Rate</li>
              <li>Customer Complaints Count</li>
              <li>Order Fulfillment Accuracy</li>
              <li>On-Shelf Availability</li>
              <li>Audit Compliance Score</li>
              <li>Supplier Delivery Compliance</li>
            </ul>
          </div>
          <div className="data-card">
            <div className="data-card-header" style={{ background: '#004975' }}>
              <span>⚙️</span>
              <h4>Assumptions</h4>
              <p>Design decisions made</p>
            </div>
            <ul className="data-list">
              <li>Data covers Jan–Dec 2024</li>
              <li>Data clean enough to use directly</li>
              <li>Light KPI derivations applied</li>
              <li>Joined on Outlet ID + Month + Year</li>
              <li>Brand colors applied consistently</li>
              <li>Same font across Tableau & React</li>
            </ul>
          </div>
        </div>
      </div>

   
      <div className="stack-section">
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2>Built With</h2>
        </div>
        <div className="stack-grid">
          {stack.map((item, i) => (
            <div className="stack-item" key={i}>
              <div className="stack-dot" style={{ background: item.color }} />
              <div>
                <div className="stack-label">{item.label}</div>
                <div className="stack-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="outlets-section">
        <div className="section-header">
          <span className="section-tag">Coverage</span>
          <h2>10 Bangalore Outlets</h2>
        </div>
        <div className="outlets-grid">
          {outlets.map((outlet, i) => (
            <div className="outlet-card" key={i}>
              <div className="outlet-number">0{i + 1}</div>
              <div className="outlet-name">{outlet.name}</div>
              <div className="outlet-area">📍 {outlet.area}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default About