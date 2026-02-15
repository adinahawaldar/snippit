import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Command, Github, Menu, X, Layers, Cpu, Globe, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] flex justify-center p-4 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          relative pointer-events-auto flex items-center justify-between
          px-4 py-2 rounded-2xl border transition-all duration-500 w-full
          ${scrolled || mobileOpen
            ? 'max-w-4xl bg-[#0a0a0a]/90 border-white/10 backdrop-blur-xl shadow-2xl' 
            : 'max-w-7xl bg-transparent border-transparent'
          }
        `}
      >
        {/* BRAND / LOGO */}
        <div className="flex items-center gap-3 z-[110]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
            <Terminal size={18} strokeWidth={3} />
          </div>
          <span className="text-sm font-black tracking-tighter text-white uppercase hidden xs:block">
            Snippit<span className="text-blue-500">.</span>io
          </span>
        </div>

        {/* CENTER NAV (Desktop Only) */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
          <NavLink label="Nodes" active />
          <NavLink label="AI Hub" />
          <NavLink label="Ecosystem" />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 z-[110]">
          <button className="px-4 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg">
            Join Beta
          </button>

          {/* Hamburger Toggle */}
          <button 
            className="md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* --- COMPACT MOBILE MENU --- */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              // absolute top-[calc(100%+8px)] forces it just below the navbar
              className="absolute top-[calc(100%+8px)] left-0 right-0 p-3 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl md:hidden z-[101] shadow-2xl backdrop-blur-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-1">
                <MobileLink icon={<Layers size={16}/>} label="Registry Nodes" />
                <MobileLink icon={<Cpu size={16}/>} label="Neural Hub" />
                <MobileLink icon={<Globe size={16}/>} label="Ecosystem" />
                <div className="h-px bg-white/5 my-2 mx-2" />
                <div className="p-3 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-blue-400 tracking-tighter uppercase">Network Status</span>
                    <span className="text-xs font-bold text-white uppercase">Operational</span>
                  </div>
                  <ArrowRight size={16} className="text-blue-400" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

// Sub-components
const NavLink = ({ label, active = false }) => (
  <button className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all
    ${active ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}>
    {label}
  </button>
);

const MobileLink = ({ icon, label }) => (
  <button className="flex items-center gap-3 w-full p-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
    <span className="p-2 bg-white/5 rounded-lg group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-colors">
      {icon}
    </span>
    <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
  </button>
);

export default Navbar;