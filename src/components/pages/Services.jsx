import { Container, Row, Col } from 'react-bootstrap'
import {
  FaGlobe,
  FaCode,
  FaMobileAlt,
  FaPlug,
  FaDatabase,
  FaPaintBrush,
} from 'react-icons/fa'
import PageHeader from '../inc/PageHeader'
import { services, servicesIntro } from '../../data/portfolio'

const serviceIcons = {
  'Web Development': FaGlobe,
  'Software Development': FaCode,
  'Mobile App Development': FaMobileAlt,
  'API Development': FaPlug,
  'Database Development': FaDatabase,
  'UI/UX Implementation': FaPaintBrush,
}

function Services() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Services" intro={servicesIntro} />

        <Row className="g-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.title]
            return (
              <Col md={6} xl={4} key={service.title}>
                <div className="portfolio-panel h-100">
                  <div className="service-icon-wrapper mb-3">
                    {Icon && <Icon />}
                  </div>
                  <h2 className="h5 mb-2">{service.title}</h2>
                  <p className="text-secondary mb-0">{service.description}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Services