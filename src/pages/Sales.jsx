import './Dashboard.css'

function Sales() {
  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Sales Dashboard</h2>
      <p className="dashboard-subtitle">Revenue, profit and conversion metrics across all outlets</p>
      <div className="tableau-container">
        <iframe
          src="https://public.tableau.com/views/XYZRetailSalesDashboard/XYZRetailSalesDashboard?:embed=yes&:display_count=no&:showVizHome=no"
          width="100%"
          height="850px"
          frameBorder="0"
          title="Sales Dashboard"
        />
      </div>
    </div>
  )
}

export default Sales