import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Set up reveal animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Wait for DOM to be fully rendered
    const revealElements = document.querySelectorAll('.reveal')
    
    revealElements.forEach(element => {
      // Mark as visible immediately if already in viewport
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('visible')
      } else {
        // Otherwise observe for when it enters viewport
        revealObserver.observe(element)
      }
    })

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el))
      revealObserver.disconnect()
    }
  }, [])

  // Active nav link tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const navLinks = document.querySelectorAll('.nav-center a[data-section]')
      const y = window.scrollY

      let current = ''
      sections.forEach(s => {
        if (y >= s.offsetTop - 120) {
          current = s.id
        }
      })

      navLinks.forEach(a => {
        if (a.dataset.section === current) {
          a.classList.add('active')
        } else {
          a.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
