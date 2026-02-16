import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, Layers, Rocket, Code2, 
  PackageOpen, ArrowUpRight, Sparkles, 
  Fingerprint, Terminal, HardDrive, Cpu
} from 'lucide-react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import CTA from '../Components/CTA'

const ResourceHub = () => {
  const categories = [
    {
      title: "UI Components",
      desc: "Atomic design systems and complex interactive modules built with Tailwind & Framer.",
      icon: <Layout size={20} />,
      status: "Operational",
      version: "v2.4.0",
      color: "#3b82f6"
    },
    {
      title: "Backgrounds & FX",
      desc: "Mathematical grid systems, noise textures, and high-performance canvas shaders.",
      icon: <Layers size={20} />,
      status: "Updated",
      version: "v1.0.8",
      color: "#a855f7"
    },
    {
      title: "Landing Pages",
      desc: "Conversion-optimized block structures and high-fidelity layout wireframes.",
      icon: <Rocket size={20} />,
      status: "Operational",
      version: "v3.1.2",
      color: "#10b981"
    },
    {
      title: "Open Source Repos",
      desc: "Full-stack boilerplate repositories and community-driven utility libraries.",
      icon: <Code2 size={20} />,
      status: "Stable",
      version: "v4.0.0",
      color: "#f59e0b"
    },
    {
      title: "Starter Packs",
      desc: "Production-ready environment configurations for Next.js 15 and TypeScript.",
      icon: <PackageOpen size={20} />,
      status: "Legacy",
      version: "v1.2.0",
      color: "#ef4444"
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-[#050505] min-h-screen text-zinc-400 font-sans selection:bg-blue-500/30 relative py-20 px-6">
      
      {/* --- PROFESSIONAL AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")` }} />
      </div>

      <main className="max-w-6xl mx-auto relative z-10">
        
        {/* ---  HEADER --- */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-black uppercase tracking-widest text-blue-400">
                System Active
              </div>
             
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Assets.
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
              A high-fidelity technical index of modular design patterns and engineering starter kits.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-8 border-l border-zinc-800/50 pl-10">
            
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-600 mb-1">Network</p>
              <p className="text-2xl font-bold text-emerald-500">Global</p>
            </div>
          </div>
        </header>

        {/* --- GRID SYSTEM --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href={`/resources/${cat.title.toLowerCase().replace(/ /g, '-')}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative block bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-8 hover:bg-[#0f0f0f] hover:border-zinc-700 transition-all duration-300"
            >
              {/* Header: Icon & Metadata */}
              <div className="flex justify-between items-start mb-10">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500"
                  style={{ 
                    backgroundColor: `${cat.color}10`, 
                    borderColor: `${cat.color}30`,
                    color: cat.color 
                  }}
                >
                  {cat.icon}
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-tighter mb-1">{cat.version}</p>
                  <div className="flex items-center gap-1.5 justify-end">
                    <div className={`w-1 h-1 rounded-full ${cat.status === 'Operational' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                    <span className="text-[8px] font-black uppercase text-zinc-400">{cat.status}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {cat.title}
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                {cat.desc}
              </p>

              {/* Footer Metrics */}
              <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-600">
                  <span className="flex items-center gap-1"><HardDrive size={10} /> 1.2GB</span>
                  <span className="flex items-center gap-1"><Cpu size={10} /> React 19</span>
                </div>
                <ArrowUpRight size={16} className="text-zinc-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </motion.a>
          ))}

          {/* Special Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden flex flex-col justify-between group cursor-pointer"
          >
            <div className="relative z-10">
              <Sparkles className="text-white/80 mb-6" size={24} />
              <h2 className="text-2xl font-black text-white leading-tight mb-2 uppercase italic tracking-tighter">
                Request <br /> Custom Build
              </h2>
              <p className="text-blue-100 text-xs font-medium leading-relaxed opacity-80">
                Can't find a specific module? Submit a technical request to the lab.
              </p>
            </div>
            
            <div className="relative z-10 mt-8">
              <button className="w-full py-3 bg-white text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-zinc-100 transition-colors">
                Open Ticket
              </button>
            </div>

            {/* Subtle Watermark */}
            <Terminal size={140} className="absolute -bottom-10 -right-10 text-black/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </motion.div>
        </div>

        
      </main>
    </div>
    <CTA/>
    <Footer/>
    </>
  );
};

export default ResourceHub;