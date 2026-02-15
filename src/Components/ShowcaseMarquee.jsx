import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800",
];

const VerticalShowcase = () => {
  return (
    <section className="relative min-h-screen bg-[#020202] py-12 md:py-20 overflow-hidden flex flex-col items-center">
      
      {/* --- HEADING --- */}
      <div className="relative z-30 text-center mb-8 md:mb-12 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
        >
          The <span className="text-blue-500 italic">Ecosystem</span> Loop
        </motion.h2>
        <p className="mt-4 text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.3em]">Vertical Infrastructure Stack</p>
      </div>

      {/* --- 3D VERTICAL STAGE --- */}
      {/* Changed height from fixed 800px to dynamic viewport height for mobile */}
      <div className="relative h-[600px] md:h-[800px] w-full max-w-7xl flex justify-center gap-4 md:gap-16 perspective-1000 md:perspective-2500">
        
        {/* Column 1: Hidden on mobile, appears on Large screens */}
        <div className="hidden lg:block">
          <Vertical3DColumn images={images} direction="up" rotation={-15} speed={30} />
        </div>
        
        {/* Column 2: Center Focus - Visible on all screens */}
        <Vertical3DColumn images={[...images].reverse()} direction="down" rotation={0} speed={40} isCenter />
        
        {/* Column 3: Hidden on mobile, appears on Large screens */}
        <div className="hidden lg:block">
          <Vertical3DColumn images={images} direction="up" rotation={15} speed={35} />
        </div>

        {/* --- VIGNETTE MASKS --- */}
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#020202] via-[#020202]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Ambient Floor Glow */}
      <div className="absolute bottom-0 w-full h-1/2 bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

const Vertical3DColumn = ({ images, direction, rotation, speed, isCenter }) => {
  const loopItems = [...images, ...images, ...images];

  return (
    <div className="relative h-full overflow-hidden preserve-3d py-10">
      <motion.div
        animate={{ y: direction === "up" ? [0, "-33.33%"] : ["-33.33%", 0] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex flex-col gap-6 md:gap-10 preserve-3d"
      >
        {loopItems.map((src, i) => (
          <div
            key={i}
            className={`
              relative shrink-0 
              w-[260px] xs:w-[300px] md:w-[380px] 
              aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] 
              overflow-hidden border border-white/10 bg-zinc-900 
              group shadow-2xl transition-all duration-700 hover:z-50 backface-hidden
            `}
            style={{ 
              // Reduced rotation for mobile to prevent card edges getting cut off
              transform: `rotateY(${rotation}deg) rotateX(5deg)`,
            }}
          >
            <img 
              src={src} 
              alt="Vertical Asset" 
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100" 
            />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
            
            {/* Asset Info Overlay (Always visible on mobile for better UX, hover on desktop) */}
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-blue-400 font-mono text-[8px] md:text-[10px] uppercase tracking-widest">SaaS Template</span>
               <h4 className="text-white font-bold text-base md:text-lg leading-tight">Architecture v2</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalShowcase;