import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Zap, Globe, Monitor, Layout, 
  Sparkles, Bot, BookOpen 
} from 'lucide-react';

const ProductExplorer = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] py-20 px-6">
      {/* Structural Grid Background */}
      <div className="absolute inset-0 opacity-[0.2]" 
           style={{ backgroundImage: `radial-gradient(#333 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 mb-5">
            <Sparkles size={12} className="text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">System Registry</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            See what you <span className="text-zinc-500">want.</span>
          </h2>
        </div>

        {/* 6 Pillars Grid - Smaller gaps and max width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* 1. SAAS STARTERS */}
          <RegistryCard 
            title="SaaS Starters"
            tag="Templates"
            icon={<Zap size={16} className="text-amber-400" />}
            link="/starters"
            preview={
              <div className="w-full h-full bg-[#E5E7EB] rounded-t-lg p-3 shadow-2xl border-t border-x border-white">
                <div className="h-2 w-12 bg-white rounded-full mb-3" />
                <div className="space-y-1.5">
                  <div className="h-8 w-full bg-blue-500/20 rounded border border-blue-500/30" />
                  <div className="h-8 w-full bg-white rounded border border-zinc-300" />
                </div>
              </div>
            }
          />

          {/* 2. LANDING PAGES */}
          <RegistryCard 
            title="Landing Pages"
            tag="UI Designs"
            icon={<Monitor size={16} className="text-blue-400" />}
            link="/landing-pages"
            preview={
              <div className="w-full h-full bg-[#f3f4f6] rounded-t-lg overflow-hidden border-t border-x border-white">
                <motion.div 
                  animate={{ y: [0, -50, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="p-2 space-y-2"
                >
                  <div className="h-16 w-full bg-white rounded-md shadow-sm border border-zinc-200" />
                  <div className="h-16 w-full bg-white rounded-md shadow-sm border border-zinc-200" />
                  <div className="h-16 w-full bg-white rounded-md shadow-sm border border-zinc-200" />
                </motion.div>
              </div>
            }
          />

          {/* 3. AI TOOLKIT */}
          <RegistryCard 
            title="AI Toolkit"
            tag="Neural Logic"
            icon={<Bot size={16} className="text-red-400" />}
            link="/ai-toolkit"
            preview={
              <div className="w-full h-full bg-[#0f172a] rounded-t-lg p-3 border-t border-x border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/5" />
                <div className="relative flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [15, 30, 15] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                            className="w-1 bg-red-500 rounded-full"
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
            icon={<Layout size={16} className="text-purple-400" />}
            link="/ui-snippets"
            preview={
              <div className="flex flex-col items-center justify-center h-full gap-3 bg-[#f9fafb] rounded-t-lg border-t border-x border-white">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-zinc-900 text-white text-[9px] font-bold rounded shadow-xl border border-white/20"
                >
                  BTN_UI
                </motion.div>
                <div className="w-16 h-1.5 bg-blue-500 rounded-full" />
              </div>
            }
          />

          {/* 5. PUBLICATIONS */}
          <RegistryCard 
            title="Publications"
            tag="Resources"
            icon={<BookOpen size={16} className="text-cyan-400" />}
            link="/publications"
            preview={
              <div className="w-full h-full bg-[#fff] rounded-t-lg p-3 border-t border-x border-zinc-200 relative flex flex-col gap-1.5">
                <div className="h-1.5 w-full bg-zinc-100 rounded-full" />
                <div className="h-1.5 w-3/4 bg-zinc-100 rounded-full" />
                <div className="mt-1 h-20 w-full bg-zinc-50 border border-zinc-100 rounded-md shadow-sm p-1.5">
                    <div className="h-full w-full bg-zinc-200/40 rounded animate-pulse" />
                </div>
              </div>
            }
          />

          {/* 6. OPEN SOURCE */}
          <RegistryCard 
            title="Open Source"
            tag="Projects"
            icon={<Globe size={16} className="text-green-400" />}
            link="/projects"
            preview={
              <div className="w-full h-full bg-[#111] rounded-t-lg p-3 border-t border-x border-white/10 font-mono">
                <div className="flex gap-1.5 mb-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                   <div className="w- green-500" />
                </div>
                <p className="text-[9px] text-green-400 leading-tight tracking-tighter">
                  $ npm i @snpt/core<br/>
                  <span className="text-white">Done 0.8s</span>
                </p>
                <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div animate={{ x: [-80, 80] }} transition={{ duration: 2, repeat: Infinity }} className="h-full w-1/3 bg-blue-500" />
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
    whileHover={{ y: -4 }}
    className="group flex flex-col bg-[#141414] border border-white/5 rounded-[1.8rem] p-1.5 hover:border-blue-500/30 transition-all duration-300"
  >
    {/* Preview Stage - Height reduced from 52 to 44 */}
    <div className="h-44 bg-[#1a1a1a] rounded-[1.5rem] overflow-hidden flex items-end justify-center pt-6 border border-white/5 relative">
       <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
       <div className="w-[82%] relative z-10 transition-transform duration-500 group-hover:scale-105">
         {preview}
       </div>
    </div>

    {/* Info Area - Padding reduced */}
    <div className="p-5">
      <div className="flex items-center gap-2 mb-2">
         <span className="p-1.5 bg-white/5 rounded-md border border-white/5 group-hover:bg-blue-500/10 transition-colors">{icon}</span>
         <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">{tag}</span>
      </div>

      <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{title}</h3>

      <a 
        href={link}
        className="flex items-center justify-between p-3.5 rounded-lg bg-white/5 hover:bg-white transition-all duration-300 group/btn"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover/btn:text-black">
          Explore Hub
        </span>
        <ArrowUpRight size={14} className="text-zinc-600 group-hover/btn:text-black group-hover/btn:rotate-12 transition-all" />
      </a>
    </div>
  </motion.div>
);

export default ProductExplorer;