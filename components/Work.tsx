'use client';

import { useState } from 'react';
import Image from 'next/image';

type ProjectImage = { src: string; caption: string };

type Project = {
  id: string;
  status: string;
  category: string;
  name: string;
  url?: string;
  displayUrl?: string;
  desc: string;
  tags: string[];
  images?: ProjectImage[];
  stats?: { value: string; label: string }[];
};

const projects: Project[] = [
  {
    id: 'challan',
    status: 'LIVE',
    category: 'PLATFORM BUILD',
    name: 'Spinny Challan',
    url: 'https://www.spinny.com/e-challan/',
    displayUrl: 'spinny.com/e-challan',
    desc: "A plugin-based traffic-fine resolution product deployed across Spinny's ecosystem and third-party apps. Built 0 to 1 as technical architect inside a 7-person pod, powering a $12M/yr business line.",
    tags: ['REACT', 'CRM', 'PLUGIN ARCHITECTURE'],
    images: [
      { src: '/spinny-challan-search.png', caption: 'One-click challan discovery by vehicle number' },
      { src: '/spinny-challan-listings.png', caption: 'Pending and settled challan listings view' },
    ],
  },
  {
    id: 'spinny-account',
    status: 'LIVE',
    category: 'PLATFORM BUILD',
    name: 'Spinny Account Section',
    url: 'https://www.spinny.com/account/',
    displayUrl: 'spinny.com/account',
    desc: 'Unified post-sales account experience for Spinny customers — order history, warranty plans, AI-assisted support, and self-service scheduling. Replaced agent-dependent workflows with in-app structured flows, cutting resolution time and duplicate ticket volume.',
    tags: ['REACT', 'AI', 'CX'],
    images: [
      { src: '/spinny-account.png', caption: 'Account section — unified post-sales order view' },
      { src: '/spinny-warranty.png', caption: 'Warranty workflow — self-service case intake and scheduling' },
      { src: '/spinny-chat-1.png', caption: 'AI Chatbot — intelligent responses to customer queries' },
      { src: '/spinny-chat-2.png', caption: 'AI Chatbot — real-time AI-assisted support conversation' },
    ],
  },
  {
    id: 'trelif',
    status: 'LIVE',
    category: 'PLATFORM BUILD',
    name: 'Trelif',
    url: 'https://www.trelif.com/',
    displayUrl: 'trelif.com',
    desc: 'Full-stack website for a luxury furniture brand with a CMS managing 350+ SKUs across 15+ categories. Led a cross-functional team of 5. Reduced load time by 85% via server-side and client-side caching.',
    tags: ['FULL STACK', 'CMS', 'REACT'],
    images: [
      { src: '/trelif-1.png', caption: 'Beds PLP — collection header with filters and product cards' },
      { src: '/trelif-3.png', caption: 'Dining Sets PLP — customisation banner and product listing' },
      { src: '/trelif-2.png', caption: 'PDP — Olinda dining table with Add to Cart and designer consult' },
    ],
  },
  {
    id: 'rentickle',
    status: 'LIVE',
    category: 'CONSUMER PRODUCT',
    name: 'Rentickle',
    url: 'https://www.rentickle.com/',
    displayUrl: 'rentickle.com',
    desc: 'SEO-first consumer website handling 100K+ MAU. Led a team of 4 developers. Orders went from 35/day to 90/day during a demand downturn — a 3× lift. Lighthouse score tripled from 17% to 53%.',
    tags: ['REACT', 'SEO', 'PERFORMANCE'],
    images: [
      { src: '/rentickle-3.png', caption: 'Homepage — categories, INFINITY plan, featured products' },
      { src: '/rentickle-4.png', caption: 'PLP — bedroom furniture with filters and sort' },
      { src: '/rentickle-2.png', caption: 'PDP — Elara Luxe Bed with tenure slider and coupons' },
      { src: '/rentickle-1.png', caption: 'Cart — order summary with total bill and coupon discovery' },
    ],
  },
  {
    id: 'thinklix',
    status: 'LIVE',
    category: 'SOLO BUILD',
    name: 'Thinklix',
    url: 'https://thinklix.in/',
    displayUrl: 'thinklix.in',
    desc: "Built solo to solve a problem nobody was talking about: short-form content quietly destroying people's ability to focus. A brain training app with ~1,000 active users and growing. No team. No funding.",
    tags: ['SOLO BUILT', 'WEB APP', 'CONSUMER'],
    images: [
      { src: '/thinklix-1.jpg', caption: 'Game lobby — Memory, Strategy, Puzzle, Math modes' },
      { src: '/thinklix-2.jpg', caption: 'Cipher War — crack the code before they crack yours' },
      { src: '/thinklix-3.jpg', caption: 'Progress tracking — solve time over sessions' },
      { src: '/thinklix-4.jpg', caption: 'Crown Puzzle — difficulty levels with personal stats' },
      { src: '/thinklix-5.jpg', caption: 'Sum Rush — numbers flash, sum them with speed' },
    ],
  },
  {
    id: 'pehchaan',
    status: 'LIVE',
    category: 'FREELANCE',
    name: 'Pehchaan.me — AI Mentor',
    url: 'https://pehchaan.me/',
    displayUrl: 'pehchaan.me',
    desc: 'MVP for an EdTech and HRTech platform that maps skills and interests of early-career aspirants aged 18+ into curated learning paths and resume generation. Shipped while working full-time.',
    tags: ['AI', 'EDTECH', 'MVP'],
    images: [
      { src: '/pehchaan-1.png', caption: 'Homepage — AI career coaching with daily challenges and peer scoring' },
    ],
  },
  {
    id: 'ims',
    status: 'LIVE',
    category: 'FREELANCE',
    name: 'Inventory Management System',
    url: 'https://ims-ozi.vercel.app/',
    displayUrl: 'ims-ozi.vercel.app',
    desc: 'End-to-end inventory management system for a vertical quick commerce company. Handles real-time stock tracking, order management, and operations workflows. Client confidential.',
    tags: ['FULL STACK', 'OPERATIONS', 'QUICK COMMERCE'],
  },
  {
    id: 'calm-corners',
    status: 'VENTURE',
    category: 'VENTURES & IMPACT',
    name: 'Calm Corners',
    desc: 'Co-founded a library and reading room from scratch — hiring, operations, product, and marketing across a 4-person team. Built it into a guidance community: mentored 50+ students on competitive exams and career pathways. 3 students cleared high-stakes government examinations. Ran this in parallel with a full-time engineering job.',
    tags: ['CO-FOUNDER', 'OPERATIONS', 'COMMUNITY'],
    images: [
      { src: '/calm-2.jpg', caption: 'Calm Corners — signboard at the entrance' },
      { src: '/calm-1.jpg', caption: 'Motivational wall art inside Calm Corners' },
      { src: '/calm-3.jpg', caption: 'Study hall — individual workstations' },
    ],
    stats: [
      { value: '$36K', label: 'annual revenue' },
      { value: '50+', label: 'students mentored' },
      { value: '2', label: 'branches operated' },
    ],
  },
  {
    id: 'aid-ncr',
    status: 'IMPACT',
    category: 'VENTURES & IMPACT',
    name: 'AID-NCR — Education Initiative',
    desc: 'Designed a structured curriculum in Mathematics, verbal literacy, and digital skills with 10+ teachers — deployed across 6 schools to ~600 students. Mobilised 6 CSR partners to fund container classrooms, a mobile computer lab, and community land. 10% of students transitioned into mainstream schooling.',
    tags: ['PRO-BONO', 'EDUCATION', 'COMMUNITY'],
    stats: [
      { value: '600', label: 'students impacted' },
      { value: '6', label: 'schools reached' },
      { value: '6', label: 'CSR partners mobilised' },
    ],
  },
];

const categories = ['ALL', 'PLATFORM BUILDS', 'CONSUMER PRODUCTS', 'SOLO BUILDS', 'FREELANCE', 'VENTURES & IMPACT'];

const categoryMap: Record<string, string> = {
  'ALL': '',
  'PLATFORM BUILDS': 'PLATFORM BUILD',
  'CONSUMER PRODUCTS': 'CONSUMER PRODUCT',
  'SOLO BUILDS': 'SOLO BUILD',
  'FREELANCE': 'FREELANCE',
  'VENTURES & IMPACT': 'VENTURES & IMPACT',
};

const statusStyle: Record<string, { bg: string; color: string }> = {
  'LIVE':    { bg: '#DCFCE7', color: '#16A34A' },
  'VENTURE': { bg: '#FEF3C7', color: '#B45309' },
  'IMPACT':  { bg: '#EDE9FE', color: '#7C3AED' },
};

function WorkLightbox({ images, activeIndex, onClose, onPrev, onNext }: {
  images: ProjectImage[];
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
      <div
        className="relative flex flex-col items-center max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full"
          style={{ background: 'rgba(255,255,255,0.15)' }}
        >
          ×
        </button>
        <div className="relative w-full rounded-xl overflow-hidden">
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].caption}
            className="w-full object-contain"
            style={{ maxHeight: '75vh' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3"
            style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', background: 'rgba(0,0,0,0.5)' }}
          >
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

function WorkGallery({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setActive((active - 1 + images.length) % images.length);
  const next = () => setActive((active + 1) % images.length);

  return (
    <>
      {lightbox && (
        <WorkLightbox images={images} activeIndex={active} onClose={() => setLightbox(false)} onPrev={prev} onNext={next} />
      )}
      <div className="w-full border-t mt-4 pt-4" style={{ borderColor: '#E5E7EB' }}>
        <div
          className="relative w-full overflow-hidden rounded-lg cursor-zoom-in"
          style={{ aspectRatio: '9/16', maxHeight: '320px', background: '#111' }}
          onClick={() => setLightbox(true)}
        >
          <img src={images[active].src} alt={images[active].caption} className="w-full h-full object-cover object-top" />
          <div
            className="absolute bottom-0 left-0 right-0 px-3 py-2"
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.5)' }}
          >
            <p className="text-white text-xs font-medium leading-snug">{images[active].caption}</p>
          </div>
          <div className="absolute top-2 right-2 w-6 h-6 rounded flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <span className="text-white text-xs">⤢</span>
          </div>
          <div className="absolute top-2 left-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: 'rgba(0,0,0,0.5)', color: 'white' }}>{active + 1} / {images.length}</span>
          </div>
          <div className="absolute bottom-10 right-2 flex gap-1" onClick={(e) => e.stopPropagation()}>
            <button onClick={prev} className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(0,0,0,0.6)', color: 'white' }}>‹</button>
            <button onClick={next} className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold" style={{ background: 'rgba(0,0,0,0.6)', color: 'white' }}>›</button>
          </div>
        </div>
        <div className="flex gap-1.5 mt-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)} className="flex-shrink-0 overflow-hidden rounded" style={{ width: 36, height: 36, border: `2px solid ${active === i ? '#0A2342' : 'transparent'}`, opacity: active === i ? 1 : 0.55 }}>
              <img src={img.src} alt="" className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function CalmCornersCard({ project }: { project: Project }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = project.images ?? [];

  return (
    <div
      className="flex flex-col border rounded-lg overflow-hidden transition-all duration-200"
      style={{ borderColor: '#E5E7EB' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#0A2342';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(10,35,66,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      {/* Image gallery */}
      <div className="relative w-full" style={{ aspectRatio: '16/9', background: '#F3F4F6' }}>
        <Image
          src={images[activeImg].src}
          alt={images[activeImg].caption}
          fill
          className="object-cover transition-opacity duration-300"
        />
        <div
          className="absolute bottom-0 left-0 right-0 px-3 py-2"
          style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', background: 'rgba(10,35,66,0.45)' }}
        >
          <p className="text-white text-xs font-medium">{images[activeImg].caption}</p>
        </div>
        <div className="absolute top-2 left-2 flex gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActiveImg(i)}
              className="relative overflow-hidden rounded border-2 transition-all duration-200"
              style={{ width: 36, height: 36, borderColor: activeImg === i ? '#0A2342' : 'white', opacity: activeImg === i ? 1 : 0.7 }}
            >
              <Image src={img.src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-semibold tracking-widest px-2 py-1 rounded"
            style={{ background: statusStyle[project.status].bg, color: statusStyle[project.status].color }}
          >
            {project.status}
          </span>
          <span className="text-xs font-semibold tracking-widest" style={{ color: '#6B7280' }}>
            {project.category}
          </span>
        </div>

        <h3 className="font-bold text-lg mb-3" style={{ color: '#0A2342' }}>{project.name}</h3>
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#6B7280' }}>{project.desc}</p>

        {/* Stats */}
        {project.stats && (
          <div className="flex gap-5 mb-5 pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
            {project.stats.map((s) => (
              <div key={s.label}>
                <p className="font-bold text-base" style={{ color: '#0A2342' }}>{s.value}</p>
                <p className="text-xs" style={{ color: '#6B7280' }}>{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold tracking-widest px-2 py-1 rounded"
              style={{ background: '#EEF2FF', color: '#2D5BE3' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const style = statusStyle[project.status] ?? statusStyle['LIVE'];
  return (
    <div
      className="flex flex-col border rounded-lg p-6 transition-all duration-200"
      style={{ borderColor: '#E5E7EB' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#0A2342';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(10,35,66,0.08)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-xs font-semibold tracking-widest px-2 py-1 rounded"
          style={{ background: style.bg, color: style.color }}
        >
          {project.status}
        </span>
        <span className="text-xs font-semibold tracking-widest" style={{ color: '#6B7280' }}>
          {project.category}
        </span>
      </div>

      <h3 className="font-bold text-lg mb-1" style={{ color: '#0A2342' }}>{project.name}</h3>
      {project.displayUrl && (
        <p className="text-xs mb-4" style={{ color: '#2D5BE3' }}>{project.displayUrl}</p>
      )}

      <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#6B7280' }}>{project.desc}</p>

      {/* Stats for impact cards */}
      {project.stats && (
        <div className="flex flex-wrap gap-5 mb-5 pt-4" style={{ borderTop: '1px solid #E5E7EB' }}>
          {project.stats.map((s) => (
            <div key={s.label}>
              <p className="font-bold text-base" style={{ color: '#0A2342' }}>{s.value}</p>
              <p className="text-xs" style={{ color: '#6B7280' }}>{s.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs font-semibold tracking-widest px-2 py-1 rounded"
            style={{ background: '#EEF2FF', color: '#2D5BE3' }}
          >
            {t}
          </span>
        ))}
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold no-underline transition-colors duration-200 mb-2"
          style={{ color: '#0A2342' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#2D5BE3')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#0A2342')}
        >
          View Live →
        </a>
      )}

      {/* App screenshots gallery */}
      {project.images && project.images.length > 0 && (
        <WorkGallery images={project.images} />
      )}
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState('ALL');

  const filtered = active === 'ALL'
    ? projects
    : projects.filter((p) => p.category === categoryMap[active]);

  return (
    <section id="work" className="py-24 px-6" style={{ background: '#FAF7F2' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#2D5BE3' }}>
          03 / WORK
        </p>
        <h2
          className="font-bold mb-3"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#0A2342' }}
        >
          Shipped Products
        </h2>
        <p className="mb-10" style={{ color: '#6B7280', fontSize: '1rem' }}>
          Every project here is live. Every one solved a real problem.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 text-xs font-semibold tracking-widest rounded transition-all duration-200"
              style={{
                background: active === cat ? '#0A2342' : 'transparent',
                color: active === cat ? 'white' : '#6B7280',
                border: `1px solid ${active === cat ? '#0A2342' : '#E5E7EB'}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) =>
            p.id === 'calm-corners' ? (
              <CalmCornersCard key={p.id} project={p} />
            ) : (
              <ProjectCard key={p.id} project={p} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
