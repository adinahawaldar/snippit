import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Fingerprint, FileText, 
  ShieldCheck, Microscope, Cpu, Quote, 
  Share2, Download, Info, Award, ExternalLink,
  Globe
} from 'lucide-react';

const ResearchPublication = () => {
  return (
    <div className="bg-[#020202] min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* --- BACKGROUND: NEURAL DEPTH --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
      </div>

      {/* Reduced max-width to 5xl (approx 1024px) to make the layout more compact */}
      <main className="max-w-5xl mx-auto px-6 pt-12 pb-32 relative z-10">
        
        {/* --- BACK BUTTON --- */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/" className="group inline-flex items-center gap-3 mb-12 px-4 py-1.5 rounded-lg border border-white/5 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all">
            <ArrowLeft className="text-zinc-500 group-hover:text-white transition-all" size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">System_Hub</span>
          </Link>
        </motion.div>

        {/* --- HEADER (Tighter Margins) --- */}
        <header className="mb-12 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
            <span className="text-[9px] font-mono text-blue-400 uppercase tracking-[0.4em]">Report // 2026.02</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none"
          >
            Research <br /> <span className="text-zinc-800 font-outline">Intelligence.</span>
          </motion.h1>
        </header>

        {/* --- COMPACT PUBLICATION CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#0a0a0a] border border-white/10 rounded-[1.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl items-stretch min-h-[500px]"
        >
          {/* LEFT SIDEBAR (Narrowed) */}
          <div className="w-full lg:w-64 bg-[#0d0d0d] border-r border-white/5 p-8 flex flex-col justify-between shrink-0">
            <div className="space-y-10">
              <div>
                <p className="text-[9px] font-mono text-zinc-600 uppercase mb-3 tracking-widest opacity-70">Source ID</p>
                <p className="text-[11px] font-black text-white font-mono flex items-center gap-2">
                  <Globe size={10} className="text-blue-500" /> arXiv:2401.03428
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-500/80" size={18} />
                  <div>
                    <p className="text-[8px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">Status</p>
                    <p className="text-[10px] text-zinc-400 font-bold">Verified Paper</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Microscope className="text-blue-500/80" size={18} />
                  <div>
                    <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest leading-none mb-1">Field</p>
                    <p className="text-[10px] text-zinc-400 font-bold">Neural Systems</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="text-purple-500/80" size={18} />
                  <div>
                    <p className="text-[8px] font-black text-purple-500 uppercase tracking-widest leading-none mb-1">Computing</p>
                    <p className="text-[10px] text-zinc-400 font-bold">Cluster H100</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5">
              <div className="flex justify-between text-zinc-600 mb-4">
                <Share2 size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
                <Download size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
                <Info size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
              <p className="text-[7px] font-mono text-zinc-700 tracking-tighter uppercase">Adina Hawaldar // Intelligence Node</p>
            </div>
          </div>

          {/* MAIN CONTENT AREA (Reduced Padding) */}
          <div className="flex-1 p-8 md:p-12 relative bg-gradient-to-br from-white/[0.01] to-transparent flex flex-col justify-center">
            {/* Watermark Icon (Scaled down) */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.01] rotate-12 pointer-events-none">
              <FileText size={200} />
            </div>

            <div className="max-w-xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                 <Award size={12} className="text-blue-400" />
                 <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest">Featured Report</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
                Autonomous <span className="text-blue-500 font-outline">Neural Agents:</span> Cognitive Orchestration.
              </h2>

              <div className="flex items-start gap-4 mb-8 bg-white/[0.02] p-6 rounded-[1.2rem] border border-white/5 border-l-2 border-l-blue-500 backdrop-blur-sm">
                <Quote className="text-blue-500/30 shrink-0" size={20} />
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed italic">
                  "Exploring the transition from static automation to autonomous agents executing entire engineering cycles."
                </p>
              </div>

              {/* ACTION (Properly Aligned Link) */}
              <div className="flex">
                <a 
                  href="https://arxiv.org/pdf/2401.03428.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-lg"
                >
                  Download PDF 
                  <ExternalLink size={14} className="group-hover:rotate-45 transition-transform" />
                  <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-blue-500/50 scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MINIMAL SIGNATURE */}
        <div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center opacity-20 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-2">
              <Fingerprint size={12} />
              <span className="text-[8px] font-mono uppercase tracking-widest">Registry_Node_01</span>
           </div>
           <span className="text-[8px] font-mono uppercase tracking-widest">2026 // ADINA HAWALDAR</span>
        </div>
      </main>

      <style>{`
        .font-outline { -webkit-text-stroke: 1px currentColor; color: transparent; }
      `}</style>
    </div>
  );
};

export default ResearchPublication;