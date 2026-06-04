// src/app/page.tsx
'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import ParallaxLandscape from "@/components/Parrallellandscape";
import Identity from "@/components/Identity";
import Arsenal from "@/components/Arsenal";
import Missions from "@/components/missions";
import Metrics from "@/components/Metrics";
import Connect from "@/components/Connect";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen w-full bg-[#020208]">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="boot-sequence" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="dashboard-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full min-h-screen"
          >
            <Navbar />
            <ParallaxLandscape />
            <Identity />
            <Arsenal />
            <Missions />
            <Metrics />
            <Connect />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}