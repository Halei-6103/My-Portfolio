import './App.css'
import bgImage from './assets/ian_ascii.png'

const OPERATION_SMILE_URL = 'https://halei-6103.github.io/OperationSmileLoyolaUniversity/'
const GAVIN_PORTFOLIO_URL = 'https://halei-6103.github.io/GavinPortfolio/'

const MOBILE_WINDOW = 'width=390,height=844,scrollbars=yes,resizable=yes'
const POPUP_WINDOW = 'width=1100,height=700,scrollbars=yes,resizable=yes'

const PROJECTS = [
  {
    id: '1',
    title: 'Operation Smile',
    label: '01',
    href: OPERATION_SMILE_URL,
    image: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
    previewUrl: OPERATION_SMILE_URL,
    openInMobileView: true,
  },
  {
    id: '2',
    title: 'NurseSim+',
    label: '02',
    href: '#',
    image: 'linear-gradient(135deg, #333 0%, #222 100%)',
  },
  {
    id: '3',
    title: "Gavin's Portfolio",
    label: '03',
    href: GAVIN_PORTFOLIO_URL,
    image: 'linear-gradient(135deg, #252525 0%, #151515 100%)',
    previewUrl: GAVIN_PORTFOLIO_URL,
    openInPopup: true,
  },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToTop() {
  const el = document.getElementById('top')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function handleProjectClick(e: React.MouseEvent<HTMLAnchorElement>, project: (typeof PROJECTS)[0]) {
  if (!project.href.startsWith('http')) return
  if ('openInMobileView' in project && project.openInMobileView) {
    e.preventDefault()
    window.open(project.href, '_blank', MOBILE_WINDOW)
  } else if ('openInPopup' in project && project.openInPopup) {
    e.preventDefault()
    window.open(project.href, '_blank', POPUP_WINDOW)
  }
}

function App() {
  return (
    <div className="app">
      <button
        type="button"
        className="home-link"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </button>
      <div className="bg-layer" style={{ backgroundImage: `url(${bgImage})` }} aria-hidden="true" />
      <main className="scroll-container">
        <header className="hero" id="top">
          <h1 className="hero-name">Ian Hale</h1>
          <p className="tagline">Portfolio</p>
          <nav className="nav-links">
            <button type="button" onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <span className="nav-sep">·</span>
            <button type="button" onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <span className="nav-sep">·</span>
            <button type="button" onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>
        </header>

        <section className="page-section" id="projects">
          <h2 className="section-heading">Projects</h2>
          <div className="projects-stack">
            {PROJECTS.map((project, index) => (
              <a
                key={project.id}
                href={project.href}
                target={project.href.startsWith('http') ? '_blank' : undefined}
                rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`project-card project-card--${index + 1}`}
                style={{ '--card-bg': project.image } as React.CSSProperties}
                onClick={(e) => handleProjectClick(e, project)}
              >
                <span className="project-card-label">{project.label}</span>
                <span className="project-card-image">
                  {'previewUrl' in project && project.previewUrl ? (
                    <iframe
                      src={project.previewUrl}
                      title={`${project.title} preview`}
                      className="project-card-iframe"
                    />
                  ) : (
                    <span className="project-card-image-bg" style={{ background: project.image }} />
                  )}
                </span>
                <span className="project-card-title">{project.title}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="page-section" id="about">
          <h2 className="section-heading">About</h2>
          <div className="section-content">
            <p className="muted">My bio and information will go here.</p>
          </div>
        </section>

        <section className="page-section" id="contact">
          <h2 className="section-heading">Contact</h2>
          <div className="section-content contact-block">
            <p className="muted contact-intro">How to reach me — email, links, etc.</p>
            <a
              href="mailto:ianhale.osu@gmail.com"
              className="contact-link-row"
              aria-label="Email ianhale.osu@gmail.com"
            >
              <span className="contact-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <span className="contact-link-label">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ian-hale-56899a250"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-row"
              aria-label="LinkedIn profile"
            >
              <span className="contact-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span className="contact-link-label">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Halei-6103"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-row"
              aria-label="GitHub profile"
            >
              <span className="contact-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
              <span className="contact-link-label">GitHub</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
