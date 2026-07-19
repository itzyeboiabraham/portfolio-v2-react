import { useState, useEffect, useRef } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [burgerOpen, setBurgerOpen] = useState(false)
  const burgerRef = useRef(null)
  const menuRef = useRef(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setBurgerOpen(!burgerOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setBurgerOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && 
          !burgerRef.current?.contains(e.target) && 
          !menuRef.current?.contains(e.target)) {
        closeMobileMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <>
      <nav id="navbar">
        <a href="#hero" className="nav-logo">
          &lt;/ITZYEBOI<span>ABRAHAM</span>&gt;
        </a>
        
        <ul className="nav-center" id="navLinks">
          <li><a href="#about" data-section="about">About</a></li>
          <li><a href="#services" data-section="services">Services</a></li>
          <li><a href="#projects" data-section="projects">Projects</a></li>
          <li><a href="#contact" data-section="contact">Contact</a></li>
        </ul>

        <div className="nav-right">
          <span className="nav-divider" aria-hidden="true"></span>
          <a href="files/Abraham_Tetteh_CV.pdf" download target="_blank" className="nav-cv">
            <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>

        <button 
          ref={burgerRef}
          className={`burger ${burgerOpen ? 'open' : ''}`} 
          id="burger" 
          aria-label="Open menu"
          onClick={toggleMobileMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div ref={menuRef} className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#services" onClick={closeMobileMenu}>Services</a>
        <a href="#projects" onClick={closeMobileMenu}>Projects</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        <a href="files/Abraham_Tetteh_CV.pdf" download target="_blank">Download CV</a>
      </div>
    </>
  )
}
