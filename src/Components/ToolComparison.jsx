import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Layout, Sparkles, ExternalLink, 
  ChevronRight, CheckCircle2, Globe 
} from 'lucide-react';

const comparisonData = [
  {
    category: "Code Generation",
    icon: <Terminal size={18} className="text-blue-400" />,
    tasks: [
      { label: "Best for beginners", tool: "GitHub Copilot", link: "https://github.com/features/copilot", desc: "Intuitive auto-complete that learns your style." },
      { label: "Best for full projects", tool: "Cursor", link: "https://cursor.sh", desc: "Entire codebase awareness for complex refactoring." },
      { label: "Best for debugging", tool: "ChatGPT (o1-pro)", link: "https://chatgpt.com", desc: "Deep reasoning for fixing logic bottlenecks." }
    ]
  },
  {
    category: "UI Design & Frontend",
    icon: <Layout size={18} className="text-blue-400" />,
    tasks: [
      { label: "Best for wireframes", tool: "Uizard", link: "https://uizard.io", desc: "Turn sketches into editable digital mockups instantly." },
      { label: "Best for production-ready UI", tool: "v0.dev", link: "https://v0.dev", desc: "Generate Shadcn/UI components ready to copy-paste." },
      { label: "Best for inspiration", tool: "Mobbin (AI Search)", link: "https://mobbin.com", desc: "Search real-world UI patterns via natural language." }
    ]
  },
  {
    category: "Content & SEO",
    icon: <Globe size={18} className="text-blue-400" />,
    tasks: [
      { label: "Best for research", tool: "Perplexity", link: "https://perplexity.ai", desc: "Cites sources for technical and market research." },
      { label: "Best for long-form", tool: "Jasper", link: "https://jasper.ai", desc: "Handles brand voice and complex marketing campaigns." },
      { label: "Best for fast copy", tool: "Copy.ai", link: "https://copy.ai", desc: "Quick social snippets and high-conversion headlines." }
    ]
  }
];

const ToolComparison = () => {
  return (
    <section className="py-32 bg-[#020202] px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Decision Matrix</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Quick <span className="text-zinc-600">Comparison.</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-lg font-medium">
            Skip the research. We've benchmarked the performance of every major AI model for these specific builder tasks.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 gap-16">
          {comparisonData.map((section, sIdx) => (
            <div key={sIdx} className="relative">
              {/* Task Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">{section.category}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              {/* Tools Sub-Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {section.tasks.map((item, tIdx) => (
                  <motion.a
                    key={tIdx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: tIdx * 0.1 }}
                    className="group p-6 rounded-3xl bg-[#080808] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/[0.02] transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-blue-400 transition-colors">
                        {item.label}
                      </span>
                      <ExternalLink size={12} className="text-zinc-800 group-hover:text-blue-500 transition-colors" />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      {item.tool}
                    </h4>
                    
                    <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Launch Tool</span>
                      <ChevronRight size={10} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolComparison;