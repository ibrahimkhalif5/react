import { Container } from 'react-bootstrap'
import PageHeader from '../inc/PageHeader'
import { site, contactIntro } from '../../data/portfolio'

const socials = [
  {
    name: 'Email',
    url: `mailto:${site.email}`,
    external: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: site.github,
    external: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: site.linkedin,
    external: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

function Contact() {
  return (
    <section className="page-section">
      <Container className="text-center portfolio-contact">
        <PageHeader title="Get In Touch" />

        <h2 className="h1 mb-4">Let's build something useful.</h2>
        <p className="text-secondary mx-auto mb-5 portfolio-contact-text">{contactIntro}</p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
          <a href={`mailto:${site.email}`} className="btn btn-primary btn-lg">
            Get In Touch
          </a>
          <a href={site.resume} download className="btn btn-outline-primary btn-lg">
            Download Résumé
          </a>
        </div>

        <div className="d-flex justify-content-center gap-5">
          {socials.map((social) => {
            const content = (
              <>
                {social.icon}
                <span className="small text-uppercase">{social.name}</span>
              </>
            )
            return social.external ? (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-social"
                key={social.name}
              >
                {content}
              </a>
            ) : (
              <a href={social.url} className="portfolio-social" key={social.name}>
                {content}
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Contact