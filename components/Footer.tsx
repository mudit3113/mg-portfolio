'use client';

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Personal', href: '#personal' },
  { label: 'Contact', href: '#contact' },
];

const contactLinks = [
  { label: 'muditgarg1996@yahoo.com', href: 'mailto:muditgarg1996@yahoo.com' },
  { label: 'linkedin.com/in/muditnsit', href: 'https://www.linkedin.com/in/muditnsit/', external: true },
  { label: '+91 98188 63113', href: 'tel:+919818863113' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0A2342', color: 'white' }}>
      {/* Top band */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-white text-xs font-bold w-9 h-9 flex items-center justify-center rounded"
                style={{ background: '#2D5BE3' }}
              >
                MG
              </span>
              <div>
                <p className="font-semibold text-white text-sm leading-tight">Mudit Garg</p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>I prefer being called MG</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#9CA3AF', maxWidth: '260px' }}>
              Software Engineer at Spinny. Building consumer products that move numbers.
            </p>
            <a
              href="mailto:muditgarg1996@yahoo.com"
              className="inline-block px-5 py-2.5 text-xs font-semibold tracking-wide rounded no-underline transition-all duration-200"
              style={{ background: '#2D5BE3', color: 'white' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1d4ed8')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#2D5BE3')}
            >
              Email Mudit →
            </a>
          </div>

          {/* Nav column */}
          <div>
            <p className="text-xs font-semibold tracking-widest mb-5" style={{ color: '#2D5BE3' }}>
              NAVIGATE
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm no-underline transition-colors duration-200"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-xs font-semibold tracking-widest mb-5" style={{ color: '#2D5BE3' }}>
              GET IN TOUCH
            </p>
            <ul className="space-y-3">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="text-sm no-underline transition-colors duration-200 break-all"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2D5BE3' }}>
                RESUME
              </p>
              <a
                href="/resume.pdf"
                download
                className="text-sm no-underline transition-colors duration-200"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              >
                Download PDF ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#4B5563' }}>
            © 2026 Mudit Garg · Built with Next.js
          </p>
          <p className="text-xs" style={{ color: '#4B5563' }}>
            Gurgaon, India
          </p>
        </div>
      </div>
    </footer>
  );
}
