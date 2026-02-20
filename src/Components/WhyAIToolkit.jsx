import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Zap, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

const WhyAIToolkit = () => {
  const nodes = [
    {
      title: "Precision Selection",
      desc: "Choose the right AI for every task. Stop guessing which LLM fits your stack.",
      icon: <CheckCircle2 size={18} />,
      position: "lg:translate-y-0",
      color: "text-blue-400"
    },
    {
      title: "Zero Waste Research",
      desc: "Save hours of trial & error. We’ve benchmarked the outputs for you.",
      icon: <Clock size={18} />,
      position: "lg:translate-y-12",
      color: "text-blue-400"
    },
    {
      title: "Strategic Workflows",
      desc: "Build smarter, not just faster. Integrate AI at the architectural level.",
      icon: <Zap size={18} />,
      position: "lg:translate-y-24",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="relative py-32 bg-[#020202] overflow-hidden px-8">
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M -100 200 Q 300 150 600 300 T 1300 250" 
            stroke="url(#grad1)" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="10 10"
          >
            <animate attributeName="stroke-dashoffset" from="200" to="0" dur="10s" repeatCount="indefinite" />
          </path>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Optimization Layer</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">
            Engineered for <br />
            <span className="text-zinc-600">Peak Performance.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative ${node.position}`}
            >
              <div className="group h-full p-8 rounded-[2.5rem] bg-[#080808] border border-white/5 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden">
                
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 blur-[60px] group-hover:bg-blue-500/10 transition-colors" />

                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#020202] border-2 border-zinc-800 hidden lg:block" />
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#020202] border-2 border-zinc-800 hidden lg:block" />

                <div className={`mb-6 w-14 h-14 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center ${node.color} group-hover:scale-110 transition-transform duration-500`}>
                  {node.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">
                  {node.title}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {node.desc}
                </p>

                <div className="flex items-center gap-2">
                   <div className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-zinc-500 group-hover:text-blue-400 transition-colors">
                     STATUS: OPTIMIZED
                   </div>
                </div>
              </div>

              {idx !== 2 && (
                <div className="flex justify-center py-4 lg:hidden">
                   <ArrowRight size={20} className="rotate-90 text-zinc-800" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-40 flex flex-col items-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAIToolkit;