'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const stats = [
  {
    label: 'EXPERIENCE',
    value: '5.5 YRS',
    desc: 'Consumer internet and retail-tech across unicorns, startups, and independent ventures',
  },
  {
    label: 'BUSINESS LINE',
    value: '$12M/yr',
    desc: 'Technical architecture owned end-to-end for Spinny\'s Challan product',
  },
  {
    label: 'PRODUCTS SHIPPED',
    value: '8+',
    desc: 'End-to-end builds across CX, ecosystem, and freelance',
  },
  {
    label: 'RECOGNITION',
    value: '3×',
    desc: 'Awards from Spinny and Rentickle for customer and delivery impact',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6"
      style={{ background: '#FAF7F2' }}
    >
      <div className="max-w-6xl mx-auto w-full" ref={containerRef}>
        {/* Hook */}
        <p className="text-xs font-semibold tracking-widest mb-6" style={{ color: '#E57200' }}>
          Building products since 2021
        </p>

        {/* Two-column: text + photo */}
        <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-10 mb-0">
          {/* Left: name + content */}
          <div className="flex-1">
            <div className="mb-2">
              <h1
                className="font-serif-display font-bold leading-none"
                style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#002469', letterSpacing: '-0.02em' }}
              >
                Mudit Garg
              </h1>
              <p className="text-sm font-medium tracking-widest mt-1" style={{ color: '#6B7280' }}>
                I prefer being called MG
              </p>
            </div>

            <p
              className="font-medium mt-4 mb-2"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#1A1A1A' }}
            >
              Software Engineer · Product Builder
            </p>

            <div className="w-10 h-0.5 my-6" style={{ background: '#E57200' }} />

            <h2
              className="font-serif-display font-bold mb-4"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', color: '#002469', lineHeight: 1.25 }}
            >
              Five Years of Shipping.
              <br />
              Now Learning to Lead.
            </h2>

            <p
              className="mb-8 max-w-xl"
              style={{ fontSize: '1.1rem', color: '#6B7280', lineHeight: 1.6 }}
            >
              Is there a gap between your product vision and your team&apos;s execution?
            </p>

            <p className="max-w-2xl mb-10 leading-relaxed" style={{ color: '#1A1A1A', fontSize: '1rem' }}>
              Software Engineer at Spinny, a Tiger Global-backed $1.4B unicorn. Five and a half years
              building consumer products: AI-powered CX tools, 0-to-1 platform builds, and full-stack
              systems across retail-tech and consumer internet.
            </p>
          </div>

          {/* Right: photo */}
          <div className="flex-shrink-0 md:self-start md:mt-2">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                width: 'clamp(160px, 35vw, 280px)',
                aspectRatio: '3/4',
                border: '3px solid #002469',
                boxShadow: '6px 6px 0px #E57200',
              }}
            >
              <Image
                src="/mudit.jpg"
                alt="Mudit Garg"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href="mailto:muditgarg1996@yahoo.com"
            className="px-5 py-3 text-sm font-semibold tracking-wide text-white rounded transition-all duration-200 no-underline"
            style={{ background: '#002469', minHeight: '44px', display: 'flex', alignItems: 'center' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#E57200')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#002469')}
          >
            Email Mudit
          </a>
          <a
            href="https://www.linkedin.com/in/muditnsit/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-sm font-semibold tracking-wide rounded border transition-all duration-200 no-underline"
            style={{ color: '#002469', borderColor: '#002469', minHeight: '44px', display: 'flex', alignItems: 'center' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#002469';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#002469';
            }}
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-5 py-3 text-sm font-semibold tracking-wide rounded border transition-all duration-200 no-underline"
            style={{ color: '#002469', borderColor: '#002469', minHeight: '44px', display: 'flex', alignItems: 'center' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#002469';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#002469';
            }}
          >
            Resume
          </a>
          <a
            href="#work"
            className="px-5 py-3 text-sm font-semibold tracking-wide rounded transition-all duration-200 no-underline"
            style={{ color: '#E57200', minHeight: '44px', display: 'flex', alignItems: 'center' }}
          >
            See the Work →
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: '#E8E2D9' }}>
          {stats.map((s) => (
            <div key={s.label} className="p-6" style={{ background: '#FAF7F2' }}>
              <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#E57200' }}>
                {s.label}
              </p>
              <p className="font-bold mb-2" style={{ fontSize: '2rem', color: '#002469', lineHeight: 1 }}>
                {s.value}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="max-w-6xl mx-auto w-full mt-12">
        <p className="text-xs tracking-widest" style={{ color: '#6B7280' }}>SCROLL ↓</p>
      </div>
    </section>
  );
}
