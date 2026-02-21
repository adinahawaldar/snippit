import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, ChevronUp, Command, Globe, Activity, Fingerprint, Cpu, Layout } from 'lucide-react';

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative w-full py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#050505] z-0" />
      
      <div className="absolute inset-0 bg-[#050505] z-[-1]" />

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 0)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              
              <span className="text-xl font-bold tracking-tighter text-white uppercase italic">Snippit<span className="text-blue-500">.</span></span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
              The unified registry for high-performance UI components, AI frameworks, and architectural research.
            </p>
            <div className="flex gap-4">
               {[
                 { Icon: Github, link: "https://github.com/adinahawaldar" },
                 { Icon: Twitter, link: "https://x.com/adina_hawaldar" },
                 { Icon: Linkedin, link: "https://www.linkedin.com/in/adina-hawaldar-17az6/" }
               ].map(({ Icon, link }, i) => (
                 <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.05] text-zinc-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 shadow-xl">
                    <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <FooterColumn title="Interfaces" links={[
                { label: 'SaaS Startups', to: '/saasstarter' }, 
                { label: 'Landing Pages', to: '/landing-pages' }, 
                { label: 'UI Snippets', to: '/uicomponents' }
            ]} />
            <FooterColumn title="Development" links={[
                { label: 'AI Toolkit', to: '/ai-toolkit' }, 
                { label: 'Open Source', to: '/project-registry' }, 
                { label: 'Publications', to: '/publication' }
            ]} />
            <FooterColumn title="System" links={[
                { label: 'About', to: '/about' },
                { label: 'License Key', to: '/license-page' }, 
                { label: 'Terms', to: '/terms' }
            ]} />
          </div>
        </div>

        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/20 via-zinc-800 to-amber-500/20 mb-12 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-6 px-8 py-5 bg-[#0a0a0a] rounded-[calc(1rem-1px)]">
            
            <div className="flex items-center gap-10">
              <StatusItem icon={<Activity size={14} className="text-emerald-500"/>} label="Network" value="Encrypted" />
              <StatusItem icon={<Cpu size={14} className="text-blue-500"/>} label="AI_Node" value="Operational" />
              <StatusItem icon={<Command size={14} className="text-amber-500"/>} label="Registry" value="Public_Access" />
            </div>

            <div className="hidden md:flex flex-col items-end border-l border-zinc-900 pl-10">
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Live_Sync_Time</span>
              <span className="text-xs font-mono text-zinc-400 tracking-tighter">{time.toLocaleTimeString()}</span>
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-900 pt-10">
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.4em]">
            © 2026 Developed by <Link to="/about" className="hover:text-white transition-colors underline decoration-blue-500/30 underline-offset-8">Adina Hawaldar</Link>
          </p>
          
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-[10px] font-bold text-zinc-600 hover:text-white uppercase tracking-widest transition-colors">Privacy_Protocol</Link>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-zinc-600 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest group"
            >
              Back_To_Top <ChevronUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-6">
    <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-2">
      <div className="w-1 h-1 bg-blue-500 rounded-full" /> {title}
    </h4>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link to={link.to} className="text-zinc-500 hover:text-blue-400 text-sm transition-all duration-200 block hover:translate-x-1">
              {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const StatusItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="p-2 bg-zinc-900 border border-white/5 rounded-lg shadow-inner">{icon}</div>
    <div className="flex flex-col">
      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-tight mb-1">{label}</span>
      <span className="text-[11px] font-black text-zinc-300 uppercase tracking-tighter">{value}</span>
    </div>
  </div>
);

export default Footer;