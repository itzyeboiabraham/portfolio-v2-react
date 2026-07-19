export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Car Dealership Website',
      description: 'Multi-page responsive e-commerce site for a car dealership, featuring inventory listings, service pages, customer reviews, and contact requests.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      type: 'proj-web',
      icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
      previewUrl: 'https://itzyeboiabraham.github.io/Car-Website/',
      codeUrl: 'https://github.com/ItzyeboiAbraham/Car-Website'
    },
    {
      id: 2,
      title: 'Student Information Portal',
      description: 'Console application in C++ for student sign-up, login, and grade management. A demonstration of core object-oriented programming fundamentals.',
      tags: ['C++', 'Console App'],
      tagClasses: ['tag-blue', 'tag-blue'],
      type: 'proj-cpp',
      icon: <svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
      codeUrl: 'https://github.com/ItzyeboiAbraham/C-plus-plus-SIP'
    },
    {
      id: 3,
      title: 'Tic-Tac-Toe',
      description: 'Two-player Tic-Tac-Toe built in vanilla JavaScript. Features turn management, win detection, and a clean reset on a 3×3 grid.',
      tags: ['JavaScript', 'Game'],
      tagClasses: ['tag-purple', 'tag-purple'],
      type: 'proj-game',
      icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>,
      codeUrl: 'https://github.com/ItzyeboiAbraham'
    }
  ]

  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <div>
            <div className="section-label">Portfolio</div>
            <h2>Projects</h2>
          </div>
          <a href="https://github.com/ItzyeboiAbraham?tab=repositories" target="_blank" rel="noopener" className="view-all">
            View all on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={project.id} className={`project-card reveal reveal-delay-${idx + 1}`}>
              <div className={`project-img ${project.type}`}>
                <div className="proj-icon-wrap">
                  {project.icon}
                </div>
                <div className="project-img-overlay">
                  {project.previewUrl && (
                    <a href={project.previewUrl} target="_blank" rel="noopener" className="proj-link">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Preview
                    </a>
                  )}
                  <a href={project.codeUrl} target="_blank" rel="noopener" className="proj-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    Code
                  </a>
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`tag ${project.tagClasses?.[i] || ''}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
