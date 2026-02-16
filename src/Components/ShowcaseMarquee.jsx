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
      <div className="relative z-30 text-center mb-10 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
        >
          The <span className="text-blue-500 italic">Ecosystem</span> Loop
        </motion.h2>
        <p className="mt-4 text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.3em]">Vertical Infrastructure Stack</p>
      </div>

      {/* --- 3D FLOATING STAGE (All Screens) --- */}
      <div className="relative h-[700px] md:h-[850px] w-full flex justify-center gap-6 md:gap-16 perspective-1000 md:perspective-2500">
        
        {/* Column 1: Visible on md+ (Left) */}
        <div className="hidden md:block">
          <Vertical3DColumn images={images} direction="up" rotation={-12} speed={35} />
        </div>
        
        {/* Column 2: Center Focus - Visible on ALL screens */}
        <Vertical3DColumn 
            images={[...images].reverse()} 
            direction="down" 
            rotation={0} 
            speed={30} 
            isMobile 
        />
        
        {/* Column 3: Visible on md+ (Right) */}
        <div className="hidden md:block">
          <Vertical3DColumn images={images} direction="up" rotation={12} speed={40} />
        </div>

        {/* --- VIGNETTE MASKS (Top & Bottom Fades) --- */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#020202] via-[#020202]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020202] via-[#020202]/90 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 w-full h-1/2 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

const Vertical3DColumn = ({ images, direction, rotation, speed, isMobile }) => {
  // Triple items for seamless loop
  const loopItems = [...images, ...images, ...images];

  return (
    <div className="relative h-full overflow-hidden preserve-3d">
      <motion.div
        animate={{ y: direction === "up" ? [0, "-33.33%"] : ["-33.33%", 0] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex flex-col gap-6 md:gap-12 preserve-3d py-10"
      >
        {loopItems.map((src, i) => (
          <div
            key={i}
            className={`
              relative shrink-0 
              /* Mobile: 75vw wide | Desktop: 380px wide */
              w-[75vw] md:w-[380px] 
              aspect-[4/5] rounded-[2rem] md:rounded-[3rem] 
              overflow-hidden border border-white/10 bg-zinc-900 
              group shadow-2xl transition-all duration-700 backface-hidden
            `}
            style={{ 
              transform: `rotateY(${rotation}deg) rotateX(2deg)`,
            }}
          >
            <img 
              src={src} 
              alt="Asset" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-70 group-hover:opacity-100" 
            />
            
            {/* Info Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-blue-400 font-mono text-[10px] uppercase tracking-widest">Deployment</span>
               <h4 className="text-white font-bold text-lg md:text-xl">System_Node_{i % 5}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalShowcase;