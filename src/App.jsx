import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
  <div className="font-sans bg-[hsl(var(--bg))] text-[hsl(var(--text))] selection:bg-[hsl(var(--primary))] selection:text-white scroll-smooth">
      <Navbar/>
      <Hero />
      <main id="main">
        <About />
        <Projects />
        <CaseStudies />
        <TechStack />
        <Achievements />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 hidden sm:flex flex-col gap-3">
        <a href="#projects" className="group h-11 w-11 rounded-full bg-neutral-900/70 border border-neutral-700 backdrop-blur flex items-center justify-center hover:border-neutral-500 transition-colors" aria-label="Jump to projects">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 group-hover:bg-neutral-100" />
        </a>
        <a href="#contact" className="group h-11 w-11 rounded-full bg-neutral-900/70 border border-neutral-700 backdrop-blur flex items-center justify-center hover:border-neutral-500 transition-colors" aria-label="Jump to contact">
          <span className="h-4 w-4 border border-neutral-500 group-hover:border-neutral-300 rounded-sm" />
        </a>
      </div>
    </div>
  );
};

export default App;
