import React from 'react';
import Me from "../assets/me.png"

const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-[hsl(var(--bg))]">
      {/* background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[hsl(var(--bg-alt))] to-white" />
        <div className="absolute inset-0 opacity-60 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, hsla(var(--navy-700)/0.15) 0, transparent 55%), radial-gradient(circle at 80% 60%, hsla(var(--accent)/0.15) 0, transparent 60%)' }} />
      </div>
           {/* Hero Content with top padding offset for fixed nav */}
      <div className="max-w-7xl mx-auto px-6 pt-40 md:pt-48 pb-28 md:pb-40 flex flex-col md:flex-row md:items-center gap-16">
        <div className="flex-1 max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-border))] bg-[hsl(var(--accent-soft))] text-[hsl(var(--accent))] px-4 py-1 text-[11px] uppercase tracking-widest mb-4 animate-fade-in">
            Available for work
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight bg-gradient-to-br from-[hsl(var(--text))] via-[hsl(var(--text))] to-[hsl(var(--accent))] bg-clip-text text-transparent animate-slide-up">
            ADAMU Baba Sodiq
          </h1>
          <p className="mt-3 text-base text-[hsl(var(--text-soft))]">Full‑Stack Developer</p>
          <p className="mt-5 text-lg text-[hsl(var(--text-soft))] leading-relaxed animate-slide-up animation-delay-200">
            I design responsive interfaces, craft clean APIs, and optimize delivery pipelines across React, Next.js, Angular, Vue, Express, Laravel, MongoDB & MySQL.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-slide-up animation-delay-400">
            <a href="#projects" className="px-6 py-3 rounded-md bg-[hsl(var(--accent))] text-white font-medium text-sm tracking-wide hover:bg-[hsl(var(--accent-hover))] hover:-translate-y-0.5 hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))/40]" aria-label="View projects">View Projects</a>
            <a href="#contact" className="px-6 py-3 rounded-md bg-white ring-1 ring-[hsl(var(--border))] text-[hsl(var(--text))]/80 font-medium text-sm tracking-wide hover:bg-[hsl(var(--primary-soft))] hover:text-[hsl(var(--text))] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))/30]" aria-label="Contact me">Contact</a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-[hsl(var(--text-soft))] text-xs animate-slide-up animation-delay-600">
            {([
              { label: 'Projects Shipped', value: '10+' },
              { label: 'Stacks Used', value: '8+' },
              { label: 'UI Clones', value: '5+' },
              { label: 'APIs Integrated', value: '12+' }
            ]).map(stat => (
              <div key={stat.label}>
                <p className="text-xl font-semibold text-[hsl(var(--text))]">{stat.value}</p>
                <p className="mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Portrait on the right */}
        <div className="flex-1 flex items-center justify-center relative animate-scale-in animation-delay-400">
          <div className="relative">
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_60%_40%,hsla(var(--accent)/0.15),transparent_60%)]" />
            <img
              src={Me}
              alt="Portrait of Adamu Baba Sodiq"
              className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover object-center shadow-2xl ring-4 ring-white/70"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[hsl(var(--accent))/20] blur-2xl" />
          <div className="pointer-events-none absolute -right-6 -bottom-10 h-40 w-40 rounded-full bg-[hsl(var(--accent))/20] blur-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
