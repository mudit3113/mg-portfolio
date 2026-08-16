const columns = [
  {
    title: 'FRONTEND',
    items: [
      'React, Next.js',
      'JavaScript, TypeScript',
      'HTML, CSS, Tailwind',
      'Performance optimisation',
      'SEO architecture',
      'Code splitting, lazy loading',
      'Component libraries & design systems',
    ],
  },
  {
    title: 'BACKEND & DATA',
    items: [
      'Node.js, Python',
      'SQL, NLP',
      'REST APIs',
      'Supabase, Vercel',
      'Deployment pipelines',
      'AWS, cloud solutions',
      'Server-side & client-side caching',
    ],
  },
  {
    title: 'AI & TOOLS',
    items: [
      'LLM integration (Claude, GPT-4, Gemini)',
      'Agentic AI system design',
      'Prompt engineering & token optimisation',
      'AI-powered workflow automation',
      'Voicebot & chatbot product design',
      'RAG architecture & evaluation',
      'Conversation design & multi-language AI',
      'AI product scoping & MVP build',
      'Claude Code & Cursor (AI-native dev)',
      'AI screening & evaluation systems',
      'GenAI tool adoption & team enablement',
    ],
  },
  {
    title: 'PRODUCT & OPS',
    items: [
      'Product roadmapping & OKR design',
      'PRDs, user stories, sprint execution',
      '0-to-1 product scoping & MVP definition',
      'Feature prioritisation (RICE, MoSCoW)',
      'Go-to-market strategy',
      'User research & discovery',
      'A/B testing & beta rollouts',
      'Cross-functional team leadership',
      'KPI design & product metrics',
      'Release management & production sanity',
      'Specifications-driven PDLC',
      'Customer journey mapping',
      'Stakeholder communication',
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest mb-4" style={{ color: '#E57200' }}>
          04 — Stack
        </p>
        <h2
          className="font-serif-display font-bold mb-3"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#002469' }}
        >
          The Toolkit.
        </h2>
        <p className="mb-12 max-w-xl" style={{ color: '#6B7280', fontSize: '1rem' }}>
          Five years of stacking skills across engineering, product, and operations. Now using all of them in the same week.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <p
                className="text-xs font-bold tracking-widest mb-4 pb-3"
                style={{ color: '#002469', borderBottom: '2px solid #002469' }}
              >
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#E57200' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#1A1A1A' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
