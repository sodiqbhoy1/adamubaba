import React from 'react';

const categories = [
  { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'Next.js'] },
  { label: 'Backend', items: ['PHP', 'Express', 'Laravel', 'Node.js'] },
  { label: 'Databases', items: ['MySQL', 'MongoDB', 'Firebase'] },
  { label: 'Integrations', items: ['Paystack', 'REST APIs', 'Auth', 'Webhooks'] },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-28 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg-alt))]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[hsl(var(--text))] tracking-tight">Stack & Expertise</h2>
        <p className="mt-4 text-[hsl(var(--text-soft))] max-w-xl leading-relaxed">Core technologies & platforms I use to design, build and ship performant products.</p>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat,i) => (
            <div key={cat.label} className="group relative rounded-xl border border-[hsl(var(--border))] bg-white/70 backdrop-blur p-5 hover:shadow-md hover:shadow-[rgba(0,0,0,.05)] transition-colors overflow-hidden animate-slide-up" style={{animationDelay:`${0.05*i}s`}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{backgroundImage:'radial-gradient(circle at 20% 20%,#5d78ff14 0,transparent 55%)'}} />
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[hsl(var(--primary))] mb-4 relative z-10">{cat.label}</h3>
              <ul className="space-y-2 relative z-10">
                {cat.items.map(i => (
                  <li key={i} className="text-[hsl(var(--text-soft))] text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]/60" />{i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
