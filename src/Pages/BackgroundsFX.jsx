import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ChevronDown, Terminal, Sparkles } from 'lucide-react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const VisualRegistry = () => {
    const [activeTab, setActiveTab] = useState('Gradients');
    const [showMore, setShowMore] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState(null);

    // ... (Gradients and Textures arrays remain the same as your provided code)
    const gradients = [

        { name: "Aurora", tw: "bg-gradient-to-tr from-slate-900 via-purple-900/40 to-slate-900" },

        { name: "Deep Sea", tw: "bg-gradient-to-b from-blue-950 via-black to-black" },

        { name: "Hyper Glow", tw: "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" },

        { name: "Emerald", tw: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-950 to-black" },

        { name: "Cyber", tw: "bg-gradient-to-r from-fuchsia-600/10 to-purple-600/10" },

        { name: "Northern", tw: "bg-gradient-to-tr from-green-400/10 via-cyan-900/20 to-black" },

        { name: "Blood", tw: "bg-[radial-gradient(circle_at_0%_0%,rgba(239,68,68,0.1),transparent_50%)]" },

        { name: "Mist", tw: "bg-gradient-to-br from-zinc-800/10 via-zinc-950 to-black" },

        { name: "Midnight", tw: "bg-gradient-to-tr from-blue-900/20 via-slate-950 to-black" },

        { name: "Flare", tw: "bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)]" },

        { name: "Amethyst", tw: "bg-gradient-to-tr from-violet-900/30 to-transparent" },

        { name: "Orbit", tw: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-black" },

        { name: "Toxic", tw: "bg-gradient-to-br from-lime-400/5 via-emerald-950 to-black" },

        { name: "Sunset", tw: "bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent" },

        { name: "Void", tw: "bg-gradient-to-t from-zinc-900 to-black" },

        { name: "Nebula", tw: "bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-black" },

        { name: "Solar Flare", tw: "bg-gradient-to-tr from-yellow-500/10 via-orange-600/10 to-transparent" },

        { name: "Iceberg", tw: "bg-gradient-to-b from-cyan-200/5 via-blue-900/20 to-black" },

        { name: "Plasma", tw: "bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.15),transparent_60%)]" },

        { name: "Obsidian", tw: "bg-gradient-to-br from-neutral-900 via-black to-black" },

        { name: "Lagoon", tw: "bg-gradient-to-tr from-teal-900/30 via-cyan-900/10 to-black" },

        { name: "Inferno", tw: "bg-gradient-to-br from-red-600/10 via-orange-700/10 to-black" },

        { name: "Frost", tw: "bg-gradient-to-tr from-blue-200/5 via-slate-900/30 to-black" },

        { name: "Cosmic Dust", tw: "bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.12),transparent_65%)]" },

        { name: "Horizon", tw: "bg-gradient-to-t from-indigo-950 via-slate-900 to-black" },

        { name: "Neon Pulse", tw: "bg-gradient-to-r from-pink-500/10 via-fuchsia-500/10 to-purple-600/10" },

        { name: "Auric Glow", tw: "bg-[radial-gradient(circle_at_50%_10%,rgba(250,204,21,0.15),transparent_55%)]" },

        { name: "Monsoon", tw: "bg-gradient-to-br from-slate-800/40 via-blue-950/30 to-black" },

        { name: "Carbon", tw: "bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" },

        { name: "Ultraviolet", tw: "bg-gradient-to-tr from-violet-800/20 via-indigo-900/30 to-black" },

        { name: "Abyss", tw: "bg-gradient-to-b from-slate-950 via-black to-black" },

        { name: "Spectrum", tw: "bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-indigo-500/10 to-cyan-500/10" },

        { name: "Zenith", tw: "bg-gradient-to-t from-black via-slate-900 to-indigo-950/40" },

        { name: "Eclipse", tw: "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6),rgba(0,0,0,1))]" },

        { name: "Mint Glow", tw: "bg-gradient-to-br from-emerald-400/10 via-teal-900/20 to-black" },

        { name: "Rose Mist", tw: "bg-gradient-to-tr from-rose-400/10 via-pink-900/10 to-black" },

        { name: "Polar Night", tw: "bg-gradient-to-b from-sky-900/20 via-slate-950 to-black" },

        { name: "Digital Wave", tw: "bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.12),transparent_60%)]" },

        { name: "Crystal", tw: "bg-gradient-to-br from-cyan-100/5 via-slate-900/30 to-black" },

        { name: "Phantom", tw: "bg-gradient-to-tr from-neutral-800/20 via-neutral-950 to-black" },

        { name: "Pearl Glow", tw: "bg-gradient-to-br from-white via-zinc-100 to-zinc-200" },

        { name: "Soft Sky", tw: "bg-gradient-to-tr from-sky-100 via-blue-50 to-white" },

        { name: "Pastel Dream", tw: "bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100" },

        { name: "Morning Light", tw: "bg-gradient-to-tr from-amber-100 via-yellow-50 to-white" },

        { name: "Mint Breeze", tw: "bg-gradient-to-br from-emerald-100 via-teal-50 to-white" },

        { name: "Lavender Mist", tw: "bg-gradient-to-tr from-violet-100 via-purple-50 to-white" },

        { name: "Rose Cloud", tw: "bg-gradient-to-br from-rose-100 via-pink-50 to-white" },

        { name: "Aqua Silk", tw: "bg-gradient-to-tr from-cyan-100 via-sky-50 to-white" },

        { name: "Ivory Fade", tw: "bg-gradient-to-br from-neutral-100 via-stone-50 to-white" },

        { name: "Sunwash", tw: "bg-gradient-to-tr from-yellow-100 via-orange-50 to-white" },

        { name: "Peach Fuzz", tw: "bg-gradient-to-br from-orange-100 via-rose-50 to-white" },

        { name: "Crystal Light", tw: "bg-gradient-to-tr from-slate-100 via-blue-50 to-white" },

        { name: "Blush Aura", tw: "bg-gradient-to-br from-pink-200/40 via-white to-white" },

        { name: "Heaven Glow", tw: "bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.9),rgba(240,249,255,1))]" },

        { name: "Cloud Nine", tw: "bg-gradient-to-b from-white via-sky-50 to-slate-100" },

        { name: "Frosted Glass", tw: "bg-gradient-to-br from-white/80 via-white/40 to-slate-100/60" },

        { name: "Soft Horizon", tw: "bg-gradient-to-tr from-indigo-100 via-purple-50 to-white" },

        { name: "Cream Wash", tw: "bg-gradient-to-br from-amber-50 via-yellow-50 to-white" },

        { name: "Dreamy Fade", tw: "bg-gradient-to-tr from-fuchsia-100/40 via-white to-white" },

        { name: "Halo Light", tw: "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(226,232,240,0.8))]" },

        { name: "Silk White", tw: "bg-gradient-to-br from-white via-neutral-50 to-neutral-100" },

        { name: "Opal Shine", tw: "bg-gradient-to-tr from-slate-100 via-white to-sky-50" },

        { name: "Petal Light", tw: "bg-gradient-to-br from-rose-50 via-pink-50 to-white" },

        { name: "Aurora Light", tw: "bg-gradient-to-tr from-indigo-100/60 via-white to-cyan-50" },

        { name: "Snow Drift", tw: "bg-gradient-to-b from-white via-slate-50 to-slate-100" },

        { name: "Lemon Haze", tw: "bg-gradient-to-br from-yellow-50 via-amber-50 to-white" },

        { name: "Cotton Sky", tw: "bg-gradient-to-tr from-sky-50 via-blue-50 to-white" },

        { name: "Feather Glow", tw: "bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(241,245,249,0.9))]" },

        { name: "Iris Veil", tw: "bg-gradient-to-br from-violet-50 via-purple-50 to-white" },

        { name: "Soft Prism", tw: "bg-gradient-to-tr from-cyan-50 via-indigo-50 to-white" }







    ];



    const textures = [

        { name: "Fine Grid", tw: "bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" },

        { name: "Micro Dots", tw: "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:15px_15px]" },

        { name: "Blueprint", tw: "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" },

        { name: "Diagonal", tw: "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_10px)]" },

        { name: "Scanlines", tw: "bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(255,255,255,0.02)_1px,rgba(255,255,255,0.02)_2px)] bg-[size:100%_4px]" },

        { name: "White Noise", tw: "bg-[url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')] opacity-[0.03]" },

        { name: "Graph Paper", tw: "bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:10px_10px]" },

        { name: "Stardust", tw: "bg-[radial-gradient(white_0.5px,transparent_0.5px)] bg-[size:20px_20px] opacity-10" },

        { name: "Pulse Line", tw: "bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.1)_50%,transparent_51%)] bg-[size:100px_100%]" },

        { name: "Zenith", tw: "bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_40%)] bg-[size:50px_50px]" },

        { name: "Fiber Optic", tw: "bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(255,255,255,0.02)_20px,rgba(255,255,255,0.02)_21px)]" },

        { name: "Crossed", tw: "bg-[url('https://www.transparenttextures.com/patterns/accent-dots.png')] invert opacity-[0.05]" },

        { name: "Circuit board", tw: "bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] invert opacity-[0.03]" },

        { name: "Hex Pattern", tw: "bg-[url('https://www.transparenttextures.com/patterns/p6-polygons.png')] invert opacity-[0.03]" },

        { name: "Paper Grain", tw: "bg-[url('https://www.transparenttextures.com/patterns/dust.png')] invert opacity-[0.04]" },

        { name: "Carbon Fiber", tw: "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_2px,transparent_2px,transparent_6px)]" },

        { name: "Ultra Grid", tw: "bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" },

        { name: "Nano Dots", tw: "bg-[radial-gradient(rgba(255,255,255,0.06)_0.5px,transparent_0.5px)] bg-[size:8px_8px]" },

        { name: "Mesh Lines", tw: "bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_12px)]" },

        { name: "Wave Pattern", tw: "bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.015)_0px,rgba(255,255,255,0.015)_2px,transparent_2px,transparent_14px)]" },

        { name: "Micro Mesh", tw: "bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:6px_6px]" },

        { name: "Dot Matrix", tw: "bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:25px_25px]" },

        { name: "Subtle Stripes", tw: "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(255,255,255,0.015)_4px,rgba(255,255,255,0.015)_8px)]" },

        { name: "Holographic Grain", tw: "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03),transparent_50%)]" },

        { name: "Neural Grid", tw: "bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px]" },

        { name: "Pixel Noise", tw: "bg-[radial-gradient(rgba(255,255,255,0.04)_0.7px,transparent_0.7px)] bg-[size:12px_12px]" },

        { name: "Laser Lines", tw: "bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_11px)]" },

        { name: "Matrix Code", tw: "bg-[linear-gradient(rgba(0,255,140,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,140,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" },

        { name: "Soft Squares", tw: "bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.015)_0px,rgba(255,255,255,0.015)_1px,transparent_1px,transparent_30px)]" },

        { name: "Crystal Mesh", tw: "bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(60deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" },

        { name: "Digital Rain", tw: "bg-[repeating-linear-gradient(180deg,transparent,transparent_6px,rgba(255,255,255,0.02)_6px,rgba(255,255,255,0.02)_7px)]" },

        { name: "Micro Grain", tw: "bg-[url('https://www.transparenttextures.com/patterns/noise.png')] invert opacity-[0.03]" },

        { name: "Geo Net", tw: "bg-[repeating-linear-gradient(60deg,rgba(255,255,255,0.015)_0px,rgba(255,255,255,0.015)_1px,transparent_1px,transparent_20px)]" },

        { name: "Fine Wave", tw: "bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.012)_0px,rgba(255,255,255,0.012)_2px,transparent_2px,transparent_18px)]" },

        { name: "Quantum Dots", tw: "bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" }



    ];

    const currentData = activeTab === 'Gradients' ? gradients : textures;

    const visibleData = showMore ? currentData : currentData.slice(0, 10);
    const handleCopy = (code, index) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <>
        <Navbar/>
        <div className="bg-[#030303] min-h-screen py-24 px-6 font-sans selection:bg-blue-500/30 text-zinc-400">
            <header className="max-w-7xl mx-auto mb-20 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 mb-6"
                >
                    <Sparkles size={12} className="text-blue-400" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/80">Tailwind Engine v2.0</span>
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Surface <span className="text-zinc-700 italic font-light">Registry.</span>
                </h1>
                <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
                    High-performance background modules. <span className="text-white font-medium">Click to copy</span> utility classes directly into your production environment.
                </p>
            </header>

            <main className="max-w-7xl mx-auto">
                {/* REFINED NAVIGATION */}
                <div className="flex justify-center md:justify-start gap-12 mb-12 border-b border-white/[0.03] pb-6">
                    {['Gradients', 'Textures'].map(t => (
                        <button
                            key={t}
                            onClick={() => { setActiveTab(t); setShowMore(false); }}
                            className={`text-xs uppercase font-black tracking-[0.3em] transition-all relative ${activeTab === t ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
                        >
                            {t}
                            {activeTab === t && (
                                <motion.div layoutId="tabLine" className="absolute -bottom-[25px] left-0 right-0 h-[3px] bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* REFINED GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    <AnimatePresence mode="popLayout">
                        {visibleData.map((item, i) => (
                            <motion.div
                                key={item.name} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                                className="group relative bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-2 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
                            >
                                {/* PREVIEW IMAGE AREA */}
                                <div className="h-32 relative bg-black rounded-[1.6rem] overflow-hidden mb-4 shadow-inner">
                                    <div className={`absolute inset-0 ${item.tw}`} />

                                    {/* OVERLAY TINT FOR COHESION */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 group-hover:to-transparent transition-all duration-500" />

                                    {/* FLOATING COPY BUTTON */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            onClick={() => handleCopy(item.tw, i)}
                                            className="bg-white text-black p-3 rounded-2xl shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 active:scale-90"
                                        >
                                            {copiedIndex === i ? <Check size={18} /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* CONTENT AREA */}
                                <div className="px-3 pb-3">
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="text-[11px] font-bold text-zinc-100 uppercase tracking-wider">{item.name}</h4>
                                        <span className="text-[8px] font-black text-blue-500/60 uppercase tracking-widest px-2 py-0.5 rounded-full bg-blue-500/5 border border-blue-500/10">Tailwind</span>
                                    </div>

                                    {/* READABLE CODE BLOCK */}
                                    <div className="relative overflow-hidden">
                                        <div className="bg-[#000000]/40 rounded-xl p-3 border border-white/[0.03] font-mono text-[9px] text-zinc-500 group-hover:text-blue-400/80 transition-colors">
                                            <div className="flex gap-2 items-center mb-1 text-[8px] text-zinc-700 font-bold uppercase tracking-tighter">
                                                <Terminal size={10} />
                                                <span>Class List</span>
                                            </div>
                                            <div className="truncate italic">
                                                {item.tw}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* SHOW MORE BUTTON */}
                {!showMore && (
                    <div className="mt-20 flex justify-center">
                        <button
                            onClick={() => setShowMore(true)}
                            className="group flex items-center gap-4 px-12 py-5 bg-white text-black rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
                        >
                            Expand Registry
                            <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                )}
            </main>
        </div>
        <Footer/>
        </>
    );
};

export default VisualRegistry;