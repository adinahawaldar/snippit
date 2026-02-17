import React from 'react';
import { motion } from 'framer-motion'; // Fixed Import
import { Trophy, ArrowUpRight, Crown, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const HonorRegistry = () => {
  const winningIdeas = [
    {
      rank: "National Rank #1",
      title: "Bio-Neural Core",
      event: "Innovation Summit 2025",
      desc: "Translating synaptic impulses into binary commands with sub-10ms latency.",
      img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800",
      id: "ARCH_01"
    },
    {
      rank: "Grand Winner",
      title: "Aether Grid",
      event: "Global Green Tech",
      desc: "P2P energy distribution using localized blockchain ledger protocols.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800",
      id: "ARCH_02"
    },
    {
      rank: "Gold Distinction",
      title: "Vision Sentinel",
      event: "Cyber Security Expo",
      desc: "AI-driven perimeter defense utilizing multi-spectral computer vision.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      id: "ARCH_03"
    }
  ];

  return (
    <section className="py-32 bg-[#020202] relative overflow-hidden">
      {/* --- GRID BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <header className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-500 uppercase tracking-[0.5em] mb-6"
          >
            <Sparkles size={12} /> Excellence Registry
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Vanguard <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-800">Archive.</span>
          </h2>
        </header>

        {/* --- THE NEXT-LEVEL GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 perspective-1000">
          {winningIdeas.map((idea, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              {/* Floating Rank Badge */}
              <motion.div 
                className="absolute -top-4 -right-2 z-30 transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-6 shadow-2xl"
              >
                <div className="bg-white text-black px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-[10px] font-black uppercase tracking-tighter flex items-center gap-2">
                    <Trophy size={12} /> {idea.rank}
                  </span>
                </div>
              </motion.div>

              {/* Main Card Body */}
              <div className="relative aspect-[3/4.5] bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-4 backdrop-blur-3xl overflow-hidden transition-all duration-700 group-hover:border-amber-500/30 group-hover:bg-zinc-900/60">
                
                {/* Visual Prism (Asymmetric Image) */}
                <div className="relative h-[60%] w-full rounded-[2rem] overflow-hidden mb-6 origin-bottom transition-all duration-700 group-hover:scale-[1.05] group-hover:-rotate-2">
                  <img 
                    src={idea.img} 
                    alt={idea.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                </div>

                {/* Text Content */}
                <div className="px-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={10} className="text-amber-500" />
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{idea.id}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white leading-none mb-3 group-hover:text-amber-500 transition-colors uppercase italic tracking-tighter">
                    {idea.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed font-medium mb-8 line-clamp-2">
                    {idea.desc}
                  </p>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/5">
                    <a href={idea.link} className="inline-flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-widest group-hover:gap-5 transition-all">
                      Intel Brief <ArrowUpRight size={14} className="text-amber-500" />
                    </a>
                  </div>
                </div>

                {/* Tech Seal Background Effect */}
                <ShieldCheck className="absolute -bottom-10 -left-10 text-white/[0.02] -rotate-12 group-hover:rotate-0 transition-transform duration-1000" size={200} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default HonorRegistry;