import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, FileText, Info, Fingerprint } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const LicensePage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <div className="bg-[#050505] min-h-screen text-zinc-400 font-sans selection:bg-blue-500/30 relative py-20 px-6">
        
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px]" />
        </div>

        <main className="max-w-4xl mx-auto relative z-10">
          
          {/* --- HEADER --- */}
          <header className="mb-16 border-b border-zinc-900 pb-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black uppercase tracking-widest text-emerald-500">
                Open Source Protocol
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Legal <span className="text-zinc-700">Framework.</span>
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
              Snippit is released under the MIT License. This document outlines your rights to use, modify, and distribute the platform.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800/50">
              <Scale className="text-blue-500 mb-4" size={20} />
              <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-2">Permissions</h3>
              <ul className="text-xs space-y-2 opacity-70">
                <li>• Commercial Use</li>
                <li>• Modification</li>
                <li>• Distribution</li>
                <li>• Private Use</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800/50">
              <ShieldCheck className="text-emerald-500 mb-4" size={20} />
              <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-2">Conditions</h3>
              <ul className="text-xs space-y-2 opacity-70">
                <li>• License & Copyright Notice</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-zinc-800/50">
              <Info className="text-amber-500 mb-4" size={20} />
              <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-2">Limitations</h3>
              <ul className="text-xs space-y-2 opacity-70">
                <li>• No Liability</li>
                <li>• No Warranty</li>
              </ul>
            </div>
          </div>

          <section className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 text-white">
              <FileText size={18} />
              <h2 className="text-xl font-bold tracking-tight uppercase">MIT License</h2>
            </div>

            <div className="font-mono text-sm leading-relaxed text-zinc-500 space-y-6">
              <p>Copyright (c) {currentYear} Snippit Contributors</p>

              <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>

              <p>
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
              </p>

              <p className="uppercase text-zinc-400">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
              </p>
            </div>
          </section>

          <footer className="mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center opacity-30">
            <div className="flex items-center gap-3">
              <Fingerprint size={16} />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Legal_Archive_Node</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
              Snippit Framework // 2026
            </span>
          </footer>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LicensePage;