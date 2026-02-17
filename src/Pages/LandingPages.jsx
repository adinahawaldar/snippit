import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Figma, ExternalLink, Layout, 
  Fingerprint, Monitor, Smartphone, 
  Layers, MousePointer2, Plus
} from 'lucide-react';

const UIVault = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    { name: 'All', icon: <Layers size={12} /> },
    { name: 'SaaS', icon: <Monitor size={12} /> },
    { name: 'Mobile', icon: <Smartphone size={12} /> },
    { name: 'Landing', icon: <Layout size={12} /> },
  ];

  const designs = [
    {
      name: "Nexus Dashboard",
      desc: "An obsidian-themed analytics interface for high-frequency trading.",
      img: "https://images.unsplash.com/photo-1614332284683-51bbe302962f?q=80&w=800",
      figma: "https://figma.com/",
      live: "https://nexus-ui.com/",
      category: "SaaS"
    },
    {
      name: "Aether Crypto",
      desc: "Minimalist mobile wallet interface with biometric authentication flows.",
      img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800",
      figma: "https://figma.com/",
      live: "https://aether.io/",
      category: "Mobile"
    },
    {
      name: "Solstice Landing",
      desc: "High-conversion product page for AI-driven hardware startups.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
      figma: "https://figma.com/",
      live: "https://solstice.design/",
      category: "Landing"
    },
    {
      name: "Ghost Framework",
      desc: "A developer-first component library with brutalist aesthetics.",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800",
      figma: "https://figma.com/",
      live: "https://ghost.dev/",
      category: "SaaS"
    },
    {
      name: "Vortex NFT",
      desc: "Dark-mode marketplace focused on generative art collections.",
      img: "https://images.unsplash.com/photo-1642104704074-907c0698bcd9?q=80&w=800",
      figma: "https://figma.com/",
      live: "https://vortex.art/",
      category: "Landing"
    },
    {
      name: "Pulse Health",
      desc: "Telemedicine mobile app focused on elderly accessibility.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
      figma: "https://figma.com/",
      live: "https://pulse.app/",
      category: "Mobile"
    }
  ];

  const filteredDesigns = activeCategory === 'All' 
    ? designs 
    : designs.filter(d => d.category === activeCategory);

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-400 font-sans selection:bg-blue-500/30 relative">
      
      {/* --- BACKGROUND BLOOM --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-500/5 blur-[120px]" />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* --- HEADER (License Style) --- */}
        <header className="mb-16 border-b border-zinc-900 pb-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <div className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-black uppercase tracking-widest text-indigo-500">
              Creative Division
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
            UI Vault <span className="text-zinc-700">Exploration.</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-2xl">
            A precision-engineered collection of digital interfaces, prototypes, and landing page architectures.
          </p>
        </header>

        {/* --- CATEGORY SELECTOR --- */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mr-4">Filter_By:</span>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => { setActiveCategory(cat.name); setVisibleCount(6); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === cat.name 
                ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.1)]" 
                : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode='popLayout'>
            {filteredDesigns.slice(0, visibleCount).map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative flex flex-col bg-zinc-900/20 rounded-[2rem] border border-zinc-900 overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
              >
                {/* Image Section with Overlay */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  {/* Glass Action Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                    <a href={item.figma} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#F24E1E] text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                      <Figma size={14} /> Open Figma
                    </a>
                    <a href={item.live} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                      <ExternalLink size={14} /> Live View
                    </a>
                  </div>
                  <div className="absolute top-6 left-6">
                    <div className="px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[8px] font-black text-white uppercase tracking-[0.2em]">
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8 border-t border-zinc-900 bg-black/40">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">{item.name}</h3>
                    <MousePointer2 size={16} className="text-zinc-800 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- LOAD MORE --- */}
        {visibleCount < filteredDesigns.length && (
          <div className="flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="group flex items-center gap-4 px-12 py-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
            >
              <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" /> 
              Deploy More Units
            </button>
          </div>
        )}

        {/* --- FOOTER REGISTRY --- */}
        <footer className="mt-40 pt-10 border-t border-zinc-900 flex justify-between items-center opacity-30">
          <div className="flex items-center gap-3">
            <Fingerprint size={16} className="text-zinc-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Design_Protocol_Registry</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
            Snippit // Creative // 2026
          </span>
        </footer>

      </main>
    </div>
  );
};

export default UIVault;