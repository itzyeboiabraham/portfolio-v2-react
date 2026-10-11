const services = [
  {
    title: 'Web Development',
    description: 'Clean, fast, and responsive websites for personal brands and businesses, focused on usability, performance, and lasting impressions.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Business Systems',
    description: 'Custom CRM, ERP, and management information systems for small businesses, built to replace spreadsheets and streamline real operations.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile and desktop interfaces designed with attention to flow and accessibility, built to run everywhere, for clients and startups.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="reveal">
          <h2>What I do</h2>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={service.title} className={`service-item reveal reveal-delay-${idx + 1}`}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
