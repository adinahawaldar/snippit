import React from 'react';
import { Link } from "react-router-dom"; // Essential for SPA navigation
import { motion } from 'framer-motion';
import { 
  Layout, Layers, Rocket, Code2, 
  PackageOpen, ArrowUpRight, Sparkles, 
  Terminal, HardDrive, Cpu
} from 'lucide-react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import CTA from '../Components/CTA';

const ResourceHub = () => {
  const categories = [
    {
      title: "UI Components",
      desc: "Atomic design systems and complex interactive modules built with Tailwind & Framer.",
      icon: <Layout size={20} />,
      status: "Operational",
      version: "v2.4.0",
      color: "#3b82f6",
      path: "/uicomponents" // Changed href to path for Link component
    },
    {
      title: "Backgrounds & FX",
      desc: "Mathematical grid systems, noise textures, and high-performance canvas shaders.",
      icon: <Layers size={20} />,
      status: "Updated",
      version: "v1.0.8",
      color: "#a855f7",
      path: "/backgrounds"
    },
    {
      title: "Landing Pages",
      desc: "Conversion-optimized block structures and high-fidelity layout wireframes.",
      icon: <Rocket size={20} />,
      status: "Operational",
      version: "v3.1.2",
      color: "#10b981",
      path: "/landing-pages"
    },
    {
      title: "Open Source Repos",
      desc: "Full-stack boilerplate repositories and community-driven utility libraries.",
      icon: <Code2 size={20} />,
      status: "Stable",
      version: "v4.0.0",
      color: "#f59e0b",
      path: "/project-registry"
    },
    {
      title: "Starter Packs",
      desc: "Production-ready environment configurations for Next.js 15 and TypeScript.",
      icon: <PackageOpen size={20} />,
      status: "Legacy",
      version: "v1.2.0",
      color: "#ef4444",
      path: "/starters"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#050505] min-h-screen text-zinc-400 font-sans selection:bg-blue-500/30 relative py-20 px-6">
        
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent blur-[120px]" />
        </div>

        <main className="max-w-6xl mx-auto relative z-10">
          <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-6">
                <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-black uppercase tracking-widest text-blue-400">
                  System Active
                </div>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Assets.</h1>
              <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                A high-fidelity technical index of modular design patterns.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={cat.path}
                  className="group relative block h-full bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-8 hover:bg-[#0f0f0f] hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500"
                      style={{ backgroundColor: `${cat.color}10`, borderColor: `${cat.color}30`, color: cat.color }}
                    >
                      {cat.icon}
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-mono text-zinc-600 uppercase mb-1">{cat.version}</p>
                      <div className="flex items-center gap-1.5 justify-end">
                        <div className={`w-1 h-1 rounded-full ${cat.status === 'Operational' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                        <span className="text-[8px] font-black uppercase text-zinc-400">{cat.status}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-8">{cat.desc}</p>

                  <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-600">
                      <span className="flex items-center gap-1"><HardDrive size={10} /> 1.2GB</span>
                      <span className="flex items-center gap-1"><Cpu size={10} /> React 19</span>
                    </div>
                    <ArrowUpRight size={16} className="text-zinc-700 group-hover:text-white transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default ResourceHub;