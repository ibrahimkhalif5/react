import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/inc/Navbar'
import Footer from './components/inc/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Experience from './components/pages/Experience'
import Education from './components/pages/Education'
import Skills from './components/pages/Skills'
import Projects from './components/pages/Projects'
import Services from './components/pages/Services'
import Exploring from './components/pages/Exploring'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'

// Scrolls back to the top whenever the route (page) changes.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/exploring" element={<Exploring />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App