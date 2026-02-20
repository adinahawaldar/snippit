import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Layers, 
  Rocket, 
  FolderCode, 
  PackageOpen, 
  ArrowUpRight,
  Code2,
  Sparkles
} from 'lucide-react';

const ResourceHub = () => {
  const categories = [
    {
      title: "UI Components",
      slug: "ui-components",
      desc: "Premium, accessible React components with high-fidelity motion.",
      icon: <Layout className="text-blue-500" size={24} />,
      count: "24 Units",
      color: "from-blue-500/10 to-transparent"
    },
    {
      title: "Backgrounds & Animations",
      slug: "animations",
      desc: "Next-gen CSS/Framer Motion backgrounds and spatial effects.",
      icon: <Layers className="text-purple-500" size={24} />,
      count: "12 Effects",
      color: "from-purple-500/10 to-transparent"
    },
    {
      title: "SaaS Landing Pages",
      slug: "saas-layouts",
      desc: "Conversion-optimized structures for modern software startups.",
      icon: <Rocket className="text-emerald-500" size={24} />,
      count: "08 Templates",
      color: "from-emerald-500/10 to-transparent"
    },
    {
      title: "Open Source Projects",
      slug: "open-source",
      desc: "Full-scale applications and tools released to the community.",
      icon: <Code2 className="text-amber-500" size={24} />,
      count: "05 Repos",
      color: "from-amber-500/10 to-transparent"
    },
    {
      title: "Starter Packs",
      slug: "starter-packs",
      desc: "Pre-configured stacks for Next.js, Vite, and Tailwind.",
      icon: <PackageOpen className="text-rose-500" size={24} />,
      count: "04 Bundles",
      color: "from-rose-500/10 to-transparent"
    }
  ];

  return (
    <div className="bg-[#020202] min-h-screen text-white font-sans selection:bg-blue-500/30 relative">
      
      {/* --- AMBIENT DEPTH --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <header className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Asset Warehouse</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
          >
            Design <br /> <span className="text-zinc-800 font-outline">Resources.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            A curated collection of code-ready assets for building <span className="text-white">high-performance digital interfaces.</span>
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link 
                to={`/resources/${cat.slug}`}
                className="group relative block h-full bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-10 overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                {/* Background Glow Effect */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${cat.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/5 transition-all duration-500">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest bg-white/[0.02] px-3 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {cat.title}
                  </h2>
                  
                  <p className="text-zinc-500 text-sm leading-relaxed mb-12 group-hover:text-zinc-400 transition-colors">
                    {cat.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-white transition-all">
                    Initialize Protocol 
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="group relative block h-full bg-blue-600 rounded-[2rem] p-10 overflow-hidden cursor-default"
          >
            <div className="relative z-10 h-full flex flex-col text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-12">
                <Sparkles size={24} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none">
                Submit a <br /> Resource
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-12">
                Have a component or template you want to share with the node?
              </p>
              <button className="mt-auto w-fit px-6 py-3 rounded-xl bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                Contact Archive
              </button>
            </div>
            <div className="absolute bottom-[-20%] right-[-10%] opacity-20 rotate-12">
              <FolderCode size={200} />
            </div>
          </motion.div>
        </div>

        {/* --- FOOTER INFO --- */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
           <div className="flex items-center gap-3">
              <Fingerprint size={16} />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em]">System_Registry_v2.0</span>
           </div>
           <p className="text-[10px] font-mono uppercase tracking-widest">© 2026 // ADINA HAWALDAR</p>
        </div>

      </main>

      <style>{`
        .font-outline {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default ResourceHub;