import elwak from '../assets/elwak.png'
import assembly from '../assets/assembly.png'
import najdah from '../assets/najdah.png'
import revenueSystem from '../assets/revenue-system.png'
import landRegistry from '../assets/land-registry.png'
import tenoCare from '../assets/teno-care.png'
import profile from '../assets/ibrahim.png'

// All the content of the portfolio lives here in one place.
// The pages import these arrays and render them with .map().

export const site = {
  name: 'Ibrahim Khalif',
  fullName: 'Ibrahim Khalif Ali',
  role: 'Software Engineer · ICT Professional',
  email: 'ibrahimkhalif5@gmail.com',
  github: 'https://github.com/ibrahimkhalif5',
  linkedin: 'https://www.linkedin.com/in/ibrahim-khalif-367140161',
  website: 'https://ibrahimkhalif5.github.io/ibrahim-khalif-portfolio/',
  resume: '/Ibrahim-Khalif-Ali-Resume.pdf',
}

export const profileImage = profile

// Quick facts shown in the hero section.
export const quickFacts = [
  {
    title: 'Production Systems',
    text: 'Revenue, healthcare, land registry, municipal',
  },
  {
    title: 'Software Engineering Technology',
    text: 'AI stream, Centennial College, Canada',
  },
  {
    title: 'Based in Toronto',
    text: 'Open to Canadian opportunities',
  },
]

export const heroIntro =
  "I've spent my career designing, building, and supporting software systems that run real organizations, including county revenue platforms, hospital systems, land registries, and government web platforms. Now I'm deepening that foundation into modern software engineering and AI."

// About Me page
export const aboutParagraphs = [
  "I'm an ICT professional and software developer based in Toronto, currently studying Software Engineering Technology (Artificial Intelligence) at Centennial College. I design, develop, deploy, and support software systems, mostly backend heavy web applications that need to work reliably in production.",
  'Most of my work has been in the public and institutional space: government technology systems, revenue platforms, land registry tools, healthcare systems, and municipal websites. These are environments where the software has to handle real data, real users, and real consequences. That\'s where I learned to build things properly, not just get them running but keep them running.',
  'Over the past few years, my focus has shifted from maintaining existing systems toward building new ones with modern tools and practices. I work extensively with Laravel, Vue.js, PHP, Python, and MySQL, and I\'ve been deepening my understanding of software architecture, API design, and cloud deployment. More recently, I\'ve been exploring how artificial intelligence can be integrated into practical applications, not as a buzzword but as a genuine tool for solving problems.',
  "I'm drawn to software engineering because it rewards both discipline and curiosity. I want to build systems that are well designed, maintainable, and actually useful, the kind of software that makes an organization run better, not just look modern.",
]

export const openTo = [
  'Software Engineer',
  'Backend Developer',
  'Full Stack Developer',
  'AI / ML Roles',
  'Junior Software Engineering Roles',
]

export const currently = [
  {
    label: 'Studying',
    title: 'Software Engineering Technology - AI',
    place: 'Centennial College, Canada',
  },
  {
    label: 'Also completing',
    title: 'Master of Science in Information Technology',
    place: 'INTI International University, Malaysia',
  },
]

export const interests = [
  'Software Engineering',
  'Artificial Intelligence',
  'Machine Learning',
  'Full Stack Development',
  'Backend APIs',
  'Database Architecture',
  'Flutter Development',
  'Cloud Deployment',
]

// Services page
export const servicesIntro =
  'Services I can deliver based on the work I have done building and supporting production software systems.'

export const services = [
  {
    title: 'Web Development',
    description:
      'Building government and organizational websites and web applications using PHP, Laravel, Vue.js, HTML, and CSS.',
  },
  {
    title: 'Software Development',
    description:
      'Designing, building, and supporting production software systems used by real organizations.',
  },
  {
    title: 'Mobile App Development',
    description: 'Developing mobile applications using Flutter.',
  },
  {
    title: 'API Development',
    description:
      'Designing and integrating REST APIs and third-party payment systems using Laravel and Django REST Framework.',
  },
  {
    title: 'Database Development',
    description:
      'Designing and administering MySQL and SQLite databases that serve production applications.',
  },
  {
    title: 'UI/UX Implementation',
    description:
      'Building responsive, clean interfaces with HTML, CSS, Bootstrap, and Vue.js.',
  },
]

// Experience. Two roles covering 6 years, from the current résumé.
export const experience = {
  intro:
    "6 years of experience spanning public sector systems administration and custom web application delivery. I design, develop, and operate systems that public institutions rely on daily, where correctness, reliability, and security come first.",
  roles: [
    {
      title: 'County Revenue & Land Registry System Administrator',
      organization: 'Mandera County Government',
      location: 'Mandera, Kenya',
      period: 'Oct 2020 - Aug 2026',
      bullets: [
        'Trained system users and configured POS machines',
        'Managed, deployed, and configured handheld Android POS hardware networks and transactional revenue databases',
        'Spearheaded implementation audits for the Revenue Collection Management System (RCMS), drastically reducing data discrepancies and safeguarding financial audit tracking',
        'Maintained user access controls, secure schema migrations, and optimized raw MySQL data queries for regional public infrastructure routing',
      ],
    },
    {
      title: 'Freelance / Side Projects',
      organization: 'County Government of Mandera',
      location: 'Remote',
      period: 'Mar 2019 - Jun 2026',
      bullets: [
        'Built and structured an accessible, multi-tier public portal optimized for high up-time and community information requests, using Laravel and responsive Bootstrap layouts',
        'Engineered a dynamic database-driven resource index website powered by Laravel and MySQL to streamline official publication access, committee reports, and tender postings',
      ],
    },
  ],
  technologies: [
    'Laravel',
    'Vue.js',
    'PHP',
    'MySQL',
    'JavaScript',
    'REST APIs',
    'POS Systems',
    'Cloud Deployment',
  ],
}

// Education
export const education = [
  {
    degree: 'Software Engineering Technology - Artificial Intelligence',
    school: 'Centennial College',
    location: 'Toronto, Ontario, Canada',
    period: 'Sep 2026 - Apr 2028',
    badge: 'Current student',
    description:
      'Coursework covers mobile UX/UI design, app integration, performance optimization, machine learning, object-oriented software design (Java), NLP workflows, image recognition modules, and building automated software bots.',
  },
  {
    degree: 'Master of Science in Information Technology',
    school: 'INTI International University',
    location: 'Malaysia (Online Learning)',
    period: 'Mar 2025 - Oct 2026',
    badge: 'Currently completing final semester',
    description:
      'Coursework covers advanced enterprise software architecture, business intelligence and data analytics, architecting scalable cloud infrastructure, and managing end-to-end software delivery workflows.',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    school: "Murang'a University of Technology",
    location: "Murang'a, Kenya",
    period: 'Sep 2014 - Aug 2018',
    badge: '2018',
    description:
      'Graduated with a GPA of 3.471. Covered systems analysis and architecture, object-oriented programming (Java/C++), advanced relational databases (MySQL), discrete mathematics and statistical calculus, network infrastructure design, and theoretical computer science.',
  },
]

// Skills grouped by category. A skill with a url is rendered as a link.
const skillUrls = {
  Python: 'https://python.org',
  Laravel: 'https://laravel.com',
  'Vue.js': 'https://vuejs.org',
  Django: 'https://djangoproject.com',
  React: 'https://react.dev',
  Flutter: 'https://flutter.dev',
  Bootstrap: 'https://getbootstrap.com',
  Java: 'https://www.java.com',
  Git: 'https://git-scm.com',
  GitHub: 'https://github.com',
  R: 'https://www.r-project.org',
}

// Turns a skill name into { name, url } so every skill has the same shape.
const skill = (name) => ({ name, url: skillUrls[name] })

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['PHP', 'JavaScript', 'Java', 'Python', 'SQL', 'HTML', 'CSS'].map(skill),
  },
  {
    title: 'Frameworks',
    skills: ['Laravel', 'Vue.js', 'React', 'Django', 'Flutter', 'Bootstrap'].map(skill),
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQLite'].map(skill),
  },
  {
    title: 'APIs & Backend',
    skills: ['REST APIs', 'Axios', 'Laravel API', 'Django REST Framework'].map(skill),
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Linux', 'Cloud Hosting', 'POS Systems'].map(skill),
  },
  {
    title: 'Data Analysis',
    skills: ['Python', 'R', 'Power BI'].map(skill),
  },
  {
    title: 'Other',
    skills: ['AI / ML Fundamentals', 'Software Engineering', 'System Administration'].map(skill),
  },
]

// Projects. Projects without a url have no live link (Teno Care).
// "role" and "outcome" come from the information already in the portfolio.
// Teno Care has no stated role/outcome in the portfolio, so it is left out
// rather than inventing details.
const role = 'Designed, built, and deployed as part of professional ICT and government work.'

export const projects = [
  {
    name: 'Elwak Municipality Website',
    image: elwak,
    category: 'Government / Municipal',
    description:
      'A municipal government website designed to provide public information and digital access to municipal services and information for the Elwak community.',
    technologies: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL'],
    url: 'https://elwakmunicipality.co.ke/',
    role,
    outcome:
      'Provides public information and digital access to municipal services for the Elwak community.',
  },
  {
    name: 'Mandera Assembly Website',
    image: assembly,
    category: 'Government / Public Sector',
    description:
      'Official web platform for Mandera County Assembly, providing public access to assembly information, proceedings, and governance resources.',
    technologies: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL'],
    url: 'https://manderaassembly.go.ke/',
    role,
    outcome:
      'Provides public access to assembly information, proceedings, and governance resources.',
  },
  {
    name: 'Najdah Organization Website',
    image: najdah,
    category: 'Web Development / Multilingual Platform',
    description:
      'A multilingual organizational website supporting Arabic, English, and Turkish, built to serve a diverse international audience with content in multiple languages.',
    technologies: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL'],
    url: 'https://najdah.org/',
    role,
    outcome:
      'Serves a diverse international audience with content in Arabic, English, and Turkish.',
  },
  {
    name: 'Mandera Revenue Collection Management System',
    image: revenueSystem,
    category: 'Government / Revenue Technology',
    description:
      'A revenue management platform used for county revenue operations. Developed and supported as part of county ICT infrastructure, handling payment processing, POS integration, USSD channels, and comprehensive financial reporting.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'POS', 'REST APIs', 'Reporting'],
    url: 'https://manderarcms.co.ke/login',
    role,
    outcome:
      'Handles county payment processing, POS integration, USSD channels, and comprehensive financial reporting.',
  },
  {
    name: 'Mandera Land Registry System',
    image: landRegistry,
    category: 'Government / Land Management',
    description:
      'A land registry management system designed to support land records and related administrative processes. Built to digitize and streamline property registration and ownership tracking.',
    technologies: ['Laravel', 'MySQL', 'PHP', 'JavaScript'],
    url: 'https://manderalrds.co.ke/',
    role,
    outcome: 'Digitizes and streamlines property registration and ownership tracking.',
  },
  {
    name: 'Teno Care Hospital System',
    image: tenoCare,
    category: 'Healthcare / Enterprise Software',
    description:
      'A hospital management system designed for a Level 3 hospital. Covers core operational modules including payments, triage, pharmacy, laboratory, radiology, and reporting.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    url: null,
  },
]

export const projectsIntro =
  'These are production systems built for real organizations, not tutorials. They process real payments, manage real records, and serve real users daily. The featured projects below are live systems I designed, built, and deployed as part of professional ICT and government work.'

// What I'm Exploring
export const exploringIntro =
  'I already have real world software development experience, and I am now deliberately expanding into modern software engineering and AI. This is where my focus is right now.'

export const exploring = [
  {
    title: 'Artificial Intelligence',
    description:
      'Currently studying Software Engineering with AI and developing a stronger understanding of intelligent systems.',
    points: [
      'Artificial intelligence',
      'Machine learning concepts',
      'AI enabled applications',
      'Intelligent software systems',
      'Data driven applications',
    ],
  },
  {
    title: 'Modern Software Engineering',
    description:
      'Strengthening skills in modern frameworks, languages, and development practices.',
    points: ['Python', 'Django', 'REST APIs', 'Cloud based development', 'Software architecture'],
  },
  {
    title: 'Backend Engineering',
    description:
      'Continuing to build deep expertise in the stack that powers production systems.',
    points: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Authentication', 'Database design', 'Enterprise systems'],
  },
]

export const contactIntro =
  "I'm a software engineer with real production experience in revenue, healthcare, and government systems, and I'm currently studying Software Engineering with AI. I'm open to software engineering, backend, full stack, and AI focused roles, as well as collaborative projects building practical systems that solve real world problems."