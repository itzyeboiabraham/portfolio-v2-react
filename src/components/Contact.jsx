import { useState, useEffect } from 'react'

export default function Contact() {
  const [buttonState, setButtonState] = useState('idle')
  const [submitBtn, setSubmitBtn] = useState(null)

  useEffect(() => {
    // Set up form submission handler
    const form = document.getElementById('contactForm')
    const btn = document.getElementById('submitBtn')
    
    if (!form || !btn) return
    
    setSubmitBtn(btn)

    const handleSubmit = async (e) => {
      e.preventDefault()
      
      const formData = new FormData(form)
      setButtonState('submitting')
      btn.disabled = true
      
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        
        if (response.ok) {
          setButtonState('success')
          btn.innerHTML = '✓ Message sent!'
          btn.style.background = '#3EC97A'
          btn.style.color = '#fff'
          form.reset()
          
          setTimeout(() => {
            setButtonState('idle')
            btn.innerHTML = '<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Send message'
            btn.style.background = ''
            btn.style.color = ''
            btn.disabled = false
          }, 1500)
        } else {
          setButtonState('error')
          btn.innerHTML = '✗ Error sending message'
          btn.style.background = '#ff6b6b'
          btn.disabled = false
        }
      } catch (error) {
        setButtonState('error')
        btn.innerHTML = '✗ Error sending message'
        btn.style.background = '#ff6b6b'
        btn.disabled = false
      }
    }

    form.addEventListener('submit', handleSubmit)
    
    return () => {
      form.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Get in touch</div>
          <h2>Let's build something together.</h2>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <h3>Open to opportunities</h3>
            <p>Whether you have a project in mind, need a freelancer, or just want to connect, I'm always happy to chat. I typically respond within 24 hours.</p>

            <a href="mailto:abrahamjunior185@gmail.com" className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="contact-detail-text">
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">abrahamjunior185@gmail.com</div>
              </div>
            </a>

            <a href="tel:+233596274392" className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
              </div>
              <div className="contact-detail-text">
                <div className="contact-detail-label">Phone</div>
                <div className="contact-detail-value">+233 059 627 4392</div>
              </div>
            </a>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="contact-detail-text">
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-value">Tema, Ghana</div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.instagram.com/_abraham.junior_" target="_blank" rel="noopener" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.79.297-1.486.703-2.134 1.35-.646.646-1.054 1.345-1.35 2.134-.297.788-.5 1.657-.56 2.935C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.263 2.148.56 2.935.297.79.704 1.486 1.35 2.134.646.646 1.345 1.053 2.134 1.35.787.297 1.657.5 2.935.56C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.28-.06 2.147-.263 2.935-.56.79-.297 1.486-.704 2.134-1.35.646-.646 1.053-1.344 1.35-2.134.297-.787.5-1.655.56-2.935.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.28-.263-2.149-.56-2.935-.297-.79-.704-1.486-1.35-2.134-.646-.646-1.344-1.053-2.134-1.35-.788-.297-1.655-.5-2.935-.56C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zm0 3.678a5.162 5.162 0 100 10.324 5.162 5.162 0 000-10.324zm0 8.164a3.002 3.002 0 110-6.004 3.002 3.002 0 010 6.004zm5.884-8.346a1.206 1.206 0 11-2.412 0 1.206 1.206 0 012.412 0z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/abraham-tetteh-78017a376/" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://wa.me/233596274392" target="_blank" rel="noopener" className="social-link" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
              <a href="https://x.com/ItzyeboiAbraham" target="_blank" rel="noopener" className="social-link" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div className="contact-form reveal reveal-delay-1">
            <form action="https://formspree.io/f/xjgzjoqe" method="POST" id="contactForm">
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn-submit" id="submitBtn">
                <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
