import { useState, useEffect, useRef } from 'react'
import { CV_URL, NAV_ITEMS } from '../siteConfig'

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 56em)').matches)
  const [activeId, setActiveId] = useState('')
  const navRef = useRef(null)
  const burgerRef = useRef(null)
  const menuRef = useRef(null)

  // Measure the desktop links even while compact, so enlarged text and late
  // font loading cannot push navigation offscreen or cause layout oscillation.
  useEffect(() => {
    const nav = navRef.current
    const desktopItems = [...nav.querySelectorAll('.nav-logo, .nav-center, .nav-right')]
    const media = window.matchMedia('(max-width: 56em)')
    const updateLayout = () => {
      const style = getComputedStyle(nav)
      const available = nav.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
      const required = desktopItems.reduce((width, item) => width + item.scrollWidth, 0)
        + 2 * parseFloat(style.columnGap)
      setCompact(media.matches || required > available)
    }

    const observer = 'ResizeObserver' in window ? new ResizeObserver(updateLayout) : null
    for (const element of [nav, ...desktopItems]) observer?.observe(element)
    window.addEventListener('resize', updateLayout)
    media.addEventListener('change', updateLayout)
    document.fonts?.addEventListener('loadingdone', updateLayout)
    updateLayout()
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', updateLayout)
      media.removeEventListener('change', updateLayout)
      document.fonts?.removeEventListener('loadingdone', updateLayout)
    }
  }, [])

  useEffect(() => {
    if (!compact) {
      if (menuRef.current?.contains(document.activeElement) || document.activeElement === burgerRef.current) {
        navRef.current?.querySelector('.nav-logo').focus()
      }
      setMenuOpen(false)
    }
  }, [compact])

  // IntersectionObserver percentages are based on viewport width. Use pixel
  // margins derived from height so the tracking band also works in landscape.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const ids = ['hero', ...NAV_ITEMS.map((item) => item.id)]
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

    let observer
    const updateActive = () => {
      const trackingLine = window.innerHeight * 0.425
      const section = sections.find((item) => item.getBoundingClientRect().bottom > trackingLine) || sections.at(-1)
      setActiveId(section?.id === 'hero' ? '' : section?.id || '')
    }
    const observeSections = () => {
      observer?.disconnect()
      observer = new IntersectionObserver(updateActive, {
        rootMargin: `-${window.innerHeight * 0.4}px 0px -${window.innerHeight * 0.55}px 0px`,
      })
      sections.forEach((section) => observer.observe(section))
      updateActive()
    }

    observeSections()
    window.addEventListener('resize', observeSections)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', observeSections)
    }
  }, [])

  // Close the mobile menu on outside press or Escape.
  useEffect(() => {
    if (!menuOpen) return

    const onPointerDown = (e) => {
      const insideBurger = burgerRef.current?.contains(e.target)
      const insideMenu = menuRef.current?.contains(e.target)
      if (!insideBurger && !insideMenu) setMenuOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        burgerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    if (menuRef.current?.contains(document.activeElement)) burgerRef.current?.focus()
  }

  return (
    <>
      <nav ref={navRef} id="navbar" className={compact ? 'compact' : undefined} aria-label="Primary">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
           &lt;/<span className="nav-handle">ITZYEBOI</span><span>ABRAHAM</span>&gt;
        </a>

        <ul className="nav-center" aria-hidden={compact || undefined} inert={compact ? '' : undefined}>
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeId === id ? 'active' : undefined}
                aria-current={activeId === id ? 'location' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right" aria-hidden={compact || undefined} inert={compact ? '' : undefined}>
          <span className="nav-divider" aria-hidden="true"></span>
          <a href={CV_URL} download className="nav-cv">
            <DownloadIcon />
            Download CV
          </a>
        </div>

        <button
          ref={burgerRef}
          type="button"
          className={`burger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        ref={menuRef}
        id="mobileMenu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        data-compact={compact}
        aria-hidden={!menuOpen}
        inert={menuOpen ? undefined : ''}
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeId === id ? 'active' : undefined}
            aria-current={activeId === id ? 'location' : undefined}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
        <a href={CV_URL} download onClick={closeMenu}>
          Download CV
        </a>
      </div>
    </>
  )
}
