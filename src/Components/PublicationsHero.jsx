import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Hash, Microscope } from 'lucide-react';

const ResearchBrief = () => {
  return (
    <div className="bg-[#050505] min-h-screen py-20 px-6 relative overflow-hidden">
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px]" />
      </div>

      <main className="max-w-4xl mx-auto relative z-10">
        
        <header className="mb-12 border-b border-zinc-900 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-black uppercase tracking-widest text-blue-500">
              Technical Publication
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Research <span className="text-zinc-700">Intelligence.</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed font-medium">
            A concise index of whitepapers and neural research focused on the evolution of autonomous engineering.
          </p>
        </header>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="group bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all shadow-2xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center shrink-0">
                <Microscope size={20} className="text-blue-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">arXiv:2401.03428</span>
                </div>
                <h3 className="text-md font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                  Autonomous Neural Agents
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <a 
                href="https://arxiv.org/pdf/2401.03428.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-lg"
              >
                View PDF <ExternalLink size={12} />
              </a>
            </div>

          </div>
        </motion.div>

        <footer className="mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center opacity-30">
          <div className="flex items-center gap-3">
            <Hash size={16} className="text-zinc-500" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Research_Registry_Node</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
            Snippit // 2026
          </span>
        </footer>

      </main>
    </div>
  );
};

export default ResearchBrief;