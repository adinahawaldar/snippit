import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Search, Command, Cpu, Zap, Sparkles, 
  ArrowLeft
} from 'lucide-react';

const AIToolkitHero = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center bg-[#020202] overflow-hidden px-6 pb-20 pt-32">
      
      {/* --- BACK NAVIGATION (Safe below Navbar) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-28 left-6 lg:left-12 z-40"
      >
        <button 
          onClick={() => window.history.back()}
          className="group flex items-center gap-4 transition-all"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
            <ArrowLeft size={16} className="text-zinc-500 group-hover:text-blue-400 transition-colors" />
            <div className="absolute inset-0 rounded-full bg-blue-500/20 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
          
          <div className="flex flex-col items-start leading-none">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-zinc-400 transition-colors">Return to</span>
            <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">System Hub</span>
          </div>
        </button>
      </motion.div>

      {/* --- BACKGROUND ELEMENTS (Now Blue) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#555 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        
        {/* Animated Badge (Blue) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-8"
        >
          <Sparkles size={12} className="text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
            Neural Infrastructure v1.0
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase mb-8 leading-[0.9]"
        >
          AI Toolkit for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800">
            Builders.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-zinc-500 text-sm md:text-base font-medium leading-relaxed mb-12"
        >
          Discover the best AI tools mapped to real development, design, and startup tasks — 
          <span className="text-zinc-300"> so you choose faster and build smarter.</span>
        </motion.p>

        {/* --- SEARCH / COMMAND BAR (Blue Focus) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto w-full group"
        >
          <div className={`relative flex items-center transition-all duration-500 rounded-2xl border ${isFocused ? 'border-blue-500/50 bg-blue-500/5 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'border-white/10 bg-white/5'}`}>
            <div className="pl-5 text-zinc-500">
              <Search size={18} className={isFocused ? 'text-blue-400' : ''} />
            </div>
            
            <input 
              type="text"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="What task are you building today?"
              className="w-full bg-transparent border-none focus:ring-0 py-5 px-4 text-white placeholder:text-zinc-600 text-sm font-medium"
            />

            <div className="pr-4 hidden md:flex items-center gap-1.5">
              <kbd className="flex items-center justify-center w-5 h-5 rounded bg-white/5 border border-white/10 text-[10px] text-zinc-500 font-mono italic">
                <Command size={10} />
              </kbd>
              <kbd className="flex items-center justify-center w-5 h-5 rounded bg-white/5 border border-white/10 text-[10px] text-zinc-500 font-mono italic">
                K
              </kbd>
            </div>
          </div>

          {/* Quick Filter Tags (Blue Hover) */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['Code Gen', 'Design UI', 'Copywriting', 'SEO', 'Data'].map((tag) => (
              <button 
                key={tag}
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 border border-white/5 px-4 py-1.5 rounded-full hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/20 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Micro Stats */}
        <div className="mt-16 flex items-center justify-center gap-10 opacity-40">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-white" />
            <span className="text-[10px] font-mono text-white tracking-tighter uppercase">50+ Verified Models</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-white" />
            <span className="text-[10px] font-mono text-white tracking-tighter uppercase">No-Code Workflows</span>
          </div>
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default AIToolkitHero;