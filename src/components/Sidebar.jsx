import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Sidebar.css'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        <span className={`ham-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`ham-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`ham-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeSidebar} />}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-logo">
          <img src="/xyz_Logo.png" alt="XYZ" style={{ width: '120px' }} />
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/" end onClick={closeSidebar}
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            🏠 Home
          </NavLink>
          <NavLink to="/sales" onClick={closeSidebar}
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            📈 Sales Dashboard
          </NavLink>
          <NavLink to="/quality" onClick={closeSidebar}
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            ✅ Quality Dashboard
          </NavLink>
          <NavLink to="/about" onClick={closeSidebar}
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
            ℹ️ About
          </NavLink>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar