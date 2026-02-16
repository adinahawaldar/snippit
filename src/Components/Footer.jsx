import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Terminal, ChevronUp, Command, Globe, Activity } from 'lucide-react';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative w-full py-20 px-6 overflow-hidden">
      {/* 1. THE TRANSITION LAYER */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#08080c] z-0" />
      
      {/* 2. MAIN BACKGROUND */}
      <div className="absolute inset-0 bg-[#08080c] z-[-1]" />

      {/* 3. SUBTLE TEXTURE */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-soft-light pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)`, backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* BRAND BLOCK */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="h-10 w-10 flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl group-hover:border-indigo-500/50 transition-all">
                <Terminal size={20} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase italic">Snippit<span className="text-indigo-500">.</span></span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
              The engine for the next generation of web builders. 
              Open source, high-performance, and infinitely scalable.
            </p>
            <div className="flex gap-4">
               {[
                 { Icon: Github, link: "https://github.com/yourusername" },
                 { Icon: Twitter, link: "https://twitter.com/yourusername" },
                 { Icon: Linkedin, link: "https://linkedin.com/in/yourusername" }
               ].map(({ Icon, link }, i) => (
                 <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.05] text-zinc-500 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterColumn title="Registry" links={[
                { label: 'SaaS Pages', to: '/toolkit' }, 
                { label: 'UI Kits', to: '/toolkit' }, 
                { label: 'Blocks', to: '/toolkit' }
            ]} />
            <FooterColumn title="Platform" links={[
                { label: 'CLI Tool', to: '#' }, 
                { label: 'API', to: '#' }, 
                { label: 'Security', to: '#' }
            ]} />
            <FooterColumn title="Docs" links={[
                { label: 'Guide', to: '#' }, 
                { label: 'Reference', to: '#' }, 
                { label: 'Changelog', to: '#' }
            ]} />
            <FooterColumn title="Company" links={[
              { label: 'About', to: '/about' },
              { label: 'Privacy', to: '/privacy' }, 
              { label: 'Terms', to: '/terms' }
            ]} />
          </div>
        </div>

        {/* --- DYNAMIC STATUS BAR --- */}
        <div className="relative p-1 rounded-2xl bg-gradient-to-r from-white/5 via-white/[0.02] to-white/5 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-6 px-8 py-4 bg-[#08080c] rounded-[calc(1rem-1px)]">
            
            <div className="flex items-center gap-8">
              <StatusItem icon={<Activity size={14} className="text-emerald-500"/>} label="System" value="Stable" />
              <StatusItem icon={<Globe size={14} className="text-indigo-500"/>} label="Node" value="Global" />
              <StatusItem icon={<Command size={14} className="text-amber-500"/>} label="Auth" value="Verified" />
            </div>

            <div className="hidden md:flex flex-col items-end">
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Local_Instance_Time</span>
              <span className="text-xs font-mono text-zinc-400">{time.toLocaleTimeString()}</span>
            </div>

          </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
            © 2026 Developed with <span className="text-indigo-500 font-bold">Passion</span> by <Link to="/about" className="hover:text-white transition-colors underline decoration-indigo-500/30 underline-offset-4">Adina Hawaldar</Link>
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest group"
          >
            Terminal_Top <ChevronUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Bottom Corner Glow */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-600/5 blur-[100px] rounded-full" />
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{title}</h4>
    <ul className="flex flex-col gap-2.5">
      {links.map((link) => (
        <li key={link.label}>
          {link.to.startsWith('http') || link.to === '#' ? (
            <a href={link.to} className="text-zinc-500 hover:text-indigo-400 text-sm transition-all duration-200">
                {link.label}
            </a>
          ) : (
            <Link to={link.to} className="text-zinc-500 hover:text-indigo-400 text-sm transition-all duration-200">
                {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const StatusItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="p-1.5 bg-white/5 rounded-md">{icon}</div>
    <div className="flex flex-col">
      <span className="text-[8px] font-mono text-zinc-600 uppercase leading-none mb-1">{label}</span>
      <span className="text-[10px] font-bold text-zinc-300 leading-none">{value}</span>
    </div>
  </div>
);

export default Footer;