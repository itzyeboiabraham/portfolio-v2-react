const projects = [
  {
    id: 1,
    title: 'Car Dealership Website',
    description: 'Multi-page responsive e-commerce site for a car dealership, featuring inventory listings, service pages, customer reviews, and contact requests.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/car-site.png',
    alt: 'Homepage of the car dealership website',
    previewUrl: 'https://itzyeboiabraham.github.io/Car-Website/',
    codeUrl: 'https://github.com/ItzyeboiAbraham/Car-Website',
  },
  {
    id: 2,
    title: 'Student Information Portal',
    description: 'Console application in C++ for student sign-up, login, and grade management. A demonstration of core object-oriented programming fundamentals.',
    tags: ['C++', 'Console App'],
    image: '/images/sip.png',
    alt: 'C++ code editor and console output for the Student Information Portal',
    codeUrl: 'https://github.com/ItzyeboiAbraham/C-plus-plus-SIP',
  },
  {
    id: 3,
    title: 'Tic-Tac-Toe',
    description: 'Two-player Tic-Tac-Toe built in vanilla JavaScript. Features turn management, win detection, and a clean reset on a 3×3 grid.',
    tags: ['JavaScript', 'Game'],
    // Add the verified repository and a real screenshot when available.
    image: '/images/xoxo.jpg',
    alt: 'Tic-Tac-Toe board illustration',
    imageCaption: 'Board illustration',
  },
]

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <h2>Projects</h2>
          <a
            href="https://github.com/ItzyeboiAbraham?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all"
          >
            View all on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            // Keep reveal motion separate from the interactive links.
            <div key={project.id} className={`project-item reveal reveal-delay-${idx + 1}`}>
              <article className="project-card">
                <figure className="project-img">
                  <img
                    className="project-preview-image"
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  {project.imageCaption && <figcaption className="project-image-caption">{project.imageCaption}</figcaption>}
                </figure>
                <div className="project-body">
                  <ul className="project-tags" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className="tag">{tag}</li>
                    ))}
                  </ul>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  {(project.previewUrl || project.codeUrl) && (
                    <div className="project-links">
                      {project.previewUrl && (
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label={`Live preview: ${project.title}`}
                        >
                          Live preview
                          <ArrowUpRight />
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label={`Source code: ${project.title}`}
                        >
                          Source code
                          <ArrowUpRight />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
