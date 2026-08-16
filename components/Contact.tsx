'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#F2EDE4' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#E57200' }}>
          06 — Contact
        </p>
        <h2
          className="font-serif-display font-bold mb-3"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#002469' }}
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
              <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#E57200' }}>
                Email
              </p>
              <a
                href="mailto:muditgarg1996@yahoo.com"
                className="font-medium no-underline transition-colors duration-200 break-all"
                style={{ color: '#002469', fontSize: '1rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E57200')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#002469')}
              >
                muditgarg1996@yahoo.com
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#E57200' }}>
                Phone
              </p>
              <a
                href="tel:+919818863113"
                className="font-medium no-underline"
                style={{ color: '#002469', fontSize: '1rem' }}
              >
                +91 98188 63113
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#E57200' }}>
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/muditnsit/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium no-underline transition-colors duration-200"
                style={{ color: '#002469', fontSize: '1rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E57200')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#002469')}
              >
                linkedin.com/in/muditnsit
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 w-full">
            <a
              href="mailto:muditgarg1996@yahoo.com"
              className="flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white rounded no-underline transition-all duration-200"
              style={{ background: '#002469' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E57200')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#002469')}
            >
              Email Mudit Now
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide rounded border no-underline transition-all duration-200"
              style={{ color: '#002469', borderColor: '#002469' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#002469';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#002469';
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
