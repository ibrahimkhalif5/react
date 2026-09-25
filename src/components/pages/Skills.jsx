import { Container, Row, Col } from 'react-bootstrap'
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaRProject,
  FaNetworkWired,
  FaCloudUploadAlt,
  FaCashRegister,
  FaBrain,
  FaCode,
  FaServer,
  FaChartBar,
  FaLink,
} from 'react-icons/fa'
import {
  SiPhp,
  SiJavascript,
  SiLaravel,
  SiVuedotjs,
  SiReact,
  SiDjango,
  SiFlutter,
  SiBootstrap,
  SiMysql,
  SiSqlite,
  SiAxios,
  SiLinux,
} from 'react-icons/si'
import PageHeader from '../inc/PageHeader'
import { skillGroups } from '../../data/portfolio'

// Icon shown beside each skill name. Skills without an entry just show text.
const skillIcons = {
  PHP: SiPhp,
  JavaScript: SiJavascript,
  Java: FaJava,
  Python: FaPython,
  SQL: FaDatabase,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Laravel: SiLaravel,
  'Vue.js': SiVuedotjs,
  React: SiReact,
  Django: SiDjango,
  Flutter: SiFlutter,
  Bootstrap: SiBootstrap,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  'REST APIs': FaNetworkWired,
  Axios: SiAxios,
  'Laravel API': FaLink,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Linux: SiLinux,
  'Cloud Hosting': FaCloudUploadAlt,
  'POS Systems': FaCashRegister,
  R: FaRProject,
  'Power BI': FaChartBar,
  'AI / ML Fundamentals': FaBrain,
  'Software Engineering': FaCode,
  'System Administration': FaServer,
}

function SkillBadge({ skill }) {
  const Icon = skillIcons[skill.name]
  const classes = `portfolio-badge ${skill.url ? 'portfolio-badge-link' : ''}`

  if (skill.url) {
    return (
      <a href={skill.url} target="_blank" rel="noopener noreferrer" className={classes}>
        {Icon && <Icon className="skill-icon" />}
        {skill.name}
      </a>
    )
  }

  return (
    <span className={classes}>
      {Icon && <Icon className="skill-icon" />}
      {skill.name}
    </span>
  )
}

function Skills() {
  return (
    <section className="page-section">
      <Container>
        <PageHeader title="Skills & Technologies" />

        <Row className="g-4">
          {skillGroups.map((group) => (
            <Col md={6} xl={4} key={group.title}>
              <div className="portfolio-panel h-100">
                <h3 className="portfolio-panel-title">{group.title}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge skill={skill} key={skill.name} />
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills