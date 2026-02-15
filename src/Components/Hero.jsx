import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Terminal, Code2 } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section 
      ref={containerRef}
      // Added pt-24 to ensure it doesn't stick to the navbar on mobile
      className="relative min-h-screen w-full bg-[#030303] flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-0"
    >
      {/* --- THE MASTER GRID SYSTEM --- */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: 'clamp(30px, 5vw, 45px) clamp(30px, 5vw, 45px)' 
          }} 
        />

        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent z-10"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#030303_70%)]" />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full"
        />
      </div>

      {/* --- FLOATING TECH ELEMENTS --- 
          Hidden on 'sm' and 'md' to prevent overlapping with text
      */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[5%] opacity-40">
           <CodeNode label="deployment.yaml" code="replicaCount: 3" />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute bottom-[30%] right-[8%] opacity-40">
           <CodeNode label="auth.ts" code="encrypt(token)" />
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Top Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-10 flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-zinc-500">
            System Protocol v1.0.4
          </span>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col gap-2 md:gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]"
          >
            Engineering <span className="text-zinc-500 italic font-serif">simplicity</span>
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]"
          >
            for the modern stack.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 md:mt-0 max-w-2xl mx-auto text-zinc-400 text-base md:text-xl font-light leading-relaxed tracking-tight"
          >
            An open-source hub for high-performance components, 
            AI integration patterns, and production-ready boilerplate.
          </motion.p>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <button className="group relative flex items-center justify-center gap-2 px-8 md:px-10 py-4 bg-white text-black text-xs md:text-sm font-bold rounded-full transition-transform hover:scale-105 active:scale-95">
            Explore Documentation <ArrowUpRight size={18} />
          </button>
          <button className="px-8 md:px-10 py-4 bg-transparent border border-white/10 text-white text-xs md:text-sm font-bold rounded-full hover:bg-white/5 transition-colors tracking-widest uppercase">
            Repository
          </button>
        </motion.div>
      </div>

      {/* Side HUD Decor - Hidden on small screens */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-20">
          <div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent" />
          <span className="rotate-90 text-[10px] font-mono text-white tracking-[1em]">SNIPPIT</span>
          <div className="h-40 w-[1px] bg-gradient-to-b from-white via-white to-transparent" />
      </div>
    </section>
  );
};

const CodeNode = ({ label, code }) => (
  <div className="p-3 bg-zinc-900/50 border border-white/10 rounded-lg backdrop-blur-md">
    <div className="flex gap-1 mb-2">
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
    </div>
    <p className="text-[10px] font-mono text-zinc-500 mb-1 tracking-tighter underline uppercase">{label}</p>
    <p className="text-[11px] font-mono text-blue-400/80">{code}</p>
  </div>
);

export default Hero;