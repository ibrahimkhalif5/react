import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FaBrain, FaGraduationCap, FaUniversity } from 'react-icons/fa'
import PageHeader from '../inc/PageHeader'
import { education } from '../../data/portfolio'

const educationIcons = {
  'Centennial College': FaBrain,
  'INTI International University': FaUniversity,
  "Murang'a University of Technology": FaGraduationCap,
}

function Education() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Education" />

        <Row className="g-4">
          {education.map((item) => {
            const Icon = educationIcons[item.school]
            return (
              <Col md={6} xl={4} key={item.degree}>
                <Card className="h-100 portfolio-card">
                  <Card.Body>
                    <div className="education-icon-wrapper mb-3">
                      {Icon && <Icon />}
                    </div>

                    <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                      <div>
                        <h2 className="h5 mb-0">{item.degree}</h2>
                        <p className="portfolio-organization mb-0">
                          {item.school}
                          <span className="text-secondary"> , {item.location}</span>
                        </p>
                        <p className="portfolio-period mb-0">{item.period}</p>
                      </div>
                      <Badge bg="primary" className="text-nowrap">
                        {item.badge}
                      </Badge>
                    </div>

                    {item.description && (
                      <p className="text-secondary portfolio-paragraph mb-0">
                        {item.description}
                      </p>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Education