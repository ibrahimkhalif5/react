import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import PageHeader from '../inc/PageHeader'
import { site, contactIntro } from '../../data/portfolio'

const contactDetails = [
  { label: 'Email', value: site.email, url: `mailto:${site.email}`, external: false },
  { label: 'GitHub', value: site.github, url: site.github, external: true },
  { label: 'LinkedIn', value: site.linkedin, url: site.linkedin, external: true },
]

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  // Updates the matching field whenever the user types.
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => navigate('/'), 2000)
  }

  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Contact Me" />

        <h2 className="h1 mb-4">Let's build something useful.</h2>
        <p className="text-secondary mb-5 portfolio-contact-text">{contactIntro}</p>

        <Row className="g-4">
          <Col lg={5}>
            <div className="portfolio-panel">
              <h3 className="portfolio-panel-title">Contact Information</h3>
              {contactDetails.map((item) => (
                <div className="contact-item" key={item.label}>
                  <p className="portfolio-panel-label mb-1">{item.label}</p>
                  {item.external ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <a href={item.url} className="portfolio-link">
                      {item.value}
                    </a>
                  )}
                </div>
              ))}

              <div className="d-flex flex-wrap gap-2 mt-4">
                <a href={`mailto:${site.email}`} className="btn btn-primary">
                  Get In Touch
                </a>
                <a href={site.resume} download className="btn btn-outline-primary">
                  Download Résumé
                </a>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <Form onSubmit={handleSubmit} className="portfolio-panel">
              <h3 className="portfolio-panel-title">Send a Message</h3>

              {submitted && (
                <Alert variant="success">
                  Thank you, {formData.firstName || 'there'}! Your message has been received.
                  Redirecting to the Home page...
                </Alert>
              )}

              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="contactNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact