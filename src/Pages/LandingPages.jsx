import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import autovion from "../assets/autovion.png";
import artify from '../assets/artify.png'
import TOTC from '../assets/TOTC.png'
import Travelone from '../assets/Travelone.png'
import Testnest from '../assets/Tastenest.png'
import agrios from '../assets/agrios.png'
import FoodDelivery from '../assets/FoodDelivery.png'
import swiftpay from '../assets/swiftpay.png'
import chatbot from '../assets/chatbot.png'

import { 
  Figma, ExternalLink, Layout, 
  Fingerprint, Monitor, Smartphone, 
  Layers, MousePointer2, Plus
} from 'lucide-react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const UIVault = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    { name: 'All', icon: <Layers size={12} /> },
    { name: 'Website', icon: <Monitor size={12} /> },
    { name: 'Mobile', icon: <Smartphone size={12} /> },
    { name: 'Landing', icon: <Layout size={12} /> },
  ];

  const designs = [
    {
      name: "Autovion",
      desc: "An obsidian-themed analytics interface designed for an e-commerce automotive dashboard.",
      img: autovion,
      figma: "https://www.figma.com/design/xX2KTf91gwtdpHaCBSghlz/Autovion?node-id=0-1&t=fvh9ZwVyx3Omiu6M-1",
      live: "https://www.figma.com/design/xX2KTf91gwtdpHaCBSghlz/Autovion?node-id=0-1&t=fvh9ZwVyx3Omiu6M-1",
      category: "Landing"
    },
    {
      name: "TravelOne",
      desc: "A vibrant travel website designed to inspire exploration with stunning destinations, seamless navigation, and immersive visual storytelling.",
      img: Travelone,
      figma: "https://www.figma.com/design/TWBUaRtPnImj70beAbz7Oo/TravelAgency?node-id=0-1&t=mXa8CzRHCF1Asgvb-1",
      live: "https://www.figma.com/design/TWBUaRtPnImj70beAbz7Oo/TravelAgency?node-id=0-1&t=mXa8CzRHCF1Asgvb-1",
      category: "Landing"
    },
    {
      name: "Artify",
      desc: "A visually immersive landing page crafted to showcase digital artwork with elegant layouts and fluid interactions.",
      img: artify,
      figma: "https://www.figma.com/design/xe3V32YLb8xSC1xzgDoxOi/Untitled?node-id=0-1&t=E1zqCHZfZ8WYekZz-1",
      live: "https://www.figma.com/design/xe3V32YLb8xSC1xzgDoxOi/Untitled?node-id=0-1&t=E1zqCHZfZ8WYekZz-1",
      category: "Landing"
    },

    {
      name: "AI Chatbot",
      desc: "A sleek AI chatbot mobile interface designed for intuitive conversations, smart responses, and a seamless user experience.",
      img: chatbot,
      figma: "https://www.figma.com/design/nlKnqvHrYveVxjQY3p0BTe/AI-chatbot-mobile-app-design-both-dark-and-light-mode--Community-?node-id=0-1&t=Ltx2P58WO5zJqcnp-1",
      live: "https://www.figma.com/design/nlKnqvHrYveVxjQY3p0BTe/AI-chatbot-mobile-app-design-both-dark-and-light-mode--Community-?node-id=0-1&t=Ltx2P58WO5zJqcnp-1",
      category: "Mobile"
    },
    {
      name: "TOTC",
      desc: "A streamlined online study platform designed for interactive learning, personalized progress, and seamless course access.",
      img: TOTC,
      figma: "https://www.figma.com/design/OTDdvEx9q6LJfRd4FGOa7U/E-Learning-Site--Community-?node-id=0-1&t=YLOJmB9dq2oopcfE-1",
      live: "https://www.figma.com/design/OTDdvEx9q6LJfRd4FGOa7U/E-Learning-Site--Community-?node-id=0-1&t=YLOJmB9dq2oopcfE-1",
      category: "Website"
    },
    {
      name: "Taste Nest",
      desc: "A visually rich food website crafted to showcase menus, flavors, and seamless online ordering with an engaging user experience.",
      img: Testnest,
      figma: "https://www.figma.com/design/BWaeQOvlmZdrNdlQlzjwg0/65--Resturent-Website-templates--Community-?node-id=0-1&t=tguUumZTOn6Mtkck-1",
      live: "https://www.figma.com/design/BWaeQOvlmZdrNdlQlzjwg0/65--Resturent-Website-templates--Community-?node-id=0-1&t=tguUumZTOn6Mtkck-1",
      category: "Website"
    },
    {
      name: "Agrios",
      desc: " A clean agriculture website highlighting smart farming and sustainable solutions.",
      img: agrios,
      figma: "https://www.figma.com/design/hQwZRabfzqbIczrxmKzgFP/75--Agriculture-Landing-website-templates--Community-?node-id=0-1&t=x5Hcx5frQmlE2fRe-1",
      live: "https://www.figma.com/design/hQwZRabfzqbIczrxmKzgFP/75--Agriculture-Landing-website-templates--Community-?node-id=0-1&t=x5Hcx5frQmlE2fRe-1",
      category: "Website"
    },
    {
      name: "Foodly",
      desc: "A sleek food app design focused on easy browsing, quick ordering, and delightful visuals.",
      img: FoodDelivery,
      figma: "https://www.figma.com/design/wxZ3D0YKmpa85B6zGuIXKH/Food-Delivery---Mobile-App-Design--Community-?node-id=23-309&t=hwaDiR5qgbfmTt8D-1",
      live: "https://www.figma.com/design/wxZ3D0YKmpa85B6zGuIXKH/Food-Delivery---Mobile-App-Design--Community-?node-id=23-309&t=hwaDiR5qgbfmTt8D-1",
      category: "Mobile"
    },

    {
      name: "SwiftPay",
      desc: "A secure payment app design enabling fast transactions and seamless money management.",
      img: swiftpay,
      figma: "https://www.figma.com/design/gs8j5L6hf7WahZzlUO9Uvb/Swift-Pay-Bank-UI---Mobile-Banking-App-Design--Community-?node-id=0-1&t=jT822oQ7RAr11A9k-1",
      live: "https://www.figma.com/design/gs8j5L6hf7WahZzlUO9Uvb/Swift-Pay-Bank-UI---Mobile-Banking-App-Design--Community-?node-id=0-1&t=jT822oQ7RAr11A9k-1",
      category: "Mobile"
    }
  ];

  const filteredDesigns = activeCategory === 'All' 
    ? designs 
    : designs.filter(d => d.category === activeCategory);

  return (
    <>
    <Navbar/>
    <div className="bg-[#050505] min-h-screen text-zinc-400 font-sans selection:bg-blue-500/30 relative">
      
      {/* --- BACKGROUND BLOOM --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-500/5 blur-[120px]" />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* --- HEADER (License Style) --- */}
        <header className="mb-16 border-b border-zinc-900 pb-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <div className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-black uppercase tracking-widest text-indigo-500">
              Creative Division
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
            UI Vault <span className="text-zinc-700">Exploration.</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-2xl">
            A precision-engineered collection of digital interfaces, prototypes, and landing page architectures.
          </p>
        </header>

        {/* --- CATEGORY SELECTOR --- */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mr-4">Filter_By:</span>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => { setActiveCategory(cat.name); setVisibleCount(6); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === cat.name 
                ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.1)]" 
                : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode='popLayout'>
            {filteredDesigns.slice(0, visibleCount).map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative flex flex-col bg-zinc-900/20 rounded-[2rem] border border-zinc-900 overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
              >
                {/* Image Section with Overlay */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  {/* Glass Action Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                    <a href={item.figma} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#F24E1E] text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                      <Figma size={14} /> Open Figma
                    </a>
                    <a href={item.live} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                      <ExternalLink size={14} /> Live View
                    </a>
                  </div>
                  <div className="absolute top-6 left-6">
                    <div className="px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-[8px] font-black text-white uppercase tracking-[0.2em]">
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8 border-t border-zinc-900 bg-black/40">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">{item.name}</h3>
                    <MousePointer2 size={16} className="text-zinc-800 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- LOAD MORE --- */}
        {visibleCount < filteredDesigns.length && (
          <div className="flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="group flex items-center gap-4 px-12 py-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
            >
              <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" /> 
              Load More
            </button>
          </div>
        )}

        

      </main>
    </div>
    <Footer/>
    </>
  );
};

export default UIVault;