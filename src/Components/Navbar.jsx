import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Menu, X, BookOpen, 
  Cpu, Newspaper, Home, Zap 
} from 'lucide-react';

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
            ? 'max-w-4xl bg-[#0a0a0a]/80 border-white/10 backdrop-blur-xl shadow-2xl' 
            : 'max-w-7xl bg-transparent border-transparent'
          }
        `}
      >
        {/* LEFT: BRAND */}
        <Link to="/" className="flex items-center gap-3 z-[110] min-w-[120px]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <Terminal size={18} strokeWidth={3} />
          </div>
          <span className="text-sm font-black tracking-tighter text-white uppercase hidden xs:block">
            Snippit<span className="text-blue-500">.</span>io
          </span>
        </Link>

        {/* CENTER NAV (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/10 backdrop-blur-lg shadow-xl">
          <NavLink label="Home" to="/" />
          <NavLink label="Resources" to="/resources" />
          <NavLink label="AI Toolkit" to="/ai-toolkit" />
          <NavLink label="Publications" to="/publications" />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center justify-end gap-2 z-[110] min-w-[120px]">
          <Link
            to="/resources"
            className="hidden sm:flex px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] active:scale-95"
          >
            Explore
          </Link>

          {/* Hamburger */}
          <button 
            className="md:hidden p-2 text-white bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 transition-colors backdrop-blur-md"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="absolute top-[calc(100%+8px)] left-0 right-0 p-3 bg-white/5 border border-white/10 rounded-2xl md:hidden z-[101] shadow-2xl backdrop-blur-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-1">
                <MobileLink to="/" icon={<Home size={16}/>} label="Home" />
                <MobileLink to="/resources" icon={<BookOpen size={16}/>} label="Resources" />
                <MobileLink to="/ai-toolkit" icon={<Cpu size={16}/>} label="AI Toolkit" />
                <MobileLink to="/publications" icon={<Newspaper size={16}/>} label="Publications" />

                <div className="h-px bg-white/10 my-2 mx-2" />

                <Link to="/resources" className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-xl flex items-center justify-between group cursor-pointer hover:border-blue-500/50 transition-all backdrop-blur-md">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-blue-400 tracking-tighter uppercase mb-0.5">Network Node</span>
                    <span className="text-xs font-bold text-white uppercase">Explore Resources</span>
                  </div>
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <Zap size={14} fill="white" />
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

// Desktop NavLink
const NavLink = ({ label, to }) => (
  <Link
    to={to}
    className="relative px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-300 text-zinc-300 hover:text-white hover:bg-white/10"
  >
    {label}
  </Link>
);

// Mobile NavLink
const MobileLink = ({ icon, label, to }) => (
  <Link
    to={to}
    className="flex items-center gap-3 w-full p-3 text-zinc-300 hover:text-white hover:bg-white/10 rounded-xl transition-all group"
  >
    <span className="p-2 bg-white/10 rounded-lg group-hover:text-blue-400 group-hover:bg-blue-400/20 transition-all duration-300">
      {icon}
    </span>
    <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
  </Link>
);

export default Navbar;
