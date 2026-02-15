import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Globe, Monitor, Layout, Sparkles } from 'lucide-react';

const ProductExplorer = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] py-24 px-6">
      {/* Structural Grid - Stronger visibility */}
      <div className="absolute inset-0 opacity-[0.2]" 
           style={{ backgroundImage: `radial-gradient(#333 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with high contrast */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/30 bg-blue-500/10 mb-6">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">System Registry</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            See what you <span className="text-zinc-500">want.</span>
          </h2>
        </div>

        {/* 4 Pillars - High Visibility Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. SAAS STARTERS */}
          <RegistryCard 
            title="SaaS Starters"
            tag="Templates"
            icon={<Zap size={18} className="text-amber-400" />}
            link="/starters"
            // High contrast white interior
            preview={
              <div className="w-full h-full bg-[#E5E7EB] rounded-t-xl p-4 shadow-2xl border-t border-x border-white">
                <div className="h-3 w-16 bg-white rounded-full mb-4" />
                <div className="space-y-2">
                  <div className="h-10 w-full bg-blue-500/20 rounded border border-blue-500/30" />
                  <div className="h-10 w-full bg-white rounded border border-zinc-300" />
                </div>
              </div>
            }
          />

          {/* 2. LANDING PAGES */}
          <RegistryCard 
            title="Landing Pages"
            tag="UI Designs"
            icon={<Monitor size={18} className="text-blue-400" />}
            link="/landing-pages"
            preview={
              <div className="w-full h-full bg-[#f3f4f6] rounded-t-xl overflow-hidden border-t border-x border-white">
                <motion.div 
                  animate={{ y: [0, -60, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="p-3 space-y-3"
                >
                  <div className="h-20 w-full bg-white rounded-lg shadow-sm border border-zinc-200" />
                  <div className="h-20 w-full bg-white rounded-lg shadow-sm border border-zinc-200" />
                  <div className="h-20 w-full bg-white rounded-lg shadow-sm border border-zinc-200" />
                </motion.div>
              </div>
            }
          />

          {/* 3. UI SNIPPETS */}
          <RegistryCard 
            title="UI Snippets"
            tag="Components"
            icon={<Layout size={18} className="text-purple-400" />}
            link="/ui-snippets"
            preview={
              <div className="flex flex-col items-center justify-center h-full gap-4 bg-[#f9fafb] rounded-t-xl border-t border-x border-white">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-zinc-900 text-white text-[10px] font-bold rounded shadow-xl border border-white/20"
                >
                  BUTTON_UI
                </motion.div>
                <div className="w-20 h-2 bg-blue-500 rounded-full" />
              </div>
            }
          />

          {/* 4. OPEN SOURCE */}
          <RegistryCard 
            title="Open Source"
            tag="Projects"
            icon={<Globe size={18} className="text-green-400" />}
            link="/projects"
            preview={
              <div className="w-full h-full bg-[#111] rounded-t-xl p-4 border-t border-x border-white/10 font-mono">
                <div className="flex gap-2 mb-3">
                   <div className="w-2 h-2 rounded-full bg-red-500" />
                   <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <p className="text-[10px] text-green-400 leading-tight tracking-tighter">
                  $ npm install @snpt/core<br/>
                  <span className="text-white">Done in 0.8s</span>
                </p>
                <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div animate={{ x: [-100, 100] }} transition={{ duration: 2, repeat: Infinity }} className="h-full w-1/3 bg-blue-500" />
                </div>
              </div>
            }
          />

        </div>
      </div>
    </section>
  );
};

const RegistryCard = ({ title, tag, icon, preview, link }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group flex flex-col bg-[#1a1a1a] border border-white/10 rounded-[2rem] p-2 hover:border-blue-500/50 transition-all duration-300"
  >
    {/* Preview Stage - High visibility container */}
    <div className="h-52 bg-[#222] rounded-[1.8rem] overflow-hidden flex items-end justify-center pt-8 border border-white/5 relative">
       {/* Glow effect behind preview */}
       <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
       
       <div className="w-[85%] relative z-10 transition-transform duration-500 group-hover:scale-105">
         {preview}
       </div>
    </div>

    {/* Info Area */}
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
         <span className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:bg-blue-500/10 transition-colors">{icon}</span>
         <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{tag}</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{title}</h3>

      <a 
        href={link}
        className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white transition-all duration-300 group/btn"
      >
        <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 group-hover/btn:text-black">
          Open Section
        </span>
        <ArrowUpRight size={16} className="text-zinc-600 group-hover/btn:text-black group-hover/btn:rotate-12 transition-all" />
      </a>
    </div>
  </motion.div>
);

export default ProductExplorer;