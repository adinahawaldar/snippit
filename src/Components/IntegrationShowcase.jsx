import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Github, Figma, Cpu, Globe, Layout, AppWindow, Rocket
} from 'lucide-react';

const content = [
  { label: "SaaS Platforms", icon: <Cloud size={18} />, color: "#4285F4" },
  { label: "UI/UX Design", icon: <Figma size={18} />, color: "#F24E1E" },
  { label: "Landing Pages", icon: <Layout size={18} />, color: "#A855F7" },
  { label: "Open Source", icon: <Github size={18} />, color: "#ffffff" },
  { label: "AI Integrations", icon: <Cpu size={18} />, color: "#00C4CC" },
  { label: "Modern Dashboards", icon: <AppWindow size={18} />, color: "#22C55E" },
  { label: "Web Apps", icon: <Globe size={18} />, color: "#5865F2" },
  { label: "Core Projects", icon: <Rocket size={18} />, color: "#EAB308" },
];

const DualCrossNexus = () => {
  const duplicatedContent = [...content, ...content, ...content];

  return (
    /* -mt-32: Pulls it way up toward the Hero CTA buttons.
       pt-0: Removes top padding.
    */
    <section className="relative w-full bg-[#030303] -mt-32 pt-0 pb-24 overflow-hidden flex items-center justify-center min-h-[300px] z-10">
      
      {/* --- STRIP 1: SLANT DOWN --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] -rotate-3">
        <div className="relative flex items-center h-24">
          <motion.div 
            animate={{ x: [0, "-33.33%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-6 md:gap-10 whitespace-nowrap"
          >
            {duplicatedContent.map((item, i) => (
              <NexusNode key={`top-${i}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- STRIP 2: SLANT UP --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] rotate-3">
        <div className="relative flex items-center h-24">
          <motion.div 
            animate={{ x: ["-33.33%", 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-6 md:gap-10 whitespace-nowrap"
          >
            {duplicatedContent.map((item, i) => (
              <NexusNode key={`bottom-${i}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- EDGE MASKING --- */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_10%,#030303_85%)] z-20" />
      <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#030303] via-[#030303]/80 to-transparent z-20" />
    </section>
  );
};

const NexusNode = ({ item }) => (
  /* Changed border-white/10 to border-zinc-800 to remove the "white part" lines */
  <div className="group relative flex items-center gap-4 px-5 py-2.5 bg-zinc-950/50 border border-zinc-800 rounded-xl backdrop-blur-xl transition-all duration-300 hover:border-zinc-600 cursor-default">
    <div 
      className="p-1.5 rounded-lg bg-white/5 transition-transform duration-300 group-hover:scale-110"
      style={{ color: item.color }}
    >
      {item.icon}
    </div>
    
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-tight">{item.label}</span>
    </div>

    <div 
      className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
      style={{ backgroundColor: item.color }}
    />
  </div>
);

export default DualCrossNexus;