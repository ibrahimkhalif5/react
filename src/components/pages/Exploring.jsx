import { Container, Row, Col, Card } from 'react-bootstrap'
import PageHeader from '../inc/PageHeader'
import { exploringIntro, exploring } from '../../data/portfolio'

function Exploring() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="What I'm Exploring" intro={exploringIntro} />

        <Row className="g-4">
          {exploring.map((focus) => (
            <Col md={6} xl={4} key={focus.title}>
              <Card className="h-100 portfolio-card">
                <Card.Body className="d-flex flex-column">
                  <h2 className="h5 mb-2">{focus.title}</h2>
                  <p className="text-secondary small">{focus.description}</p>
                  <ul className="portfolio-bullets mb-0 mt-auto pt-3">
                    {focus.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Exploring