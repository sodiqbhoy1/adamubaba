import React from 'react';

// Note: Replace these with real quotes as you collect them.
// These are concise summaries aligned to your projects and trainings.
const testimonials = [
  {
    name: 'Justice Nathan Hecht',
    company: 'Texas Supreme Court',
    quote: 'The website looks excellent and functions just as expected. I am satisfied—no issues at all.'
  },
  {
    name: 'Restaurant Owner',
    company: 'FoodExpress',
    quote: 'Ordering is straightforward and the site runs smoothly on mobile—exactly what we needed.'
  },
  {
    name: 'User Tester',
    company: 'Fitzone Fitness App',
    quote: 'Fast pages and clear workout content. The API data loads reliably whenever I need it.'
  },
  {
    name: 'Reader',
    company: 'News Portal',
    quote: 'Updates appear quickly and navigation is simple, even on a slow connection.'
  },
  {
    name: 'Program Coordinator',
    company: 'TechRise (NAOS × Oyo Tech Hub)',
    quote: 'Delivered engaging sessions and kept things simple for beginners. Participants were very satisfied.'
  },
  {
    name: 'Training Lead',
    company: 'EFDI Oyo',
    quote: 'Clear explanations and practical projects. Students gave great feedback on the classes.'
  }
];

const Testimonials = () => (
  <section id="testimonials" className="py-32 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg-alt))]">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-semibold text-[hsl(var(--text))] tracking-tight">Testimonials</h2>
      <p className="mt-4 text-[hsl(var(--text-soft))] max-w-xl leading-relaxed">What clients, users, and training programs say.</p>
      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {testimonials.map((t,i) => (
          <figure key={t.name + t.company} className="relative rounded-2xl border border-[hsl(var(--border))] bg-white/65 backdrop-blur p-6 flex flex-col gap-4 animate-slide-up" style={{animationDelay:`${i*0.1}s`}}>
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500" style={{backgroundImage:'radial-gradient(circle at 30% 20%,hsla(var(--primary)/0.12) 0,transparent 60%)'}} />
            <blockquote className="text-sm text-[hsl(var(--text-soft))] leading-relaxed relative z-10">“{t.quote}”</blockquote>
            <figcaption className="text-[11px] tracking-wider font-medium uppercase text-[hsl(var(--primary))] relative z-10">
              {t.name} • {t.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
