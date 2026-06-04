// src/components/Identity.tsx
'use client';

import { motion } from 'framer-motion';

export default function Identity() {
  // Metric Telemetry nodes from your resume profile
  const microStats = [
    { value: '3+', label: 'PRODUCTION ENGINES', sub: 'ChronosDB, VeloRoute, Aegis' },
    { value: '15+', label: 'CORE TECHNOLOGIES', sub: 'Java, Spring Boot, SQL, Redis' },
    { value: '100+', label: 'DSA STREAK BADGE', sub: 'LeetCode Continuous Run' },
    { value: '8.8', label: 'ACADEMIC CGPA', sub: 'B.Tech IT Specialization' },
  ];

  // Dynamic Software Engineering Progression Timeline points mapped from your technical journey registry
  const growthTimeline = [
    {
      year: '2023',
      title: 'FOUNDATIONS & CORE PARADIGMS',
      description: 'Initiated formal engineering framework analysis. Mastered Core Java foundations, Object-Oriented Programming (OOPs), and syntax architecture boundaries.'
    },
    {
      year: '2024',
      title: 'DATA STRUCTURES & RELATIONAL PIPELINES',
      description: 'Deep dive into Data Structures & Algorithms (DSA). Optimized advanced SQL database schemas, structured normalized aggregations, and integrated query metrics.'
    },
    {
      year: '2025',
      title: 'BACKEND ARCHITECTURES & CONCURRENCY SYSTEMS',
      description: 'Engineered ChronosDB utilizing Java Virtual Threads (Project Loom) to handle 20K+ trade operations/sec. Reduced system overhead via Redis memory layer implementations.'
    },
    {
      year: '2026',
      title: 'SPRING BOOT INTEGRATIONS & GEN-AI LAYERS',
      description: 'Developing high-throughput logistics routers (VeloRoute) via priority blocking queues and centralizing interceptor filters via Aspect-Oriented Programming (AOP).'
    },
    {
      year: 'NEXT',
      title: 'DISTRIBUTED SOFTWARE ENGINEER',
      description: 'Scaling enterprise-grade multi-tenant backends, optimizing asynchronous streaming queues, and deploying robust architecture to resolve complex production logic.'
    }
  ];

  return (
    <section id="identity" className="w-full min-h-screen bg-[#020208] text-left pt-20 pb-32 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden border-t border-gray-900/40">
      {/* Background Micro Dot Matrix Blueprint */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00f2fe_1px,transparent_1px),linear-gradient(to_bottom,#00f2fe_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* SECTION HEADER BLOCK */}
        <div className="space-y-2 font-mono">
          <div className="text-purple-400 text-xs tracking-[0.4em] uppercase flex items-center space-x-2">
            <span>// 01 . IDENTITY_LAYER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-white tracking-tight uppercase">
            THE ENGINEER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              BEHIND THE CODE
            </span>
          </h2>
        </div>

        {/* CORE PLATFORM CONTENT BLOCKS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Text Logs Panel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border border-cyan-500/10 bg-[#060611]/80 backdrop-blur-xl p-6 rounded-xl relative overflow-hidden group hover:border-cyan-500/20 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-500/40" />
              <div className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase mb-2">// ABOUT.EXE</div>
              <p className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed tracking-wide">
                I am <span className="text-white font-bold">Harshita Tyagi</span>, a performance-focused <span className="text-cyan-400 font-bold">Full-Stack Software Engineer</span> specializing in multi-tier architecture design and backend efficiency optimization. I isolate and engineer high-concurrency systems that resolve technical complexity with robust mathematical clean code principles.
              </p>
            </div>

            <div className="border border-purple-500/10 bg-[#060611]/80 backdrop-blur-xl p-6 rounded-xl relative overflow-hidden group hover:border-purple-500/20 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-purple-500/40" />
              <div className="font-mono text-[10px] text-purple-400 tracking-widest uppercase mb-2">// MISSION.LOG</div>
              <p className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed tracking-wide">
                Driven by micro-system latency analysis—currently optimizing low-overhead pipelines via <span className="text-purple-400 font-bold">Spring Boot</span>, managing high-throughput thread concurrency via <span className="text-white font-bold">Project Loom</span>, and tuning native relational repository matrices. My focus rests on scaling secure, resource-optimized software platforms.
              </p>
            </div>

            <div className="border border-pink-500/10 bg-[#060611]/80 backdrop-blur-xl p-6 rounded-xl relative overflow-hidden group hover:border-pink-500/20 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-pink-500/40" />
              <div className="font-mono text-[10px] text-pink-400 tracking-widest uppercase mb-2">// PHILOSOPHY.TXT</div>
              <p className="font-mono text-xs sm:text-sm text-gray-400 leading-relaxed tracking-wide">
                Scalable design is equal parts rigorous runtime architecture and strict data integrity. I leverage precise indexing, efficient thread-locking constraints, and cache structures to turn volatile computations into highly available system architectures.
              </p>
            </div>
          </div>

          {/* Right Dynamic Numerical Telemetry Boxes */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full">
            {microStats.map((stat, idx) => (
              <motion.div 
                whileHover={{ y: -4, border: '1px solid rgba(6,182,212,0.2)', backgroundColor: 'rgba(6,182,212,0.02)' }}
                key={idx}
                className="border border-gray-900 bg-[#04040a]/90 p-6 rounded-xl flex flex-col justify-center items-start space-y-2 font-mono relative group transition-all duration-300 shadow-md"
              >
                <div className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-gray-200 tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[9px] text-gray-600 tracking-wide uppercase">
                  {stat.sub}
                </div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-gray-800 rounded-full group-hover:bg-cyan-400 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🛠️ NEXT TASK: HUD PROGRESSION TIMELINE RESTRUCTURING (As requested in image_a27462.png) */}
        <div className="pt-16 space-y-12">
          <div className="font-mono">
            <span className="text-[10px] text-gray-500 tracking-[0.3em] block mb-1">// SYSTEM DATA STREAM LOGS</span>
            <h3 className="text-xl font-bold tracking-wider text-cyan-400 uppercase">// GROWTH_TIMELINE.SH</h3>
          </div>

          {/* Timeline Node Chain Core Wrapper */}
          <div className="relative pl-8 sm:pl-20 space-y-6 max-w-5xl">
            {/* The Main Glowing Axis Wire Trunk */}
            <div className="absolute left-[11px] sm:left-[23px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-cyan-500 via-purple-500 to-gray-800 shadow-[0_0_8px_#00f2fe]" />

            {growthTimeline.map((milestone, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="relative flex flex-col md:flex-row items-start md:space-x-8 space-y-2 md:space-y-0"
              >
                {/* Orbital Tracking Node Ring Indicator on Axis */}
                <div className="absolute -left-[30px] sm:-left-[42px] top-1.5 z-20 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-black border-2 border-cyan-400 shadow-[0_0_10px_#00f2fe] ring-4 ring-[#020208]" />
                  {/* Active node highlight shimmer animation for current year (2026) */}
                  {milestone.year === '2026' && (
                    <span className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
                  )}
                </div>

                {/* HUD Timestamp Coordinate text */}
                <div className="font-mono text-xs font-bold text-cyan-300 tracking-widest min-w-[70px] pt-1">
                  {milestone.year}
                </div>

                {/* Microservice Info Sheet Box Container */}
                <div className="flex-1 border border-gray-900/60 bg-[#040409]/90 rounded-lg p-5 hover:border-cyan-500/20 hover:bg-[#06060f]/60 transition-all duration-300 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-1.5 font-mono text-[8px] text-gray-700 tracking-widest uppercase select-none group-hover:text-cyan-500/30 transition-colors">
                    BLOCK_0{idx + 1}
                  </div>
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-gray-100 tracking-wider mb-2 uppercase">
                    {milestone.title}
                  </h4>
                  <p className="font-mono text-[11px] sm:text-xs text-gray-400 leading-relaxed tracking-wide group-hover:text-gray-300 transition-colors">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}