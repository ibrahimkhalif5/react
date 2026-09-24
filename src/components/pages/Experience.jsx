import { Container, Card } from 'react-bootstrap'
import PageHeader from '../inc/PageHeader'
import { experience } from '../../data/portfolio'

function Experience() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Experience" intro={experience.intro} />

        <Card className="portfolio-card">
          <Card.Body className="p-lg-4">
            <h2 className="h4 mb-1">{experience.role}</h2>
            <p className="portfolio-organization mb-4">
              {experience.organization}
              <span className="text-secondary"> , {experience.department}</span>
            </p>

            <ul className="portfolio-bullets mb-4">
              {experience.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

            <div className="d-flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span className="portfolio-badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}

export default Experience