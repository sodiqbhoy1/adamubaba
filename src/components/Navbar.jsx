import React, { useState } from 'react'

const links = ['About','Projects','Case-Studies','Stack','Highlights','Experience','Testimonials','Contact']

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(v => !v)
  const handleClose = () => setOpen(false)

  return (
    <>
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 border-b border-[hsl(var(--border))] supports-[backdrop-filter]:bg-white/65">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-[hsl(var(--accent))] font-semibold tracking-wide text-lg">&lt;AdamuBaba /&gt;</span>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8 text-sm text-[hsl(var(--text-soft))]">
              {links.map((i) => (
                <a key={i} href={`#${i.toLowerCase()}`} className="hover:text-[hsl(var(--text))] transition-colors">
                  {i.replace('-', ' ')}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a href="#contact" className="hidden md:inline-block rounded-md bg-[hsl(var(--accent))] text-white font-medium px-4 py-2 text-sm shadow-sm hover:bg-[hsl(var(--accent-hover))] transition focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))/40]">Hire Me</a>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[hsl(var(--border))] bg-white text-[hsl(var(--text))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))/40]"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={handleToggle}
            >
              {/* Icon */}
              <span className="sr-only">Toggle menu</span>
              {open ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>

          {/* Mobile dropdown */}
          <div id="mobile-menu" className={`${open ? 'block' : 'hidden'} md:hidden mt-3 border-t border-[hsl(var(--border))] bg-white rounded-b-md shadow-sm`}>
            <div className="px-4 py-3 flex flex-col gap-2">
              {links.map((i) => (
                <a
                  key={i}
                  href={`#${i.toLowerCase()}`}
                  onClick={handleClose}
                  className="py-2 text-[hsl(var(--text))] text-sm hover:text-[hsl(var(--accent))]"
                >
                  {i.replace('-', ' ')}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleClose}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[hsl(var(--accent))] text-white font-medium px-3 py-2 text-sm hover:bg-[hsl(var(--accent-hover))]"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
