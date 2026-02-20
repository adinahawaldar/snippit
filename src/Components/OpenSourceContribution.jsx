import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitFork, GitPullRequest, Terminal, Github, 
  Code2, Globe, ArrowRight, Zap, Database, Slack,
  GitCommit, Layers, Share2, CheckCircle2
} from 'lucide-react';

const ContributionNexus = () => {
  return (
    <section className="relative py-32 px-6 bg-[#020202] overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-24 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Contribution Protocol v2.0</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6 leading-none">
            Scale the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Registry.</span>
          </h2>

          <div className="relative overflow-hidden w-full max-w-lg mb-8 group mx-auto text-center">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent top-0" />
            <div className="py-3">
              <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest font-medium">
                Have a useful snippet or repo? 
                <a
                  href="https://github.com/adinahawaldar/snippit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white ml-2 cursor-pointer hover:text-purple-400 transition-colors underline underline-offset-4 hover:decoration-purple-500/50"
                >
                  Submit it to Snippit.
                </a>
              </p>
            </div>
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent bottom-0" />
          </div>

          <p className="max-w-xl text-zinc-500 text-xs uppercase tracking-[0.2em] leading-relaxed opacity-60 mx-auto">
            Standardizing the world's SaaS infrastructure through open-source collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <div className="lg:col-span-5 relative group min-h-[480px]">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-purple-500/30 to-blue-500/0 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative h-full bg-[#080808] border border-white/10 rounded-[2.5rem] p-8 overflow-hidden flex flex-col shadow-2xl">
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/5" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/5" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/5" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  <Terminal size={12} className="text-purple-400" /> git-workflow.sh
                </div>
              </div>
              
              <div className="space-y-4 font-mono text-[12px] md:text-[13px] leading-relaxed">
                <CodeLine line="01" text={<><span className="text-zinc-600"># Start the contribution</span></>} />
                <CodeLine line="02" text={<><span className="text-purple-500">git</span> clone <span className="text-blue-400">your-fork-url.git</span></>} />
                <CodeLine line="03" text={<><span className="text-purple-500">git</span> checkout -b <span className="text-amber-500">feat/new-snippet</span></>} />
                <CodeLine line="04" text={<><span className="text-purple-500">git</span> commit -m <span className="text-green-500">"Add: UI Component"</span></>} />
                <CodeLine line="05" text={<><span className="text-purple-500">git</span> push origin <span className="text-amber-500">feat/new-snippet</span></>} />
                <CodeLine line="06" text={<><span className="text-zinc-600"># Ready for PR Review</span></>} />
              </div>

              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[60px] bg-gradient-to-b from-transparent via-purple-500/10 to-transparent pointer-events-none"
              />
              
              <div className="mt-auto pt-8">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                   <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-6 h-6 rounded-full border-2 border-[#080808] bg-zinc-700" />
                     ))}
                   </div>
                   <span className="text-[10px] text-zinc-500 font-mono italic">+20 recent PRs merged</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PipelineNode icon={<GitFork className="text-blue-400" />} step="01" title="Fork & Clone" desc="Create your copy of Snippit on GitHub and pull it local." color="blue" />
              <PipelineNode icon={<Layers className="text-purple-400" />} step="02" title="Feature Branch" desc="Create feat/ui-card branch from main to begin." color="purple" />
              <PipelineNode icon={<GitCommit className="text-green-400" />} step="03" title="Commit & Push" desc="Add code with clear messages and push to head." color="green" />
              <PipelineNode icon={<GitPullRequest className="text-pink-400" />} step="04" title="PR & Merge" desc="Open PR to original repo. Review, approve, and sync." color="pink" />
            </div>
            
            <motion.a 
              href="https://github.com/adinahawaldar/snippit"
              target="_blank"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="flex items-center justify-between p-7 bg-white rounded-[2.5rem] group transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black rounded-2xl text-white group-hover:rotate-12 transition-transform shadow-xl">
                  <Github size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">Public Repository</p>
                  <p className="text-black font-bold text-lg md:text-xl tracking-tight leading-none">Initialize Contribution Flow</p>
                </div>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-black/5 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                <ArrowRight size={24} />
              </div>
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
};

const CodeLine = ({ line, text }) => (
  <div className="flex gap-4 group/line">
    <span className="text-zinc-800 text-[10px] group-hover/line:text-zinc-600 transition-colors w-4">{line}</span>
    <p className="text-zinc-400 transition-colors">{text}</p>
  </div>
);

const PipelineNode = ({ icon, step, title, desc, color }) => {
  const colorMap = {
    blue: "group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.03]",
    purple: "group-hover:border-purple-500/30 group-hover:bg-purple-500/[0.03]",
    green: "group-hover:border-green-500/30 group-hover:bg-green-500/[0.03]",
    pink: "group-hover:border-pink-500/30 group-hover:bg-pink-500/[0.03]"
  };

  return (
    <div className={`group relative p-8 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] transition-all duration-500 ${colorMap[color]}`}>
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/10">
          {icon}
        </div>
        <span className="font-mono text-[9px] text-zinc-700 font-bold group-hover:text-zinc-400 uppercase italic">Step_{step}</span>
      </div>
      <h4 className="text-lg font-bold text-white mb-2 tracking-tight uppercase italic">{title}</h4>
      <p className="text-[11px] leading-relaxed text-zinc-500 group-hover:text-zinc-300 transition-colors">{desc}</p>
      <svg className="absolute bottom-6 right-6 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-700" viewBox="0 0 100 100">
        <path d="M0 100 L50 100 L50 50 L100 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
      </svg>
    </div>
  );
};

export default ContributionNexus;