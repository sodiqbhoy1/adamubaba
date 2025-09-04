import React from 'react';

const projects = [
  {
    title: 'FoodExpress – Full‑Stack Delivery App',
    description: 'End‑to‑end ordering: menu browsing, cart, order placement with REST APIs and MongoDB persistence.',
    stack: ['React', 'Express', 'MongoDB', 'Tailwind'],
    year: '2025',
    highlight: 'Responsive UX',
    demo: 'https://foodexpress-neon.vercel.app/', // add your live demo URL
    code: 'https://github.com/sodiqbhoy1/foodexpress'  // add your GitHub repo URL
  },
  {
    title: 'Justice Nathan Hecht — Official Website',
    description: 'Informational website for a judge with clear bio, updates, and contact. Fully responsive and accessible; the client confirmed satisfaction with no issues.',
    stack: ['React', 'Vite', 'Tailwind'],
    year: '2025',
    highlight: 'Client Satisfaction',
    demo: 'https://www.justicenathanhecht.net/', // live demo provided by client
  
  },
  {
    title: 'Fitzone Fitness App',
    description: 'Next.js fitness platform with real‑time workout data & personalized recommendations via external APIs.',
    stack: ['Next.js', 'Tailwind', 'API'],
    year: '2025',
    highlight: 'API Integration',
    demo: 'https://fitzone-seven.vercel.app/',
    code: 'https://github.com/sodiqbhoy1/fitzone'
  },
  {
    title: 'News Portal',
    description: 'Real‑time news feed consuming third‑party API with performant list rendering & accessibility focus.',
    stack: ['React', 'Tailwind', 'API'],
    year: '2024',
    highlight: 'Live Data',
    demo: 'https://news-portal-coral.vercel.app/',
    code: 'https://github.com/sodiqbhoy1/NewsPortal'
  },
  {
    title: 'SQI Landing Clone',
    description: 'Pixel‑perfect responsive clone emphasizing semantic HTML, CSS architecture & mobile performance.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    year: '2024',
    highlight: 'Pixel Perfect',
    demo: 'https://sodiqbhoy1.github.io/SQI/',
    code: 'https://github.com/sodiqbhoy1/SQI'
  }
];

const ExternalIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M14 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L20 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M20 14v6H4V4h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg-alt))]">
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'linear-gradient(to bottom,hsla(var(--navy-700)/0.06),transparent)'}} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[hsl(var(--text))] tracking-tight">Selected Projects</h2>
            <p className="mt-4 text-[hsl(var(--text-soft))] max-w-2xl leading-relaxed">Representative builds demonstrating API integration, performance, and responsive UI engineering. Add your live demo and GitHub links below each project.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-sm font-medium text-[hsl(var(--accent))] hover:underline">Have a project? →</a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p,i) => {
            const hasDemo = Boolean(p.demo);
            const hasCode = Boolean(p.code);
            return (
              <article key={p.title} className="group relative rounded-2xl border border-[hsl(var(--border))] bg-white/70 backdrop-blur hover:shadow-lg hover:shadow-[rgba(0,0,0,.06)] transition-all p-6 flex flex-col overflow-hidden animate-slide-up" style={{animationDelay: `${0.08*i}s`}}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage:'radial-gradient(circle at 30% 20%,hsla(var(--accent)/0.18) 0,transparent 60%)'}} />

                {/* Header */}
                <header className="relative z-10 flex items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="text-xs font-mono tracking-widest text-[hsl(var(--text-soft))] opacity-70">{p.year}</p>
                    <h3 className="mt-1 text-xl font-semibold text-[hsl(var(--text))]">{p.title}</h3>
                  </div>
                  <span className="shrink-0 text-[10px] uppercase tracking-wider bg-[hsl(var(--accent-soft))] border border-[hsl(var(--accent-border))] px-2 py-1 rounded text-[hsl(var(--accent))]">{p.highlight}</span>
                </header>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[hsl(var(--text-soft))] relative z-10">{p.description}</p>

                {/* Stack */}
                <ul className="mt-6 flex flex-wrap gap-2 relative z-10">
                  {p.stack.map(s => (
                    <li key={s} className="text-[11px] tracking-wide bg-[hsl(var(--primary-soft))] border border-[hsl(var(--border))] rounded px-2 py-1 text-[hsl(var(--primary))]">{s}</li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="mt-8 relative z-10 flex items-center gap-3">
                  <a
                    href={hasDemo ? p.demo : undefined}
                    target={hasDemo ? "_blank" : undefined}
                    rel={hasDemo ? "noopener noreferrer" : undefined}
                    aria-disabled={!hasDemo}
                    className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition ${hasDemo ? 'bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent-hover))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))/40]' : 'bg-[hsl(var(--accent-soft))] text-[hsl(var(--text-soft))] cursor-not-allowed'}`}
                    title={hasDemo ? 'Open live demo' : 'Add your demo link in code'}
                  >
                    Demo
                    <ExternalIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={hasCode ? p.code : undefined}
                    target={hasCode ? "_blank" : undefined}
                    rel={hasCode ? "noopener noreferrer" : undefined}
                    aria-disabled={!hasCode}
                    className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition ${hasCode ? 'bg-white text-[hsl(var(--accent))] ring-1 ring-[hsl(var(--accent-border))] hover:bg-[hsl(var(--accent-soft))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))/30]' : 'bg-white text-[hsl(var(--text-soft))] ring-1 ring-[hsl(var(--border))] cursor-not-allowed'}`}
                    title={hasCode ? 'Open GitHub repository' : 'Add your GitHub link in code'}
                  >
                    GitHub
                    <ExternalIcon className="w-4 h-4" />
                  </a>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent))/45] to-transparent" />
              </article>
            )
          })}
        </div>

        {/* Optional: All projects link */}
        <div className="mt-14 text-right">
          <a href="https://github.com/sodiqbhoy1?tab=repositories" className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--accent))] hover:underline">
            View more on GitHub <ExternalIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
