import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, ShieldCheck, Lock, ArrowLeft, Check } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const Terms = () => {
  const [activeSection, setActiveSection] = useState('01');

  const legalContent = [
    { id: '01', title: 'Scope of Service', icon: <FileText size={16} />, content: "This document governs the usage of the Snippet UI ecosystem. By integrating these components into your software architecture, you signify an irrevocable acceptance of these protocols. We provide the primitives; you provide the vision." },
    { id: '02', title: 'License Parameters', icon: <Scale size={16} />, content: "A perpetual, non-exclusive license is granted for commercial and personal deployments. You are permitted to modify, refactor, and extend the source code. However, redistributing the raw library as a standalone UI kit is strictly prohibited." },
    { id: '03', title: 'Liability & Safety', icon: <ShieldCheck size={16} />, content: "Snippet UI is provided 'as-is'. While we maintain 99.9% accessibility standards, we are not liable for any service interruptions or integration failures within your specific production environment." },
    { id: '04', title: 'Data Sovereignty', icon: <Lock size={16} />, content: "We operate a Zero-Retention architecture. We do not track, store, or analyze the code you copy. Your intellectual property remains locally within your development environment at all times." }
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-[#050505] min-h-screen text-zinc-400 font-sans py-24 px-10 selection:bg-blue-500/30">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-24">
        
        <div className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.5em]">System / Legal / v2.0</div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        <aside className="lg:col-span-4 flex flex-col gap-12">
          <div>
            <h1 className="text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.8] mb-4">Terms.</h1>
          </div>

          <div className="flex flex-col gap-2">
            {legalContent.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`group flex items-center justify-between px-6 py-5 rounded-2xl transition-all border ${
                  activeSection === section.id 
                  ? 'bg-zinc-900 border-white/10 text-white shadow-2xl' 
                  : 'bg-transparent border-transparent text-zinc-600 hover:text-zinc-400'
                }`}
              >
                <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest">
                  <span className={activeSection === section.id ? 'text-blue-500' : 'text-zinc-800'}>{section.id}</span>
                  {section.title}
                </div>
                {activeSection === section.id && <Check size={14} className="text-blue-500" />}
              </button>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-8">
          <motion.div 
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900/30 p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Scale size={200} />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-1 bg-blue-500 mb-10" />
              <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase italic">
                {legalContent.find(s => s.id === activeSection).title}
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium">
                {legalContent.find(s => s.id === activeSection).content}
              </p>
              
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Requirement</h4>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-tight">Attribution is not required but appreciated for public repos.</p>
                 </div>
                 <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                    <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Restriction</h4>
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-tight">No redistribution of raw JSON/Tailwind tokens as a builder tool.</p>
                 </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 px-12 flex justify-between items-center opacity-20 text-[9px] font-black uppercase tracking-[0.4em]">
             <span>Legal Document Ref: SN-2026-X</span>
             <div className="flex gap-4">
                <span>Privacy</span>
                <span>Security</span>
                <span>Contact</span>
             </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Terms;