import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Fingerprint, Cpu, 
  Database, ShieldAlert, Hash, Plus, LayoutGrid
} from 'lucide-react';

const ResearchArchive = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);

  const categories = [
    { name: 'All', icon: <LayoutGrid size={12} /> },
    { name: 'AI & Neural', icon: <Cpu size={12} /> },
    { name: 'Blockchain', icon: <Database size={12} /> },
    { name: 'Cybersecurity', icon: <ShieldAlert size={12} /> },
  ];

  const publications = [
    {
      title: "Agentic AI Systems",
      desc: "Frameworks for autonomous reasoning and task execution in digital environments.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
      link: "https://arxiv.org/pdf/2404.11584.pdf",
      category: "AI & Neural",
      id: "arXiv:2404.11"
    },
    {
      title: "BitVM Protocols",
      desc: "Complex smart contracts and computation on the Bitcoin network layers.",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
      link: "https://bitvm.org/bitvm.pdf",
      category: "Blockchain",
      id: "BIT-2023.01"
    },
    {
      title: "DeepExploit Security",
      desc: "Utilizing Reinforcement Learning for automated penetration testing and defense.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      link: "https://arxiv.org/pdf/1809.01212.pdf",
      category: "Cybersecurity",
      id: "SEC:882.04"
    },
    {
      title: "Mamba Architectures",
      desc: "Breakthrough linear-time sequence modeling challenging Transformer standards.",
      img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
      link: "https://arxiv.org/pdf/2312.00752.pdf",
      category: "AI & Neural",
      id: "arXiv:2312.00"
    },
    {
      title: "Zero Knowledge Proofs",
      desc: "Advanced cryptographic methods for privacy-preserving verifiable computation.",
      img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800",
      link: "#",
      category: "Blockchain",
      id: "ZKP-092.1"
    },
    {
      title: "Neural World Models",
      desc: "Training agents in simulated realities to learn physical world representations.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800",
      link: "https://arxiv.org/pdf/2402.04391.pdf",
      category: "AI & Neural",
      id: "arXiv:2402.04"
    }
  ];

  const filteredPapers = activeCategory === 'All' 
    ? publications 
    : publications.filter(p => p.category === activeCategory);

  const handleLoadMore = () => setVisibleCount(prev => prev + 3);

  return (
    <div className="bg-[#050505] min-h-screen text-zinc-400 font-sans selection:bg-blue-500/30 relative">
      
      {/* --- BACKGROUND BLOOM --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px]" />
      </div>

      <main className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        
        {/* --- HEADER (LICENSE STYLE) --- */}
        <header className="mb-12 border-b border-zinc-900 pb-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-black uppercase tracking-widest text-blue-500">
              Intelligence Registry
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Research <span className="text-zinc-700">Archive.</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-2xl">
            A curated index of breakthrough publications in autonomous systems, blockchain, and security.
          </p>
        </header>

        {/* --- CATEGORY TABS --- */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => { setActiveCategory(cat.name); setVisibleCount(3); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat.name 
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                : "bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:border-zinc-600"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* --- 3-COLUMN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode='popLayout'>
            {filteredPapers.slice(0, visibleCount).map((paper, i) => (
              <motion.div
                key={paper.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-[#0a0a0a] border border-zinc-900 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 flex flex-col shadow-2xl"
              >
                {/* Image Section (Full Color) */}
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src={paper.img} 
                    alt={paper.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <div className="px-2 py-1 rounded bg-black/50 backdrop-blur-md border border-white/10 text-[8px] font-black text-white uppercase tracking-widest">
                      {paper.category}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Hash size={10} className="text-blue-500" />
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{paper.id}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6 leading-relaxed line-clamp-2">
                    {paper.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={paper.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                      Access Paper <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- LOAD MORE --- */}
        {visibleCount < filteredPapers.length && (
          <div className="flex justify-center border-t border-zinc-900 pt-12">
            <button 
              onClick={handleLoadMore}
              className="flex items-center gap-3 px-10 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <Plus size={14} /> Load More Registry
            </button>
          </div>
        )}

        {/* --- FOOTER REGISTRY --- */}
        <footer className="mt-32 pt-8 border-t border-zinc-900 flex justify-between items-center opacity-30">
          <div className="flex items-center gap-3">
            <Fingerprint size={16} className="text-zinc-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Registry_Node_882</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
            Snippit // 2026
          </span>
        </footer>

      </main>
    </div>
  );
};

export default ResearchArchive;