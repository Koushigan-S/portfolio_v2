"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(100);
      onComplete();
      return;
    }

    const duration = 4000; // 4 seconds total
    const start = Date.now();

    const updateCount = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic ease out: slow down count as it nears 100
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * 100);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setTimeout(onComplete, 400); // Brief hold at 100 for premium feel
      }
    };

    requestAnimationFrame(updateCount);
  }, [onComplete, shouldReduceMotion]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        opacity: 0,
        transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } // Apple easing
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black select-none"
    >
      <div className="w-full max-w-xs px-6 flex flex-col items-center space-y-6">
        {/* Large Counter */}
        <div className="text-7xl md:text-8xl font-bold tracking-tighter text-white font-mono flex items-baseline select-none">
          <span>{count}</span>
          <span className="text-xl md:text-2xl text-secondary-text ml-1">%</span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-32 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 bottom-0 bg-white transition-all duration-100 ease-out"
            style={{ width: `${count}%` }}
          />
        </div>

        <span className="text-[10px] font-mono tracking-widest text-secondary-text uppercase animate-pulse">
          Engine Booting
        </span>
      </div>
    </motion.div>
  );
}
