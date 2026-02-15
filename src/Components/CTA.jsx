import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <section className="relative py-24 px-6 bg-[#020202] flex justify-center items-center overflow-hidden">
      
      {/* 1. THE FLOATING BOX */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
      >
        
        {/* --- GRADIENT & TEXTURE LAYER --- */}
        <div className="absolute inset-0 z-0">
          {/* Base Mesh Gradient */}
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(37,99,235,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(79,70,229,0.1)_0%,transparent_50%)]" />
          
          {/* Grain/Noise Texture (CSS Filter) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          
          {/* Subtle Grid Line */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="relative z-10 px-8 py-16 md:py-24 flex flex-col items-center">
          
          {/* Animated Glow Icon */}
          <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30 mb-8 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          >
            <Sparkles className="text-blue-400" size={28} />
          </motion.div>

          {/* Main Action Text (Replaced Heading with "Instructional" Typography) */}
          <div className="text-center mb-12">
            <h3 className="text-zinc-400 font-mono text-xs uppercase tracking-[0.5em] mb-4">
              Access the registry
            </h3>
            <p className="text-white text-2xl md:text-3xl font-medium tracking-tight max-w-lg">
              Deployment-ready infrastructure for <br /> 
              <span className="text-zinc-500 italic">modern development workflows.</span>
            </p>
          </div>

          {/* --- THE BUTTONS --- */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
            <button className="group relative w-full sm:w-auto px-12 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Explore All Resources
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all">
              Documentation
            </button>
          </div>

          {/* Technical Metadata Footer */}
          <div className="mt-16 flex items-center gap-8 opacity-40 group-hover:opacity-60 transition-opacity">
            <div className="flex items-center gap-2 text-[9px] font-mono text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              REGISTRY_UP_TO_DATE
            </div>
            <div className="h-4 w-[1px] bg-white/20" />
            <div className="text-[9px] font-mono text-white tracking-widest uppercase">
              Build_104.2
            </div>
          </div>
        </div>

        {/* Outer Glow Reflection (Inside the card edges) */}
        <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none" />
      </motion.div>

      {/* Extreme Background Blur (Under the Box) */}
      <div className="absolute -bottom-20 w-3/4 h-32 bg-blue-600/10 blur-[100px] rounded-full opacity-50" />
    </section>
  );
};

export default FloatingCTA;