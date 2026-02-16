import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, FileText, ExternalLink, 
  Fingerprint, Zap, Globe, Cpu, Book
} from 'lucide-react';

const ResearchPublication = () => {
  const trendingPapers = [
    {
      title: "The Landscape of Agentic AI Systems",
      desc: "A comprehensive framework defining how autonomous agents reason, plan, and execute tasks.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", 
      link: "https://arxiv.org/pdf/2404.11584.pdf",
      tag: "Agentic AI",
      id: "arXiv:2404.11584"
    },
    {
      title: "World Models: Training Agents in Simulated Realities",
      desc: "Deep dive into how neural networks learn internal representations of the physical world.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800",
      link: "https://arxiv.org/pdf/2402.04391.pdf",
      tag: "World Models",
      id: "arXiv:2402.04391"
    },
    {
      title: "Mamba: Linear-Time Sequence Modeling",
      desc: "The breakthrough architecture challenging Transformers for the future of LLMs.",
      img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800",
      link: "https://arxiv.org/pdf/2312.00752.pdf",
      tag: "Neural Arch",
      id: "arXiv:2312.00752"
    },
    {
      title: "Generative Agents: Simulation of Human Behavior",
      desc: "The foundational 'Smallville' paper on creating believable autonomous social agents.",
      img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800",
      link: "https://arxiv.org/pdf/2304.03442.pdf",
      tag: "Simulation",
      id: "arXiv:2304.03442"
    }
  ];

  return (
    <div className="bg-[#020202] min-h-screen text-white font-sans selection:bg-blue-500/30 relative">
      
      {/* --- BACKGROUND DEPTH --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-12 pb-32 relative z-10">
        
        {/* --- BACK BUTTON --- */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/" className="group inline-flex items-center gap-3 mb-16 px-4 py-1.5 rounded-lg border border-white/5 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all">
            <ArrowLeft className="text-zinc-500 group-hover:text-white transition-all" size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">System_Hub</span>
          </Link>
        </motion.div>

        {/* --- HEADER --- */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
            <span className="text-[9px] font-mono text-blue-400 uppercase tracking-[0.4em]">Intelligence Feed // 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Trending <br /> <span className="text-zinc-800 font-outline text-6xl md:text-8xl">Research.</span>
          </h1>
        </header>

        {/* --- COMPACT GALLERY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trendingPapers.map((paper, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 min-h-[220px]"
            >
              {/* Image Section */}
              <div className="w-full md:w-48 shrink-0 relative overflow-hidden bg-zinc-900 border-r border-white/5">
                <img 
                  src={paper.img} 
                  alt={paper.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase">{paper.id}</span>
                    <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[7px] font-black text-blue-400 uppercase tracking-widest">
                      {paper.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-blue-400 transition-colors">
                    {paper.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 italic mb-6">
                    "{paper.desc}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors"
                  >
                    View Full Paper <ExternalLink size={12} />
                  </a>
                  <div className="opacity-0 group-hover:opacity-100 transition-all">
                    <Zap size={14} className="text-blue-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SIGNATURE --- */}
        <div className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center opacity-30">
          <div className="flex items-center gap-3">
            <Fingerprint size={16} />
            <span className="text-[9px] font-mono uppercase tracking-widest">Adina Hawaldar // Intelligence Archive</span>
          </div>
          <span className="text-[9px] font-mono uppercase tracking-widest">2026.SYS</span>
        </div>
      </main>

      <style>{`
        .font-outline { -webkit-text-stroke: 1px currentColor; color: transparent; }
      `}</style>
    </div>
  );
};

export default ResearchPublication;