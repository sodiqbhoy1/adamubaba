import React from 'react';

const roles = [
  {
    company: 'EFDI Oyo',
    role: 'Web Developer Tutor',
    period: '2025 — Present',
    bullets: [
      'Teach modern web fundamentals (HTML, CSS, JavaScript) with practical exercises.',
      'Introduce React basics and component-driven thinking for beginners.',
      'Guide students through small projects and code reviews to build confidence.'
    ]
  },
  {
    company: 'TechRise (NAOS × Oyo Tech Hub)',
    role: 'Web Development Trainer',
    period: 'Aug 2025 · 1 week',
    bullets: [
      'Delivered a one‑week web development program for candidates.',
      'Covered core topics: semantic HTML, responsive CSS, and JavaScript essentials.',
      'Facilitated hands‑on sessions where attendees built a simple responsive site.'
    ]
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2023 — Present',
    bullets: [
      'Build landing pages and small business websites based on client requirements.',
      'Integrate forms, basic animations, and deploy to Vercel/Netlify.',
      'Provide maintenance and iterative improvements based on feedback.'
    ]
  },
  {
    company: 'Private Tutoring',
    role: 'Web Development Tutor',
    period: '2023 — Present',
    bullets: [
      'Offer one‑on‑one lessons tailored to each learner’s level and goals.',
      'Create simple projects to practice skills and track progress over time.',
      'Support with troubleshooting and study plans between sessions.'
    ]
  },
  {
    company: 'The Experts Schools, Awe, Oyo State',
    role: 'Computer Science Teacher',
    period: '2021 · 1 year',
    bullets: [
      'Taught computer basics and introductory programming to secondary school students.',
      'Prepared lesson notes and ran practical sessions in the computer lab.',
      'Helped students with assignments and digital literacy skills.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg))]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[hsl(var(--text))] tracking-tight">Experience</h2>
        <p className="mt-4 text-[hsl(var(--text-soft))] max-w-xl leading-relaxed">Tutoring, training, and client work focused on helping people learn and shipping useful websites.</p>
        <div className="mt-14 space-y-10">
          {roles.map((r,i) => (
            <div key={r.company + r.role} className="relative rounded-xl border border-[hsl(var(--border))] bg-white/70 backdrop-blur p-6 hover:shadow-md hover:shadow-[rgba(0,0,0,.05)] transition-colors animate-slide-up" style={{animationDelay:`${0.1*i}s`}}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--text))]">{r.role}</h3>
                  <p className="mt-1 text-[hsl(var(--text-soft))] text-sm">{r.company}</p>
                </div>
                <p className="text-xs font-mono tracking-widest text-[hsl(var(--text-soft))] md:text-right">{r.period}</p>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-[hsl(var(--text-soft))] leading-relaxed list-disc list-inside marker:text-[hsl(var(--primary))]/60">
                {r.bullets.map((b,idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
