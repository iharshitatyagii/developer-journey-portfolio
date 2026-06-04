// src/components/Missions.tsx
'use client';

import { motion } from 'framer-motion';

export default function  missions(){
  // Deployed systems meticulously structured from your technical resume profile
  const projectMissions = [
    {
      id: '01',
      title: 'ChronosDB',
      subtitle: 'HIGH-CONCURRENCY FINANCIAL ORDER-MATCHING ENGINE',
      description: 'Engineered a transaction matching engine processing 20K+ trade requests/sec using Java Virtual Threads (Project Loom). Developed thread-safe logic via ReentrantLocks and ConcurrentHashMap to eliminate race conditions, optimizing write streams via Redis caching to drop primary SQL database write pressure by 60%.',
      tags: ['Java', 'Spring Boot', 'Project Loom', 'Redis', 'MySQL'],
      glowColor: 'from-amber-500/20 to-orange-600/5'
    },
    {
      id: '02',
      title: 'VeloRoute',
      subtitle: 'DYNAMIC LOGISTICS DISPATCH ENGINE & ROUTER',
      description: 'Built a scalable Spring Boot RESTful ingestion system to dynamically route high-frequency logistics delivery payloads. Utilized Priority BlockingQueue and ConcurrentHashMap to execute O(1) routing lookups and automated SLA ranking, reducing redundant database updates by 45% via asynchronous data batching.',
      tags: ['Java', 'Spring Boot', 'REST APIs', 'Collections', 'MySQL'],
      glowColor: 'from-cyan-500/20 to-blue-600/5'
    },
    {
      id: '03',
      title: 'AegisAuth',
      subtitle: 'DYNAMIC ROLE-BASED ACCESS CONTROL ENGINE',
      description: 'Engineered centralized authorization middleware using Aspect-Oriented Programming (AOP) to intercept and secure API endpoints. Structured optimized relational user-role matrices via Spring Data JPA to eliminate N+1 query overhead, achieving sub-15ms permission validation with native index-backed queries.',
      tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'AOP', 'MySQL'],
      glowColor: 'from-purple-500/20 to-pink-600/5'
    },
    {
      id: '04',
      title: 'Smart Resume Analyzer',
      subtitle: 'AI-POWERED INSIGHTS & SENTIMENT FILTER ENGINE',
      description: 'Developed an intelligent recruitment parsing platform using Spring Boot and generative AI layers. Integrates Retrieval-Augmented Generation (RAG) models and LangChain processing chains to identify UI/UX friction points, parse candidate experience trees, and audit structural telemetry benchmarks.',
      tags: ['Spring Boot', 'Generative AI', 'LangChain', 'RAG', 'Data Analytics'],
      glowColor: 'from-emerald-500/20 to-teal-600/5'
    }
  ];

  return (
    <section id="missions" className="w-full min-h-screen bg-[#020208] text-left pt-24 pb-32 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden border-t border-gray-900/40">
      {/* Background Matrix Blueprint Layer */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* HUD HEADER COMPONENT */}
        <div className="space-y-2 font-mono">
          <div className="text-purple-400 text-xs tracking-[0.4em] uppercase flex items-center space-x-2">
            <span>// 03 . DEPLOYED_MISSIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-white tracking-tight uppercase leading-none">
            ARCHITECTURAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              PROJECT LOGS
            </span>
          </h2>
        </div>

        {/* PROJECTS GRID PLATFORM (Buttons Automatically Extracted) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projectMissions.map((project, idx) => (
            <motion.div
              whileHover={{ y: -6, borderColor: 'rgba(6,182,212,0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              key={project.id}
              className="border border-gray-900/90 bg-[#030309]/90 rounded-xl overflow-hidden flex flex-col relative group shadow-2xl transition-all duration-300"
            >
              {/* Dynamic Image Vector Top Canvas Block */}
              <div className={`w-full h-44 bg-gradient-to-br ${project.glowColor} border-b border-gray-900/60 relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                {/* Immersive Typographic Sci-Fi Design */}
                <h3 className="text-3xl sm:text-4xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-wider uppercase select-none drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-500 font-mono">
                  {project.title}
                </h3>

                {/* HUD Overlay Specs tags */}
                <div className="absolute top-3 left-4 font-mono text-[8px] text-gray-600 tracking-widest">
                  MISSION_NODE // {project.id}
                </div>
                <div className="absolute bottom-2 right-4 font-mono text-[7px] text-cyan-400/50 tracking-widest uppercase">
                  System_Stable_True
                </div>
              </div>

              {/* Information Meta Description Layer */}
              <div className="p-6 space-y-4">
                {/* Dynamic Tech-Tags System Row */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-purple-950/20 border border-purple-500/20 rounded text-[9px] font-mono text-purple-300 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Headers */}
                <div className="space-y-1">
                  <h4 className="font-mono text-xs font-bold text-gray-200 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                    {project.title} : {project.subtitle}
                  </h4>
                </div>

                {/* Real Resume Bullet Details Paragraph */}
                <p className="font-mono text-[11px] sm:text-xs text-gray-400 leading-relaxed tracking-wide text-justify">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}