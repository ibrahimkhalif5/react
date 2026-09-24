function PageHeader({ title, intro }) {
  return (
    <div className="mb-4">
      <h1 className="portfolio-section-title">{title}</h1>
      {intro && <p className="text-secondary portfolio-intro mb-0">{intro}</p>}
    </div>
  )
}

export default PageHeader