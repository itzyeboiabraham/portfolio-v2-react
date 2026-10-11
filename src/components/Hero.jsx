import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-portrait">
            <img src="/images/hero-background.jpg" alt="Abraham Tetteh" width="928" height="1136" decoding="async" />
          </div>
          <div className="hero-copy">
            <h1>
              Hi, I'm<br />
              <em>Abraham.</em>
            </h1>
            <p className="hero-bio">
              Software engineer who turns complex problems into clean, meaningful digital products from responsive websites to full-scale management systems and mobile apps.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Let's work together
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#projects" className="btn-ghost">View my work</a>
            </div>

            <SocialLinks className="hero-socials" />
          </div>
        </div>
      </div>
    </section>
  )
}
