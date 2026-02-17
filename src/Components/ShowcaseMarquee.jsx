import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const images = [
 img1,img2,img3,img4
];

const VerticalShowcase = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] py-20 overflow-hidden flex flex-col items-center">
      
      {/* --- PROFESSIONAL HEADER --- */}
      <div className="max-w-6xl w-full mx-auto px-6 mb-16 relative z-30">
        <header className="border-b border-zinc-900 pb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[8px] font-black uppercase tracking-widest text-blue-500">
              Infrastructure_Showcase_v2
            </div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              The Ecosystem 
              <span className="text-zinc-700 italic"> Loop.</span>
            </h2>
           
          </div>
        </header>
      </div>

      {/* --- 3D FLOATING STAGE --- */}
      <div className="relative h-[650px] md:h-[800px] w-full flex justify-center gap-6 md:gap-16 perspective-1000 md:perspective-2500">
        
        {/* Column 1: Left */}
        <div className="hidden md:block">
          <Vertical3DColumn images={images} direction="up" rotation={-12} speed={35} />
        </div>
        
        {/* Column 2: Center Focus */}
        <Vertical3DColumn 
            images={[...images].reverse()} 
            direction="down" 
            rotation={0} 
            speed={30} 
            isMobile 
        />
        
        {/* Column 3: Right */}
        <div className="hidden md:block">
          <Vertical3DColumn images={images} direction="up" rotation={12} speed={40} />
        </div>

        {/* --- VIGNETTE MASKS --- */}
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 w-full h-1/2 bg-blue-600/[0.03] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

const Vertical3DColumn = ({ images, direction, rotation, speed }) => {
  const loopItems = [...images, ...images, ...images];

  return (
    <div className="relative h-full overflow-hidden preserve-3d">
      <motion.div
        animate={{ y: direction === "up" ? [0, "-33.33%"] : ["-33.33%", 0] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex flex-col gap-6 md:gap-10 preserve-3d py-10"
      >
        {loopItems.map((src, i) => (
          <div
            key={i}
            className={`
              relative shrink-0 
              w-[80vw] md:w-[350px] 
              aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] 
              overflow-hidden border border-white/5 bg-[#0a0a0a] 
              group shadow-2xl transition-all duration-700 backface-hidden
            `}
            style={{ 
              transform: `rotateY(${rotation}deg) rotateX(2deg)`,
            }}
          >
            <img 
              src={src} 
              alt="Asset" 
              className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-100" 
            />
            
            {/* Info Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-blue-500 font-mono text-[8px] uppercase tracking-[0.3em] mb-2 block">System_Protocol</span>
               <h4 className="text-white font-bold text-lg md:text-xl tracking-tighter">NODE_INSTANCE_0{i % 5}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalShowcase;