import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Slack, Database, Mail, Github, Figma, Cpu, Zap, Globe, Code2 
} from 'lucide-react';

const integrations = [
  { icon: <Slack size={20} />, color: "#4A154B" },
  { icon: <Cloud size={20} />, color: "#4285F4" },
  { icon: <Database size={20} />, color: "#336791" },
  { icon: <Mail size={20} />, color: "#EA4335" },
  { icon: <Github size={20} />, color: "#ffffff" },
  { icon: <Figma size={20} />, color: "#F24E1E" },
  { icon: <Cpu size={20} />, color: "#00C4CC" },
  { icon: <Zap size={20} />, color: "#F7DF1E" },
  { icon: <Globe size={20} />, color: "#5865F2" },
  { icon: <Code2 size={20} />, color: "#A855F7" },
];

const DualCrossLoop = () => {
  const duplicatedIcons = [...integrations, ...integrations];

  return (
    <div className="relative w-full bg-[#020202] py-32 overflow-hidden flex flex-col gap-8">
      
      {/* --- STRIP 1: SLANT DOWN (Moves Left) --- */}
      <div className="relative w-full -rotate-2 md:-rotate-1 scale-110">
        {/* Background Accent Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800/50 z-0" />
        
        <div className="relative flex items-center h-20 z-10">
          <motion.div 
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 md:gap-20 whitespace-nowrap px-10"
          >
            {duplicatedIcons.map((item, i) => (
              <div key={`top-${i}`} className="relative group">
                <div 
                  className="relative z-10 w-12 h-12 bg-[#080808] border border-zinc-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-zinc-500 group-hover:-translate-y-1"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <div 
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- STRIP 2: SLANT UP (Moves Right) --- */}
      <div className="relative w-full rotate-2 md:rotate-1 scale-110">
        {/* Background Accent Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800/50 z-0" />
        
        <div className="relative flex items-center h-20 z-10">
          <motion.div 
            animate={{ x: ["-50%", 0] }} // Reverse direction
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 md:gap-20 whitespace-nowrap px-10"
          >
            {duplicatedIcons.map((item, i) => (
              <div key={`bottom-${i}`} className="relative group">
                <div 
                  className="relative z-10 w-12 h-12 bg-[#080808] border border-zinc-800 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:border-zinc-500 group-hover:-translate-y-1"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <div 
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- FADE GRADIENTS (Masking the sides) --- */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default DualCrossLoop;