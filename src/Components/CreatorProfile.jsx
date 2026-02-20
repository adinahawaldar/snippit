import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Twitter, Globe, Code, Cpu } from 'lucide-react';

const CreatorProfile = () => {
  return (
    <section className="relative py-32 px-6 bg-[#020202] flex justify-center items-center overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative w-full max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080808]/80 backdrop-blur-2xl p-8 md:p-12 shadow-2xl">
          
          <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-4">System_Architect.json</span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[9px] font-mono text-zinc-400">
              STATUS: <span className="text-green-500 animate-pulse">AVAILABLE_FOR_PROJECTS</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                  alt="Architect" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 p-3 bg-white text-black rounded-2xl shadow-xl">
                <Code size={20} strokeWidth={3} />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">
                Designed & Built by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">[Your Name]</span>
              </h3>
              
              <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Full-stack engineer specializing in high-performance design systems and 
                scalable SaaS infrastructure. I build tools that help developers move faster.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a 
                  href="https://yourportfolio.com" 
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  <Globe size={16} /> Portfolio <ExternalLink size={14} />
                </a>
                
                <div className="flex items-center gap-2">
                  <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all">
                    <Github size={20} />
                  </a>
                  <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4">
             <ExpertiseTag label="Frontend" value="React / Next.js" />
             <ExpertiseTag label="Backend" value="Node / Supabase" />
             <ExpertiseTag label="Design" value="Figma / Framer" />
             <ExpertiseTag label="Logic" value="Typescript / Rust" />
          </div>

          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
        </div>
      </motion.div>
    </section>
  );
};

const ExpertiseTag = ({ label, value }) => (
  <div>
    <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1">{label}</p>
    <p className="text-xs font-bold text-zinc-300 tracking-tight">{value}</p>
  </div>
);

export default CreatorProfile;