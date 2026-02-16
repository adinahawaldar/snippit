import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, LayoutTemplate, Zap, Terminal, Fingerprint, Activity } from 'lucide-react';

const ValuePropSection = () => {
  const values = [
    {
      id: "RES_001",
      title: "Curated Resources",
      desc: "A hand-picked selection of developer assets, libraries, and high-performance snippets in one central registry.",
      icon: <BookOpen size={20} className="text-purple-400" />,
      tag: "STABLE_RELEASE"
    },
    {
      id: "INS_002",
      title: "UI & Code Inspiration",
      desc: "Ready-to-deploy components and architectural patterns designed to spark creativity and save hours of setup.",
      icon: <LayoutTemplate size={20} className="text-blue-400" />,
      tag: "FRONTEND_CORE"
    },
    {
      id: "ACC_003",
      title: "Project Acceleration",
      desc: "Battle-tested tools and technical publications focused on turning concepts into production-ready software.",
      icon: <Zap size={20} className="text-amber-400" />,
      tag: "FAST_PATH"
    }
  ];

  return (
    <section className="w-full bg-[#020202] py-32 px-6 relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND SYSTEM OVERLAY --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none font-mono text-[10px] text-white p-4 leading-none select-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mb-2 uppercase tracking-tighter">
            SYS_BOOT_SEQUENCE_{i}... LOADED // CACHE_STATUS: OK // HUB_ID: SNIPPIT_REGISTRY_V2
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Value_Proposition_Protocol</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
              The <span className="text-zinc-500">Snippit</span> <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 italic">Advantage.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <Fingerprint size={60} className="text-zinc-800" />
          </div>
        </div>

        {/* --- SYSTEM CARD STACK --- */}
        <div className="grid grid-cols-1 gap-4">
          {values.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row items-stretch border border-white/5 bg-[#050505] rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              {/* Left ID Bar */}
              <div className="w-full md:w-16 bg-zinc-900/50 flex items-center justify-center py-4 md:py-0 border-b md:border-b-0 md:border-r border-white/5">
                <span className="font-mono text-[10px] text-zinc-600 -rotate-0 md:-rotate-90 whitespace-nowrap uppercase tracking-widest">
                  {item.id}
                </span>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-8 flex flex-col md:flex-row md:items-center gap-8">
                {/* Icon Pod */}
                <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center transition-all group-hover:bg-white/10 group-hover:border-white/20">
                  {item.icon}
                </div>

                {/* Text Body */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                    <span className="font-mono text-[8px] px-1.5 py-0.5 border border-white/10 text-zinc-500 rounded uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm md:text-base max-w-2xl group-hover:text-zinc-400 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* Status Indicator */}
                <div className="hidden lg:flex items-center gap-4 text-zinc-800">
                  <Activity size={24} className="group-hover:text-purple-500/50 transition-colors" />
                </div>
              </div>

              {/* Scanning Line Effect (Vertical) */}
              <motion.div 
                animate={{ left: ["-10%", "110%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* --- SYSTEM FOOTER --- */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center font-mono text-[9px] text-zinc-600 gap-4">
          <div className="flex items-center gap-4">
            <span>[ SYSTEM STATUS: OPTIMAL ]</span>
            <span>[ LATENCY: 14MS ]</span>
          </div>
          <div className="text-center md:text-right uppercase tracking-widest">
            Accelerating production cycles since 2024_rev_03
          </div>
        </div>
      </div>
    </section>
  );
};

const CodeLine = ({ line, text }) => (
  <div className="flex gap-4 font-mono text-[11px] mb-1">
    <span className="text-zinc-800">{line}</span>
    <span className="text-zinc-500">{text}</span>
  </div>
);

export default ValuePropSection;