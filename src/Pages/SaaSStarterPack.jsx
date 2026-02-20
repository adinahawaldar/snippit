import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Globe, Zap, Shield, X, Rocket } from 'lucide-react';

const SaaSLaunchpad = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const starters = [
    {
      id: "velocity",
      name: "Velocity Core",
      desc: "High-performance infrastructure layout with split-hero conversion.",
      img: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=600&auto=format&fit=crop",
      color: "bg-blue-600",
      content: "Full Velocity Template Logic..." 
    },
    {
      id: "neural",
      name: "Neural AI",
      desc: "Modern dark-mesh theme optimized for AI/ML product launches.",
      img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format&fit=crop",
      color: "bg-purple-600",
      content: "Full Neural AI Template Logic..."
    },
    {
      id: "fintech",
      name: "Nexus Fintech",
      desc: "Clean, trustworthy financial interface with high-density data blocks.",
      img: "https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=600&auto=format&fit=crop",
      color: "bg-emerald-500",
      content: "Full Fintech Template Logic..."
    },
    {
      id: "agency",
      name: "Studio Lab",
      desc: "Minimalist portfolio structure for creative agencies and studios.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      color: "bg-white",
      content: "Full Agency Template Logic..."
    },
    {
      id: "devtool",
      name: "Terminal Pro",
      desc: "Developer-first landing page with code-centric content blocks.",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=600&auto=format&fit=crop",
      color: "bg-zinc-700",
      content: "Full DevTool Template Logic..."
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen py-24 px-6 text-zinc-400 font-sans selection:bg-blue-500/30">
      
      {/* 1. SECTION HEADLINE */}
      <header className="max-w-7xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <Sparkles size={12} className="text-blue-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Starter Pack v2.0</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight italic">SaaS Starters.</h1>
        <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
          Select a foundation to begin your build. Each starter is a <span className="text-zinc-200">Production-Ready</span> landing page.
        </p>
      </header>

      {/* 2. TEMPLATE GRID */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {starters.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
          >
            {/* IMAGE AREA */}
            <div className="h-44 overflow-hidden relative">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 opacity-60 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            </div>

            {/* CONTENT AREA */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-white font-black italic text-lg tracking-tight uppercase mb-2">
                {item.name}
              </h3>
              <p className="text-[10px] text-zinc-500 leading-relaxed font-bold uppercase tracking-wide mb-6">
                {item.desc}
              </p>
              
              {/* BUTTON TO SEE WHOLE */}
              <button 
                onClick={() => setSelectedTemplate(item)}
                className="mt-auto w-full py-3 bg-zinc-800 hover:bg-white text-zinc-400 hover:text-black rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                View Template <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </main>

      {/* 3. FULL SCREEN PORTAL (TEMPLATE VIEW) */}
      <AnimatePresence>
        {selectedTemplate && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[100] bg-black overflow-y-auto"
          >
            {/* PREVIEW TOOLBAR */}
            <nav className="sticky top-0 w-full h-20 bg-black/80 backdrop-blur-xl border-b border-white/5 px-10 flex items-center justify-between z-50">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSelectedTemplate(null)}
                  className="p-3 bg-zinc-900 rounded-full text-white hover:bg-zinc-800 transition-all"
                >
                  <X size={20} />
                </button>
                <div className="text-white font-black italic text-xl uppercase tracking-tighter">
                  {selectedTemplate.name} <span className="text-zinc-700 ml-2">Starter</span>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-blue-500/20">
                Copy Template Code
              </button>
            </nav>

            {/* TEMPLATE CONTENT PLACEHOLDER */}
            <div className="pt-32 pb-20 px-10 max-w-6xl mx-auto text-center">
              <div className={`w-24 h-24 ${selectedTemplate.color} rounded-[2rem] mx-auto mb-10 shadow-2xl`} />
              <h1 className="text-7xl font-black text-white mb-8 tracking-tighter italic uppercase leading-none">
                Start your <br /> next project here.
              </h1>
              <p className="text-zinc-500 text-xl max-w-2xl mx-auto leading-relaxed mb-20">
                This template is pre-configured with the specific sections, animations, and color tokens for <span className="text-white italic">{selectedTemplate.name}</span>.
              </p>
              
              {/* EXAMPLE SECTIONS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="h-96 bg-zinc-900 rounded-[3rem] border border-white/5" />
                <div className="h-96 bg-zinc-900 rounded-[3rem] border border-white/5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SaaSLaunchpad;