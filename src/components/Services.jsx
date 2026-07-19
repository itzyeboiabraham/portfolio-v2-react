export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="reveal">
          <div className="section-label">What I do</div>
          <h2>Services</h2>
        </div>
        
        <div className="services-grid">
          <div className="service-card reveal reveal-delay-1">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3>Web Development</h3>
            <p>Clean, fast, and responsive websites for personal brands and businesses, focused on usability, performance, and lasting impressions.</p>
          </div>

          <div className="service-card reveal reveal-delay-2">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>Info Systems (MIS)</h3>
            <p>Custom CRM, ERP, and management information systems for small businesses, built to replace spreadsheets and streamline real operations.</p>
          </div>

          <div className="service-card reveal reveal-delay-3">
            <div className="service-icon">
              <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            </div>
            <h3>App Development</h3>
            <p>Cross-platform mobile and desktop interfaces designed with attention to flow and accessibility, built to run everywhere, for clients and startups.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
