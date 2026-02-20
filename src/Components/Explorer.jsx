import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Zap, Globe, Monitor, Layout, 
  Sparkles, Bot, BookOpen, Fingerprint, Activity 
} from 'lucide-react';

const ProductExplorer = () => {
  return (
    <section id="Explorer" className="relative min-h-screen bg-[#050505] py-24 px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#333 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- PROFESSIONAL HEADER --- */}
        <header className="mb-20 border-b border-zinc-900 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">
              System_Resources_v2.0
            </div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
              See what you  
              <span className="text-zinc-700 italic"> Want.</span>
            </h2>
            <div className="hidden lg:block text-right">
              
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. SAAS STARTERS */}
          <RegistryCard 
            title="SaaS Starters"
            tag="Templates"
            color="blue"
            icon={<Zap size={16} />}
            link="/saasstarter"
            preview={
              <div className="relative w-full h-full flex flex-col gap-2 p-2">
                <div className="flex gap-1 mb-1">
                  <div className="w-8 h-1.5 rounded-full bg-blue-500/40" />
                  <div className="w-4 h-1.5 rounded-full bg-zinc-800" />
                </div>
                <div className="h-10 w-full bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm" />
                <div className="h-20 w-full bg-blue-500/10 rounded-lg border border-blue-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
                </div>
              </div>
            }
          />

          {/* 2. LANDING PAGES */}
          <RegistryCard 
            title="Landing Pages"
            tag="UI Designs"
            color="red"
            icon={<Monitor size={16} />}
            link="/landing-pages"
            preview={
              <div className="relative w-full h-full p-2 flex gap-2">
                <div className="flex-1 bg-red-500/10 rounded-xl border border-red-500/20 overflow-hidden">
                   <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="w-full h-8 bg-red-500/20" />
                </div>
                <div className="w-16 h-full bg-white/5 rounded-xl border border-white/10" />
              </div>
            }
          />

          {/* 3. AI TOOLKIT */}
          <RegistryCard 
            title="AI Toolkit"
            tag="Neural Logic"
            color="cyan"
            icon={<Bot size={16} />}
            link="/ai-toolkit"
            preview={
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
                <div className="grid grid-cols-3 gap-1.5 relative z-10">
                  {[...Array(9)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      className="w-4 h-4 rounded-sm bg-cyan-400/30 border border-cyan-400/20" 
                    />
                  ))}
                </div>
              </div>
            }
          />

          {/* 4. UI SNIPPETS */}
          <RegistryCard 
            title="UI Snippets"
            tag="Components"
            color="purple"
            icon={<Layout size={16} />}
            link="/uicomponents"
            preview={
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
                <div className="px-4 py-2 bg-zinc-900 border border-purple-500/30 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                   <span className="text-[9px] font-mono text-purple-300">import {'{ motion }'}</span>
                </div>
                <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-purple-500/50" />
                   <div className="w-8 h-2 rounded-full bg-white/5" />
                </div>
              </div>
            }
          />

          {/* 5. PUBLICATIONS */}
          <RegistryCard 
            title="Publications"
            tag="Reserch"
            color="indigo"
            icon={<BookOpen size={16} />}
            link="/publication"
            preview={
              <div className="w-full h-full p-4 flex flex-col gap-3">
                <div className="h-1.5 w-full bg-white/10 rounded" />
                <div className="flex-1 bg-white/5 rounded-lg border border-white/10 p-2">
                   <div className="w-full h-full border-t border-l border-white/10 rounded-sm" />
                </div>
              </div>
            }
          />

          {/* 6. OPEN SOURCE */}
          <RegistryCard 
            title="Open Source"
            tag="Projects"
            color="emerald"
            icon={<Globe size={16} />}
            link="/project-registry"
            preview={
              <div className="w-full h-full p-3 font-mono">
                <div className="flex justify-between mb-3 text-[7px] text-zinc-500">
                  <span>ROOT/DEV/BIN</span>
                  <Activity size={8} />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-emerald-500/20 rounded" />
                  <div className="h-1.5 w-[80%] bg-emerald-500/10 rounded" />
                  <div className="h-1.5 w-[60%] bg-white/5 rounded" />
                </div>
              </div>
            }
          />

        </div>
      </div>
    </section>
  );
};

const RegistryCard = ({ title, tag, icon, preview, link, color }) => {
  const themes = {
    blue: "from-blue-600/20 via-blue-500/5 to-transparent border-blue-500/20 text-blue-400",
    red: "from-red-600/20 via-red-500/5 to-transparent border-red-500/20 text-red-400",
    cyan: "from-cyan-600/20 via-cyan-500/5 to-transparent border-cyan-500/20 text-cyan-400",
    purple: "from-purple-600/20 via-purple-500/5 to-transparent border-purple-500/20 text-purple-400",
    indigo: "from-indigo-600/20 via-indigo-500/5 to-transparent border-indigo-500/20 text-indigo-400",
    emerald: "from-emerald-600/20 via-emerald-500/5 to-transparent border-emerald-500/20 text-emerald-400",
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-2.5 transition-all duration-500 hover:border-white/10"
    >
      <div className={`h-52 rounded-[2.2rem] overflow-hidden flex items-end justify-center border border-white/5 relative bg-gradient-to-br ${themes[color]}`}>
         <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[7px] font-bold text-white/50 uppercase tracking-tighter">
           Preview_Mode
         </div>
         
         <div className="w-[88%] h-[80%] relative z-10 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2">
           {preview}
         </div>

         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent)]" />
      </div>

      {/* --- INFO AREA --- */}
      <div className="p-7">
        <div className="flex items-center gap-3 mb-4">
           <span className={`p-2 bg-zinc-900 border border-white/5 rounded-xl transition-all duration-500 group-hover:bg-white/5 ${themes[color].split(' ').pop()}`}>
             {icon}
           </span>
           <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-600">{tag}</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-1 transition-transform duration-500">{title}</h3>

        <a 
          href={link}
          className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-white hover:border-white transition-all duration-500 group/btn"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover/btn:text-black">
            Execute_Link
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-black/10 transition-colors">
            <ArrowUpRight size={16} className="text-zinc-500 group-hover/btn:text-black transition-all" />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default ProductExplorer;