import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../../data/portfolio'

// All page links from one array, rendered with .map().
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Exploring', path: '/exploring' },
  { name: 'Contact Me', path: '/contact' },
]

function Navbar() {
  return (
    <BootstrapNavbar expand="xl" bg="dark" variant="dark" sticky="top" className="portfolio-navbar">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src="/ib.png" alt={site.name} className="portfolio-logo" />
          <span>{site.name}</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="main-nav" />
        <BootstrapNavbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-xl-center">
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
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar