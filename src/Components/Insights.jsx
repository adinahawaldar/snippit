import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, LayoutTemplate, Zap, Fingerprint, Activity, MousePointer2 } from 'lucide-react';

const ValuePropSection = () => {
  const values = [
    {
      id: "RES_01",
      title: "Curated Resources",
      desc: "Hand-picked developer assets and high-performance snippets in one central registry.",
      icon: <BookOpen size={16} className="text-purple-400" />,
      tag: "STABLE"
    },
    {
      id: "INS_02",
      title: "UI Inspiration",
      desc: "Ready-to-deploy components designed to spark creativity and save hours of setup.",
      icon: <LayoutTemplate size={16} className="text-blue-400" />,
      tag: "CORE"
    },
    {
      id: "ACC_03",
      title: "Project Acceleration",
      desc: "Battle-tested tools focused on turning concepts into production-ready software.",
      icon: <Zap size={16} className="text-amber-400" />,
      tag: "FAST"
    }
  ];

  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#050505] py-20 px-6 relative font-sans">
      
      {/* Static Background Glow (No animation) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-purple-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* --- MICRO-HEADER --- */}
        <header className="mb-12 border-b border-zinc-900 pb-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-[7px] font-black uppercase tracking-[0.3em] text-purple-500">
              Value_Prop_v2.0
            </div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <motion.h2 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-tight"
            >
              The Snippit <span className="text-zinc-700 italic">Advantage.</span>
            </motion.h2>
            <div className="hidden lg:block pb-1">
              
            </div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-zinc-500 text-sm leading-relaxed font-medium max-w-md"
          >
            Precision-engineered frameworks designed to eliminate friction and scale execution.
          </motion.p>
        </header>

        {/* --- COMPACT CARD STACK --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2"
        >
          {values.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ x: 4, borderColor: "rgba(168, 85, 247, 0.2)" }}
              className="group relative flex flex-col md:flex-row items-stretch border border-zinc-900 bg-[#080808] rounded-lg overflow-hidden transition-all duration-300 cursor-default"
            >
              {/* Ultra-Slim ID Bar */}
              <div className="w-full md:w-10 bg-zinc-900/20 flex items-center justify-center py-2 md:py-0 border-b md:border-b-0 md:border-r border-zinc-900">
                <span className="font-mono text-[8px] text-zinc-800 -rotate-0 md:-rotate-90 uppercase tracking-widest">
                  {item.id}
                </span>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center gap-5">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 flex-shrink-0 bg-zinc-900 rounded border border-zinc-800 flex items-center justify-center transition-all group-hover:bg-purple-500/5"
                >
                  {item.icon}
                </motion.div>

                {/* Text Body */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wide group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="px-1.5 py-0.5 border border-zinc-800 text-zinc-700 rounded-[3px] text-[6px] font-mono uppercase">
                      {item.tag}
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs max-w-xl leading-snug">
                    {item.desc}
                  </p>
                </div>

                {/* Micro Trigger Icon (Hidden on Mobile) */}
                <div className="hidden lg:flex items-center text-zinc-900 group-hover:text-purple-500/20 transition-colors">
                  <MousePointer2 size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default ValuePropSection;