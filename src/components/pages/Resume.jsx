import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PageHeader from '../inc/PageHeader'
import { site } from '../../data/portfolio'

function Resume() {
  return (
    <section className="page-section">
      <Container>
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-4">
          <PageHeader title="Résumé" />
          <div className="d-flex flex-wrap gap-2">
            <a href={site.resume} download className="btn btn-primary">
              Download Résumé
            </a>
            <Link to="/" className="btn btn-outline-light">
              Back to Home
            </Link>
          </div>
        </div>

        <iframe
          src={site.resume}
          title="Ibrahim Khalif Résumé"
          className="resume-frame"
        />
      </Container>
    </section>
  )
}

export default Resume