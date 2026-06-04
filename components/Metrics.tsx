// src/components/Metrics.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';

// 🚀 Advanced In-View Triggered 1-to-Target Rapid Continuous Ticker Component
function LiveCounterTicker({ targetValue }: { targetValue: number }) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef(null);
  
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const isAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || !elementRef.current || isAnimated.current) return;
    isAnimated.current = true;

    const nodeElement = elementRef.current;
    nodeElement.textContent = "1"; // Strict constraint condition: Initial starting context must be absolute 1

    const animationMatrixControl = animate(1, targetValue, {
      duration: 2.8, // Perfect acceleration speed tracking path
      ease: "easeOut",
      onUpdate(latestValue) {
        nodeElement.textContent = Math.round(latestValue).toString();
      }
    });

    return () => animationMatrixControl.stop();
  }, [targetValue, isInView]);

  return (
    <span ref={containerRef}>
      <span ref={elementRef} className="font-sans font-black text-cyan-400">1</span>
    </span>
  );
}

export default function Metrics() {
  const [liveLeetCodeCount, setLiveLeetCodeCount] = useState<number | null>(null);
  const [loadingMetrics, setLoadingMetrics] = useState<boolean>(true);

  useEffect(() => {
    async function fetchLiveTelemetry() {
      try {
        const response = await fetch('/api/leetcode');
        if (response.ok) {
          const data = await response.json();
          if (data && data.solved) {
            setLiveLeetCodeCount(data.solved);
            setLoadingMetrics(false);
            return;
          }
        }
        throw new Error("Fallback mapping triggered");
      } catch (err) {
        // Safe infrastructure runtime validation fallback matched to your exact 200 count profile matrix
        setLiveLeetCodeCount(200); 
        setLoadingMetrics(false);
      }
    }
    fetchLiveTelemetry();
  }, []);

  const linkCards = [
    { name: 'LeetCode', id: 'iharshitatyagi', link: 'https://leetcode.com/iharshitatyagi', color: 'text-amber-500' },
    { name: 'LinkedIn', id: 'tyagiharshi', link: 'https://linkedin.com/in/tyagiharshi', color: 'text-blue-500' },
    { name: 'GitHub', id: 'iharshitatyagii', link: 'https://github.com/iharshitatyagii', color: 'text-gray-400' },
    { name: 'Instagram', id: 'iharshitatyagi', link: 'https://instagram.com/iharshitatyagi', color: 'text-pink-500' },
  ];

  return (
    <section id="metrics" className="w-full min-h-screen bg-[#020208] text-left pt-24 pb-32 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden border-t border-gray-900/40">
      
      {/* Background Spatial Blueprint Grid Network */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00f2fe_1px,transparent_1px),linear-gradient(to_bottom,#00f2fe_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* HUD OVERLAY CORNER SECTION MAIN HEADER BLOCK */}
        <div className="space-y-2 font-mono">
          <div className="text-purple-400 text-xs tracking-[0.4em] uppercase flex items-center space-x-2">
            <span>// 04 . PERFORMANCE_DASHBOARD</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-white tracking-tight uppercase leading-none">
            ANALYTICS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              DASHBOARD
            </span>
          </h2>
        </div>

        {/* UPPER GRID ROW: Telemetry Metrics Calculation Cards Shells */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* Card Box Module 1: LeetCode Solved Active Ticker Box (Fixed to Exact 200 Count Stream) */}
          <div className="border border-gray-900/90 bg-[#040409]/90 rounded-xl p-6 font-mono relative overflow-hidden group shadow-xl">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            <div className="text-amber-500 mb-4 text-lg">⚡</div>
            <div className="text-4xl sm:text-5xl tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.25)] min-h-[40px] sm:min-h-[48px] flex items-center">
              {!loadingMetrics && liveLeetCodeCount !== null ? (
                <div className="flex items-center">
                  <LiveCounterTicker targetValue={liveLeetCodeCount} />
                  <span className="text-cyan-400 font-sans font-black">+</span>
                </div>
              ) : (
                <span className="text-cyan-400/30 text-2xl tracking-widest animate-pulse">SYNCING_</span>
              )}
            </div>
            <div className="text-xs font-bold text-gray-200 mt-2 tracking-wide uppercase">LeetCode Solved</div>
            <div className="text-[9px] text-gray-600 mt-0.5 uppercase tracking-widest">Profile Metrics Track Synced</div>
          </div>

          {/* Card Box Module 2: Core Engineering System Engines tracker */}
          <div className="border border-gray-900/90 bg-[#040409]/90 rounded-xl p-6 font-mono relative overflow-hidden group shadow-xl">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            <div className="text-purple-500 mb-4 text-lg">🚀</div>
            <div className="text-4xl sm:text-5xl font-sans font-black text-cyan-400 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              {!loadingMetrics ? <LiveCounterTicker targetValue={4} /> : <span className="text-2xl animate-pulse">...</span>}
            </div>
            <div className="text-xs font-bold text-gray-200 mt-2 tracking-wide uppercase">Core Engines</div>
            <div className="text-[9px] text-gray-600 mt-0.5 uppercase tracking-widest">Distributed • Backend • Active</div>
          </div>

          {/* Card Box Module 3: Technologies Array Registry (1-to-15+ Custom Animation) */}
          <div className="border border-gray-900/90 bg-[#040409]/90 rounded-xl p-6 font-mono relative overflow-hidden group shadow-xl">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            <div className="text-emerald-500 mb-4 text-lg">⚒️</div>
            <div className="text-4xl sm:text-5xl tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center">
              {!loadingMetrics ? (
                <div className="flex items-center">
                  <LiveCounterTicker targetValue={15} />
                  <span className="text-cyan-400 font-sans font-black">+</span>
                </div>
              ) : (
                <span className="text-2xl animate-pulse">...</span>
              )}
            </div>
            <div className="text-xs font-bold text-gray-200 mt-2 tracking-wide uppercase">Technologies</div>
            <div className="text-[9px] text-gray-600 mt-0.5 uppercase tracking-widest">FullStack • DBMS • Infra</div>
          </div>

          {/* Card Box Module 4: 4th Year Current Academic Branch Token */}
          <div className="border border-gray-900/90 bg-[#04040a]/90 rounded-xl p-6 font-mono relative overflow-hidden group shadow-xl">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <div className="text-cyan-400 mb-4 text-lg">📊</div>
            <div className="text-4xl sm:text-5xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-cyan-400 tracking-tight drop-shadow-[0_0_12px_rgba(6,182,212,0.3)]">
              4th Year
            </div>
            <div className="text-xs font-bold text-gray-200 mt-2 tracking-wide uppercase">B.Tech Journey</div>
            <div className="text-[9px] text-gray-600 mt-0.5 uppercase tracking-widest">IMSEC • CGPA 8.8 • IT Branch[cite: 1]</div>
          </div>

        </div>

        {/* LOWER GRID ROW: Link Channel Routing Track Cards */}
        <div className="space-y-4 pt-4">
          <div className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">// EXTERNAL_CHANNELS_ROUTING</div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {linkCards.map((card) => (
              <a
                key={card.name}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-900 bg-[#030307]/90 rounded-lg p-4 font-mono flex items-center justify-between relative group transition-all duration-300 hover:border-cyan-500/30 shadow-md overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-500/0 group-hover:bg-cyan-500/50 transition-all" />

                <div className="flex items-center space-x-3">
                  <span className={`text-sm ${card.color} font-bold font-sans`}>//</span>
                  <div className="text-left">
                    <div className="text-xs font-bold text-gray-200 group-hover:text-white transition-colors">{card.name}</div>
                    <div className="text-[9px] text-gray-500 mt-0.5 font-sans lowercase">{card.id}</div>
                  </div>
                </div>

                <div className="text-gray-700 group-hover:text-cyan-400 transition-colors text-xs font-sans font-bold">
                  ➔
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}