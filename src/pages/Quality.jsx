import './Dashboard.css'

function Quality() {
  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Quality Dashboard</h2>
      <p className="dashboard-subtitle">Defect rates, compliance scores and quality metrics across all outlets</p>
      <div className="tableau-container">
        <iframe
          src="https://public.tableau.com/views/XYZRetailSalesDashboard/XYZRetailQualityDashboard?:embed=yes&:display_count=no&:showVizHome=no"
          width="100%"
          height="850px"
          frameBorder="0"
          title="Quality Dashboard"
        />
      </div>
    </div>
  )
}

export default Quality