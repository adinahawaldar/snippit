import React from 'react';
import { motion } from 'framer-motion';

const AIToolkitHero = () => {
  return (
    <div className="bg-[#050505] w-full pt-32 pb-16 px-6 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[9px] font-black uppercase tracking-widest text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                System Active
              </div>
              <div className="h-[1px] w-6 bg-zinc-800" />
              
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none"
            >
              Tool-Kit
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium max-w-lg"
            >
             AI-powered tools curated to help you design, build, automate, and scale modern projects faster.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center gap-10 border border-zinc-900 bg-black/40 backdrop-blur-md p-8 rounded-2xl"
          >
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-700 mb-2 tracking-widest">Network</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <p className="text-2xl font-bold text-white tracking-tight">Global</p>
              </div>
            </div>
            <div className="w-[1px] h-10 bg-zinc-900" />
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-700 mb-2 tracking-widest">Node</p>
              <p className="text-2xl font-bold text-zinc-400 tracking-tight">Alpha-01</p>
            </div>
          </motion.div>

        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full h-[1px] bg-zinc-900 mt-20"
        />
      </div>
    </div>
  );
};

export default AIToolkitHero;