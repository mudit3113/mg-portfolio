'use client';

import { useState } from 'react';

type Photo = { src: string; caption: string };

type Interest = {
  name: string;
  tag: string;
  body: string;
  photos?: Photo[];
  videoEmbed?: string;
};

const topics = [
  'MATHEMATICS', 'READING BOOKS', 'SPORTS STRATEGY', 'MANDALA ART',
  'HIKING', 'TRAVELLING', 'AI ETHICS', 'BEHAVIOURAL ECON', 'ANTHROPOLOGY', 'CONTENT CREATION',
];

const interests: Interest[] = [
  {
    name: 'Mandala Art',
    tag: 'PRACTICE OF PRECISION',
    body: "Every mandala starts from a single point and expands outward in perfect symmetry — you can't rush it and you can't fake it. I draw them to slow down deliberately. It's the one activity that demands the same precision as engineering but rewards patience over speed.",
    photos: [
      { src: '/mandala.jpg', caption: 'Mandala Art — hours of deliberate precision' },
      { src: '/mandala-2.jpg', caption: 'Every pattern starts from a single centre point' },
      { src: '/mandala-3.jpg', caption: 'Symmetry as a meditative practice' },
    ],
  },
  {
    name: 'Hiking & Trekking',
    tag: 'OBSERVER IN MOTION',
    body: "Hiking is where I think most clearly. No notifications, no noise. Trekked Jalori Pass, Gorson Bugyal, Kalpeshwar Mahadev, and Necklace Point — each trail a different kind of hard. Even tried skiing once; the mountain has a way of demanding your full attention.",
    photos: [
      { src: '/hiking-jalori.jpg', caption: 'Trekking Jalori Pass, Himachal Pradesh' },
      { src: '/hiking-gorson.jpg', caption: 'View from Gorson Bugyal Trek, Auli' },
      { src: '/Hiking_necklace_point.jpg', caption: 'Hiking Necklace Point' },
      { src: '/Trek_kalpeshwar_mahadev.jpg', caption: 'Trek to Kalpeshwar Mahadev, Uttarakhand' },
      { src: '/Skiing.jpg', caption: 'First time skiing — commit to the edge or fall' },
    ],
  },
  {
    name: 'Travelling',
    tag: '14 STATES · 3 COUNTRIES',
    body: "Explored 14 of 28 states in India and 3 countries. From cruising Halong Bay in Vietnam to kayaking through its limestone karsts, standing inside Ellora's 1,500-year-old cave sculptures, to trying coastal seafood in Thailand and craft brews in local breweries — I travel to understand how geography, culture, and economy quietly shape each other.",
    photos: [
      { src: '/Cruise_experience_Halong_Bay.jpg', caption: 'Cruise experience, Halong Bay, Vietnam' },
      { src: '/Kayaking_Halong_bay.jpg', caption: 'Kayaking through limestone karsts, Halong Bay' },
      { src: '/Ellora_Caves_Art_1.jpg', caption: 'Ellora Caves — 1,500-year-old rock-cut sculptures' },
      { src: '/Ellora_Caves_Art_2.jpg', caption: 'Ellora Caves — carved entirely by hand' },
      { src: '/Ellora_Caves_Art_3.jpg', caption: 'Ellora Caves — where art meets devotion' },
      { src: '/Exploring_coastal_food_in_Thailand.jpg', caption: 'Coastal seafood, Thailand' },
      { src: '/Exploring_brewery.jpg', caption: 'Exploring a local craft brewery' },
    ],
  },
  {
    name: 'Cricket, Tennis & Badminton',
    tag: 'PLAYER SINCE 2012',
    body: "I follow sport analytically — strategy, pattern recognition, decision-making under pressure. Wrote 15+ articles analysing sports strategy for EssentiallySports. I play cricket, tennis, and badminton regularly and have since 2012.",
    photos: [
      { src: '/sports-tennis.jpg', caption: 'Playing tennis — reading the game, not just the ball' },
    ],
  },
  {
    name: 'Content Creation',
    tag: 'NEWS · CURRENT AFFAIRS · OPINION',
    body: 'I create short-form video content breaking down topics in the news — geopolitics, economics, science, and the stories behind the headlines. The goal is to make complex current affairs accessible and worth thinking about.',
    videoEmbed: 'https://drive.google.com/file/d/1XA1mJ23f3clMjPX1iZbqhVzMX-8b1LeI/preview',
  },
  {
    name: 'Reading Books',
    tag: '~10 BOOKS IN 2 YEARS',
    body: "Obsessed with how humans organise themselves — across cultures, centuries, and geographies. Avid reader of anthropology and history. I listen to Capital Allocators and Invest Like the Best. Books are where I stress-test assumptions I didn't know I had.",
    photos: [
      { src: '/books-collection.jpg', caption: 'My current reading collection' },
    ],
  },
];

function Lightbox({ photos, activeIndex, onClose, onPrev, onNext }: {
  photos: Photo[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full transition-all"
          style={{ background: 'rgba(255,255,255,0.15)' }}
        >
          ×
        </button>

        {/* Image */}
        <div className="relative w-full rounded-lg overflow-hidden" style={{ maxHeight: '75vh' }}>
          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].caption}
            className="w-full h-full object-contain"
            style={{ maxHeight: '75vh' }}
          />
          {/* Caption */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              background: 'rgba(10,35,66,0.55)',
            }}
          >
            <p className="text-white text-sm font-medium">{photos[activeIndex].caption}</p>
          </div>
        </div>

        {/* Nav */}
        {photos.length > 1 && (
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={onPrev}
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
            >
              ‹
            </button>
            <span className="text-white text-sm font-medium">
              {activeIndex + 1} / {photos.length}
            </span>
            <button
              onClick={onNext}
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all"
              style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (photos.length === 0) return null;

  const prev = () => setActive((active - 1 + photos.length) % photos.length);
  const next = () => setActive((active + 1) % photos.length);

  return (
    <>
      {lightbox && (
        <Lightbox
          photos={photos}
          activeIndex={active}
          onClose={() => setLightbox(false)}
          onPrev={prev}
          onNext={next}
        />
      )}

      <div className="mt-4">
        <div
          className="relative overflow-hidden rounded-md cursor-zoom-in"
          style={{ aspectRatio: '4/3', background: '#F3F4F6' }}
          onClick={() => setLightbox(true)}
        >
          <img
            src={photos[active].src}
            alt={photos[active].caption}
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {/* Blurred caption overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 px-3 py-2"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              background: 'rgba(10, 35, 66, 0.45)',
            }}
          >
            <p className="text-white text-xs font-medium leading-snug">
              {photos[active].caption}
            </p>
          </div>

          {/* Zoom hint */}
          <div
            className="absolute top-2 right-2 w-6 h-6 rounded flex items-center justify-center"
            style={{ background: 'rgba(10,35,66,0.6)', backdropFilter: 'blur(4px)' }}
          >
            <span className="text-white text-xs">⤢</span>
          </div>

          {photos.length > 1 && (
            <div className="absolute top-2 left-2">
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded"
                style={{ background: 'rgba(10,35,66,0.6)', color: 'white', backdropFilter: 'blur(4px)' }}
              >
                {active + 1} / {photos.length}
              </span>
            </div>
          )}

          {photos.length > 1 && (
            <div className="absolute bottom-8 right-2 flex gap-1" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={prev}
                className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                style={{ background: 'rgba(10,35,66,0.6)', color: 'white', backdropFilter: 'blur(4px)' }}
              >
                ‹
              </button>
              <button
                onClick={next}
                className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                style={{ background: 'rgba(10,35,66,0.6)', color: 'white', backdropFilter: 'blur(4px)' }}
              >
                ›
              </button>
            </div>
          )}
        </div>

        {photos.length > 1 && (
          <div className="flex gap-1.5 mt-1.5 overflow-x-auto pb-1">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex-shrink-0 overflow-hidden rounded transition-all duration-200"
                style={{
                  width: 40,
                  height: 40,
                  border: `2px solid ${active === i ? '#0A2342' : 'transparent'}`,
                  opacity: active === i ? 1 : 0.55,
                }}
              >
                <img src={photo.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default function Personal() {
  return (
    <section id="personal" className="py-24 px-6" style={{ background: '#FAF7F2' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#2D5BE3' }}>
          05 — Personal
        </p>
        <h2
          className="font-serif-display font-bold mb-3"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#0A2342' }}
        >
          Outside the work.
        </h2>
        <p className="mb-12" style={{ color: '#6B7280', fontSize: '1rem' }}>
          What I do when I&apos;m not building. What I think about when I am.
        </p>

        {/* Mathematics — featured full-width card */}
        <div
          className="rounded-lg p-8 mb-8"
          style={{ background: '#F0F4FF', border: '1px solid #C7D2FE' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#2D5BE3' }}>
                PUBLISHED RESEARCHER · NATIONAL MATHEMATICS TOPPER 2014
              </p>
              <h3 className="font-bold text-2xl" style={{ color: '#0A2342' }}>Mathematics</h3>
            </div>
            <a
              href="https://ijmttjournal.org/public/assets/volume-71/issue-10/IJMTT-V71I10P104.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold tracking-wide rounded no-underline transition-all duration-200"
              style={{ background: '#0A2342', color: 'white' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#2D5BE3')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0A2342')}
            >
              Read Research Paper →
            </a>
          </div>

          {/* Recognition + images */}
          <div
            className="rounded-md p-4 mb-5"
            style={{ background: 'white', border: '1px solid #E0E7FF' }}
          >
            <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#2D5BE3' }}>
              RECOGNITION
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#1A1A1A' }}>
              Honoured as <strong>National Mathematics Topper 2014</strong> — scored 100/100 in Mathematics
              across all DAV Public/Model Schools in the CBSE Class XII examination. Personally recognised
              by <strong>Smriti Zubin Irani</strong>, Minister of Human Resource Development, Government of India,
              among over 1 million students nationwide.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://drive.google.com/file/d/1_qXnnOADOuH6QTgxHnsfHogul7CPdpkC/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline group"
              >
                <div className="relative overflow-hidden rounded-md mb-1" style={{ border: '1px solid #E0E7FF' }}>
                  <img
                    src="/math-letter.png"
                    alt="Letter of Appreciation from Minister of HRD"
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ height: '160px', objectPosition: 'top' }}
                  />
                  <div
                    className="absolute inset-0 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: 'linear-gradient(to top, rgba(10,35,66,0.8), transparent)' }}
                  >
                    <span className="text-white text-xs font-semibold">View Document →</span>
                  </div>
                </div>
                <p className="text-xs font-medium" style={{ color: '#2D5BE3' }}>Letter from Minister of HRD</p>
              </a>
              <a
                href="https://drive.google.com/file/d/1JbOk_JA88d74S6RO1xNGL02CppUhQfGJ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline group"
              >
                <div className="relative overflow-hidden rounded-md mb-1" style={{ border: '1px solid #E0E7FF' }}>
                  <img
                    src="/math-certificate.png"
                    alt="Laureate Certificate"
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ height: '160px', objectPosition: 'top' }}
                  />
                  <div
                    className="absolute inset-0 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: 'linear-gradient(to top, rgba(10,35,66,0.8), transparent)' }}
                  >
                    <span className="text-white text-xs font-semibold">View Certificate →</span>
                  </div>
                </div>
                <p className="text-xs font-medium" style={{ color: '#2D5BE3' }}>Laureate Certificate 2014</p>
              </a>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-4" style={{ color: '#374151' }}>
            It started with a curious question in college: if{' '}
            <code className="px-1 rounded text-xs" style={{ background: '#E0E7FF', color: '#3730A3' }}>7/9 = 0.7777…</code> and{' '}
            <code className="px-1 rounded text-xs" style={{ background: '#E0E7FF', color: '#3730A3' }}>8/9 = 0.8888…</code>, then why isn&apos;t{' '}
            <code className="px-1 rounded text-xs" style={{ background: '#E0E7FF', color: '#3730A3' }}>9/9 = 0.9999…</code>?
            And why do we assume <code className="px-1 rounded text-xs" style={{ background: '#E0E7FF', color: '#3730A3' }}>0.000…01 = 0</code>?
            That question pulled us into hyperreals, infinitesimals, and the edges of what standard calculus quietly sweeps under the rug.
            What started as a dorm-room debate became a co-authored research paper published in IJMTT.
          </p>

          <p className="text-sm leading-relaxed mb-5" style={{ color: '#374151' }}>
            I don&apos;t do math for grades — I do it because it&apos;s the cleanest way to think.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest" style={{ color: '#6B7280' }}>
              CO-AUTHORED WITH
            </span>
            <a
              href="https://www.linkedin.com/in/karan-jain-0b9051143/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded no-underline transition-all duration-200"
              style={{ background: '#0A2342', color: 'white' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#2D5BE3')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0A2342')}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-xs font-semibold">Karan Jain</span>
            </a>
          </div>
        </div>

        {/* Other interest cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {interests.map((item) => (
            <div
              key={item.name}
              className="p-6 border rounded-lg flex flex-col"
              style={{ borderColor: '#E8E2D9', background: '#FFFFFF' }}
            >
              <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2D5BE3' }}>
                {item.tag}
              </p>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#0A2342' }}>
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B7280' }}>
                {item.body}
              </p>
              {item.videoEmbed && (
                <div className="mt-4 rounded-md overflow-hidden" style={{ aspectRatio: '9/16', maxHeight: '360px', background: '#000' }}>
                  <iframe
                    src={item.videoEmbed}
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                </div>
              )}
              {item.photos && item.photos.length > 0 && (
                <PhotoGallery photos={item.photos} />
              )}
            </div>
          ))}
        </div>

        {/* Conversation starter */}
        <div className="rounded-lg p-8 md:p-12" style={{ background: '#0A2342' }}>
          <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#2D5BE3' }}>
            ALWAYS UP FOR A GOOD CONVERSATION
          </p>
          <p
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'white' }}
          >
            From the mathematics of infinity to why certain civilisations collapsed while others thrived.
          </p>
          <p className="mb-8 max-w-2xl" style={{ color: '#9CA3AF', lineHeight: 1.7 }}>
            Whether sport is more about strategy or mentality. What a mandala and a system architecture
            have in common. How geography quietly shapes economies. Pick any thread — I&apos;ll pull on it with you.
          </p>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold tracking-widest px-3 py-1.5 rounded"
                style={{ background: 'rgba(45,91,227,0.2)', color: '#93C5FD' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
