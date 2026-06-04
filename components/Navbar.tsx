// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('SYSTEM');
  const navItems = ['SYSTEM', 'IDENTITY', 'ARSENAL', 'MISSIONS', 'METRICS', 'CONNECT'];

  useEffect(() => {
    // Scroll Intersection Observer Engine Setup
    const sections = ['system', 'identity', 'arsenal', 'missions', 'metrics', 'connect'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset buffer for smoother early state triggers

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section.toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id.toLowerCase());
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTab(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020208]/70 backdrop-blur-xl border-b border-cyan-500/10 px-6 py-4 flex items-center justify-between select-none">
      <div className="flex items-center space-x-2">
        <span className="font-mono text-xs text-cyan-400 tracking-widest font-bold bg-cyan-950/30 px-3 py-1 border border-cyan-500/20 rounded shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-pulse">
          [CORE_DEV]
        </span>
      </div>

      <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 font-mono text-[11px] tracking-[0.2em] text-gray-400">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`px-3 py-1.5 rounded transition-all duration-300 relative ${
              activeTab === item 
                ? 'text-cyan-400 bg-cyan-950/20 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)]' 
                : 'hover:text-gray-200 hover:bg-gray-900/40'
            }`}
          >
            {item}
            {activeTab === item && (
              <span className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500" />
            )}
          </button>
        ))}
      </nav>

      <div className="flex items-center space-x-2 font-mono text-[10px] text-emerald-400 tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>● ONLINE</span>
      </div>
    </header>
  );
}