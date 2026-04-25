"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Strategy", "Systems", "Growth"];

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef();
  const duration = 2700; // 2.7s as requested

  const animate = (time) => {
    if (!startTimeRef.current) startTimeRef.current = time;
    const progress = time - startTimeRef.current;
    const nextCount = Math.min(Math.floor((progress / duration) * 100), 100);
    
    setCount(nextCount);

    if (nextCount < 100) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        onComplete();
      }, 400); // 400ms delay as requested
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900); // Cycle words every 900ms

    return () => {
      cancelAnimationFrame(requestRef.current);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12 overflow-hidden"
    >
      {/* Top Left: Portfolio Label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        CyberShield
      </motion.div>

      {/* Center: Rotating Words */}
      <div className="flex-1 flex items-center justify-center">
        <div className="h-20 md:h-32 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[wordIndex]}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 relative">
        {/* Bottom Right: Counter Display */}
        <div className="flex justify-end pr-0 md:pr-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums"
          >
            {String(count).padStart(3, "0")}
          </motion.div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="relative w-full h-[3px] bg-stroke/50 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full accent-gradient"
            style={{ 
              width: `${count}%`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)"
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
