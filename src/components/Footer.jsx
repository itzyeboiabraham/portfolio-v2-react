import { CV_URL, NAV_ITEMS } from '../siteConfig'

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} <a href="#hero">Abraham Tetteh</a> — All rights reserved.
      </p>
      <nav className="footer-links" aria-label="Footer">
        {NAV_ITEMS.map(({ id, label }) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
        <a href={CV_URL} download>Download CV</a>
      </nav>
    </footer>
  )
}
