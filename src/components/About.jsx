import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-28 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg-alt))]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[hsl(var(--text))] tracking-tight">About</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-[hsl(var(--text-soft))] text-sm leading-relaxed animate-slide-up">
            <p>
              I am <strong className="text-[hsl(var(--primary))] font-semibold">Adamu Baba Sodiq</strong>, a full‑stack developer building scalable, performant and accessible web products end‑to‑end. I work across modern frontend frameworks (React, Next.js, Angular, Vue) and backend stacks (Node.js/Express, PHP/Laravel) with both SQL & NoSQL persistence.
            </p>
            <p>
              I focus on crafting responsive interfaces, clean API boundaries, and performance optimizations (lazy loading, code‑splitting, caching). I value maintainability, clarity, and measurable outcomes—turning product requirements into robust shipping code.
            </p>
            <p>
              Recent work includes food delivery flows, fitness data integration, realtime news ingestion, and educational landing experiences—each emphasizing responsiveness, accessibility, and fast iteration.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-[hsl(var(--border))] bg-white/70 backdrop-blur p-4 animate-slide-up animation-delay-200">
              <p className="text-xs font-mono tracking-widest text-[hsl(var(--primary))] mb-3">Core Strengths</p>
              <ul className="space-y-2 text-[hsl(var(--text-soft))] text-sm list-disc list-inside marker:text-[hsl(var(--primary))]/70">
                <li>Full-stack delivery</li>
                <li>API design & integration</li>
                <li>Performance & accessibility</li>
                <li>Responsive UI systems</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[hsl(var(--border))] bg-white/70 backdrop-blur p-4 animate-slide-up animation-delay-400">
              <p className="text-xs font-mono tracking-widest text-[hsl(var(--primary))] mb-3">Soft Skills</p>
              <ul className="space-y-2 text-[hsl(var(--text-soft))] text-sm list-disc list-inside marker:text-[hsl(var(--primary))]/70">
                <li>Collaboration & communication</li>
                <li>Problem solving</li>
                <li>Adaptability</li>
                <li>Knowledge sharing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
