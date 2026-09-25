import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PageHeader from '../inc/PageHeader'
import { site, profileImage, aboutParagraphs, openTo, currently, interests } from '../../data/portfolio'

function About() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="About Me" />

        <Row className="g-4">
          <Col lg={8}>
            {aboutParagraphs.map((paragraph, index) => (
              <p className="text-secondary portfolio-paragraph" key={index}>
                {paragraph}
              </p>
            ))}

            <div className="portfolio-panel mt-4">
              <h3 className="portfolio-panel-title">Open To</h3>
              <div className="d-flex flex-wrap gap-2">
                {openTo.map((item) => (
                  <span className="portfolio-badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="portfolio-panel mb-4">
              <img src={profileImage} alt={site.fullName} className="profile-image mb-3" />
              <h2 className="h4 mb-1">{site.fullName}</h2>
              <p className="text-secondary mb-3">{site.role}</p>
              <Link to="/resume" className="btn btn-primary">
                View Resume
              </Link>
            </div>

            <div className="portfolio-panel mb-4">
              <h3 className="portfolio-panel-title">Currently</h3>
              {currently.map((item, index) => (
                <div className={index > 0 ? 'portfolio-panel-divider' : ''} key={item.title}>
                  <p className="portfolio-panel-label mb-1">{item.label}</p>
                  <p className="fw-semibold mb-0">{item.title}</p>
                  <p className="text-secondary mb-0">{item.place}</p>
                </div>
              ))}
            </div>

            <div className="portfolio-panel">
              <h3 className="portfolio-panel-title">Technical Interests</h3>
              <div className="d-flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span className="portfolio-badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About