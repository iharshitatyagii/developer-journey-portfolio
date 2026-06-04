// src/components/Arsenal.tsx
'use client';

import { motion } from 'framer-motion';

export default function Arsenal() {
  // Floating top layout matrix configuration clusters
  const floatingSkills = [
    { name: 'Java', orbit: 'w-[75%] h-[35%]', color: 'text-amber-400 border-amber-500/20' },
    { name: 'Spring Boot', orbit: 'w-[90%] h-[50%]', color: 'text-emerald-400 border-emerald-500/20' },
    { name: 'SQL / MySQL', orbit: 'w-[105%] h-[65%]', color: 'text-cyan-400 border-cyan-500/20' },
    { name: 'Redis Cache', orbit: 'w-[60%] h-[22%]', color: 'text-red-400 border-red-500/20' },
    { name: 'Project Loom', orbit: 'w-[45%] h-[12%]', color: 'text-purple-400 border-purple-500/20' },
  ];

  // Elite Tech Deck Layout Configured with exact completion metrics and sharp aesthetic vectors
  const technicalDecks = [
    { 
      name: 'Java Core', 
      level: '92%', 
      sub: 'OOPs, Collections, Project Loom',
      svgPath: <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M10 7L13 17M14 7L11 17M7 10H17M7 14H17" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
    },
    { 
      name: 'Spring Boot', 
      level: '88%', 
      sub: 'Microservices, Context, AOP',
      svgPath: <path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    },
    { 
      name: 'SQL Engine', 
      level: '85%', 
      sub: 'Query Tuning, Normalization, Indexing',
      svgPath: <path d="M4 6C4 3.79086 7.58172 2 12 2C16.4183 2 20 3.79086 20 6M4 6C4 8.20914 7.58172 10 12 10C16.4183 10 20 8.20914 20 6M4 6V18C4 20.2091 7.58172 22 12 22C16.4183 22 20 20.2091 20 18V6M4 12C4 14.2091 7.58172 16 12 16C16.4183 16 20 14.2091 20 12" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    },
    { 
      name: 'Redis Cache', 
      level: '80%', 
      sub: 'High-Throughput Session Buffering',
      svgPath: <path d="M19 11H5C3.89543 11 3 10.1046 3 9V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11Z M19 21H5C3.89543 21 3 20.1046 3 19V15C3 13.8954 3.89543 13 5 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21Z" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    },
    { 
      name: 'React.js / Next.js', 
      level: '50%',
      sub: 'Virtual DOM, Server Components',
      svgPath: <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M12 6V12L16 14" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
    },
    { 
      name: 'TypeScript', 
      level: '78%', 
      sub: 'Strict Variable Compilation Type',
      svgPath: <path d="M4 7V4H20V7 M12 4V20 M9 20H15" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    },
    { 
      name: 'Node.js Engine', 
      level: '75%', 
      sub: 'Asynchronous REST Architecture',
      svgPath: <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z M12 22V12 M22 7L12 12L2 7" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    },
    { 
      name: 'Python Engine', 
      level: '80%', 
      sub: 'Data Scripts & Automated Routines',
      svgPath: <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z M4 12H6 M18 12H20 M12 4V6 M12 18V20" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    },
    { 
      name: 'Hibernate ORM', 
      level: '65%',
      sub: 'Relational Entity Data Mapping',
      svgPath: <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M6 12H18" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
    },
    { 
      name: 'Git / GitHub', 
      level: '80%',
      sub: 'Branch Isolation & Version Core',
      svgPath: <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z M9 15C10.6569 15 12 13.6569 12 12C12 10.3431 10.6569 9 9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15Z M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15Z" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round"/>
    },
    { 
      name: 'Maven / Gradle', 
      level: '52%',
      sub: 'Dependency Lifecycle Management',
      svgPath: <path d="M12 3L2 8L12 13L22 8L12 3Z M2 13L12 18L22 13 M2 8V16L12 21L22 16V8" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    },
    { 
      name: 'Linux Shell', 
      level: '40%',
      sub: 'OS Command Shells & Automation',
      svgPath: <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z M6 9L9 12L6 15" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    },
  ];

  return (
    <section id="arsenal" className="w-full min-h-screen bg-[#020208] text-left pt-24 pb-32 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden border-t border-gray-900/40">
      
      {/* Background Blueprint matrix structure */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* HUD STACK CORNER HEADER */}
        <div className="space-y-2 font-mono">
          <div className="text-purple-400 text-xs tracking-[0.4em] uppercase flex items-center space-x-2">
            <span>// 02 . ARSENAL_ECOSYSTEM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-white tracking-tight uppercase leading-none">
            TECHNOLOGY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              ECOSYSTEM
            </span>
          </h2>
        </div>

        {/* TOP COMPONENT ROW: Quantum Ellipse Orbit System */}
        <div className="w-full h-[360px] relative flex items-center justify-center border border-gray-900/50 bg-[#040409]/40 rounded-2xl overflow-hidden backdrop-blur-3xl">
          <div className="absolute w-[350px] h-[350px] bg-cyan-500/5 rounded-full filter blur-[90px] pointer-events-none" />

          {/* Core Central Gravity Node */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 15px rgba(6,182,212,0.2)', '0 0 30px rgba(6,182,212,0.4)', '0 0 15px rgba(6,182,212,0.2)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500 flex items-center justify-center z-30 shadow-2xl"
          >
            <div className="w-10.5 h-10.5 rounded-full bg-[#020208] flex items-center justify-center font-mono text-[8px] font-black text-cyan-400">
              ENGINE
            </div>
          </motion.div>

          {/* Static Background Ellipses Track Layout */}
          {floatingSkills.map((skill, index) => (
            <div 
              key={index}
              className={`absolute border border-dashed rounded-full pointer-events-none flex items-center justify-center transform -rotate-12 ${skill.orbit} ${skill.color}`}
              style={{ opacity: 0.08 }}
            />
          ))}

          {/* Animated Skills Node Components Trajectory loops */}
          <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
            {floatingSkills.map((skill, index) => {
              const baseAngle = (index * (360 / floatingSkills.length)) * (Math.PI / 180);
              const rx = 160 + (index * 24);
              const ry = 55 + (index * 14);

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: [
                      Math.cos(0 + baseAngle) * rx + 325, 
                      Math.cos(Math.PI + baseAngle) * rx + 325, 
                      Math.cos(Math.PI * 2 + baseAngle) * rx + 325
                    ],
                    y: [
                      Math.sin(0 + baseAngle) * ry + 150, 
                      Math.sin(Math.PI + baseAngle) * ry + 150, 
                      Math.sin(Math.PI * 2 + baseAngle) * ry + 150
                    ]
                  }}
                  transition={{ duration: 22 + index * 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute pointer-events-auto"
                  style={{ top: '0px', left: '0px' }}
                >
                  <div className={`px-3 py-1 border bg-[#04040b]/95 rounded-full font-mono text-[9px] font-bold tracking-wider shadow-xl ${skill.color}`}>
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM COMPONENT ROW: The Vector Tech Deck Cards Structure */}
        <div className="space-y-4">
          <div className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">// DEPLOYED_FRAMEWORKS_TELEMETRY</div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
            {technicalDecks.map((tech, idx) => (
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(6,182,212,0.4)', backgroundColor: '#050514' }}
                key={idx}
                className="border border-gray-900/90 bg-[#030308]/90 rounded-xl p-4 font-mono flex flex-col justify-between items-start space-y-4 relative group transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Tech Layout Header: Aesthetic Vector Logo + Title */}
                <div className="space-y-2 w-full">
                  <div className="w-8 h-8 rounded-lg bg-gray-950 border border-gray-900 flex items-center justify-center p-1.5 group-hover:border-cyan-500/20 transition-colors">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                      {tech.svgPath}
                    </svg>
                  </div>
                  <div className="text-[11px] font-bold text-gray-300 group-hover:text-white tracking-wide truncate transition-colors">
                    {tech.name}
                  </div>
                </div>

                {/* Level of Completion Tracker Bar Engine */}
                <div className="w-full space-y-1.5">
                  <div className="w-full flex justify-between text-[9px] tracking-tight font-sans">
                    <span className="text-gray-600 truncate max-w-[75%] font-mono uppercase">{tech.sub}</span>
                    <span className="text-cyan-400 font-bold font-mono">{tech.level}</span>
                  </div>
                  <div className="w-full h-[2.5px] bg-gray-950 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: tech.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.04 }}
                      className="h-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-purple-600 rounded-full shadow-[0_0_10px_#00f2fe]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}