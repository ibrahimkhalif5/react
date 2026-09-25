import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PageHeader from '../inc/PageHeader'
import { site, quickFacts, heroIntro } from '../../data/portfolio'

// Short teasers that link to the other pages of the site.
const homeCards = [
  {
    title: 'About Me',
    path: '/about',
    blurb: 'My background as an ICT professional and software developer, what I work on, and what I am open to.',
  },
  {
    title: 'Experience',
    path: '/experience',
    blurb: 'Production software that runs real organizations: revenue systems, government platforms, and more.',
  },
  {
    title: 'Education',
    path: '/education',
    blurb: 'Software Engineering with AI at Centennial College, plus my earlier degrees in IT.',
  },
  {
    title: 'Skills & Technologies',
    path: '/skills',
    blurb: 'Languages, frameworks, databases, APIs, and tools I use to build and run systems.',
  },
  {
    title: 'Services',
    path: '/services',
    blurb: 'What I can deliver: web development, software, APIs, databases, and more.',
  },
  {
    title: 'Projects',
    path: '/projects',
    blurb: 'Live production systems I designed, built, and deployed for real organizations.',
  },
  {
    title: "What I'm Exploring",
    path: '/exploring',
    blurb: 'Where my focus is right now: AI, modern software engineering, and backend engineering.',
  },
]

function Home() {
  return (
    <>
      <section className="hero-section text-white">
        <Container>
          <Row>
            <Col lg={9}>
              <p className="hero-greeting">Hi, my name is</p>
              <h1 className="hero-name">{site.name}.</h1>
              <h2 className="hero-tagline">
                I build software systems that solve real world problems.
              </h2>
              <p className="hero-role text-uppercase">{site.role}</p>
              <p className="hero-intro">{heroIntro}</p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {quickFacts.map((fact) => (
                  <div className="hero-fact" key={fact.title}>
                    <h3>{fact.title}</h3>
                    <p>{fact.text}</p>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/projects" className="btn btn-primary btn-lg">
                  View My Work
                </Link>
                <Link to="/resume" className="btn btn-outline-light btn-lg">
                  View Resume
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="page-section pt-0">
        <Container>
          <PageHeader title="Explore" />
          <Row className="g-4">
            {homeCards.map((card) => (
              <Col md={6} lg={4} key={card.path}>
                <Card className="h-100 portfolio-card">
                  <Card.Body>
                    <h3 className="h5 mb-2">{card.title}</h3>
                    <p className="text-secondary mb-3">{card.blurb}</p>
                    <Link to={card.path} className="stretched-link portfolio-link">
                      View {card.title.toLowerCase()}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home