import React from 'react';

const Footer = () => (
  <footer className="mt-32 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg))] py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[hsl(var(--text-soft))] text-sm">
      <p>© {new Date().getFullYear()} Adamu, Baba Sodiq. All rights reserved.</p>
      <ul className="flex flex-wrap gap-5">
        {['GitHub','Email','Resume'].map(item => (
          <li key={item}><a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">{item}</a></li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
