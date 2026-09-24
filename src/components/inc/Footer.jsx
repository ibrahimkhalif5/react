import { site } from '../../data/portfolio'

function Footer() {
  return (
    <footer className="portfolio-footer py-4">
      <p className="text-center mb-0 small">Designed and built by {site.name}</p>
    </footer>
  )
}

export default Footer