// src/components/Connect.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Connect() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [statusText, setStatusText] = useState('// WAITING_FOR_TRANSMISSION...');
  const [isSending, setIsSending] = useState(false);

  // Chatbot State Layers with explicit strict literal types
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatLogs, setChatLogs] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot' as const, text: "Initialize System Agent: Active. Hello Mam/Sir! I am Harshita's AI node assistant. Ask me anything about my skills, projects, or technical infrastructure!" }
  ]);

  // 📧 100% WORKING FORMSPREE PIPELINE (Real Mail Delivery)
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatusText('// ERROR: ALL PIPELINES MUST BE INITIALIZED.');
      return;
    }

    setIsSending(true);
    setStatusText('// INITIATING TRANSMISSION PIPELINE... SENDING PACKET...');

    try {
      // 🚀 Direct Formspree endpoint stream configuration
      const response = await fetch('https://formspree.io/f/mjgdvwgn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });

      if (response.ok) {
        setStatusText('// MESSAGE_TRANSMITTED. PACKET DELIVERED TO GMAIL INBOX SUCCESSFULLY.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error("Formspree server node infrastructure rejection.");
      }
    } catch (err) {
      console.error("// Transmission crash logs:", err);
      setStatusText('// ERROR: ROUTING FAILURE. CAPTURED BY FALLBACK LAYER.');
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setStatusText('// WAITING_FOR_TRANSMISSION...');
      }, 6000);
    }
  };

  // 🤖 Dynamic System Assistant Agent Engine
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userQuery = chatInput.trim();
    const cleanQuery = userQuery.toLowerCase();
    
    // Explicit type literal casting applied using as const
    setChatLogs(prev => [...prev, { sender: 'user' as const, text: userQuery }]);
    setChatInput('');

    // Query Analyzer Execution Block
    setTimeout(() => {
      let botResponse = "";

      if (cleanQuery.includes('hello') || cleanQuery.includes('hi') || cleanQuery.includes('hey')) {
        botResponse = "Hello Mam/Sir! Welcome to my system workspace. How can I assist your engineering pipeline today?";
      } else if (cleanQuery.includes('skill') || cleanQuery.includes('tech') || cleanQuery.includes('java') || cleanQuery.includes('dsa')) {
        botResponse = "Core Technical Infrastructure Layer:\n• Languages & Algorithms: Advanced Java for Data Structures & Algorithms (DSA) with verified 100-day streaks.\n• Backend Systems: Spring Boot core, REST APIs microservices orchestration, SQL Databases engineering, and Redis data layers.";
      } else if (cleanQuery.includes('project') || cleanQuery.includes('work') || cleanQuery.includes('app')) {
        botResponse = "Verified Engineering Applications Portfolio:\n1. AI Resume Analyzer: Microservice app built using Spring Boot framework and integrated generative AI text models for automated processing metrics.\n2. Product Hacker Layer Audit: Deep systems optimization project executing UX performance analysis and memory tracking.";
      } else if (cleanQuery.includes('experience') || cleanQuery.includes('education') || cleanQuery.includes('college')) {
        botResponse = "Academic and Field Parameters:\n• Tracking 3rd-year Bachelor of Technology (B.Tech) core in Information Technology at IMS Engineering College (IMSEC), maintaining an 8.8 CGPA profile status.";
      } else {
        botResponse = "System Query Logged. I am configured with deep knowledge of Harshita's professional software engineering stack. You can query me about 'skills', 'projects', or 'academic status' for strict performance validation parameters!";
      }

      setChatLogs(prev => [...prev, { sender: 'bot' as const, text: botResponse }]);
    }, 600);
  };

  return (
    <section id="connect" className="w-full min-h-screen bg-[#020208] text-left pt-24 pb-32 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden border-t border-gray-900/40">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00f2fe_1px,transparent_1px),linear-gradient(to_bottom,#00f2fe_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-2 font-mono">
          <div className="text-purple-400 text-xs tracking-[0.4em] uppercase flex items-center space-x-2">
            <span>// 05 . CONTACT_PROTOCOL</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-white tracking-tight uppercase leading-none">
            ESTABLISH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              CONNECTION
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-cyan-500/10 bg-[#04040a]/90 rounded-xl p-6 font-mono relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400" />
              <div className="flex items-center space-x-2 text-[10px] text-emerald-400 tracking-widest uppercase font-bold mb-3">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                <span>• AVAILABLE FOR NEW MISSIONS</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed tracking-wide font-sans">
                Have an interesting high-concurrency architecture problem, full-stack microservices deployment pipeline, or internship opportunity? My communication node channel is fully open. Let&apos;s engineer something remarkable.
              </p>
              <div className="text-[10px] text-gray-500 mt-4 pt-4 border-t border-gray-900 flex items-center space-x-2">
                <span>🕒 Response time:</span>
                <span className="text-cyan-400 font-bold">&lt; 24 hours</span>
              </div>
            </div>

            <div className="border border-gray-900 bg-black/60 rounded-xl overflow-hidden font-mono text-[11px] shadow-2xl backdrop-blur-md">
              <div className="bg-gray-950 px-4 py-2 flex items-center justify-between border-b border-gray-900/60">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[9px] text-gray-600 tracking-widest uppercase">terminal.sh</span>
              </div>

              <div className="p-5 space-y-3.5 leading-relaxed text-left">
                <div>
                  <span className="text-cyan-400">harshita@system:~$</span> <span className="text-white">whoami</span>
                  <div className="text-gray-400 mt-0.5">Full-Stack Software Engineer</div>
                </div>
                <div>
                  <span className="text-cyan-400">harshita@system:~$</span> <span className="text-white">status --check</span>
                  <div className="text-emerald-400 mt-0.5 font-bold">Available for projects ✓</div>
                </div>
                <div>
                  <span className="text-cyan-400">harshita@system:~$</span> <span className="text-white">infrastructure --logs</span>
                  <div className="text-purple-400 mt-0.5">Java, Spring Boot, SQL, Redis Core Layer active.</div>
                </div>
                <div className="pt-1 flex items-center">
                  <span className="text-cyan-400">harshita@system:~$</span>
                  <span className="w-1.5 h-3.5 bg-cyan-400 ml-2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-gray-900 bg-[#040409]/90 rounded-xl p-6 sm:p-8 font-mono relative overflow-hidden shadow-2xl backdrop-blur-2xl">
              <div className="text-[10px] text-cyan-400 tracking-widest uppercase mb-6">// SEND_MESSAGE.EXE</div>

              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] text-gray-500 tracking-widest uppercase block">NAME</label>
                    <input 
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      disabled={isSending}
                      className="w-full bg-gray-950 border border-gray-900 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-700 outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all font-sans disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] text-gray-500 tracking-widest uppercase block">EMAIL</label>
                    <input 
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      disabled={isSending}
                      className="w-full bg-gray-950 border border-gray-900 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-700 outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all font-sans disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] text-gray-500 tracking-widest uppercase block">MESSAGE</label>
                  <textarea 
                    rows={5}
                    name="message"
                    placeholder="Describe your mission..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    disabled={isSending}
                    className="w-full bg-gray-950 border border-gray-900 rounded-lg px-4 py-3 text-xs text-white placeholder-gray-700 outline-none focus:border-cyan-500/40 focus:shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all resize-none font-sans disabled:opacity-50"
                  />
                </div>

                <div className={`text-[10px] uppercase tracking-widest font-bold ${statusText.includes('SUCCESSFULLY') ? 'text-cyan-400' : statusText.includes('ERROR') ? 'text-red-500' : 'text-gray-600'}`}>
                  {statusText}
                </div>

                <motion.button
                  whileHover={{ scale: isSending ? 1 : 1.01 }}
                  whileTap={{ scale: isSending ? 1 : 0.99 }}
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-[0_4px_20px_rgba(6,182,212,0.15)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'TRANSMITTING PACKET...' : 'TRANSMIT MESSAGE'}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 🔮 FIX EXPANDABLE CHATBOT ICON WRAPPER LAYER */}
      <div className="fixed bottom-6 right-6 z-50 font-mono">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition-all border border-cyan-400/30"
        >
          {isChatOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
          )}
        </button>

        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="absolute bottom-18 right-0 w-[320px] sm:w-[360px] h-[420px] bg-[#040409]/95 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
            >
              <div className="p-4 bg-gray-950 border-b border-gray-900 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">HARSHITA_AGENT v1.0</span>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-3 text-left text-[11px] scrollbar-none">
                {chatLogs.map((log, idx) => (
                  <div key={idx} className={`flex ${log.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-xl px-3 py-2 whitespace-pre-line leading-relaxed ${log.sender === 'user' ? 'bg-cyan-600 text-white font-sans rounded-br-none' : 'bg-gray-900 text-gray-300 rounded-bl-none border border-gray-800/60'}`}>
                      {log.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleChatSubmit} className="p-3 border-t border-gray-900 bg-gray-950 flex space-x-2">
                <input 
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 bg-[#020205] border border-gray-900 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-purple-500/60 font-sans"
                />
                <button type="submit" className="px-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all">
                  Send
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="pt-16 border-t border-gray-900/60 text-center space-y-2 font-mono text-[9px] text-gray-600 tracking-widest uppercase">
        <div>[ Harshita_PORTFOLIO_NODE_v1.0.4 ]</div>
        <div className="text-gray-700">Engineered by Harshita • All systems operational • © 2026</div>
      </div>
    </section>
  );
}