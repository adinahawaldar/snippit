import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AITable from '../assets/AITable.png'
import formily from '../assets/formily.png'
import Nocobase from '../assets/Nocobase.png'
import {
  Github, ExternalLink, Code2,
  Fingerprint, Terminal, Box,
  Star, Plus, Hash, Cpu
} from 'lucide-react';
import Footer from '../Components/Footer';
import HonorProjects from '../Components/HonorProjects';
import Navbar from '../Components/Navbar';

const ProjectArchive = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);

  const categories = [
    { name: 'All', icon: <Hash size={12} /> },
    { name: 'Tools', icon: <Terminal size={12} /> },
    { name: 'Web3', icon: <Box size={12} /> },
    { name: 'AI/ML', icon: <Cpu size={12} /> },
  ];

  const projects = [
    {
      name: "AITable",
      desc: "AITable.ai is your ultimate AI data organization tool to organize any data.",
      img: AITable,
      github: "https://github.com/apitable/apitable",
      demo: "https://aitable.ai/",
      category: "AI/ML",
      stars: "1.2k",
      stack: ["Typescript", "Next.js"]
    },
    {
      name: "Formily",
      desc: "Identity management with zero-knowledge proofs.",
      img: formily,
      github: "https://github.com/alibaba/formily",
      demo: "https://formilyjs.org/",
      category: "Web3",
      stars: "840",
      stack: ["react-native", "Vue"]
    },
    {
      name: "NocoBase",
      desc: "DevOps tool for managing Kubernetes clusters.",
      img: Nocobase,
      github: "https://github.com/nocobase/nocobase",
      demo: "https://www.nocobase.com/",
      category: "Tools",
      stars: "2.5k",
      stack: ["crm", "crud"]
    },



  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleLoadMore = () => setVisibleCount(prev => prev + 3);

  return (
    <>
      <Navbar />
      <div className="bg-[#050505] min-h-screen text-zinc-400 font-sans selection:bg-blue-500/30 relative">

        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px]" />
        </div>

        <main className="max-w-6xl mx-auto px-6 py-20 relative z-10">

          <header className="mb-12 border-b border-zinc-900 pb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-black uppercase tracking-widest text-blue-500">
                Technical Division
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Project <span className="text-zinc-700">Protocol.</span>
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-2xl">
              A secure registry of open-source builds, experimental frameworks, and production-ready tools.
            </p>
          </header>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => { setActiveCategory(cat.name); setVisibleCount(3); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${activeCategory === cat.name
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    : "bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:border-zinc-600"
                  }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.slice(0, visibleCount).map((project, i) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group bg-[#0a0a0a] border border-zinc-900 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 flex flex-col shadow-2xl"
                >
                  {/* Image Section */}
                  <div className="h-44 w-full relative overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                        <Star size={10} className="text-yellow-500" />
                        <span className="text-[9px] font-black text-white">{project.stars}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-mono text-blue-500 uppercase tracking-widest font-bold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs text-zinc-500 mb-6 leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map(tech => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 text-[8px] font-mono text-zinc-500 border border-zinc-800">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                      >
                        <Github size={12} /> Source
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
                      >
                        Demo <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleCount < filteredProjects.length && (
            <div className="flex justify-center pt-12 border-t border-zinc-900">
              <button
                onClick={handleLoadMore}
                className="flex items-center gap-3 px-10 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
              >
                <Plus size={14} /> Expand Registry
              </button>
            </div>
          )}



        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProjectArchive;