import { NavLink } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="hero-text">
          <h1>XYZ Retail Analytics Portal</h1>
          <p>Your unified view of Sales & Quality performance across all 10 Bangalore outlets.</p>
        </div>
      </div>

      <div className="section-title">Explore Dashboards</div>

      <div className="home-cards">
        <NavLink to="/sales" className="card-link">
          <div className="card sales-card">
            <div className="card-top">
              <span className="card-icon">📈</span>
              <span className="card-tag">Live</span>
            </div>
            <h3>Sales Dashboard</h3>
            <p>Track revenue, profit, footfall and conversion rates outlet-wise and monthly.</p>
            <div className="card-footer">View Dashboard →</div>
          </div>
        </NavLink>

        <NavLink to="/quality" className="card-link">
          <div className="card quality-card">
            <div className="card-top">
              <span className="card-icon">✅</span>
              <span className="card-tag">Live</span>
            </div>
            <h3>Quality Dashboard</h3>
            <p>Monitor defect rates, compliance scores, complaints and shelf availability.</p>
            <div className="card-footer">View Dashboard →</div>
          </div>
        </NavLink>

        <NavLink to="/about" className="card-link">
          <div className="card about-card">
            <div className="card-top">
              <span className="card-icon">🏪</span>
              <span className="card-tag">Info</span>
            </div>
            <h3>10 Outlets</h3>
            <p>Covering Indiranagar, MG Road, Whitefield, Marathahalli and more across Bangalore.</p>
            <div className="card-footer">Learn More →</div>
          </div>
        </NavLink>
      </div>

      <div className="stats-row">
        <div className="stat">
          <div className="stat-number" style={{ color: 'var(--teal)' }}>₹78.18Cr</div>
          <div className="stat-label">Total Revenue</div>
        </div>
        <div className="stat">
          <div className="stat-number" style={{ color: 'var(--pink)' }}>10</div>
          <div className="stat-label">Outlets</div>
        </div>
        <div className="stat">
          <div className="stat-number" style={{ color: 'var(--blue)' }}>12</div>
          <div className="stat-label">Months of Data</div>
        </div>
        <div className="stat">
          <div className="stat-number" style={{ color: 'var(--purple)' }}>120</div>
          <div className="stat-label">Data Points</div>
        </div>
      </div>
    </div>
  )
}

export default Home