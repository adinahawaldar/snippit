import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Copy, Check, Navigation, CreditCard, MousePointer2, 
  Type, Sparkles, Layout, Database, Plus
} from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const UIComponents = () => {
  const [activeTab, setActiveTab] = useState('Navigation');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const registry = {
    Navigation: [
      { name: "Glass Navbar", tw: "fixed top-0 left-0 right-0 h-16 px-8 flex items-center justify-between bg-white/10 backdrop-blur-xl border-b border-white/20 z-50 shadow-2xl" },
      { name: "Sticky Blur", tw: "sticky top-0 w-full h-20 bg-zinc-800/90 backdrop-blur-md border-b border-zinc-700 flex items-center px-10 shadow-xl z-40" },
      { name: "Sidebar Pro", tw: "fixed left-0 top-0 h-screen w-64 bg-zinc-800 border-r border-zinc-700 flex flex-col p-6 space-y-6 shadow-2xl z-50" },
      { name: "Mega Menu", tw: "w-full max-w-5xl mx-auto bg-zinc-800 p-10 rounded-3xl grid grid-cols-4 gap-12 shadow-2xl border border-white/5" },
      { name: "Floating Menu", tw: "fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-zinc-700/60 backdrop-blur-2xl px-10 py-4 rounded-full border border-white/10 shadow-2xl z-50" },
      { name: "Icon Dock", tw: "fixed bottom-6 left-1/2 -translate-x-1/2 flex items-end gap-3 p-3 bg-zinc-800/80 backdrop-blur-lg rounded-[2.5rem] border border-white/10 shadow-2xl" },
      { name: "Step Progress", tw: "w-full max-w-3xl flex items-center justify-between py-8 px-4 relative before:absolute before:h-px before:w-full before:bg-zinc-700 before:z-0" },
      { name: "Search Bar", tw: "w-full max-w-xl flex items-center gap-4 bg-zinc-800 border border-zinc-700 px-6 py-4 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500/40 shadow-lg" },
      { name: "Breadcrumb", tw: "flex items-center gap-3 py-4 px-6 bg-zinc-900/50 rounded-full border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase tracking-widest" },
      { name: "Tabs Underline", tw: "w-full flex justify-center gap-12 border-b border-zinc-700 px-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500" },
      { name: "Command Palette", tw: "fixed inset-0 z-[100] bg-zinc-950/80 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4" },
  { name: "Orbital Radial Menu", tw: "fixed bottom-10 right-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.5)] z-50" },
  { name: "Fullscreen Curtain", tw: "fixed inset-0 z-[60] bg-zinc-900 flex flex-col items-center justify-center gap-8 text-4xl font-black uppercase tracking-tighter" },
  { name: "Mobile Bottom Nav", tw: "fixed bottom-0 left-0 right-0 h-20 bg-zinc-900/90 backdrop-blur-xl border-t border-white/5 flex items-center justify-around px-6 z-50" },
  { name: "Slide-out Drawer", tw: "fixed top-0 right-0 h-screen w-full max-w-sm bg-zinc-900 border-l border-zinc-800 shadow-2xl z-[70] p-10" },
  { name: "Bento Header", tw: "grid grid-cols-12 gap-4 w-full h-24 px-6 items-center bg-zinc-950 border-b border-white/5" },
  { name: "Nested Tree Nav", tw: "w-full flex flex-col gap-1 pl-4 border-l border-zinc-800 ml-2 py-2" },
  { name: "User Workspace Switcher", tw: "flex items-center gap-3 p-3 bg-zinc-800/50 rounded-2xl border border-white/5 hover:bg-zinc-800 transition-all cursor-pointer" },
  { name: "Utility Action Bar", tw: "flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 shadow-inner" },
  { name: "Contextual Top Bar", tw: "w-full h-12 bg-blue-600/10 border-b border-blue-500/20 flex items-center px-6 text-[10px] font-bold text-blue-400 uppercase tracking-widest" },
  { name: "Minimalist Dot Nav", tw: "fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50" },
  { name: "Staggered List Menu", tw: "flex flex-col items-end gap-2 text-right pr-10 py-20" },
  { name: "Glass Morphic Dock", tw: "fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl" },
  { name: "Marquee Nav Strip", tw: "w-full h-10 bg-white text-black flex items-center overflow-hidden whitespace-nowrap font-black uppercase text-xs tracking-tighter" },
  { name: "Skewed Side Tab", tw: "fixed left-0 top-1/2 -translate-y-1/2 bg-zinc-800 border-y border-r border-zinc-700 p-4 rounded-r-2xl shadow-xl -ml-2 hover:ml-0 transition-all" },
  { name: "Pagination Cluster", tw: "flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-2 rounded-lg" },
  { name: "Filter Pill Bar", tw: "flex items-center gap-3 overflow-x-auto py-4 no-scrollbar" },
  { name: "Indicator Breadcrumb", tw: "flex items-center gap-6 py-2 px-4 bg-zinc-800/30 rounded-xl border border-white/5" },
  { name: "Multi-Level Dropdown", tw: "absolute top-full mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-2xl p-2 shadow-2xl flex flex-col gap-1" },
  { name: "Status Indicator Bar", tw: "flex items-center gap-4 py-2 px-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[9px] font-bold text-emerald-400 uppercase" }
    ],
    Cards: [
      { name: "Feature Card", tw: "p-8 rounded-[2rem] bg-zinc-800 border border-zinc-700 hover:border-blue-400 flex flex-col gap-4 shadow-xl transition-all" },
      { name: "Pricing Tier", tw: "p-10 rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 flex flex-col items-center text-center shadow-2xl" },
      { name: "Profile Card", tw: "flex items-center gap-6 p-6 bg-zinc-800 rounded-3xl border border-white/5 shadow-lg" },
      { name: "Stats Card", tw: "p-8 rounded-2xl bg-zinc-800 border-l-[6px] border-blue-500 flex flex-col gap-2 shadow-2xl" },
      { name: "Interactive Tile", tw: "aspect-square flex flex-col justify-end p-6 bg-zinc-800 rounded-[2.5rem] border border-zinc-700 hover:scale-[1.02] transition-transform" },
      { name: "Glass Card", tw: "p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl" },
      { name: "Blog Post", tw: "group overflow-hidden rounded-[2rem] border border-zinc-700 bg-zinc-800 flex flex-col shadow-lg" },
      { name: "Testimonial", tw: "p-10 bg-zinc-800 rounded-[2rem] border border-zinc-700 relative italic text-zinc-300 leading-relaxed shadow-xl" },
      { name: "Glow Card", tw: "p-10 bg-zinc-800 rounded-3xl relative overflow-hidden shadow-[inset_0_0_40px_rgba(59,130,246,0.05)] border border-zinc-700" },
      { name: "Product Grid", tw: "flex flex-col gap-4 p-5 bg-zinc-800 border border-zinc-700 rounded-3xl hover:bg-zinc-750 transition-colors shadow-md" },
  { name: "Live Metric Chart", tw: "p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 flex flex-col gap-6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-500" },
  { name: "Donut Stats Tile", tw: "aspect-square p-6 flex flex-col items-center justify-center bg-zinc-800 border border-white/5 rounded-full shadow-2xl hover:rotate-3 transition-transform" },
  { name: "Activity Heatmap", tw: "p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col gap-2 shadow-inner" },
  { name: "Stock Ticker Card", tw: "flex items-center justify-between p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl shadow-lg" },
  { name: "Progress Tracker", tw: "p-8 rounded-3xl bg-zinc-800 border border-zinc-700 flex flex-col gap-4 relative after:absolute after:top-0 after:left-0 after:h-full after:w-1 after:bg-blue-500 after:rounded-l-3xl" },
  { name: "3D Product Pop", tw: "group relative aspect-[3/4] bg-zinc-800 rounded-[3rem] p-8 border border-white/5 flex flex-col justify-end overflow-visible hover:shadow-blue-500/10 shadow-2xl" },
  { name: "Review Spotlight", tw: "p-8 rounded-[2rem] bg-zinc-900 border border-zinc-800 flex flex-col gap-4 relative before:absolute before:-top-4 before:-left-4 before:content-['“'] before:text-8xl before:text-blue-500/20 before:font-serif" },
  { name: "Flash Sale Timer", tw: "p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex flex-col items-center gap-2 shadow-xl shadow-orange-500/20" },
  { name: "Tiered Feature List", tw: "p-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-[2rem] shadow-2xl" },
  { name: "Cart Summary", tw: "p-8 rounded-3xl bg-zinc-800 border-2 border-dashed border-zinc-700 flex flex-col gap-4 shadow-xl" },
  { name: "Frosted Glass Video", tw: "aspect-video bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden" },
  { name: "Neon Glow Border", tw: "p-8 rounded-3xl bg-zinc-950 border border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] relative group" },
  { name: "Bento Feature Box", tw: "col-span-2 row-span-1 p-10 bg-zinc-800 border border-zinc-700 rounded-[3rem] flex flex-col justify-between shadow-2xl" },
  { name: "Gradient Mesh Card", tw: "p-10 rounded-[3rem] bg-zinc-900 border border-white/5 relative overflow-hidden before:absolute before:-top-20 before:-right-20 before:w-64 before:h-64 before:bg-blue-500/20 before:blur-[100px]" },
  { name: "Abstract Shape Card", tw: "aspect-square p-8 bg-zinc-800 rounded-[2rem] border border-zinc-700 relative overflow-hidden shadow-2xl group" },

  { name: "Notification Stack", tw: "flex flex-col gap-0 shadow-2xl rounded-2xl overflow-hidden border border-zinc-800" },
  { name: "System Status Card", tw: "flex items-center gap-4 p-5 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl" },
  { name: "Auth Action Card", tw: "p-10 rounded-[2.5rem] bg-white text-black flex flex-col gap-6 shadow-[0_30px_60px_-15px_rgba(255,255,255,0.1)]" },
  { name: "Upload Dropzone", tw: "w-full aspect-[2/1] bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:border-blue-500 transition-colors" },
  { name: "Expandable FAQ", tw: "w-full p-6 bg-zinc-800 border border-zinc-700 rounded-2xl flex flex-col gap-2 cursor-pointer transition-all" }

    ],
    Layout: [
      { name: "Hero Split", tw: "grid grid-cols-2 gap-20 items-center py-32 px-10 bg-zinc-900 border border-zinc-800 rounded-[3rem]" },
      { name: "Feature Grid", tw: "grid grid-cols-3 gap-8 p-12 bg-zinc-900 rounded-[2.5rem] border border-white/5" },
      { name: "Full Footer", tw: "w-full py-20 px-10 bg-zinc-800 border-t border-zinc-700 grid grid-cols-4 gap-12" },
      { name: "Section Head", tw: "flex flex-col items-center text-center gap-4 py-16 px-6 bg-zinc-900/50 rounded-3xl border border-zinc-800" },
      { name: "Content Stack", tw: "max-w-4xl mx-auto flex flex-col gap-10 py-20 px-10 bg-zinc-800 rounded-[3rem] shadow-2xl" }
    ],

    Buttons: [
  // 1-5: MODERN CORE
  { name: "Primary CTA", tw: "inline-flex items-center justify-center px-10 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 transition-all active:scale-95" },
  { name: "Ghost Outline", tw: "inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-zinc-600 hover:border-white text-zinc-300 hover:text-white rounded-full font-bold transition-all" },
  { name: "Modern Dark", tw: "inline-flex items-center justify-center px-10 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-tighter hover:bg-zinc-200 active:scale-95 transition-all" },
  { name: "Glass Button", tw: "inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 text-white transition-all shadow-xl" },
  { name: "Minimal Soft", tw: "inline-flex items-center justify-center px-6 py-2.5 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-all" },

  // 6-10: NEXT-LEVEL 3D & SHADOWS
  { name: "Retro 3D Press", tw: "inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white rounded-2xl border-b-[6px] border-blue-800 active:border-b-0 active:translate-y-[6px] transition-all font-bold shadow-xl" },
  { name: "Elevated Floating", tw: "inline-flex items-center justify-center px-10 py-4 bg-zinc-800 text-white rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_30px_50px_rgba(0,0,0,0.5)] transition-all" },
  { name: "Neumorphic Soft", tw: "inline-flex items-center justify-center px-10 py-4 bg-zinc-800 rounded-2xl shadow-[8px_8px_16px_#040404,-8px_-8px_16px_#121212] active:shadow-inner text-zinc-400" },
  { name: "Brutalist Box", tw: "inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black border-4 border-black font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" },
  { name: "Magnetic Glow", tw: "relative inline-flex items-center justify-center px-10 py-4 bg-zinc-950 text-white rounded-full border border-zinc-800 overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(59,130,246,0.3),transparent_50%)]" },

  // 11-20: GRADIENTS & EFFECTS
  { name: "Gradient Border", tw: "p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-flex group" },
  { name: "Neon Pulse", tw: "inline-flex items-center justify-center px-10 py-4 bg-zinc-900 border border-emerald-500/50 text-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] animate-pulse" },
  { name: "Bento Action", tw: "w-full aspect-video flex items-center justify-center bg-zinc-800 rounded-3xl border border-white/5 hover:bg-zinc-700 transition-colors group p-6" },
  { name: "Shiny Metallic", tw: "inline-flex items-center justify-center px-10 py-4 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-xl border-t border-white/20 shadow-2xl text-zinc-300 font-bold" },
  { name: "Liquid Fill", tw: "relative overflow-hidden inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-blue-500 text-blue-500 rounded-xl hover:text-white transition-colors duration-500 before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-blue-500 before:-z-10 hover:before:top-0 before:transition-all" },
  { name: "Monochrome Sleek", tw: "inline-flex items-center justify-center px-10 py-4 bg-[#111] border border-zinc-800 hover:border-zinc-400 text-zinc-500 hover:text-white rounded-lg transition-all" },
  { name: "Cyberpunk Glitch", tw: "inline-flex items-center justify-center px-10 py-4 bg-fuchsia-600 text-white font-black uppercase italic tracking-tighter skew-x-[-15deg] shadow-[5px_0px_0px_#00ffff]" },
  { name: "Expandable Icon", tw: "group inline-flex items-center justify-center w-14 hover:w-48 h-14 bg-blue-600 text-white rounded-full transition-all duration-500 overflow-hidden whitespace-nowrap" },
  { name: "Double Layer", tw: "relative inline-flex items-center justify-center px-10 py-4 bg-zinc-100 text-black rounded-xl translate-x-[-4px] translate-y-[-4px] before:absolute before:inset-0 before:bg-blue-500 before:rounded-xl before:-z-10 before:translate-x-[8px] before:translate-y-[8px]" },
  { name: "Stripe Flow", tw: "inline-flex items-center justify-center px-10 py-4 bg-zinc-900 text-white rounded-2xl overflow-hidden relative after:absolute after:inset-0 after:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] after:bg-[length:20px_20px] hover:after:animate-[spin_2s_linear_infinite]" },

  // 21-30: FUNCTIONAL & SYSTEM
  { name: "Loading Spin", tw: "inline-flex items-center justify-center gap-3 px-10 py-4 bg-zinc-800 text-zinc-500 rounded-full cursor-not-allowed border border-zinc-700" },
  { name: "Delete Danger", tw: "inline-flex items-center justify-center px-8 py-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 rounded-xl transition-all" },
  { name: "Tab Switcher", tw: "inline-flex items-center gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-xl" },
  { name: "Floating Fab", tw: "fixed bottom-10 right-10 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:rotate-90 transition-transform" },
  { name: "Breadcrumb Button", tw: "inline-flex items-center px-4 py-2 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg text-xs font-mono text-zinc-400 border border-white/5" },
  { name: "Split Action", tw: "inline-flex divide-x divide-white/10 overflow-hidden bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20" },
  { name: "Toggle Slider", tw: "relative w-24 h-10 bg-zinc-800 rounded-full p-1 cursor-pointer" },
  { name: "Magnetic Dot", tw: "w-4 h-4 bg-white rounded-full hover:scale-[4] hover:bg-blue-500 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.5)]" },
  { name: "Underline Hover", tw: "relative px-2 py-1 text-zinc-400 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all" },
  { name: "Social Glass", tw: "w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/20 shadow-2xl" }
],


Inputs: [
  // 1-5: MODERN CORE
  { name: "Classic Field", tw: "w-full bg-zinc-800 border-2 border-zinc-700 px-6 py-4 rounded-2xl focus:border-blue-500 focus:outline-none transition-all text-white placeholder:text-zinc-600" },
  { name: "Search Input", tw: "w-full pl-14 pr-6 py-4 bg-zinc-800 rounded-full border border-zinc-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-lg" },
  { name: "Password Box", tw: "w-full flex items-center bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 focus-within:border-blue-500 transition-all shadow-inner" },
  { name: "Floating Label", tw: "relative w-full h-16 bg-zinc-800 border-b-2 border-zinc-700 focus-within:border-blue-500 transition-all group px-4 flex items-end pb-2" },
  { name: "Minimal Line", tw: "w-full bg-transparent border-b border-zinc-700 px-0 py-2 focus:border-blue-500 focus:outline-none transition-all text-lg" },

  // 6-15: INTERACTIVE & SELECTION
  { name: "OTP Numeric", tw: "w-14 h-16 bg-zinc-900 border-2 border-zinc-800 rounded-xl text-center text-2xl font-black text-blue-500 focus:border-blue-500 focus:bg-zinc-800 outline-none transition-all" },
  { name: "Toggle Switch", tw: "w-14 h-7 bg-zinc-700 rounded-full relative border-2 border-zinc-600 cursor-pointer flex items-center px-1 shadow-inner hover:bg-zinc-600 transition-colors" },
  { name: "Tag Input Box", tw: "w-full flex flex-wrap gap-3 p-4 bg-zinc-800 border border-zinc-700 rounded-[2rem] focus-within:border-zinc-500 transition-all shadow-xl" },
  { name: "Checkbox Pro", tw: "w-7 h-7 rounded-lg border-2 border-zinc-600 bg-zinc-800 checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer appearance-none relative" },
  { name: "Radio Circle", tw: "w-6 h-6 rounded-full border-2 border-zinc-600 bg-zinc-800 checked:border-blue-500 checked:border-[6px] transition-all cursor-pointer appearance-none" },
  { name: "Range Slider", tw: "w-full h-2 bg-zinc-700 rounded-full appearance-none cursor-pointer accent-blue-500 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]" },
  { name: "Select Dropdown", tw: "w-full bg-zinc-800 border border-zinc-700 px-6 py-4 rounded-2xl appearance-none cursor-pointer focus:border-blue-500 shadow-xl bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.66667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1.5rem_center] bg-no-repeat" },
  { name: "Multi-Select Chip", tw: "inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold" },
  { name: "Date Picker", tw: "w-full bg-zinc-800 text-zinc-200 border border-zinc-700 p-4 rounded-2xl font-bold uppercase tracking-widest text-xs cursor-pointer hover:bg-zinc-750 transition-colors" },
  { name: "Color Swatch", tw: "w-12 h-12 rounded-full border-4 border-zinc-800 shadow-2xl cursor-pointer overflow-hidden p-0" },

  // 16-25: ADVANCED & UTILITY
  { name: "Upload Dropzone", tw: "w-full aspect-[2/1] bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:border-blue-500 hover:bg-blue-500/5 transition-all group" },
  { name: "Textarea Auto", tw: "w-full bg-zinc-800 border border-zinc-700 p-6 rounded-3xl focus:ring-4 focus:ring-blue-500/10 min-h-[150px] outline-none" },
  { name: "Input Group Addon", tw: "flex w-full rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-lg" },
  { name: "Glass Morphic In", tw: "w-full bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl text-white placeholder:text-white/20 focus:bg-white/10 outline-none shadow-2xl" },
  { name: "Neo-Brutalist Field", tw: "w-full bg-white border-4 border-black px-6 py-4 text-black font-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:translate-x-1 focus:translate-y-1 focus:shadow-none transition-all outline-none" },
  { name: "Status Field Error", tw: "w-full bg-red-500/5 border-2 border-red-500/50 px-6 py-4 rounded-2xl text-red-400 placeholder:text-red-900/50 outline-none" },
  { name: "Status Field Success", tw: "w-full bg-emerald-500/5 border-2 border-emerald-500/50 px-6 py-4 rounded-2xl text-emerald-400 placeholder:text-emerald-900/50 outline-none" },
  { name: "Stepper Input", tw: "flex items-center justify-between bg-zinc-800 border border-zinc-700 rounded-xl p-2 w-32" },
  { name: "Search Cmd-K", tw: "w-full flex items-center justify-between bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-xl text-zinc-500 text-sm hover:border-zinc-600 cursor-pointer shadow-md" },
  { name: "Rating Stars", tw: "flex items-center gap-2 text-zinc-600 hover:text-yellow-400 cursor-pointer transition-colors" },

  // 26-30: HIGH-DENSITY FORM DATA
  { name: "Country Selector", tw: "w-full flex items-center gap-4 bg-zinc-800 border border-zinc-700 px-6 py-4 rounded-2xl hover:bg-zinc-750 transition-all" },
  { name: "Credit Card Field", tw: "w-full bg-zinc-800 border-2 border-zinc-700 px-6 py-4 rounded-2xl font-mono tracking-widest text-lg placeholder:text-zinc-600" },
  { name: "Currency Input", tw: "relative w-full before:content-['$'] before:absolute before:left-6 before:top-1/2 before:-translate-y-1/2 before:text-zinc-500 before:font-bold" },
  { name: "Rich Text Header", tw: "w-full bg-zinc-900 border-x border-t border-zinc-700 p-2 rounded-t-2xl flex items-center gap-2" },
  { name: "Pill Search", tw: "w-full max-w-sm px-6 py-2 bg-zinc-700/50 rounded-full border border-white/5 backdrop-blur-md focus-within:bg-zinc-700 focus-within:w-full transition-all duration-500 outline-none" }
]
  };

  const tabs = [
    { id: 'Navigation', icon: <Navigation size={14} /> },
    { id: 'Cards', icon: <CreditCard size={14} /> },
    { id: 'Layout', icon: <Layout size={14} /> },
    { id: 'Buttons', icon: <MousePointer2 size={14} /> },
    { id: 'Inputs', icon: <Type size={14} /> }
  ];

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const cleanPreview = (tw) => {
    return tw.replace(/fixed|absolute|sticky|top-0|bottom-0|left-0|right-0|h-screen|w-screen|z-50/g, 'relative');
  };

  const currentList = registry[activeTab] || [];

  return (
    <>
    <Navbar/>
    <div className="bg-[#050505] min-h-screen py-24 px-6 text-zinc-300 font-sans">
      <header className="max-w-7xl mx-auto mb-20 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <Sparkles size={12} className="text-blue-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">Tailwind Engine v2.0</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight italic">Tailwind <span className="text-zinc-700">Primitives.</span></h1>
        <p className="text-zinc-500 text-lg max-w-2xl">Copy-paste production components optimized for <span className="text-zinc-200">React & Tailwind CSS</span> layouts.</p>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* TABS */}
        <div className="flex gap-10 mb-12 border-b border-white/[0.03] pb-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => {setActiveTab(tab.id); setVisibleCount(10);}} className={`flex items-center gap-2 text-[11px] uppercase font-black tracking-[0.2em] transition-all ${activeTab === tab.id ? 'text-white' : 'text-zinc-600'}`}>
              {tab.icon} {tab.id}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {currentList.slice(0, visibleCount).map((item, i) => (
              <motion.div key={item.name} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="group relative bg-zinc-900 border border-zinc-800 rounded-[2rem] p-4 hover:border-blue-500/50 transition-all flex flex-col shadow-xl">
                
                {/* PREVIEW BOX - Same as they look */}
                <div className="h-32 relative bg-black/60 rounded-2xl overflow-hidden mb-5 flex items-center justify-center border border-white/5">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#555_1px,transparent_1px)] bg-[size:10px_10px]" />
                  <div className={`w-[85%] h-10 rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105 ${cleanPreview(item.tw)} flex items-center justify-center text-[7px] text-white/20 uppercase font-black`}>
                    Preview
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <button onClick={() => handleCopy(item.tw, i)} className="bg-white text-black px-5 py-2 rounded-xl text-[10px] font-black uppercase shadow-2xl">
                      {copiedIndex === i ? "Copied!" : "Copy Tailwind"}
                    </button>
                  </div>
                </div>

                <div className="px-1 flex flex-col h-full">
                  <h4 className="text-[11px] font-black text-white uppercase mb-4 truncate">{item.name}</h4>
                  <div className="bg-black/40 rounded-xl p-3 border border-white/5 font-mono text-[9px] text-zinc-500 truncate italic">
                    {item.tw}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LOAD MORE BUTTON */}
        {visibleCount < currentList.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 10)}
              className="flex items-center gap-3 px-10 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-full text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105"
            >
              <Plus size={16} /> Load More Components
            </button>
          </div>
        )}
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default UIComponents;