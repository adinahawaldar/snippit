import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Sparkles, Layout, Code, PenTool, Database, BarChart,
  Plus, Minus, ExternalLink, Video, Music, Shield, Smartphone, Globe, Bot
} from 'lucide-react';

const toolRegistry = {
  frontend: [
    { name: "v0.dev", desc: "Generative UI system by Vercel.", link: "https://v0.dev", img: "https://v0.dev/favicon.ico" },
    { name: "Anima", desc: "Figma to high-quality React code.", link: "https://animaapp.com", img: "https://www.animaapp.com/favicon.ico" },
    { name: "Locofy", desc: "Turn designs into frontend code.", link: "https://locofy.ai", img: "https://www.locofy.ai/favicon.ico" },
    { name: "Framer AI", desc: "Generate landing pages from prompts.", link: "https://framer.com", img: "https://www.framer.com/favicon.ico" },
    { name: "Builder.io", desc: "Visual CMS with AI design-to-code.", link: "https://builder.io", img: "https://www.builder.io/favicon.ico" },
    { name: "MagicUI", desc: "Animated UI components for React.", link: "https://magicui.design", img: "https://magicui.design/favicon.ico" },
    { name: "PureCode", desc: "Custom UI components from prompts.", link: "https://purecode.ai", img: "https://purecode.ai/favicon.ico" },
    { name: "Relume", desc: "AI site-builder for Webflow.", link: "https://relume.io", img: "https://www.relume.io/favicon.ico" },
    { name: "Screenshot2Code", desc: "Image to Tailwind/React code.", link: "https://github.com/abi/screenshot-to-code", img: "https://github.com/favicon.ico" },
    { name: "Bento Grids", desc: "Bento-style UI inspiration.", link: "https://bentogrids.com", img: "https://bentogrids.com/favicon.ico" },
    { name: "Texport AI", desc: "AI-driven UX copy generation.", link: "https://textport.ai", img: "https://textport.ai/favicon.ico" },
    { name: "Uizard", desc: "Rapid UI prototyping and wireframing.", link: "https://uizard.io", img: "https://uizard.io/favicon.ico" },
    { name: "Fronty", desc: "Convert images to HTML/CSS code.", link: "https://fronty.com", img: "https://fronty.com/favicon.ico" },
    { name: "Visily", desc: "AI-powered wireframing for teams.", link: "https://visily.ai", img: "https://visily.ai/favicon.ico" },
    { name: "Components.ai", desc: "Generative design systems tool.", link: "https://components.ai", img: "https://components.ai/favicon.ico" },
  ],
  backend: [
    { name: "Cursor", desc: "The AI-first code editor.", link: "https://cursor.sh", img: "https://cursor.sh/favicon.ico" },
    { name: "Copilot", desc: "AI pair programmer by GitHub.", link: "https://github.com/features/copilot", img: "https://github.com/favicon.ico" },
    { name: "Warp", desc: "The terminal with built-in AI.", link: "https://warp.dev", img: "https://www.warp.dev/favicon.ico" },
    { name: "Supabase AI", desc: "Postgres schema and SQL gen.", link: "https://supabase.com", img: "https://supabase.com/favicon.ico" },
    { name: "Pinecone", desc: "Vector DB for AI apps.", link: "https://pinecone.io", img: "https://www.pinecone.io/favicon.ico" },
    { name: "LangChain", desc: "Framework for LLM-powered apps.", link: "https://langchain.com", img: "https://www.langchain.com/favicon.ico" },
    { name: "Replit Agent", desc: "AI that builds full-stack apps.", link: "https://replit.com", img: "https://replit.com/favicon.ico" },
    { name: "Codeium", desc: "High-performance AI coding tool.", link: "https://codeium.com", img: "https://codeium.com/favicon.ico" },
    { name: "Tabnine", desc: "AI for professional developers.", link: "https://tabnine.com", img: "https://tabnine.com/favicon.ico" },
    { name: "Amazon Q", desc: "Expert AI for AWS infrastructure.", link: "https://aws.amazon.com/q/", img: "https://aws.amazon.com/favicon.ico" },
    { name: "Baseten", desc: "Deploy ML models as APIs instantly.", link: "https://baseten.co", img: "https://baseten.co/favicon.ico" },
    { name: "Hugging Face", desc: "The platform for open-source AI.", link: "https://huggingface.co", img: "https://huggingface.co/favicon.ico" },
    { name: "Vercel SDK", desc: "Build AI-powered chat interfaces.", link: "https://sdk.vercel.ai", img: "https://vercel.com/favicon.ico" },
    { name: "Together AI", desc: "Fastest inference for open models.", link: "https://together.ai", img: "https://together.ai/favicon.ico" },
    { name: "Weights & Biases", desc: "Developer tools for ML teams.", link: "https://wandb.ai", img: "https://wandb.ai/favicon.ico" },
  ],
  design: [
    { name: "Midjourney", desc: "Highest quality image generation.", link: "https://midjourney.com", img: "https://midjourney.com/favicon.ico" },
    { name: "DALL-E 3", desc: "Photorealistic image gen by OpenAI.", link: "https://openai.com/dall-e-3", img: "https://openai.com/favicon.ico" },
    { name: "Recraft", desc: "AI for consistent vector art & icons.", link: "https://recraft.ai", img: "https://recraft.ai/favicon.ico" },
    { name: "Leonardo AI", desc: "Advanced creative asset production.", link: "https://leonardo.ai", img: "https://leonardo.ai/favicon.ico" },
    { name: "Canva Magic", desc: "Complete AI graphic design suite.", link: "https://canva.com", img: "https://canva.com/favicon.ico" },
    { name: "Adobe Firefly", desc: "Generative AI inside Photoshop.", link: "https://adobe.com", img: "https://adobe.com/favicon.ico" },
    { name: "Krea AI", desc: "Real-time image enhancement.", link: "https://krea.ai", img: "https://krea.ai/favicon.ico" },
    { name: "Khroma", desc: "AI color palette generator.", link: "https://khroma.co", img: "https://khroma.co/favicon.ico" },
    { name: "Fontjoy", desc: "AI-powered font pairings.", link: "https://fontjoy.com", img: "https://fontjoy.com/favicon.ico" },
    { name: "Flair AI", desc: "High-end product photography.", link: "https://flair.ai", img: "https://flair.ai/favicon.ico" },
    { name: "Galileo AI", desc: "Text-to-UI design for mobile/web.", link: "https://usegalileo.ai", img: "https://usegalileo.ai/favicon.ico" },
    { name: "Looka", desc: "AI logo and brand identity builder.", link: "https://looka.com", img: "https://looka.com/favicon.ico" },
    { name: "Mokker", desc: "Instant AI product background replacement.", link: "https://mokker.ai", img: "https://mokker.ai/favicon.ico" },
    { name: "Vectorizer AI", desc: "Convert pixels to vectors with AI.", link: "https://vectorizer.ai", img: "https://vectorizer.ai/favicon.ico" },
    { name: "VanceAI", desc: "Professional image quality enhancer.", link: "https://vanceai.com", img: "https://vanceai.com/favicon.ico" },
  ],
  data: [
    { name: "Julius AI", desc: "Personal AI data scientist for analysis.", link: "https://julius.ai", img: "https://julius.ai/favicon.ico" },
    { name: "Tableau Pulse", desc: "AI-driven automated business insights.", link: "https://tableau.com", img: "https://tableau.com/favicon.ico" },
    { name: "Polymer", desc: "Turn spreadsheets into data apps.", link: "https://polymersearch.com", img: "https://polymersearch.com/favicon.ico" },
    { name: "Akkio", desc: "Predictive AI for business data.", link: "https://akkio.com", img: "https://akkio.com/favicon.ico" },
    { name: "MonkeyLearn", desc: "No-code text analysis and NLP.", link: "https://monkeylearn.com", img: "https://monkeylearn.com/favicon.ico" },
    { name: "Databricks IQ", desc: "Data intelligence for enterprise.", link: "https://databricks.com", img: "https://databricks.com/favicon.ico" },
    { name: "Hex Magic", desc: "AI-assisted SQL and Python notebooks.", link: "https://hex.tech", img: "https://hex.tech/favicon.ico" },
    { name: "Glean", desc: "AI search for your company's data.", link: "https://glean.com", img: "https://glean.com/favicon.ico" },
    { name: "Rows AI", desc: "Spreadsheets with AI capabilities.", link: "https://rows.com", img: "https://rows.com/favicon.ico" },
    { name: "Notably", desc: "AI for research and qualitative data.", link: "https://notably.ai", img: "https://notably.ai/favicon.ico" },
    { name: "Domo AI", desc: "Self-service data app automation.", link: "https://domo.com", img: "https://domo.com/favicon.ico" },
    { name: "Hevo Data", desc: "Automated data pipeline platform.", link: "https://hevodata.com", img: "https://hevodata.com/favicon.ico" },
    { name: "PowerBI Copilot", desc: "Natural language reporting by MS.", link: "https://powerbi.microsoft.com", img: "https://microsoft.com/favicon.ico" },
    { name: "Outerbounds", desc: "Platform for full-stack ML/AI.", link: "https://outerbounds.com", img: "https://outerbounds.com/favicon.ico" },
    { name: "DataRobot", desc: "Value-driven AI lifecycle platform.", link: "https://datarobot.com", img: "https://datarobot.com/favicon.ico" },
  ],
  marketing: [
    { name: "Perplexity", desc: "Conversational search and research.", link: "https://perplexity.ai", img: "https://perplexity.ai/favicon.ico" },
    { name: "Jasper", desc: "AI brand voice for enterprise teams.", link: "https://jasper.ai", img: "https://jasper.ai/favicon.ico" },
    { name: "Copy.ai", desc: "GTM automation for sales & marketing.", link: "https://copy.ai", img: "https://copy.ai/favicon.ico" },
    { name: "Surfer SEO", desc: "AI-powered content optimization.", link: "https://surferseo.com", img: "https://surferseo.com/favicon.ico" },
    { name: "Mutiny", desc: "AI website personalization tool.", link: "https://mutinyhq.com", img: "https://mutinyhq.com/favicon.ico" },
    { name: "Typeform AI", desc: "Conversational forms and surveys.", link: "https://typeform.com", img: "https://typeform.com/favicon.ico" },
    { name: "HubSpot AI", desc: "Integrated CRM and sales automation.", link: "https://hubspot.com", img: "https://hubspot.com/favicon.ico" },
    { name: "Pencil", desc: "AI generated ads for e-commerce.", link: "https://trypencil.com", img: "https://trypencil.com/favicon.ico" },
    { name: "AdCreative.ai", desc: "High-conversion ad generation.", link: "https://adcreative.ai", img: "https://adcreative.ai/favicon.ico" },
    { name: "MarketMuse", desc: "AI content planning and strategy.", link: "https://marketmuse.com", img: "https://marketmuse.com/favicon.ico" },
    { name: "Brandwatch", desc: "AI-driven social media listening.", link: "https://brandwatch.com", img: "https://brandwatch.com/favicon.ico" },
    { name: "Seventh Sense", desc: "AI for email marketing optimization.", link: "https://theseventhsense.com", img: "https://theseventhsense.com/favicon.ico" },
    { name: "Lately", desc: "Social media post generation from video.", link: "https://lately.ai", img: "https://lately.ai/favicon.ico" },
    { name: "Phrasee", desc: "AI-powered brand content optimization.", link: "https://phrasee.com", img: "https://phrasee.com/favicon.ico" },
    { name: "Simplified", desc: "One-stop marketing design & copy.", link: "https://simplified.com", img: "https://simplified.com/favicon.ico" },
  ],
  security: [
    { name: "Snyk", desc: "Developer-first security automation.", link: "https://snyk.io", img: "https://snyk.io/favicon.ico" },
    { name: "Wiz", desc: "Cloud security posture management.", link: "https://wiz.io", img: "https://wiz.io/favicon.ico" },
    { name: "Orca Security", desc: "Agentless cloud security platform.", link: "https://orca.security", img: "https://orca.security/favicon.ico" },
    { name: "SentinelOne", desc: "AI-powered endpoint protection.", link: "https://sentinelone.com", img: "https://sentinelone.com/favicon.ico" },
    { name: "Darktrace", desc: "Self-learning AI for cyber defense.", link: "https://darktrace.com", img: "https://darktrace.com/favicon.ico" },
    { name: "Tines", desc: "No-code automation for security teams.", link: "https://tines.com", img: "https://tines.com/favicon.ico" },
    { name: "Abnormal Security", desc: "AI-native cloud email security.", link: "https://abnormalsecurity.com", img: "https://abnormalsecurity.com/favicon.ico" },
    { name: "Tessian", desc: "Intelligent email security platform.", link: "https://tessian.com", img: "https://tessian.com/favicon.ico" },
    { name: "Lacework", desc: "Data-driven cloud security platform.", link: "https://lacework.com", img: "https://lacework.com/favicon.ico" },
    { name: "StackHawk", desc: "Dynamic application security testing.", link: "https://stackhawk.com", img: "https://stackhawk.com/favicon.ico" },
    { name: "Vanta", desc: "Automated compliance and security.", link: "https://vanta.com", img: "https://vanta.com/favicon.ico" },
    { name: "Socket", desc: "Detect and block supply chain attacks.", link: "https://socket.dev", img: "https://socket.dev/favicon.ico" },
    { name: "Cloudflare One", desc: "Zero trust security for enterprise.", link: "https://cloudflare.com", img: "https://cloudflare.com/favicon.ico" },
    { name: "Trend Micro", desc: "AI-led threat hunting and defense.", link: "https://trendmicro.com", img: "https://trendmicro.com/favicon.ico" },
    { name: "GitGuardian", desc: "Automated secret detection for code.", link: "https://gitguardian.com", img: "https://gitguardian.com/favicon.ico" },
  ],
  mobile: [
    { name: "FlutterFlow", desc: "Visual low-code mobile app builder.", link: "https://flutterflow.io", img: "https://flutterflow.io/favicon.ico" },
    { name: "Draftbit", desc: "Visual tool for building React Native.", link: "https://draftbit.com", img: "https://draftbit.com/favicon.ico" },
    { name: "Expo", desc: "Comprehensive tools for universal apps.", link: "https://expo.dev", img: "https://expo.dev/favicon.ico" },
    { name: "Appy Pie", desc: "No-code AI mobile app generator.", link: "https://appypie.com", img: "https://appypie.com/favicon.ico" },
    { name: "Thunkable", desc: "Drag-and-drop native app builder.", link: "https://thunkable.com", img: "https://thunkable.com/favicon.ico" },
    { name: "Bravostudio", desc: "Turn Figma designs into native apps.", link: "https://bravostudio.app", img: "https://bravostudio.app/favicon.ico" },
    { name: "AppMaster", desc: "No-code backend and mobile gen.", link: "https://appmaster.io", img: "https://appmaster.io/favicon.ico" },
    { name: "Bubble Mobile", desc: "Web and mobile app ecosystem.", link: "https://bubble.io", img: "https://bubble.io/favicon.ico" },
    { name: "TestFlight AI", desc: "Automated beta testing insights.", link: "https://developer.apple.com", img: "https://apple.com/favicon.ico" },
    { name: "Google Firebase AI", desc: "Integrated AI for mobile backends.", link: "https://firebase.google.com", img: "https://google.com/favicon.ico" },
    { name: "Instabug", desc: "AI-powered mobile crash reporting.", link: "https://instabug.com", img: "https://instabug.com/favicon.ico" },
    { name: "RevenueCat", desc: "In-app subscription management.", link: "https://revenuecat.com", img: "https://revenuecat.com/favicon.ico" },
    { name: "Embrace", desc: "Mobile-first performance monitoring.", link: "https://embrace.io", img: "https://embrace.io/favicon.ico" },
    { name: "Bitrise", desc: "Mobile-specific CI/CD platform.", link: "https://bitrise.io", img: "https://bitrise.io/favicon.ico" },
    { name: "Ionic Engine", desc: "Enterprise cross-platform framework.", link: "https://ionicframework.com", img: "https://ionicframework.com/favicon.ico" },
  ],
};

const categories = [
  { id: 'frontend', name: 'Frontend', icon: <Layout size={14} /> },
  { id: 'backend', name: 'Backend', icon: <Code size={14} /> },
  { id: 'design', name: 'Design', icon: <PenTool size={14} /> },
  { id: 'video', name: 'Video', icon: <Video size={14} /> },
  { id: 'data', name: 'Data AI', icon: <Database size={14} /> },
  { id: 'marketing', name: 'Marketing', icon: <BarChart size={14} /> },
  { id: 'security', name: 'Security', icon: <Shield size={14} /> },
  { id: 'mobile', name: 'Mobile', icon: <Smartphone size={14} /> },
  { id: 'devops', name: 'Infra', icon: <Globe size={14} /> },
];

const AIToolkitDiscovery = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [limit, setLimit] = useState(10);

  const activeTools = toolRegistry[activeTab] || [];
  const visibleTools = activeTools.slice(0, limit);

  return (
    <div className="bg-[#020202] min-h-screen text-white font-sans selection:bg-blue-500/30">
      

      {/* --- TOP NAV --- */}
      {/* <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-xl border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-6">
          <button onClick={() => window.history.back()} className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors">
            ← Exit Registry
          </button>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-xs font-bold uppercase tracking-widest italic">Node Discovery</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
          <Search size={14} className="text-zinc-500" />
          <input placeholder="Filter tools..." className="bg-transparent border-none focus:ring-0 text-[11px] w-40" />
        </div>
      </nav> */}

      <div className="flex pt-20">
        {/* --- SIDEBAR --- */}
        <aside className="w-24 lg:w-72 h-[calc(100vh-5rem)] sticky top-20 border-r border-white/5 p-4 lg:p-6 overflow-y-auto no-scrollbar">
          <div className="space-y-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setLimit(10); }}
                className={`w-full flex items-center gap-3.5 p-3 rounded-xl transition-all relative group ${
                  activeTab === cat.id ? 'bg-blue-500/10 text-blue-400' : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div layoutId="sidebarActive" className="absolute inset-0 bg-blue-500/5 rounded-xl border border-blue-500/20" />
                )}
                <span className="relative z-10">{cat.icon}</span>
                <span className="hidden lg:block relative z-10 text-[10px] font-bold uppercase tracking-wider flex-1 text-left">{cat.name}</span>
                <span className="hidden lg:block text-[9px] opacity-20 font-mono">
                    {toolRegistry[cat.id]?.length || 0}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 p-8 lg:p-16">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-2">
                  <Bot size={14} className="text-blue-500" />
                  <span className="text-[10px] font-mono text-zinc-600 uppercase">Registry_Sector_{activeTab}</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{activeTab}</h2>
              </div>

              {activeTools.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {visibleTools.map((tool, idx) => (
                    <motion.a
                      key={idx}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      className="group flex flex-col justify-between p-6 rounded-3xl bg-[#080808] border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/[0.02] transition-all aspect-[4/5]"
                    >
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 p-2.5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/40 overflow-hidden">
                          <img src={tool.img} alt="" className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                               onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" }} />
                        </div>
                        <ExternalLink size={12} className="text-zinc-800 group-hover:text-blue-500 transition-colors" />
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mb-2 uppercase tracking-tight">
                          {tool.name}
                        </h4>
                        <p className="text-[11px] leading-relaxed text-zinc-500 group-hover:text-zinc-300 transition-colors line-clamp-3">
                          {tool.desc}
                        </p>
                      </div>

                      <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">Verified_Agent</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-3xl">
                  <p className="text-zinc-700 text-xs font-mono uppercase tracking-[0.2em]">Deploying Node Content...</p>
                </div>
              )}

              {/* CONDITIONAL CONTROLS: Only show if toolCount > 10 */}
              {activeTools.length > 10 && (
                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-8">
                    <div className="flex items-center gap-4">
                    {limit === 10 ? (
                        <button onClick={() => setLimit(activeTools.length)} 
                                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 hover:text-white transition-all bg-blue-500/5 px-8 py-4 rounded-2xl border border-blue-500/20 hover:bg-blue-500 hover:border-blue-500">
                        <Plus size={14} /> Load More 
                        </button>
                    ) : (
                        <button onClick={() => setLimit(10)} 
                                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-all bg-white/5 px-8 py-4 rounded-2xl border border-white/10">
                        <Minus size={14} /> View Less
                        </button>
                    )}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.3em]">
                    Registry Index: {visibleTools.length} / {activeTools.length}
                    </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AIToolkitDiscovery;