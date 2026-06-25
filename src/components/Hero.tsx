"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TextDistort from "./TextDistort";

// Staggered Pixel Dissolve Transition Overlay
const PixelDissolve = () => {
  const cols = 10;
  const rows = 15;
  const numBlocks = cols * rows;

  const [delays, setDelays] = React.useState<number[]>([]);

  React.useEffect(() => {
    const newDelays = Array.from({ length: numBlocks }, (_, idx) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      
      // Calculate coordinates normalized between 0 and 1
      const x = col / cols;
      const y = row / rows;
      
      // Diagonal distance from top-left (0,0) to bottom-right (1,1)
      const distance = x + y; // ranges from 0 to 2
      
      // Stagger delay based on diagonal sweep + random noise
      return 0.5 + distance * 0.45 + Math.random() * 0.5;
    });
    setDelays(newDelays);
  }, []);

  if (delays.length === 0) {
    // Render solid black sheet before grid is initialized on client
    return <div className="absolute inset-0 bg-black z-10" />;
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {delays.map((delay, idx) => (
        <motion.div
          key={idx}
          className="bg-black w-full h-full"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            delay: delay,
            ease: "easeInOut",
          }}
          style={{
            // Overlap blocks slightly to ensure no subpixel layout gaps reveal the image prematurely
            margin: "-0.5px",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // Apple ease
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-black overflow-hidden select-none py-24 lg:py-0">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Typographic Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-1 lg:col-span-7 space-y-8"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-xs font-semibold tracking-widest text-secondary-text uppercase font-mono"
          >
            Koushigan S — Systems Architecture
          </motion.p>
          
          {/* Typographic Mask Reveal */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] flex flex-col">
            <span className="block overflow-hidden py-1">
              <motion.span variants={lineVariants} className="block">
                <TextDistort>Building systems,</TextDistort>
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span variants={lineVariants} className="block">
                <TextDistort>products, and ideas</TextDistort>
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1 text-secondary-text">
              <motion.span variants={lineVariants} className="block text-secondary-text">
                <TextDistort className="text-secondary-text">for the future.</TextDistort>
              </motion.span>
            </span>
          </h1>

          <motion.div variants={fadeUpVariants} className="max-w-xl space-y-4">
            <p className="text-base md:text-xl text-secondary-text leading-relaxed font-light">
              Computer Science Engineering Student.
              <br />
              Focused on software, cloud, systems, and product innovation.
            </p>
          </motion.div>

          {/* Tactile Button Actions */}
          <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, backgroundColor: "#f4f4f5" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="px-6 py-3 rounded-full bg-white text-black font-medium tracking-tight hover:shadow-xl hover:shadow-white/5 active:scale-95 transition-all text-sm md:text-base"
            >
              View Projects
            </motion.a>
            
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.04, borderColor: "#ffffff", color: "#ffffff" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="px-6 py-3 rounded-full border border-border-color bg-black text-secondary-text font-medium tracking-tight active:scale-95 transition-all text-sm md:text-base"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Vertical Portrait Placeholder with Pixel Dissolve Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden border border-border-color bg-neutral-950 shadow-[0_0_50px_rgba(255,255,255,0.02)] group">
            {/* The grayscale to color portrait */}
            <img
              src="/avatar.png"
              alt="Koushigan S"
              className="w-full h-full object-cover filter grayscale contrast-[1.1] opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100"
            />
            {/* Overlay grid blocks */}
            <PixelDissolve />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
