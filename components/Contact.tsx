'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#F2EDE4' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#2D5BE3' }}>
          06 — Contact
        </p>
        <h2
          className="font-serif-display font-bold mb-3"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#0A2342' }}
        >
          Let&apos;s build something worth building.
        </h2>
        <p className="mb-12 max-w-lg" style={{ color: '#6B7280', fontSize: '1rem' }}>
          I respond within 24 hours. Always happy to talk about product, engineering, AI, or anything live on this website.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#2D5BE3' }}>
                Email
              </p>
              <a
                href="mailto:muditgargnsut@gmail.com"
                className="font-medium no-underline transition-colors duration-200 break-all"
                style={{ color: '#0A2342', fontSize: '1rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2D5BE3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0A2342')}
              >
                muditgargnsut@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#2D5BE3' }}>
                Phone
              </p>
              <a
                href="tel:+919818863113"
                className="font-medium no-underline"
                style={{ color: '#0A2342', fontSize: '1rem' }}
              >
                +91 98188 63113
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#2D5BE3' }}>
                Book a Call
              </p>
              <a
                href="https://calendly.com/muditgargnsut/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium no-underline transition-colors duration-200"
                style={{ color: '#0A2342', fontSize: '1rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2D5BE3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0A2342')}
              >
                calendly.com/muditgargnsut/30min
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#2D5BE3' }}>
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/muditnsit/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium no-underline transition-colors duration-200"
                style={{ color: '#0A2342', fontSize: '1rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2D5BE3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0A2342')}
              >
                linkedin.com/in/muditnsit
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 w-full">

            {/* Calendly featured card */}
            <a
              href="https://calendly.com/muditgargnsut/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200 group"
              style={{ background: '#0A2342', border: '1px solid #0A2342' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#0d2d54';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(10,35,66,0.18)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#0A2342';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
              }}
            >
              <p className="text-xs font-semibold tracking-widest" style={{ color: '#93A3BE' }}>30-MIN CALL · FREE</p>
              <p className="font-serif-display font-bold leading-snug" style={{ color: '#FFFFFF', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)' }}>
                Want to talk product strategy?
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#93A3BE' }}>
                PMF, CAC, what to focus on at your current stage — or anything else on your mind. Pick a slot and let&apos;s dig in.
              </p>
              <span
                className="mt-1 self-start px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200"
                style={{ background: '#2D5BE3', color: '#FFFFFF' }}
              >
                Book a Call →
              </span>
            </a>

            <a
              href="mailto:muditgargnsut@gmail.com"
              className="flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide rounded-xl border no-underline transition-all duration-200"
              style={{ color: '#0A2342', borderColor: '#0A2342' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A2342';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0A2342';
              }}
            >
              Email Mudit
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide rounded-xl border no-underline transition-all duration-200"
              style={{ color: '#0A2342', borderColor: '#0A2342' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0A2342';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0A2342';
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
