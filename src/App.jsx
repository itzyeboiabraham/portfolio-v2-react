import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Reveal-on-scroll. The active nav link is handled inside Navigation.
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    // No IntersectionObserver: show everything instead of leaving it hidden.
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // top < 0 means it's already above the viewport (page reloaded
          // mid-scroll), so reveal it now instead of waiting for a scroll up.
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
