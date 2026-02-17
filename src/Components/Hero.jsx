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

      className="relative min-h-screen w-full bg-[#030303] flex items-center justify-center overflow-hidden pt-32 pb-12 md:pt-27"
    >
      {/* --- GRID--- */}
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

      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        <motion.div style={{ y: y1 }} className="absolute top-[30%] left-[5%]">
          <CodeNode label="deployment.yaml" code="replicaCount: 3" />
        </motion.div>

        <motion.div style={{ y: y2 }} className="absolute bottom-[25%] right-[8%]">
          <CodeNode label="auth.ts" code="encrypt(token)" />
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-10 flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-zinc-500">
            System Protocol v1.0.4
          </span>
        </motion.div>

        <div className="flex flex-col gap-2 md:gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]"
          >
            Designing <span className="text-zinc-500 italic font-serif">simplicity</span>
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
            Access curated UI resources, SaaS inspirations, open-source projects,
            AI tools, and publications all in one powerful developer hub.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() =>
              document.getElementById("Explorer")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="group relative flex items-center justify-center gap-2 px-8 md:px-10 py-4 bg-white text-black text-xs md:text-sm font-bold rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            Explore Resources <ArrowUpRight size={18} />
          </button>

          <a
            href="https://github.com/adinahawaldar/snippit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 md:px-10 py-4 bg-white/8 border border-white/10 text-white text-xs md:text-sm font-bold rounded-full hover:bg-white/5 transition-colors tracking-widest uppercase"
          >
            Repository
          </a>

        </motion.div>
      </div>
    </section>
  );
};

const CodeNode = ({ label, code }) => (
  <div className="relative p-4 bg-[#0a0a0a]/80 border border-white/20 rounded-xl backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] group transition-all hover:border-blue-500/50">
    <div className="absolute inset-0 rounded-xl border border-white/5 pointer-events-none" />

    <div className="flex gap-1.5 mb-3">
      <div className="w-2 h-2 rounded-full bg-zinc-800" />
      <div className="w-2 h-2 rounded-full bg-zinc-800" />
      <div className="w-2 h-2 rounded-full bg-zinc-800" />
    </div>
    <p className="text-[9px] font-mono text-zinc-400 mb-1 tracking-wider uppercase font-bold opacity-70">{label}</p>
    <div className="flex items-center gap-2">
      <span className="text-blue-500 font-mono text-xs opacity-50">&gt;</span>
      <p className="text-[12px] font-mono text-blue-400 font-medium">{code}</p>
    </div>
  </div>
);

export default Hero;