import { Container, Row, Col } from 'react-bootstrap'
import PageHeader from '../inc/PageHeader'
import { skillGroups } from '../../data/portfolio'

function Skills() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Skills & Technologies" />

        <Row className="g-4">
          {skillGroups.map((group) => (
            <Col md={6} xl={4} key={group.title}>
              <div className="portfolio-panel h-100">
                <h3 className="portfolio-panel-title">{group.title}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {group.skills.map((s) =>
                    s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-badge portfolio-badge-link"
                        key={s.name}
                      >
                        {s.name}
                      </a>
                    ) : (
                      <span className="portfolio-badge" key={s.name}>
                        {s.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills