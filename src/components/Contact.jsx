import { useRef, useState } from 'react'
import SocialLinks from './SocialLinks'
import { EMAIL } from '../siteConfig'

const FORM_ENDPOINT = 'https://formspree.io/f/xjgzjoqe'
const EMPTY_VALUES = { name: '', email: '', subject: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Enter a valid email address, like name@example.com.'
  }
  if (!values.message.trim()) errors.message = 'Write a short message.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_VALUES)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const fieldRefs = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null),
  }

  const errors = validate(values)
  const showError = (field) => touched[field] && errors[field]

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((current) => ({ ...current, [name]: value }))
    // Editing after a result clears the old message.
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  // Validate when someone leaves a field, not on every keystroke.
  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.currentTarget
    const firstInvalid = ['name', 'email', 'message'].find((field) => errors[field])
    if (firstInvalid) {
      setTouched({ name: true, email: true, message: true })
      fieldRefs[firstInvalid].current?.focus()
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!response.ok) throw new Error(`Form service responded ${response.status}`)
      setValues(EMPTY_VALUES)
      setTouched({})
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    ref: fieldRefs[name],
    'aria-invalid': showError(name) ? 'true' : undefined,
    'aria-describedby': showError(name) ? `${name}-error` : undefined,
  })

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <h2>Get in touch</h2>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <p className="contact-intro">
              Whether you have a project in mind, need a freelancer, or just want to connect, I'm always happy to chat. I typically respond within 24 hours.
            </p>

            <a href={`mailto:${EMAIL}`} className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
              <div className="contact-detail-text">
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">{EMAIL}</div>
              </div>
            </a>

            <a href="tel:+233596274392" className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" /></svg>
              </div>
              <div className="contact-detail-text">
                <div className="contact-detail-label">Phone</div>
                <div className="contact-detail-value">+233 059 627 4392</div>
              </div>
            </a>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div className="contact-detail-text">
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-value">Tema, Ghana</div>
              </div>
            </div>

            <SocialLinks className="contact-socials" />
          </div>

          <div className="contact-form reveal reveal-delay-1">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    autoCapitalize="words"
                    required
                    {...fieldProps('name')}
                  />
                  {showError('name') && <p className="field-error" id="name-error">{errors.name}</p>}
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    inputMode="email"
                    required
                    {...fieldProps('email')}
                  />
                  {showError('email') && <p className="field-error" id="email-error">{errors.email}</p>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">
                  Subject <span className="label-optional">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  autoComplete="off"
                  {...fieldProps('subject')}
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  required
                  {...fieldProps('message')}
                />
                {showError('message') && <p className="field-error" id="message-error">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                    Send message
                  </>
                )}
              </button>

              {/* Always rendered so screen readers announce changes to it. */}
              <p
                className={`form-status${status === 'success' ? ' is-success' : ''}${status === 'error' ? ' is-error' : ''}`}
                role="status"
                aria-live="polite"
              >
                {status === 'success' && 'Message sent. I typically reply within 24 hours.'}
                {status === 'error' && (
                  <>
                    Message not sent. Check your connection and try again, or email{' '}
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
