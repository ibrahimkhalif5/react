import { Container, Row, Col, Card } from 'react-bootstrap'
import PageHeader from '../inc/PageHeader'
import { projects, projectsIntro } from '../../data/portfolio'

function Projects() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Projects" intro={projectsIntro} />

        <Row className="g-4">
          {projects.map((project) => (
            <Col md={6} xl={4} key={project.name}>
              <Card className="h-100 portfolio-card project-card">
                <Card.Img variant="top" src={project.image} alt={`${project.name} screenshot`} />
                <Card.Body className="d-flex flex-column">
                  <p className="portfolio-category">{project.category}</p>
                  <h2 className="h5">{project.name}</h2>
                  <p className="text-secondary small flex-grow-1">{project.description}</p>

                  {project.role && (
                    <div className="project-detail">
                      <p className="portfolio-panel-label mb-1">My Role</p>
                      <p className="small mb-0">{project.role}</p>
                    </div>
                  )}
                  {project.outcome && (
                    <div className="project-detail">
                      <p className="portfolio-panel-label mb-1">Outcome</p>
                      <p className="small mb-0">{project.outcome}</p>
                    </div>
                  )}

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span className="portfolio-badge" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View Live System
                      </a>
                    ) : (
                      <span className="text-secondary small">Private production system</span>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects