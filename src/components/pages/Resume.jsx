import { useEffect, useState } from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Document, Page, pdfjs } from 'react-pdf'
import { AiOutlineDownload } from 'react-icons/ai'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import PageHeader from '../inc/PageHeader'
import { site } from '../../data/portfolio'

import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl

function Resume() {
  // Scale the PDF with the screen so it fits nicely on any device.
  const [scale, setScale] = useState(1.4)
  const [numPages, setNumPages] = useState(0)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setScale(width > 992 ? 1.5 : width > 700 ? 1.1 : 0.7)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="page-section">
      <Container>
        <Row className="align-items-start justify-content-between g-3 mb-4">
          <Col xs="auto">
            <PageHeader title="Resume" />
          </Col>
          <Col xs="auto">
            <Link to="/" className="btn btn-outline-light">
              Back to Home
            </Link>
          </Col>
        </Row>

        <div className="text-center mb-4">
          <a href={site.resume} download className="btn btn-primary resume-download-btn">
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </div>

        <Row className="justify-content-center">
          {loadError ? (
            <Col md={8}>
              <Alert variant="danger">
                The résumé could not be previewed in this browser. Use the Download CV button
                instead.
              </Alert>
            </Col>
          ) : (
            <Document
              file={site.resume}
              className="resume-document"
              onLoadSuccess={({ numPages: pages }) => setNumPages(pages)}
              onLoadError={() => setLoadError(true)}
            >
              {Array.from({ length: numPages }, (_, index) => (
                <Page key={`page-${index + 1}`} pageNumber={index + 1} scale={scale} />
              ))}
            </Document>
          )}
        </Row>

        <div className="text-center mt-4">
          <a href={site.resume} download className="btn btn-primary resume-download-btn">
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Resume