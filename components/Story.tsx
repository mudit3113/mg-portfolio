'use client';

import { useState } from 'react';

type RoleImage = { src: string; caption: string };

type Role = {
  id: string;
  period: string;
  company: string;
  title: string;
  context: string;
  track: 'main' | 'outside';
  body: string[];
  stats: { value: string; label: string }[];
  certLink?: { href: string; label: string };
  images?: RoleImage[];
};

const roles: Role[] = [
  {
    id: 'spinny-eco',
    period: '2026 / PRESENT',
    company: 'SPINNY',
    title: 'Software Engineer, Ecosystem',
    context: "India's leading B2C used-car marketplace · Tiger Global-backed · $1.4B valuation",
    track: 'main',
    body: [
      "Leading the 0-to-1 build of Challan, a plugin-based traffic-fine resolution product with a CRM dashboard deployed across Spinny's ecosystem and third-party apps. I own the technical architecture for a $12M/yr business line inside a 7-person cross-functional pod.",
      'Also leading stealth brand initiatives designed to capture top-of-funnel traffic independently from the core brand. Here, strategy matters as much as the code.',
    ],
    stats: [
      { value: '$12M/yr', label: 'business line owned' },
      { value: '7', label: 'person cross-functional pod' },
      { value: '1', label: 'product built from zero' },
    ],
  },
  {
    id: 'spinny-cx',
    period: '2025 / 2026',
    company: 'SPINNY',
    title: 'Software Engineer, Customer Experience',
    context: "India's leading B2C used-car marketplace · Tiger Global-backed · $1.4B valuation",
    track: 'main',
    body: [
      "Before Ecosystem, I was in CX. I learned that the fastest way to fix a broken experience is to remove the human from the broken part. Built a suite of AI-assisted tools: chatbots, voicebots, conversation summaries, multi-language support, and ticket recategorisation. Cut average handling time by 30 minutes per ticket. New ticket volume dropped 25%. CSAT went from 55 to 72.",
      'I also redesigned repair-cost approvals and warranty case intake. Both workflows were entirely offline and agent-dependent. One saved $150K annually. The other eliminated 1,500 duplicate tickets. Received the Driven by Customer Award, selected from 275 employees.',
    ],
    stats: [
      { value: '30 min', label: 'saved per ticket' },
      { value: '$150K', label: 'saved annually' },
      { value: '55→72', label: 'CSAT lifted' },
    ],
  },
  {
    id: 'freelance',
    period: '2025',
    company: 'FREELANCE TECH CONSULTING',
    title: 'Independent Consultant',
    context: 'Pehchaan.me · BrightArc · Vertical Quick Commerce',
    track: 'outside',
    body: [
      'Shipped three independent engagements in parallel with full-time work. Built the MVP for Pehchaan.me, an AI mentor that maps skills and interests of early-career aspirants into curated learning paths and resume generation.',
      'Architected the frontend for BrightArc, an Australian wealth management enterprise. Built an end-to-end inventory management system for a vertical quick commerce company.',
    ],
    stats: [
      { value: '3', label: 'independent products shipped' },
      { value: '2', label: 'countries served' },
      { value: '1', label: 'AI-powered MVP from zero' },
    ],
  },
  {
    id: 'thinklix',
    period: '2024 / PRESENT',
    company: 'THINKLIX',
    title: 'Solo Founder & Developer',
    context: 'Brain training app · Built solo · ~1,000 active users',
    track: 'outside',
    body: [
      "Noticed something no one was building a product around: short-form content was quietly destroying people's ability to focus. So I built the antidote.",
      'Thinklix is a brain training app designed to reverse declining concentration in digital users. Built solo, from idea to production. No team. No funding. Just a problem worth solving and the skills to solve it.',
    ],
    stats: [
      { value: '1,000', label: 'active users' },
      { value: '1', label: 'person team' },
      { value: '0→live', label: 'built solo end to end' },
    ],
  },
  {
    id: 'rentickle',
    period: '2024 / 2025',
    company: 'RENTICKLE',
    title: 'Frontend Developer',
    context: 'Online furniture and appliance rental startup · $4M raised',
    track: 'main',
    body: [
      'Joined during a demand downturn. Left having tripled revenue velocity. Led a team of 4 developers to deliver an SEO-first consumer website handling 100K+ MAU. Orders went from 35/day to 90/day.',
      'Lighthouse performance score went from 17% to 53% through code-splitting, lazy loading, and caching. Onboarded and managed 2 developers and 2 interns. Three out of four received full-time offers. Awarded Certificate of Appreciation by the Director for extraordinary contributions and achieving exceptional results (Nov 2024).',
    ],
    stats: [
      { value: '3×', label: 'revenue lift during downturn' },
      { value: '100K+', label: 'MAU on new website' },
      { value: '4', label: 'developers led' },
    ],
    certLink: { href: '/rentickle-award.pdf', label: 'Certificate of Appreciation — Rentickle' },
  },
  {
    id: 'calm-corners',
    period: '2023 / 2025',
    company: 'CALM CORNERS',
    title: 'Co-Founder',
    context: 'Your own venture · 2 branches · ~80 active users/month per branch',
    track: 'outside',
    body: [
      'Built and ran this from scratch: hiring, operations, product, and marketing across a 4-person team. Generated ~$36K in annual revenue at an 8% profit margin.',
      'What started as a workspace became a guidance community: mentored 50+ students on competitive exams and career pathways. 3 students cleared high-stakes government examinations. Ran this in parallel with a full-time job.',
    ],
    stats: [
      { value: '$36K', label: 'annual revenue' },
      { value: '50+', label: 'students mentored' },
      { value: '2', label: 'branches operated' },
    ],
  },
  {
    id: 'aid-ncr',
    period: '2023 / 2025',
    company: 'AID-NCR',
    title: 'Pro-bono Consultant & Volunteer',
    context: 'NGO focused on education for underprivileged communities',
    track: 'outside',
    body: [
      'Worked with Trustee/Founders of AID-NCR to design a sustainable mentorship model, scaling it across all 6 centres in Delhi NCR. Revamped the school curriculum to align with government and semi-private school admission standards, enabling students to continue education beyond primary levels.',
      'Facilitated a mobile computer lab through Huawei\'s CSR initiative and led digital literacy sessions. 10% of students transitioned into mainstream schooling; 50+ gained vocational skills for employment. Awarded Certificate of Appreciation by Trustee Kunal Gupta (Aug 2025).',
    ],
    stats: [
      { value: '600', label: 'students impacted' },
      { value: '6', label: 'schools reached' },
      { value: '6', label: 'CSR partners mobilised' },
    ],
    certLink: { href: '/aidncr-award.pdf', label: 'Certificate of Appreciation — AID-NCR' },
  },
  {
    id: 'supplesoft',
    period: '2021 / 2024',
    company: 'SUPPLESOFT',
    title: 'ReactJS Developer',
    context: 'IT consulting firm · B2C furnishing clients',
    track: 'main',
    body: [
      'Three years, two major product builds. At Trelif, led a cross-functional team of 5 to build a full-stack luxury furniture website with a CMS enabling business teams to manage 350+ SKUs across 15+ categories.',
      'At a second client, built an account system that unified post-sales order visibility for customers and ops, cutting order resolution time by 50% and lifting CSAT by 20%. Reduced website load time by 85% via server-side and client-side caching.',
    ],
    stats: [
      { value: '85%', label: 'load time reduction' },
      { value: '50%', label: 'order resolution time cut' },
      { value: '350+', label: 'SKUs managed via CMS' },
    ],
  },
  {
    id: 'transorg',
    period: '2018',
    company: 'TRANSORG ANALYTICS',
    title: 'Data Analyst',
    context: 'Data science and analytics consulting firm',
    track: 'main',
    body: [
      'First job out of college. Implemented an NLP pipeline to detect illegal merchants for AmEx. Raised model accuracy from 77% to 82%.',
      "Where I learned that clean data and a sharp model can do what a hundred analysts cannot.",
    ],
    stats: [
      { value: '77%→82%', label: 'model accuracy lifted' },
    ],
  },
];

function StoryLightbox({ images, activeIndex, onClose, onPrev, onNext }: {
  images: RoleImage[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div className="relative flex flex-col items-center max-w-sm w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }}>×</button>
        <div className="relative w-full rounded-xl overflow-hidden">
          <img src={images[activeIndex].src} alt={images[activeIndex].caption} className="w-full object-contain" style={{ maxHeight: '75vh' }} />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', background: 'rgba(10,35,66,0.55)' }}>
            <p className="text-white text-xs font-medium">{images[activeIndex].caption}</p>
          </div>
        </div>
        {images.length > 1 && (
          <div className="flex items-center gap-4 mt-4">
            <button onClick={onPrev} className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>‹</button>
            <span className="text-white text-sm">{activeIndex + 1} / {images.length}</span>
            <button onClick={onNext} className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>›</button>
          </div>
        )}
      </div>
    </div>
  );
}

function RoleGallery({ images }: { images: RoleImage[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const prev = () => setActive((active - 1 + images.length) % images.length);
  const next = () => setActive((active + 1) % images.length);

  return (
    <>
      {lightbox && <StoryLightbox images={images} activeIndex={active} onClose={() => setLightbox(false)} onPrev={prev} onNext={next} />}
      <div className="mt-4">
        <div
          className="relative overflow-hidden rounded-lg cursor-zoom-in"
          style={{ aspectRatio: '9/16', maxHeight: '300px', background: '#F3F4F6' }}
          onClick={() => setLightbox(true)}
        >
          <img src={images[active].src} alt={images[active].caption} className="w-full h-full object-cover object-top" />
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', background: 'rgba(10,35,66,0.45)' }}>
            <p className="text-white text-xs font-medium leading-snug">{images[active].caption}</p>
          </div>
          <div className="absolute top-2 right-2 w-6 h-6 rounded flex items-center justify-center" style={{ background: 'rgba(10,35,66,0.5)' }}>
            <span className="text-white text-xs">⤢</span>
          </div>
          {images.length > 1 && (
            <>
              <div className="absolute top-2 left-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(10,35,66,0.5)', color: 'white' }}>{active + 1} / {images.length}</span>
              </div>
              <div className="absolute bottom-10 right-2 flex gap-1" onClick={(e) => e.stopPropagation()}>
                <button onClick={prev} className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(10,35,66,0.6)', color: 'white' }}>‹</button>
                <button onClick={next} className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(10,35,66,0.6)', color: 'white' }}>›</button>
              </div>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="flex gap-1.5 mt-2 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button key={i} onClick={() => setActive(i)} className="flex-shrink-0 overflow-hidden rounded" style={{ width: 36, height: 36, border: `2px solid ${active === i ? '#0A2342' : 'transparent'}`, opacity: active === i ? 1 : 0.55 }}>
                <img src={img.src} alt="" className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default function Story() {
  const [openId, setOpenId] = useState<string>('spinny-eco');

  const mainRoles = roles.filter((r) => r.track === 'main');
  const outsideRoles = roles.filter((r) => r.track === 'outside');

  const RoleCard = ({ role }: { role: Role }) => {
    const isOpen = openId === role.id;
    return (
      <div
        className="border-b cursor-pointer"
        style={{ borderColor: '#E5E7EB' }}
        onClick={() => setOpenId(isOpen ? '' : role.id)}
      >
        <div className="py-4 flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: '#2D5BE3' }}>
              {role.period}
            </p>
            <p className="font-bold text-base leading-tight" style={{ color: '#0A2342' }}>{role.company}</p>
            <p className="text-sm mt-0.5 leading-snug" style={{ color: '#6B7280' }}>{role.title}</p>
          </div>
          <span className="text-xl flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full" style={{ color: '#2D5BE3', background: '#EEF2FF' }}>{isOpen ? '−' : '+'}</span>
        </div>

        {isOpen && (
          <div className="pb-6">
            <p className="text-xs mb-4 italic" style={{ color: '#6B7280' }}>{role.context}</p>

            {/* Two-column layout when images exist */}
            <div className={role.images && role.images.length > 0 ? 'grid md:grid-cols-2 gap-6' : ''}>
              <div>
                {role.body.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: '#1A1A1A' }}>
                    {para}
                  </p>
                ))}
                <div className="flex flex-wrap gap-6 mt-4 pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
                  {role.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-bold" style={{ color: '#0A2342', fontSize: '1.1rem' }}>{s.value}</p>
                      <p className="text-xs" style={{ color: '#6B7280' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                {role.certLink && (
                  <a href={role.certLink.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium mt-3" style={{ color: '#0A2342' }}>
                    <span>🏅</span> {role.certLink.label} ↗
                  </a>
                )}
              </div>
              {role.images && role.images.length > 0 && (
                <RoleGallery images={role.images} />
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="story" className="py-24 px-6" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#2D5BE3' }}>
          02 — Story
        </p>
        <h2
          className="font-serif-display font-bold mb-3"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#0A2342' }}
        >
          From first commit to product owner in five years.
        </h2>
        <p className="mb-12 max-w-xl" style={{ color: '#6B7280', fontSize: '1rem' }}>
          Every role gave me more surface area. Every role made me more dangerous with a blank canvas.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Main career */}
          <div>
            <p className="text-xs font-semibold tracking-widest mb-4 pb-2" style={{ color: '#0A2342', borderBottom: '2px solid #0A2342' }}>
              Career spine
            </p>
            {mainRoles.map((r) => <RoleCard key={r.id} role={r} />)}
          </div>

          {/* Outside the day job */}
          <div>
            <p className="text-xs font-semibold tracking-widest mb-4 pb-2" style={{ color: '#2D5BE3', borderBottom: '2px solid #2D5BE3' }}>
              Outside the day job
            </p>
            {outsideRoles.map((r) => <RoleCard key={r.id} role={r} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
