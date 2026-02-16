import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { 
  Github, Twitter, Linkedin, Globe, 
  Terminal, Cpu, Zap, Mail, Fingerprint, ArrowLeft, Code2, ShieldCheck
} from 'lucide-react';
import Navbar from '../Components/Navbar';

const AboutRegistry = () => {
  const socialLinks = [
    { name: 'Github', icon: <Github size={16} />, link: 'https://github.com/adinahawaldar' },
    { name: 'Twitter', icon: <Twitter size={16} />, link: 'https://twitter.com/adinahawaldar' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, link: 'https://linkedin.com/in/adinahawaldar' },
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-[#020202] min-h-screen text-white font-sans selection:bg-blue-500/30 relative">
      
      {/* Subtle Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full" />
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-10 pb-20 relative z-10">
        
        {/* --- COMPACT IMAGE-STYLE BACK BUTTON --- */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-12">
          <Link to="/" className="group flex items-center gap-4">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all duration-300">
              <ArrowLeft className="text-zinc-500 group-hover:text-white transition-colors" size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-blue-500 transition-colors">Return to</span>
              <span className="text-sm font-bold tracking-tight text-zinc-300 group-hover:text-white transition-colors">System Hub</span>
            </div>
          </Link>
        </motion.div>

        {/* --- HERO SECTION --- */}
        <section className="mb-16">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 mb-4">
                <Fingerprint size={14} className="text-blue-500" />
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Signature // Adina Hawaldar</span>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4"
            >
                Adina <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Hawaldar.</span>
            </motion.h1>
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">Principal Architect of the Snippit.</p>
        </section>

        {/* --- COMPACT BENTO LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          
          {/* Main Story Card (Smaller Padding) */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="md:col-span-4 p-8 rounded-[1.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between group"
          >
            <div className="space-y-4">
                <Terminal className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold leading-tight max-w-md uppercase tracking-tight">
                    The Vision of Snippit.
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xl">
                    I engineered this registry to serve as a source of truth. As a builder, I prioritize stability over hype—curating a toolkit that actually delivers performance.
                </p>
            </div>
            <div className="mt-8 flex gap-3">
                <div className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[8px] font-bold text-blue-400 uppercase tracking-widest">Optimized</div>
                <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[8px] font-bold text-zinc-500 uppercase tracking-widest">v1.0.4</div>
            </div>
          </motion.div>

          {/* Compact Social Card */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="md:col-span-2 p-8 rounded-[1.5rem] bg-gradient-to-b from-blue-600/10 to-transparent border border-blue-500/20"
          >
            <Cpu className="text-blue-500 mb-6" size={24} />
            <h4 className="text-xs font-black mb-4 uppercase tracking-[0.2em] text-zinc-400">Nodes</h4>
            <div className="grid grid-cols-1 gap-2">
                {socialLinks.map((social, i) => (
                    <a key={i} href={social.link} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-blue-500/50 transition-all group">
                        <span className="text-zinc-500 group-hover:text-white">{social.icon}</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white">{social.name}</span>
                    </a>
                ))}
            </div>
          </motion.div>

          {/* Status Card (Small) */}
          <div className="md:col-span-2 p-6 rounded-[1.2rem] bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div>
                <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1">Host_Node</p>
                <p className="text-md font-bold text-emerald-500 uppercase tracking-tight">ADINA_LIVE</p>
            </div>
            <ShieldCheck className="text-emerald-500/20" size={24} />
          </div>

          {/* Version Card (Small) */}
          <div className="md:col-span-2 p-6 rounded-[1.2rem] bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div>
                <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1">Architecture</p>
                <p className="text-md font-bold uppercase tracking-tight">Full-Stack</p>
            </div>
            <Code2 className="text-zinc-800" size={24} />
          </div>

          {/* Compact Mail Card */}
          <a href="mailto:adinahawaldar@gmail.com" className="md:col-span-2 p-6 rounded-[1.2rem] bg-white hover:bg-white transition-colors group flex items-center justify-between">
             <span className="text-black text-[10px] font-black uppercase tracking-widest">Connect</span>
             <Mail className="text-black" size={20} />
          </a>

        </div>

      </main>
    </div>
      <Footer />

    </>
  );
};

export default AboutRegistry;