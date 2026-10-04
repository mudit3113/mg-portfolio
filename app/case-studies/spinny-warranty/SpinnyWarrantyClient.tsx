'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const TABS = ['Situation', 'Task', 'Action', 'Result', 'Learnings'] as const;
type Tab = typeof TABS[number];

export default function SpinnyWarrantyClient() {
  const [active, setActive] = useState<Tab>('Situation');
  const idx = TABS.indexOf(active);

  return (
    <div className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <nav
        className="sticky top-0 z-40 px-6 py-4 flex items-center gap-4"
        style={{ background: 'rgba(250,247,242,0.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #E8E2D9' }}
      >
        <Link
          href="/#work"
          className="text-xs font-semibold tracking-widest no-underline flex items-center gap-1.5"
          style={{ color: '#6B7280' }}
        >
          ← Back
        </Link>
        <span style={{ color: '#E5E7EB' }}>|</span>
        <span className="text-xs font-semibold tracking-widest" style={{ color: '#0A2342' }}>CASE STUDY</span>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#2D5BE3' }}>SPINNY · CX PLATFORM</p>
          <h1
            className="font-serif-display font-bold mb-5 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: '#0A2342' }}
          >
            One customer,<br />many problems
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
            Rebuilding warranty resolution at Spinny. The most challenging project I have worked on so far.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl mb-10" style={{ background: '#0A2342' }}>
          {[
            { value: '−40%', label: 'duplicate tickets' },
            { value: '55 → 72', label: 'warranty CSAT' },
            { value: '−10 hrs', label: 'case turnaround' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-bold text-xl mb-0.5" style={{ color: '#FFFFFF' }}>{s.value}</p>
              <p className="text-xs" style={{ color: '#93A3BE' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div className="hide-scrollbar flex gap-1 mb-8 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="flex-shrink-0 px-4 py-2 text-xs font-semibold tracking-widest rounded-lg transition-all duration-200"
              style={{
                background: active === tab ? '#0A2342' : 'transparent',
                color: active === tab ? '#FFFFFF' : '#6B7280',
                border: `1px solid ${active === tab ? '#0A2342' : '#E5E7EB'}`,
              }}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ color: '#374151', lineHeight: '1.8' }}>
          {active === 'Situation' && <SituationTab />}
          {active === 'Task'      && <TaskTab />}
          {active === 'Action'    && <ActionTab />}
          {active === 'Result'    && <ResultTab />}
          {active === 'Learnings' && <LearningsTab />}
        </div>

        {/* Prev / Next */}
        <div className="flex justify-between mt-12 pt-8" style={{ borderTop: '1px solid #E8E2D9' }}>
          {idx > 0 ? (
            <button
              onClick={() => setActive(TABS[idx - 1])}
              className="text-sm font-semibold"
              style={{ color: '#0A2342', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              ← {TABS[idx - 1]}
            </button>
          ) : (
            <Link href="/#work" className="text-sm font-semibold no-underline" style={{ color: '#6B7280' }}>
              ← Back to all work
            </Link>
          )}
          {idx < TABS.length - 1 ? (
            <button
              onClick={() => setActive(TABS[idx + 1])}
              className="text-sm font-semibold"
              style={{ color: '#0A2342', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {TABS[idx + 1]} →
            </button>
          ) : (
            <Link href="/#work" className="text-sm font-semibold no-underline" style={{ color: '#0A2342' }}>
              Back to all work →
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SITUATION
───────────────────────────────────────────── */
function SituationTab() {
  return (
    <div className="space-y-8">
      <p>
        Spinny sells used cars with a warranty, and every month around 2,100 cars come back to our
        workshops for warranty repairs. When a customer reported a problem, it became a ticket in our
        internal ticketing system. The catch was that each ticket could hold only one issue.
      </p>

      {/* Flow diagram: old system */}
      <div className="rounded-2xl p-6" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
        <p className="text-xs font-semibold tracking-widest mb-6" style={{ color: '#6B7280' }}>THE OLD SYSTEM</p>
        <OldSystemDiagram />
      </div>

      <p>
        So a customer with two or three things wrong raised two or three tickets. Each went to a
        different warranty inspector. On the shop floor, someone then had to manually gather them back
        onto one person&apos;s desk before the car could be fixed. Customers repeated their story to
        different agents, chased updates across separate tickets, and waited longer than they should have.
      </p>

      <p>
        The cost was real. Repairs took longer, customers grew frustrated, and we absorbed it through
        goodwill gestures that damaged both margin and trust.
      </p>
    </div>
  );
}

function OldSystemDiagram() {
  const tickets = ['Issue 1', 'Issue 2', 'Issue 3'];
  return (
    <div className="flex flex-col items-center gap-3 text-sm">
      {/* Customer */}
      <div className="px-5 py-2.5 rounded-xl font-semibold text-white text-xs tracking-wide" style={{ background: '#0A2342' }}>
        Customer reports car
      </div>

      {/* Arrow down */}
      <Arrow />

      {/* Three tickets */}
      <div className="flex gap-3 w-full justify-center">
        {tickets.map((t, i) => (
          <div
            key={t}
            className="flex-1 max-w-[120px] text-center px-3 py-2.5 rounded-xl text-xs font-semibold"
            style={{ background: '#FEF3C7', color: '#B45309', border: '1px solid #FDE68A' }}
          >
            Ticket {i + 1}<br />
            <span className="font-normal" style={{ color: '#92400E' }}>{t}</span>
          </div>
        ))}
      </div>

      {/* Arrow down */}
      <Arrow />

      {/* Three inspectors */}
      <div className="flex gap-3 w-full justify-center">
        {tickets.map((_, i) => (
          <div
            key={i}
            className="flex-1 max-w-[120px] text-center px-3 py-2.5 rounded-xl text-xs font-semibold"
            style={{ background: '#EDE9FE', color: '#7C3AED', border: '1px solid #DDD6FE' }}
          >
            Inspector {i + 1}
          </div>
        ))}
      </div>

      {/* Converge arrow */}
      <div className="flex flex-col items-center gap-0.5">
        <svg width="160" height="28" viewBox="0 0 160 28">
          <path d="M 20 0 Q 20 14 80 20" stroke="#D1D5DB" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          <path d="M 80 0 L 80 20" stroke="#D1D5DB" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          <path d="M 140 0 Q 140 14 80 20" stroke="#D1D5DB" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          <polygon points="76,18 80,26 84,18" fill="#D1D5DB" />
        </svg>
        <p className="text-xs italic" style={{ color: '#9CA3AF' }}>manual re-assembly on the shop floor</p>
      </div>

      {/* Fix */}
      <div className="px-5 py-2.5 rounded-xl text-xs font-semibold" style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FECACA' }}>
        Car fixed — eventually
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20">
      <line x1="8" y1="0" x2="8" y2="14" stroke="#D1D5DB" strokeWidth="1.5" />
      <polygon points="4,12 8,20 12,12" fill="#D1D5DB" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   TASK
───────────────────────────────────────────── */
function TaskTab() {
  return (
    <div className="space-y-8">
      <p>
        My brief was simple to state and hard to solve. Reduce customer frustration in post-sales
        warranty resolution. I was the engineer on the Customer Experience team, but nobody had
        defined what the fix should be.
      </p>

      {/* 80% insight */}
      <div className="rounded-2xl p-6" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
        <p className="text-xs font-semibold tracking-widest mb-6" style={{ color: '#6B7280' }}>THE NUMBER THAT CHANGED EVERYTHING</p>
        <DonutInsight />
      </div>

      <p>
        That meant the problem was not slow agents or careless inspectors. It was the shape of the
        ticket itself.
      </p>
    </div>
  );
}

function DonutInsight() {
  const r = 52;
  const cx = 72;
  const cy = 72;
  const circumference = 2 * Math.PI * r;
  const pct80 = circumference * 0.8;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8">
      {/* Donut */}
      <div className="relative flex-shrink-0" style={{ width: 144, height: 144 }}>
        <svg width="144" height="144" viewBox="0 0 144 144">
          {/* Track */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#E5E7EB" strokeWidth="18" />
          {/* 80% arc */}
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="#0A2342"
            strokeWidth="18"
            strokeDasharray={`${pct80} ${circumference - pct80}`}
            strokeDashoffset={circumference * 0.25}
            strokeLinecap="round"
          />
          {/* 20% arc label colour */}
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="18"
            strokeDasharray={`${circumference * 0.2 - 4} ${circumference * 0.8 + 4}`}
            strokeDashoffset={circumference * 0.25 - pct80}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-bold text-2xl" style={{ color: '#0A2342' }}>80%</span>
          <span className="text-xs" style={{ color: '#6B7280' }}>multi-issue</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex-shrink-0 w-3 h-3 rounded-full" style={{ background: '#0A2342' }} />
          <div>
            <p className="font-semibold text-sm" style={{ color: '#0A2342' }}>80% of cases</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>had more than one issue — but each raised multiple tickets and hit multiple inspectors.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex-shrink-0 w-3 h-3 rounded-full" style={{ background: '#E5E7EB' }} />
          <div>
            <p className="font-semibold text-sm" style={{ color: '#0A2342' }}>20% of cases</p>
            <p className="text-sm" style={{ color: '#6B7280' }}>were single-issue. Our entire system was designed around this minority.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ACTION
───────────────────────────────────────────── */
function ActionTab() {
  return (
    <div className="space-y-10">

      {/* 1 — Business alignment */}
      <div className="space-y-3">
        <StepLabel n={1} title="Getting the business on board" />
        <p>
          I took the data to the heads of the Warranty and CX business units. Changing how warranty
          tickets worked would change how their agents and inspectors spent every day, so the idea had to
          be theirs as much as mine. We worked through how cases actually moved on the shop floor before
          agreeing on the design.
        </p>
      </div>

      {/* 2 — Ticket redesign: before / after */}
      <div className="space-y-3">
        <StepLabel n={2} title="Redesigning the ticket" />
        <p>
          We settled on one rule. One warranty ticket per customer, holding as many issues as the customer
          has. Either a CX agent or a warranty inspector could add, edit or close an issue at any point
          during the resolution.
        </p>
        <TicketBeforeAfter />
      </div>

      {/* 3 — Engineering */}
      <div className="space-y-3">
        <StepLabel n={3} title="Rebuilding the product around it" />
        <p>
          On the engineering side, I led the change across the whole ITS and the Account section of the
          customer app. Moving from one issue per ticket to many touched nearly every API in the warranty
          flow. Creation, assignment, status updates, customer-facing views. All of it changed.
        </p>
      </div>

      {/* 4 — What went wrong + spec process */}
      <div className="space-y-3">
        <StepLabel n={4} title="What went wrong — and what we fixed" />
        <p>
          Early on, we aligned contracts between frontend, backend and other teams through conversations
          and chat threads instead of one written document. Each team built its own reading of what we had
          discussed. Where those readings differed, we only found out during integration — and had to ship
          in two phases instead of one.
        </p>
        <p>
          That shipping delay pushed me to rethink how cross-team projects should be run. I introduced a
          spec-driven process where a business requirement document feeds a product requirement document,
          and every team writes their spec from it before any code is touched.
        </p>
        <SpecProcessDiagram />
      </div>

    </div>
  );
}

function StepLabel({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: '#2D5BE3' }}>
        {n}
      </div>
      <h3 className="font-semibold" style={{ color: '#0A2342' }}>{title}</h3>
    </div>
  );
}

function TicketBeforeAfter() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {/* Before */}
      <div className="rounded-xl p-4" style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}>
        <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#C2410C' }}>BEFORE</p>
        <div className="space-y-2">
          {['Ticket #1 — Issue A', 'Ticket #2 — Issue B', 'Ticket #3 — Issue C'].map((t) => (
            <div key={t} className="rounded-lg px-3 py-2 text-xs" style={{ background: '#FFEDD5', color: '#9A3412' }}>
              {t}
            </div>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: '#C2410C' }}>3 tickets · 3 inspectors</p>
      </div>

      {/* After */}
      <div className="rounded-xl p-4" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
        <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#15803D' }}>AFTER</p>
        <div className="rounded-lg px-3 py-2" style={{ background: '#DCFCE7', border: '1px solid #86EFAC' }}>
          <p className="text-xs font-semibold mb-2" style={{ color: '#166534' }}>Ticket #1</p>
          {['Issue A', 'Issue B', 'Issue C'].map((i) => (
            <div key={i} className="text-xs py-1" style={{ color: '#166534', borderTop: '1px solid #86EFAC' }}>
              {i}
            </div>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: '#15803D' }}>1 ticket · 1 inspector</p>
      </div>
    </div>
  );
}

function SpecProcessDiagram() {
  const steps = ['BRD', 'PRD', 'BE Spec', 'FE Spec', 'QA Spec', 'Code'];
  return (
    <div className="rounded-2xl p-5 mt-2" style={{ background: '#F8FAFF', border: '1px solid #DBEAFE' }}>
      <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#1D4ED8' }}>NEW SPEC-DRIVEN PROCESS</p>
      <div className="flex items-center gap-1 flex-wrap">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-1">
            <div
              className="px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{
                background: i < 2 ? '#1D4ED8' : i < 5 ? '#EFF6FF' : '#0A2342',
                color: i < 2 ? '#FFFFFF' : i < 5 ? '#1D4ED8' : '#FFFFFF',
                border: i >= 2 && i < 5 ? '1px solid #BFDBFE' : 'none',
              }}
            >
              {s}
            </div>
            {i < steps.length - 1 && (
              <svg width="14" height="10" viewBox="0 0 14 10"><polygon points="0,2 0,8 14,5" fill="#CBD5E1" /></svg>
            )}
          </div>
        ))}
      </div>
      <p className="text-xs mt-3" style={{ color: '#6B7280' }}>Each spec is written from the same source document before a line of code is touched.</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   RESULT
───────────────────────────────────────────── */
function ResultTab() {
  return (
    <div className="space-y-8">
      <p>
        The numbers came in across all three dimensions we had set out to improve.
      </p>

      <MetricCards />

      <p>
        The bigger result was what the new structure made possible. With every issue on one ticket, we
        could build things that simply had not been possible before. Estimate approvals went into the
        app. A workshop inspection scheduler followed. Extended warranty services became viable. The
        project became the foundation for the whole warranty resolution process at Spinny.
      </p>

      <UnlockedFeatures />
    </div>
  );
}

function MetricCards() {
  return (
    <div className="space-y-4">
      <AnimatedBar
        label="Warranty CSAT"
        before={55}
        after={72}
        max={100}
        beforeLabel="55"
        afterLabel="72"
        color="#2D5BE3"
      />
      <AnimatedBar
        label="Duplicate tickets"
        before={100}
        after={60}
        max={100}
        beforeLabel="Baseline"
        afterLabel="−40%"
        color="#16A34A"
        inverse
      />
      <div className="rounded-2xl p-5 flex items-center justify-between" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
        <div>
          <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: '#6B7280' }}>CASE TURNAROUND</p>
          <p className="font-bold text-2xl" style={{ color: '#0A2342' }}>−10 hrs</p>
          <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>per case · across 2,100 monthly drop-offs</p>
        </div>
        <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#F0FDF4' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="11" stroke="#16A34A" strokeWidth="2" />
            <path d="M14 8v6l4 2" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnimatedBar({ label, before, after, max, beforeLabel, afterLabel, color, inverse }: {
  label: string; before: number; after: number; max: number;
  beforeLabel: string; afterLabel: string; color: string; inverse?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setMounted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const beforePct = (before / max) * 100;
  const afterPct = (after / max) * 100;

  return (
    <div ref={ref} className="rounded-2xl p-5" style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}>
      <div className="flex justify-between items-baseline mb-4">
        <p className="text-xs font-semibold tracking-widest" style={{ color: '#6B7280' }}>{label.toUpperCase()}</p>
        <p className="font-bold text-lg" style={{ color }}>
          {inverse ? afterLabel : afterLabel}
        </p>
      </div>

      <div className="space-y-2.5">
        <div>
          <div className="flex justify-between text-xs mb-1" style={{ color: '#9CA3AF' }}>
            <span>Before</span><span>{beforeLabel}</span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#F3F4F6' }}>
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{ width: mounted ? `${beforePct}%` : '0%', background: '#D1D5DB' }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1" style={{ color: '#374151' }}>
            <span className="font-medium">After</span><span className="font-semibold" style={{ color }}>{afterLabel}</span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#F3F4F6' }}>
            <div
              className="h-full rounded-full transition-all duration-700 ease-out delay-150"
              style={{ width: mounted ? `${afterPct}%` : '0%', background: color }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function UnlockedFeatures() {
  const features = [
    { icon: '💰', title: 'Estimate Approvals', desc: 'Customers accept or reject repair costs directly in the app.' },
    { icon: '📅', title: 'Inspection Scheduler', desc: 'Workshop drop-off booking built on top of the unified ticket.' },
    { icon: '🛡️', title: 'Extended Warranty', desc: 'New warranty tier products that needed consolidated case history.' },
  ];
  return (
    <div className="rounded-2xl p-5" style={{ background: '#F8FAFF', border: '1px solid #DBEAFE' }}>
      <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#1D4ED8' }}>FEATURES THIS UNLOCKED</p>
      <div className="space-y-3">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-3">
            <span className="text-lg flex-shrink-0 mt-0.5">{f.icon}</span>
            <div>
              <p className="font-semibold text-sm" style={{ color: '#0A2342' }}>{f.title}</p>
              <p className="text-sm" style={{ color: '#6B7280' }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   LEARNINGS
───────────────────────────────────────────── */
function LearningsTab() {
  const cards = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="#0A2342" strokeWidth="1.5" />
          <path d="M7 10l2 2 4-4" stroke="#0A2342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      heading: 'The problem was in the data model',
      body: "The hardest part of this project was not the code. It was seeing that the problem lived in the data model, and then convincing the people who ran warranty every day to change how they worked.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="4" width="14" height="12" rx="2" stroke="#0A2342" strokeWidth="1.5" />
          <path d="M7 8h6M7 12h4" stroke="#0A2342" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      heading: 'Cross-team projects fail quietly in chat',
      body: "Writing things down early felt slow at the time. It was the fastest thing we could have done. A change this large needed a single written source of truth before anyone touched a keyboard.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3C6.13 3 3 6.13 3 10s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z" stroke="#0A2342" strokeWidth="1.5" />
          <path d="M10 7v3l2 2" stroke="#0A2342" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      heading: 'Start from the customer\'s view',
      body: "They never had three issues. They had one car that needed fixing. Every system decision downstream of that insight became simpler once we held onto that frame.",
    },
  ];

  return (
    <div className="space-y-4">
      {cards.map((c) => (
        <div
          key={c.heading}
          className="rounded-2xl p-6"
          style={{ background: '#FFFFFF', border: '1px solid #E8E2D9' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#F1F5F9' }}>
              {c.icon}
            </div>
            <h3 className="font-semibold text-sm" style={{ color: '#0A2342' }}>{c.heading}</h3>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{c.body}</p>
        </div>
      ))}
    </div>
  );
}
