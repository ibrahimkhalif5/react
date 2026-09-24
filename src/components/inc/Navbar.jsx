import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../../data/portfolio'

// All page links from one array, rendered with .map().
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Exploring', path: '/exploring' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  return (
    <BootstrapNavbar expand="lg" bg="dark" variant="dark" sticky="top" className="portfolio-navbar">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          {site.name}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="main-nav" />
        <BootstrapNavbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.name}
                as={NavLink}
                to={link.path}
                className="portfolio-nav-link"
              >
                {link.name}
              </Nav.Link>
            ))}
            <Link
              to="/resume"
              className="btn btn-outline-light btn-sm portfolio-resume-btn ms-lg-3"
            >
              Résumé
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar