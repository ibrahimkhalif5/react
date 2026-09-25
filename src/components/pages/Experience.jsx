import { Container, Card } from 'react-bootstrap'
import PageHeader from '../inc/PageHeader'
import { experience } from '../../data/portfolio'

function Experience() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Experience" intro={experience.intro} />

        {experience.roles.map((role) => (
          <Card className="portfolio-card mb-4" key={role.title}>
            <Card.Body className="p-lg-4">
              <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">
                <div>
                  <h2 className="h4 mb-1">{role.title}</h2>
                  <p className="portfolio-organization mb-0">
                    {role.organization}
                    <span className="text-secondary"> , {role.location}</span>
                  </p>
                </div>
                <span className="portfolio-period">{role.period}</span>
              </div>

              <ul className="portfolio-bullets">
                {role.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        ))}

        <div className="d-flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <span className="portfolio-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience