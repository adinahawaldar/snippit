import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { 
  Github, Twitter, Linkedin, 
  Terminal, Cpu, Zap, Mail, Fingerprint, ArrowLeft, Code2, ShieldCheck,
  ExternalLink, Layers, Globe, Command
} from 'lucide-react';
import Navbar from '../Components/Navbar';

const AboutRegistry = () => {
  const socialLinks = [
    { name: 'Github', icon: <Github size={14} />, link: 'https://github.com/adinahawaldar' },
    { name: 'Twitter', icon: <Twitter size={14} />, link: 'https://twitter.com/adinahawaldar' },
    { name: 'LinkedIn', icon: <Linkedin size={14} />, link: 'https://linkedin.com/in/adinahawaldar' },
  ];

  const stats = [
    { label: "Core Protocol", value: "Snippit v1.0" },
    { label: "Architecture", value: "Modular React" },
    { label: "Interface", value: "Obsidian Dark" },
    { label: "Deployment", value: "Edge Network" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-500/30 relative">
        
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/[0.03] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/[0.02] blur-[100px]" />
        </div>

        <main className="max-w-5xl mx-auto px-6 pt-16 pb-24 relative z-10">
          
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="group inline-flex items-center gap-4 mb-16">
              <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                <ArrowLeft size={16} className="text-zinc-600 group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-zinc-300">Exit_Directory</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-12">
              <section>
                

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-8"
                >
                  Adina <br />
                  <span className="text-zinc-800">Hawaldar.</span>
                </motion.h1>

                <p className="text-zinc-500 text-lg leading-relaxed font-medium mb-8">
                  Developer and architect dedicated to crafting high-fidelity digital infrastructure.
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, i) => (
                    <a key={i} href={social.link} className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-900 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all text-xs font-bold uppercase tracking-tight">
                      {social.icon} {social.name}
                    </a>
                  ))}
                </div>
              </section>

              <section className="p-6 rounded-2xl border border-zinc-900 bg-black/40 backdrop-blur-sm">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-6 flex items-center gap-2">
                  <Command size={12} /> System_Specs
                </h4>
                <div className="space-y-4">
                  {stats.map((s, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-zinc-900/50 pb-2">
                      <span className="text-[10px] font-mono text-zinc-700 uppercase">{s.label}</span>
                      <span className="text-xs font-bold text-zinc-300 tracking-tight">{s.value}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-7 space-y-6">
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-10 rounded-[2rem] bg-gradient-to-br from-zinc-900/50 to-black border border-zinc-800/50 relative overflow-hidden group"
              >
                <Terminal className="text-blue-500 mb-8" size={32} />
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight uppercase">The Vision.</h3>
                <p className="text-zinc-500 text-base leading-relaxed mb-10">
                  Snippit was engineered to eliminate the friction between "ideation" and "production." It serves as a centralized, high-fidelity technical index of modular design patterns, engineering starter kits, and curated AI tools. 
                  <br /><br />
                  As a developer, I prioritize **stability, performance, and clean abstraction.** Every resource in this hub has been vetted to meet the demands of modern web architecture.
                </p>
                <div className="flex items-center gap-4 text-zinc-600 font-mono text-[10px] uppercase">
                  <span className="flex items-center gap-1"><ShieldCheck size={12}/> Verified_Build</span>
                  <span className="flex items-center gap-1"><Zap size={12}/> High_Latency_UI</span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="mailto:adinahawaldar@gmail.com" className="p-8 rounded-2xl bg-white flex flex-col justify-between group hover:bg-zinc-200 transition-colors h-48">
                  <div className="flex justify-between items-start">
                    <Mail className="text-black" size={24} />
                    <ExternalLink className="text-zinc-300 group-hover:text-black transition-colors" size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block mb-1">Direct_Channel</span>
                    <span className="text-xl font-bold text-black uppercase tracking-tighter">Send Message.</span>
                  </div>
                </a>

                <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between h-48">
                  <Layers className="text-zinc-600" size={24} />
                  <div>
                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest block mb-1">Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xl font-bold text-white uppercase tracking-tighter tracking-widest">Active_Node</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <footer className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3">
            </div>
            
          </footer>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutRegistry;