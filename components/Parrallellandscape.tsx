// src/components/Parrallellandscape.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, MessageSquareCode, X, Send } from 'lucide-react';

export default function ParallaxLandscape() {
  const [mounted, setMounted] = useState(false);
  
  // Matrix Lingual Scramble State
  const [displayName, setDisplayName] = useState('Software Developer');
  
  // Dynamic Typewriter State
  const [typewriterText, setTypewriterText] = useState('');
  const loopPhrases = ['CREATING FUTURISTIC SOLUTIONS...', 'DEVELOPING SECURE ARCHITECTURES...', 'ENGINEERING CLEAN PIPELINES...'];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  // Chatbot Open/Close State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'ai', text: "Secure connection verified. System Core AI online. Ask me about Harshita's stack or core competencies." }
  ]);

  // Parallax Physics Vectors
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 45, stiffness: 85, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const layerBgX = useTransform(smoothX, (val) => val * 20);
  const layerBgY = useTransform(smoothY, (val) => val * 12);

  // 1. Linguistic Scramble Core
  useEffect(() => {
    setMounted(true);

    const scrambleTimeout = setTimeout(() => {
      const targetName = 'HARSHITA TYAGI';
      let currentIteration = 0;
      
      const matrixInterval = setInterval(() => {
        const structuralGlyphs = '⚡🎛️⚛️🧬🌌🧬💻01XYZØΩΔ';
        const scrambledString = targetName.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (index < currentIteration) return targetName[index];
          return structuralGlyphs[Math.floor(Math.random() * structuralGlyphs.length)];
        }).join('');
        
        setDisplayName(scrambledString);
        currentIteration += 0.4;

        if (currentIteration >= targetName.length + 1) {
          setDisplayName(targetName);
          clearInterval(matrixInterval);
        }
      }, 35);

      return () => clearInterval(matrixInterval);
    }, 1400);

    return () => clearTimeout(scrambleTimeout);
  }, []);

  // 2. Continuous Loop Typewriter Pipeline
  useEffect(() => {
    if (!mounted) return;

    const activePhrase = loopPhrases[phraseIdx];
    let timingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && charIdx === activePhrase.length) {
      timingSpeed = 2200;
      setIsDeleting(true);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % loopPhrases.length);
      timingSpeed = 400;
    }

    const typewriterTimeout = setTimeout(() => {
      setTypewriterText(
        isDeleting 
          ? activePhrase.substring(0, charIdx - 1) 
          : activePhrase.substring(0, charIdx + 1)
      );
      setCharIdx((prev) => prev + (isDeleting ? -1 : 1));
    }, timingSpeed);

    return () => clearTimeout(typewriterTimeout);
  }, [charIdx, isDeleting, phraseIdx, mounted]);

  // Mouse Listener Connection Hook
  useEffect(() => {
    const trackCursorMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener('mousemove', trackCursorMove);
    return () => window.removeEventListener('mousemove', trackCursorMove);
  }, [mouseX, mouseY]);

  const onMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatLog(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let coreResponse = "Command processed. Type 'stack' or 'projects' for deployment data logs.";
      if (userMsg.toLowerCase().includes('stack') || userMsg.toLowerCase().includes('skills') || userMsg.toLowerCase().includes('technologies')) {
        coreResponse = "Infrastructure configured with Java, Spring Boot, Next.js, React.js, TypeScript, Python, and microservices logic architecture.";
      } else if (userMsg.toLowerCase().includes('projects') || userMsg.toLowerCase().includes('resume') || userMsg.toLowerCase().includes('hire')) {
        coreResponse = "Active and qualified for Full-Stack Engineering roles & internships. Successfully built a Smart Resume Analyzer and dynamic multi-tier microservices platforms.";
      }
      setChatLog(prev => [...prev, { sender: 'ai', text: coreResponse }]);
    }, 700);
  };

  if (!mounted) return <div className="w-full h-screen bg-[#020208]" />;

  return (
    <div id="system" className="relative w-full min-h-screen bg-[#020208] flex items-center justify-center pt-24 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Background Structural Mesh Grids */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      
      <motion.div 
        style={{ x: layerBgX, y: layerBgY }}
        className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/5 via-purple-500/5 to-transparent rounded-full filter blur-[140px] pointer-events-none"
      />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-8">
        
        {/* LEFT COMPONENT COLUMN: Branding Console Panel (7 Columns) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-950/20 border border-cyan-500/20 rounded-md text-cyan-400 font-mono text-[10px] tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.05)]">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
            <span>// CORE PROTOCOL INITIALIZED • NODE STABLE</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-sans font-black text-white tracking-tight uppercase select-none leading-none">
              HELLO, <br />
              <span className="text-5xl sm:text-7xl block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-cyan-400/80 min-h-[55px] md:min-h-[85px] drop-shadow-[0_0_25px_rgba(6,182,212,0.1)]">
                I&apos;M {displayName}
              </span>
            </h1>
          </div>

          {/* Typewriter Interface block */}
          <div className="flex items-center space-x-3 font-mono text-cyan-400 text-xs sm:text-sm min-h-[30px]">
            <Terminal className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>&gt; <span className="bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/10 text-gray-200 font-bold">{typewriterText}</span></span>
            <span className="w-1.5 h-4 bg-cyan-400 ml-1 animate-pulse" />
          </div>

          <p className="text-xs sm:text-sm font-mono text-gray-400 max-w-xl leading-relaxed tracking-wide">
            Engineering distributed web environments at the intersection of <span className="text-cyan-400 font-bold">performance metrics</span>, <span className="text-purple-400 font-bold">microservices logic</span>, and algorithmic clean system design paths.
          </p>

          {/* UI Control Actions */}
          <div className="flex flex-wrap gap-4 pt-4 font-mono text-[11px] tracking-wider">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
              VIEW MISSIONS
            </button>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="px-6 py-3 border border-gray-800 hover:border-cyan-500/40 bg-gray-900/10 text-gray-400 hover:text-cyan-400 rounded transition-colors duration-300"
            >
              INITIATE CONTACT
            </button>
          </div>

          {/* SVG Profile Redirects (0% Dependencies, 100% Stable) */}
          <div className="flex items-center space-x-4 pt-6">
            {/* GitHub */}
            <a href="https://github.com/iharshitatyagii" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md border border-gray-900 bg-gray-950/40 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-300 shadow-md transform hover:-translate-y-1">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/tyagiharshi" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md border border-gray-900 bg-gray-950/40 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-300 shadow-md transform hover:-translate-y-1">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* LeetCode */}
            <a href="https://leetcode.com/iharshitatyagi" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md border border-gray-900 bg-gray-950/40 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-300 shadow-md transform hover:-translate-y-1">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.116 5.826a1.257 1.257 0 0 0-.361.85c-.004.435.158.85.454 1.146l4.737 4.736a1.244 1.244 0 0 0 1.765 0l3.585-3.585a1.244 1.244 0 0 0 0-1.765l-4.737-4.736A1.374 1.374 0 0 0 13.483 0zm-6.17 7.156a1.244 1.244 0 0 0-1.766 0l-4.753 4.752a1.244 1.244 0 0 0 0 1.765l4.753 4.753a1.244 1.244 0 0 0 1.766 0l4.753-4.753a1.244 1.244 0 0 0 0-1.765L7.312 7.156zm12.334 3.737a1.244 1.244 0 0 0-1.765 0L14.3 14.478a1.244 1.244 0 0 0 0 1.765l4.753 4.753a1.244 1.244 0 0 0 1.765 0l4.753-4.753a1.244 1.244 0 0 0 0-1.765l-4.753-4.753z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/iharshitatyagi" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-md border border-gray-900 bg-gray-950/40 text-gray-500 hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-300 shadow-md transform hover:-translate-y-1">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44zm0 2.88a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/></svg>
            </a>
          </div>
        </div>

        {/* RIGHT COMPONENT COLUMN: Radar Frame Orbit (5 Columns) */}
        <div className="lg:col-span-5 w-full flex flex-col items-center justify-center relative mt-8 lg:mt-0">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            
            {/* Outer Ring Track 1 (Slow Clockwise) */}
            <div className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full animate-spin [animation-duration:35s]" />
            
            {/* Middle Ring Track 2 (Fast Reverse Counter-Clockwise) */}
            <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full border-t-transparent border-b-transparent animate-spin [animation-duration:14s] [animation-direction:reverse]" />
            
            {/* Inner Ring 3 with Scanner Radar Nodes */}
            <div className="absolute inset-8 border border-cyan-400/10 rounded-full bg-cyan-950/5">
              <div className="absolute top-1 left-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_12px_#00f2fe] animate-ping" />
            </div>

            {/* Core Circular Image Mask Layout Frame */}
            <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full p-1 border-2 border-cyan-400/20 bg-gray-950 relative shadow-[0_0_35px_rgba(6,182,212,0.15)] group overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent z-10" />
                <img 
                  src="/profile.jpg" 
                  alt="Harshita Tyagi Portrait Asset"
                  className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>

            {/* Floating Spec Status HUD Plate */}
            <div className="absolute -bottom-2 bg-[#06060f]/95 border border-cyan-500/20 rounded px-3 py-1 font-mono text-[9px] text-gray-400 tracking-wider flex space-x-3 shadow-xl backdrop-blur-md">
              <span>ID: <span className="text-cyan-400">H-TYAGI</span></span>
              <span>ROLE: <span className="text-purple-400">FS-ENG</span></span>
              <span>STATUS: <span className="text-emerald-400 animate-pulse">ACTIVE</span></span>
            </div>

          </div>
        </div>

      </div>

      {/* FLOATING CHATBOT CONTROLLER APPLET */}
      <div className="fixed bottom-6 right-6 z-50 font-mono">
        <AnimatePresence mode="wait">
          {isChatOpen ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="w-80 sm:w-96 bg-[#070712]/95 border border-cyan-500/20 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            >
              <div className="bg-gray-950/80 border-b border-cyan-500/10 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquareCode className="w-4 h-4 text-cyan-400" />
                  <span className="text-[10px] text-cyan-300 tracking-widest font-bold">CONNECTION_BUILT.EXE</span>
                </div>
                <button 
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="p-1 text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="h-60 overflow-y-auto p-4 space-y-3 text-[11px] leading-relaxed scrollbar-thin">
                {chatLog.map((log, index) => (
                  <div key={index} className={`flex ${log.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-lg px-3 py-1.5 border ${
                      log.sender === 'user' 
                        ? 'bg-purple-950/20 border-purple-500/30 text-purple-200 text-right' 
                        : 'bg-cyan-950/10 border-cyan-500/20 text-cyan-300'
                    }`}>
                      <span className="block opacity-30 text-[8px] mb-0.5">
                        {log.sender === 'user' ? '↳ GUEST_LOG' : '🤖 SYSTEM_NODE'}
                      </span>
                      {log.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={onMessageSubmit} className="border-t border-cyan-500/10 bg-gray-950/50 flex items-center p-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about stack, projects, roles..."
                  className="flex-1 bg-transparent border-0 outline-none text-xs text-gray-200 placeholder-gray-600 px-2"
                />
                <button type="submit" className="p-1.5 text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6,182,212,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsChatOpen(true)}
              className="p-3.5 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full text-white shadow-xl flex items-center justify-center border border-cyan-400/20 relative"
            >
              <MessageSquareCode className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-[#020208] animate-pulse" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}