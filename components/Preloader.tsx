// src/components/Preloader.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  const bootLogs = [
    { type: 'init', text: '[>>] Establishing encrypted tunnel connection...' },
    { type: 'ok', text: '[OK] Portfolio hyper-engine v3 mounted successfully.' },
    { type: 'process', text: '[..] Rendering volumetric holographic layer graphs...' },
    { type: 'ok', text: '[OK] Quantum matrix particle simulation: ONLINE' },
    { type: 'init', text: '[>>] Syncing neural AI assistant pipeline link...' },
    { type: 'ok', text: '[OK] Core intelligence cluster configured - context ready.' },
  ];

  useEffect(() => {
    // Progress loader fast countdown matrix counter simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete(); // Triggers parent application reveal layout
          }, 600);
          return 100;
        }
        // Random incremental hops to make it feel authentic
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    // Dynamic timed reveal of specific process status array lines
    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => {
        if (prev < bootLogs.length - 1) {
          return prev + 1;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 450);

    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[#020208] flex flex-col items-center justify-center select-none font-mono px-4">
      {/* Background Matrix Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

      <div className="w-full max-w-lg flex flex-col items-center space-y-10">
        
        {/* Glowing Holographic Hexagon Logo Node */}
        <motion.div 
          animate={{ 
            scale: [1, 1.04, 1],
            boxShadow: ['0 0 20px rgba(6,182,212,0.15)', '0 0 35px rgba(6,182,212,0.4)', '0 0 20px rgba(6,182,212,0.15)']
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-16 h-16 border border-cyan-400/40 relative flex items-center justify-center bg-cyan-950/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        >
          <span className="text-cyan-400 font-sans font-black text-xl tracking-tighter transform rotate-3">
            R
          </span>
        </motion.div>

        {/* Dynamic Boot Sequence Text Console Logs */}
        <div className="w-full min-h-[140px] border border-cyan-500/10 bg-black/40 p-4 rounded-md space-y-2 text-left text-[11px] leading-relaxed tracking-wider">
          {bootLogs.slice(0, currentLogIndex + 1).map((log, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              key={index} 
              className={`${
                log.type === 'ok' ? 'text-emerald-400' : log.type === 'init' ? 'text-cyan-400' : 'text-purple-400'
              }`}
            >
              {log.text}
            </motion.div>
          ))}
          {/* Real-time typing blinking underscore simulator cursor */}
          <span className="inline-block w-1.5 h-3 bg-cyan-400 ml-1 animate-pulse" />
        </div>

        {/* Interactive Progress Bar Slider Layer */}
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between text-[11px] text-cyan-400 font-bold tracking-widest">
            <span className="opacity-50">// INITIALIZING ARCHITECTURE_</span>
            <span className="text-cyan-300 font-mono text-xs">{progress}%</span>
          </div>
          <div className="w-full h-[3px] bg-gray-900 rounded-full overflow-hidden border border-cyan-500/5">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-purple-600 shadow-[0_0_10px_#00f2fe]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Subtle Bottom Instruction */}
        <div className="text-[9px] text-gray-600 uppercase tracking-[0.3em] pointer-events-none animate-pulse">
          Secure Shell Connection • Verified Production Build
        </div>

      </div>
    </div>
  );
}