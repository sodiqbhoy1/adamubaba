import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const phoneNumber = '2348062587958'; // TODO: replace with your WhatsApp number in international format without +
  const mailTo = 'adamubabasodiq@gmail.com'; // TODO: replace with your email address

  const buildWhatsAppUrl = () => {
    const text = `Hello, I am ${name} (${email}).%0A%0A${message}`;
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent('New inquiry from portfolio');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    return `mailto:${mailTo}?subject=${subject}&body=${body}`;
  };

  const onWhatsApp = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    window.open(buildWhatsAppUrl(), '_blank');
  };

  const onEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    window.location.href = buildMailtoUrl();
  };

  return (
    <section id="contact" className="py-28 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg))] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 70% 30%,#5d78ff1a 0,transparent 60%)'}} />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[hsl(var(--text))] tracking-tight animate-slide-up">Let\'s build something</h2>
        <p className="mt-4 text-[hsl(var(--text-soft))] max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">Open to freelance engagements, product collaborations, and engineering consulting. Send a short brief and I\'ll reply within 24h.</p>
        <form className="mt-14 grid gap-6 text-left animate-slide-up animation-delay-400">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[hsl(var(--text-soft))]" htmlFor="name">Name</label>
              <input id="name" value={name} onChange={(e)=>setName(e.target.value)} required type="text" className="bg-white/80 border border-[hsl(var(--border))] rounded-md px-4 py-3 text-sm text-[hsl(var(--text))] placeholder:text-[hsl(var(--text-soft))]/60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/40]" placeholder="Jane Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-[hsl(var(--text-soft))]" htmlFor="email">Email</label>
              <input id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" className="bg-white/80 border border-[hsl(var(--border))] rounded-md px-4 py-3 text-sm text-[hsl(var(--text))] placeholder:text-[hsl(var(--text-soft))]/60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/40]" placeholder="you@mail.com" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-[hsl(var(--text-soft))]" htmlFor="message">Project / Message</label>
            <textarea id="message" value={message} onChange={(e)=>setMessage(e.target.value)} required rows={5} className="bg-white/80 border border-[hsl(var(--border))] rounded-md px-4 py-3 text-sm text-[hsl(var(--text))] placeholder:text-[hsl(var(--text-soft))]/60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/40] resize-y" placeholder="Describe what you need help building..." />
          </div>
          <div className="flex flex-wrap gap-3 justify-start">
            <button onClick={onWhatsApp} className="bg-[hsl(var(--accent))] text-white font-medium text-sm px-6 py-3 rounded-md hover:bg-[hsl(var(--accent-hover))] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))/40]">Send via WhatsApp</button>
            <button onClick={onEmail} className="bg-[hsl(var(--primary))] text-white font-medium text-sm px-6 py-3 rounded-md hover:brightness-110 transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/40]">Send via Email</button>
          </div>
        </form>
        <p className="mt-16 text-[hsl(var(--text-soft))] text-xs tracking-wider">© {new Date().getFullYear()} ADAMU Baba Sodiq — Built with React & Tailwind</p>
      </div>
    </section>
  );
};

export default Contact;
