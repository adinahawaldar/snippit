import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <section className="relative py-24 px-6 bg-[#050505] flex justify-center items-center overflow-hidden">
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
      >
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(37,99,235,0.12)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(79,70,229,0.08)_0%,transparent_50%)]" />
          
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
          />
          
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
          />
        </div>

        <div className="relative z-10 px-8 py-16 md:py-24 flex flex-col items-center">
          
          <motion.div 
             animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 mb-8 shadow-[0_0_30px_rgba(37,99,235,0.15)]"
          >
            <Sparkles className="text-blue-400" size={24} />
          </motion.div>

          <div className="text-center mb-12">
            
            <p className="text-white text-2xl md:text-4xl font-bold tracking-tighter max-w-xl leading-tight">
              Infrastructure for <br /> 
              <span className="text-zinc-600 italic font-medium">modern development workflows.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center relative z-20">
            <button className="group relative w-full sm:w-auto px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]">
              <span
  onClick={() =>
    document.getElementById("Explorer")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="flex items-center justify-center gap-3 cursor-pointer"
>
  Explore Resources
  <ArrowRight
    size={14}
    className="transition-transform group-hover:translate-x-1"
  />
</span>

            </button>
            
            <button
              onClick={() => window.open("https://github.com/adinahawaldar/snippit", "_blank")}
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Contribute
            </button>
          </div>

         
        </div>

        <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none" />
      </motion.div>

      <div className="absolute -bottom-10 w-1/2 h-32 bg-blue-600/5 blur-[100px] rounded-full opacity-50 pointer-events-none" />
    </section>
  );
};

export default FloatingCTA;